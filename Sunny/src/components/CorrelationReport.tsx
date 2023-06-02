import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
// import ActionButton from "../elements/ActionButton";
import LinkButton from "../elements/LinkButton";
import { Correlation } from "../utilities/Correlation";

const CorrelationReport: FunctionComponent = () => {
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
      <div className="container justify-content mx-auto my-4 sm:h-100 h-full">
        <div className="container justify-content mx-auto max-w-lg">
          <h1 className="text-2xl mx-auto text-center">
            <b>Correlation Report</b>
          </h1>
        </div>
      </div>
      {/* Content */}
      <div
        className={`mx-auto shadow-lg mt-10 container grid grid-cols-3 sm:grid-cols-7 place-content-center rounded bg-white/50 p-4 max-w-2xl `}
      >
        <p>Hello, Ben</p>
      </div>
    </div>
  );
};

export default CorrelationReport;
