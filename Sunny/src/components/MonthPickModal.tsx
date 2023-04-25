import ActionButton from "../elements/ActionButton";
import BackgroundGradient from "../utilities/BackgroundGradient";
import dayjs from "dayjs";

const MonthPickModal = (props: { visibility: string; onClick: any }) => {
  const { visibility, onClick } = props;
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
  // ["2020", "2021", "2022"];
  return (
    <>
      <div
        className={`fixed z-10 ${visibility} transition-all inset-0 bg-white bg-opacity-10 backdrop-blur-.5 overflow-y-auto h-full w-full`}
        id="my-modal"
      >
        {/* Should be able to close by clicking off -- add action to document body? */}
        <div className="relative top-20 left-20 p-5  min-w-fit w-1/3 max-w-max shadow-lg rounded-md bg-opacity-50 bg-white items-center h-1/2">
          <div className="columns-2 height-full">
            {/* Months */}
            <div className="overflow-scroll overflow-x-hidden flex justify-center max-h-96">
              <ul>
                {months.map((month: string) => {
                  return (
                    <div className="pt-0.5">
                      <li key={month}>
                        <ActionButton
                          onClick={() => {}}
                          buttonText={month}
                          styleTags="my-1 w-40 hover:outline hover:drop-shadow-md hover:-translate-y-0.5 transition-all outline-1 outline-offset-2 outline-gray-400"
                        ></ActionButton>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            {/* Years */}
            <div className="overflow-scroll overflow-x-hidden flex justify-center max-h-96">
              <ul>
                {years.map((year: string) => {
                  return (
                    <div className="pt-0.5">
                      <li key={year}>
                        <ActionButton
                          onClick={() => {}}
                          buttonText={year}
                          styleTags="my-1 w-40 hover:outline hover:drop-shadow-md hover:-translate-y-0.5 transition-all outline-1 outline-offset-2 outline-gray-400"
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
              onClick={onClick}
              buttonText="OK"
              styleTags="mx-auto w-40"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthPickModal;
