import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import LinkButton from "../elements/LinkButton";
import { Correlation } from "../utilities/Correlation";
import { getAllDaysForUser } from "../middleware/dayServiceCalls";
import { attributeObject } from "../utilities/types";
import { dayObject } from "../utilities/types";

const CorrelationReport: FunctionComponent = () => {
  const [userDayData, setUserDayData] = useState<dayObject[]>([{}]);

  useEffect(() => {
    getAllDaysForUser((data: any) => {
      setUserDayData(data);
    });
  }, []);

  useEffect(() => {
    console.log(userDayData);
  }, [userDayData]);

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
        <p>{Correlation(userDayData)}</p>
      </div>
    </div>
  );
};

export default CorrelationReport;
