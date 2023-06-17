import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import LinkButton from "../elements/LinkButton";
import { Correlation } from "../utilities/Correlation";
import { getAllDaysForUser } from "../middleware/dayServiceCalls";
import { attributeObject } from "../utilities/types";
import { dayObject } from "../utilities/types";
import { getAttributesForUser } from "../middleware/setupServiceCalls";
import { dummyUserID } from "../utilities/constants";
import { scores } from "../utilities/types";
import { EmojiLibrary } from "../utilities/EmojiLibrary";

const CorrelationReport: FunctionComponent = () => {
  const [userDayData, setUserDayData] = useState<dayObject[]>([{}]);
  const [userAttributes, setUserAttributes] = useState<attributeObject[]>([]);
  const [correlationArray, setCorrelationArray] = useState<scores[]>();
  const [avgQuality, setAvgQuality] = useState<number>(0);

  useEffect(() => {
    getAllDaysForUser((data: any) => {
      setUserDayData(data);
    });
    getAttributesForUser(dummyUserID, (data: any) => {
      setUserAttributes(data);
    });
  }, []);

  useEffect(() => {
    userDayData.length > 0 &&
      userAttributes.length > 0 &&
      setCorrelationArray(Correlation(userDayData, userAttributes));
  }, [userDayData, userAttributes]);

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

  const translation = (score: string) => {
    const parsed = Math.floor(parseFloat(score) * 92);
    return `translate(${parsed.toString()}px)`;
  };

  const introText: Array<string> = [
    `Your habits can have a big effect on how you feel over time.`,
    `With the data from your daily quality score and your habit tracking,
  you can see how your habits affect your happiness...`,
    `Here's how your habits correlate with your perceived daily quality.`,
  ];

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
            >
              {sentence}
            </h1>
          );
        })}
        {/* Average Quality */}
        <div className="place-content-center mt-6 mb-6">
          <h1 className={`text-2xl font-bold mx-auto text-center mt-12`}>
            Average Daily Quality
          </h1>
          <h2 className="center mt-4 text-8xl font-bold">
            {userDayData && getAvgQuality(userDayData)}
          </h2>
        </div>
        {/* Scores */}
        <div className="place-content-center">
          {correlationArray &&
            correlationArray.map((score: scores, index: number) => {
              const applyStyles = { transform: translation(score.score) };
              const barColor = (n: string) => {
                const score = parseFloat(n);
                if (score < -0.5) return "bg-red-400";
                else if (score < -0.25) return "bg-amber-400";
                else if (score < 0) return "bg-yellow-400";
                else if (score < 0.25) return "bg-lime-200";
                else if (score < 0.5) return "bg-lime-400";
                else if (score > 0.5) return "bg-green-600";
              };
              return (
                <div key={index} className="mx-auto my-6 ">
                  <p className="mx-auto text-center">{`
          ${score.name} : 
          ${score.score}`}</p>

                  <div
                    className="w-48 border h-6 bg-gray-800 mx-auto rounded-md"
                    key={index}
                  >
                    <div
                      className={`${barColor(
                        score.score
                      )} mx-auto h-full w-2 rounded-sm group`}
                      style={applyStyles}
                    ></div>
                  </div>
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
