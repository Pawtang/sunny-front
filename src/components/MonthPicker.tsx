import ActionButton from "../elements/ActionButton";
import BackgroundGradient from "../utilities/BackgroundGradient";
import dayjs from "dayjs";
import { useState, FunctionComponent } from "react";
import { monthPickerProps } from "../utilities/types";

const MonthPicker: FunctionComponent<monthPickerProps> = (props) => {
  const {
    closeModal,
    setMonth,
    setYear,
    selectedMonth,
    selectedYear,
    loadMonth,
  } = props;
  const [stageMonth, setStageMonth] = useState<number>(selectedMonth);
  const [stageYear, setStageYear] = useState<number>(selectedYear);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearlist = () => {
    const list = [];
    for (let i = dayjs().year(); i >= 1950; i--) {
      list.push(i.toString());
    }
    return list;
  };
  const years = yearlist();

  const buttonAction = () => {
    setMonth(stageMonth);
    setYear(stageYear);
    closeModal();
    // loadMonth();
  };

  return (
    <>
      <div className="p-5 items-center ">
        <div className="text-lg font-bold center">Select a Month and Year</div>
        <div className="columns-2 mt-8">
          {/* Months */}
          <div className="overflow-scroll overflow-x-hidden flex justify-center max-h-96 border border-gray-300 rounded-md">
            <ul>
              {months.map((month: string, index: number) => {
                return (
                  <div className="pt-0.5" key={index}>
                    <li key={month}>
                      <ActionButton
                        onClick={() => {
                          setStageMonth(index + 1);
                        }}
                        buttonText={month}
                        styleTags={`my-1 w-40 hover:outline hover:drop-shadow-md hover:-translate-y-0.5 hover:outline-1 outline-gray-200 transition-all ${
                          stageMonth === index + 1 ? "!bg-blue-200" : ""
                        }`}
                      ></ActionButton>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* Years */}
          <div className="overflow-scroll overflow-x-hidden flex justify-center max-h-96 border border-gray-300 rounded-md">
            <ul>
              {years.map((year: string, index: number) => {
                return (
                  <div className="pt-0.5" key={index}>
                    <li key={year}>
                      <ActionButton
                        onClick={() => {
                          setStageYear(parseInt(year));
                        }}
                        buttonText={year}
                        styleTags={`my-1 w-40 hover:outline hover:drop-shadow-md hover:-translate-y-0.5 hover:outline-1 outline-gray-200 transition-all ${
                          stageYear.toString() === year ? "!bg-blue-200" : ""
                        }`}
                      ></ActionButton>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center w-100 mt-10">
          <ActionButton
            onClick={buttonAction}
            buttonText="Set Month"
            styleTags="mx-auto w-40 border"
          />
        </div>
      </div>
    </>
  );
};

export default MonthPicker;
