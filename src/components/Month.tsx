import { FunctionComponent } from "react";
import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import CalendarDay from "./CalendarDay";
import ActionButton from "../elements/ActionButton";
import LinkButton from "../elements/LinkButton";
import MonthGen from "../utilities/MonthGen";
import { IDay } from "../utilities/types";
import MonthPicker from "./MonthPicker";
import generateGradient from "../utilities/PolynomialGradientsUtil";
import Modal from "./Modal";
// import { prefixer } from "../utilities/Prefixer";
import { UserContext } from "../contexts/userContext";

const Month: FunctionComponent = () => {
  const { user, APIGetAuthy } = useContext(UserContext);
  const today = dayjs();
  // const monthCount = today.daysInMonth();

  const [month, setMonth] = useState<IDay[] | undefined>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(today.month() + 1);
  const [selectedYear, setSelectedYear] = useState<number>(today.year());
  const [modalVisibility, setModalVisibility] = useState(false);

  const API_URL: string =
    process.env.REACT_APP_URL || "sunny-back-production.up.railway.app";
  const MONTH_URL = API_URL.concat("month");

  const loadMonth = async () => {
    try {
      setMonth(MonthGen(selectedMonth, selectedYear));
      loadSelectedMonth();
    } catch (error) {
      console.error(error);
    }
  };

  const loadSelectedMonth = async () => {
    try {
      APIGetAuthy(
        `${MONTH_URL}?month=${selectedMonth}&year=${selectedYear}`,
        (days: IDay[]) => {
          // console.log(days);
          setMonth(MonthGen(selectedMonth, selectedYear, days));
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMonth();
  }, []);

  useEffect(() => {
    loadSelectedMonth();
  }, [selectedMonth, selectedYear]);

  const loadCurrentMonth = () => {
    setSelectedMonth(today.month() + 1);
    setSelectedYear(today.year());
    loadSelectedMonth();
  };

  const [time, setTime] = useState(12);
  const grad = generateGradient(time);

  return (
    <div className="min-h-screen pb-6 pt-4" style={{ background: grad }}>
      <div className="container-fluid nav z-50">
        {/* <Navbar></Navbar> */}
        <LinkButton
          linkTo="/"
          buttonText=""
          buttonImagePath="/icons/home.png"
          styleTags=""
        ></LinkButton>
        <LinkButton
          linkTo="/correlationreport"
          buttonImagePath="/icons/chart.png"
          buttonText=" Trends"
        ></LinkButton>

        <ActionButton
          onClick={() => {
            setModalVisibility(!modalVisibility);
          }}
          buttonText="Month Select"
          styleTags=""
          buttonImagePath="/icons/calendar.png"
        ></ActionButton>
        <ActionButton
          buttonText="Today's Journal"
          styleTags=""
          buttonImagePath=""
          onClick={loadCurrentMonth}
        ></ActionButton>
        <p className="inline">{user?.name || "No user"}</p>
      </div>

      <Modal
        id="modalContainer"
        onClick={() => {
          setModalVisibility(!modalVisibility);
        }}
        visible={modalVisibility}
        content={
          <MonthPicker
            closeModal={() => {
              setModalVisibility(!modalVisibility);
            }}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            setMonth={setSelectedMonth}
            setYear={setSelectedYear}
            loadMonth={loadSelectedMonth}
          ></MonthPicker>
        }
      ></Modal>

      <div className="container justify-content mx-auto my-4 sm:h-100 h-full">
        {/* Header */}
        <div className="container justify-content mx-auto max-w-lg mt-24">
          <h1 className="text-2xl mx-auto text-center">
            <div className="">
              <b>{`Hello, ${user?.name}`}</b>
            </div>
            <p className="font-lg">
              <i>
                {today.isSame(
                  dayjs(`${selectedYear}-${selectedMonth}`, "YYYY-M"),
                  "month"
                )
                  ? `Today is ${today.format("MMMM DD, YYYY")}`
                  : dayjs(`${selectedYear}-${selectedMonth}`).format(
                      "MMMM, YYYY"
                    )}
              </i>
            </p>
          </h1>
        </div>
        <div
          className={`mx-auto shadow-lg mt-10 container place-content-center rounded-lg bg-white/50 p-4 max-w-2xl `}
        >
          <div className="flex place-content-evenly sm:visible collapse mx-3 gap-6">
            <p className="flex-1 text-center font-bold">Sun</p>
            <p className="flex-1 text-center font-bold">Mon</p>
            <p className="flex-1 text-center font-bold">Tue</p>
            <p className="flex-1 text-center font-bold">Wed</p>
            <p className="flex-1 text-center font-bold">Thurs</p>
            <p className="flex-1 text-center font-bold">Fri</p>
            <p className="flex-1 text-center font-bold">Sat</p>
          </div>

          <div
            className={`mx-autocontainer grid grid-cols-3 sm:grid-cols-7 place-content-center`}
          >
            {month &&
              month.map((day, index) =>
                day.id == 0 ? (
                  // <div className="bg-gray-200 cursor-default relative sm:w-16 sm:h-16 h-12 transition-all m-4 rounded outline outline-1"></div>
                  <div className=""></div>
                ) : (
                  <div
                    id={day.id.toString()}
                    key={"day-" + day.id + "-" + index}
                  >
                    <CalendarDay
                      selectedMonth={selectedMonth}
                      selectedYear={selectedYear}
                      dayIndex={day.id}
                      dayRating={day.dayRating}
                      notes={day.notes}
                    ></CalendarDay>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Month;
