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

const CorrelationReport: FunctionComponent = () => {
  const [userDayData, setUserDayData] = useState<dayObject[]>([{}]);
  const [userAttributes, setUserAttributes] = useState<attributeObject[]>([]);
  const [correlationArray, setCorrelationArray] = useState<scores[]>();

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
    // console.log(correlationArray);
  }, [userDayData, userAttributes]);

  const translation = (score: string) => {
    const parsed = Math.floor(parseFloat(score) * 48);
    return `translate(${parsed.toString()}px)`;
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
        <div>
          {correlationArray &&
            correlationArray.map((score: scores, index: number) => {
              const applyStyles = { transform: translation(score.score) };
              console.log(applyStyles);
              return (
                <div key={Math.random()}>
                  <p>{`
          ${score.name} : 
          ${score.score}`}</p>
                  <div className="w-24 border h-6 bg-gray-800" key={index}>
                    <p className="text-sm color-white"></p>
                    <div
                      className={`bg-blue-400 mx-auto h-full w-1`}
                      style={applyStyles}
                    ></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CorrelationReport;
