import ActionButton from "../elements/ActionButton";
import BackgroundGradient from "../utilities/BackgroundGradient";

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
  const years = ["2020", "2021", "2022"];
  return (
    <>
      <div
        className={`fixed z-10 ${visibility} transition-all inset-0 bg-white bg-opacity-10 backdrop-blur overflow-y-auto h-full w-full`}
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5  max-h-100 min-w-96 w-1/3 shadow-lg rounded-md bg-opacity-50 bg-white items-center ">
          <div className="columns-2">
            <div className="overflow-y-auto overflow-x-hidden max-h-100 flex justify-center">
              <ul>
                {months.map((month: string) => {
                  return (
                    <li key={month}>
                      <ActionButton
                        onClick={() => {}}
                        buttonText={month}
                        styleTags="underline my-1 w-40"
                      ></ActionButton>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="overflow-y-auto overflow-x-hidden max-h-100 max-w-md  flex justify-center">
              <ul>
                {years.map((year: string) => {
                  return (
                    <li key={year}>
                      <ActionButton
                        onClick={() => {}}
                        buttonText={year}
                        styleTags="underline my-1 w-40"
                      ></ActionButton>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <ActionButton
              onClick={onClick}
              buttonText="OK"
              styleTags="mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthPickModal;
