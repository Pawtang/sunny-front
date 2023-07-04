import { FunctionComponent, useContext } from "react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import LinkButton from "../elements/LinkButton";
import { Correlation } from "../utilities/Correlation";

import { attributeObject } from "../utilities/types";
import { dayObject } from "../utilities/types";

import { DAYS_URL, SETUP_URL } from "../utilities/constants";
import { scores } from "../utilities/types";

import Timeline from "./Timeline";
import { UserContext } from "../contexts/userContext";

const CorrelationReport: FunctionComponent = () => {
  const [userDayData, setUserDayData] = useState<dayObject[]>([{}]);
  const [userAttributes, setUserAttributes] = useState<attributeObject[]>([]);
  const [correlationArray, setCorrelationArray] = useState<scores[]>();
  const [avgQuality, setAvgQuality] = useState<number>(0);

  const { APIGetAuthy } = useContext(UserContext);

  useEffect(() => {
    APIGetAuthy(DAYS_URL, (data: any) => {
      const sorted = sortByDate(data);
      setUserDayData(sorted);
    });
    APIGetAuthy(SETUP_URL, (data: any) => {
      setUserAttributes(data);
    });
  }, []);

  useEffect(() => {
    userDayData.length > 0 &&
      userAttributes.length > 0 &&
      setCorrelationArray(Correlation(userDayData, userAttributes));
  }, [userDayData, userAttributes]);

  const sortByDate = (dayArray: dayObject[]) => {
    const sortedDates = dayArray.sort((a, b) => {
      const dateA = dayjs(a.date);
      const dateB = dayjs(b.date);

      if (dateA.isBefore(dateB)) {
        return -1;
      } else if (dateA.isAfter(dateB)) {
        return 1;
      } else {
        return 0;
      }
    });
    return sortedDates;
  };

  const getAvgQuality = (dayArray: dayObject[]) => {
    if (!dayArray) {
      return 0;
    }
    const count = dayArray.length;
    const sum = dayArray.reduce(
      (accum, current) => (current.dayRating ? accum + current.dayRating : 0),
      0
    );
    const average = (sum / count).toFixed(1);
    return average.toString();
  };

  const introText: Array<string> = [
    `Your habits can have a big effect on how you feel over time.`,
    `With the data from your daily quality score and your habit tracking,
  you can see how your habits affect your happiness...`,
    `Here's how your habits correlate with your perceived daily quality.`,
  ];

  const barColor = (n: string) => {
    const score = parseFloat(n);
    if (score < -0.5) return "bg-red-400";
    else if (score < -0.25) return "bg-amber-400";
    else if (score < 0) return "bg-yellow-400";
    else if (score < 0.25) return "bg-lime-200";
    else if (score < 0.5) return "bg-lime-400";
    else if (score >= 0.5) return "bg-green-600";
  };

  const barWidth = (n: string) => {
    const totalWidth = 200;
    const score = parseFloat(n);
    const translate = Math.floor((score * totalWidth) / 4);
    const fillWidth = Math.floor((Math.abs(score) * totalWidth) / 2);
    const properties = { translate, fillWidth };
    return properties;
  };

  const strength = (n: string) => {
    const score = parseFloat(n);
    if (score < -0.5) return "Strongly negative";
    else if (score < -0.25) return "Negative";
    else if (score < 0.25) return "Neutral";
    else if (score < 0.5) return "Positive";
    else if (score >= 0.5) return "Strongly Positive";
  };

  return (
    <div
      className="min-h-screen pb-6"
      style={{
        background:
          "linear-gradient(152deg, rgba(110,182,228,1) 0%, rgba(199,252,254,1) 50%, rgba(255,240,136,1) 100%)",
      }}
    >
      {/* Navbar */}
      <div className="container-fluid nav z-50">
        <LinkButton linkTo="/" buttonText="Home" styleTags="mt-4"></LinkButton>
      </div>
      {/* Header */}
      <div className="container justify-content mx-auto my-4">
        <div className="container justify-content mx-auto max-w-lg">
          <h1 className="text-2xl mx-auto text-center ">
            <b>Correlation Report</b>
          </h1>
        </div>
      </div>
      {/* Content */}
      <div
        className={`mx-auto shadow-lg mt-10 container place-content-center rounded bg-white/50 p-4`}
      >
        {/* Blurbs */}
        {/* Fade these in later... */}
        {introText.map((sentence, index: number) => {
          return (
            <h1
              className={`text-xl mx-auto text-center mb-4 ${
                index === introText.length - 1 && "font-bold"
              }`}
              key={index}
            >
              {sentence}
            </h1>
          );
        })}
        {/* Average Quality */}
        <div className="place-content-center mb-6">
          <h1 className={`text-2xl font-bold mx-auto text-center`}>
            Average Daily Quality
          </h1>
          <h2 className="center mt-4 text-8xl font-bold">
            {userDayData && getAvgQuality(userDayData)}
          </h2>
        </div>
        <Timeline userDayData={userDayData}></Timeline>
        {/* Scores */}
        {/* Sort first?  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {correlationArray &&
            correlationArray.map((score: scores, index: number) => {
              // const applyStyles = { transform: translation(score.score) };
              const properties = barWidth(score.score);
              return (
                <div
                  key={index}
                  className="mx-auto my-6 border p-4 bg-white/30 hover:bg-white/70 hover:-translate-y-2 transition-all ease-out duration-200 rounded-lg "
                >
                  <p className="mx-auto text-center">{`
          ${score.name} : 
          ${score.score}`}</p>

                  <div className="w-48 border h-6 bg-gray-800 mx-auto rounded-md">
                    <div
                      className={`${barColor(
                        score.score
                      )} mx-auto h-full w-2 group`}
                      style={{
                        width: `${properties.fillWidth}px`,
                        transform: `translate(${properties.translate}px)`,
                      }}
                    ></div>
                  </div>
                  <p className="text-center">{strength(score.score)}</p>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col items-center">
          <LinkButton
            linkTo="/month"
            buttonText="📆 Back to Calendar "
            buttonType="dark"
            styleTags="mb-2 w-64"
          ></LinkButton>
          <LinkButton
            linkTo=""
            buttonText="❔ How is This Calculated"
            buttonType="disabled"
            styleTags="mb-2 w-64"
          ></LinkButton>
          <LinkButton
            linkTo=""
            buttonText="🔎 Learn More About Habits"
            buttonType="disabled"
            styleTags="w-64"
          ></LinkButton>
        </div>
      </div>
    </div>
  );
};

export default CorrelationReport;
