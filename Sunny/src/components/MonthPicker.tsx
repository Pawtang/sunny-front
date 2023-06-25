import ActionButton from "../elements/ActionButton";
import BackgroundGradient from "../utilities/BackgroundGradient";
import dayjs from "dayjs";
import { Fragment, FunctionComponent } from "react";
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
    closeModal();
    loadMonth();
  };

  return (
    <>
      <div className="p-5 items-center ">
        <div className="columns-2">
          {/* Months */}
          <div className="overflow-scroll overflow-x-hidden flex justify-center max-h-96 border">
            <ul>
              {months.map((month: string, index: number) => {
                return (
                  <div className="pt-0.5" key={index}>
                    <li key={month}>
                      <ActionButton
                        onClick={() => {
                          setMonth(index + 1);
                        }}
                        buttonText={month}
                        styleTags={`my-1 w-40 hover:outline hover:drop-shadow-md hover:-translate-y-0.5 transition-all ${
                          selectedMonth === index + 1 ? "!bg-blue-200" : ""
                        }`}
                      ></ActionButton>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* Years */}
          <div className="overflow-scroll overflow-x-hidden flex justify-center max-h-96 border">
            <ul>
              {years.map((year: string, index: number) => {
                return (
                  <div className="pt-0.5" key={index}>
                    <li key={year}>
                      <ActionButton
                        onClick={() => {
                          setYear(parseInt(year));
                        }}
                        buttonText={year}
                        styleTags={`my-1 w-40 hover:outline hover:drop-shadow-md hover:-translate-y-0.5 transition-all ${
                          selectedYear.toString() === year ? "!bg-blue-200" : ""
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
