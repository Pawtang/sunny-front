import { FunctionComponent } from "react";
import { useContext, useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import CalendarDay from "./CalendarDay";
import ActionButton from "../elements/ActionButton";
import LinkButton from "../elements/LinkButton";
import MonthGen from "../utilities/MonthGen";
import BackgroundGradient from "../utilities/BackgroundGradient";
import { getMonth } from "../middleware/dayServiceCalls";
import { IDay } from "../utilities/types";
import MonthPicker from "./MonthPicker";
import generateGradient from "../utilities/PolynomialGradientsUtil";
import Modal from "./Modal";
import { prefixer } from "../utilities/Prefixer";
import { UserContext } from "../contexts/userContext";

const Month: FunctionComponent = () => {
  const { token } = useContext(UserContext);
  const today = dayjs();
  const monthCount = today.daysInMonth();

  const [month, setMonth] = useState<IDay[] | undefined>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(today.month() + 1);
  const [selectedYear, setSelectedYear] = useState<number>(today.year());
  const [modalVisibility, setModalVisibility] = useState(false);

  const loadMonth = async () => {
    try {
      setMonth(MonthGen());
      await getMonth(selectedMonth, selectedYear, (days: IDay[]) => {
        setMonth(MonthGen(days));
      });
    } catch (error) {
      console.error(error);
    }
  };

  const loadSelectedMonth = async () => {
    try {
      await getMonth(selectedMonth, selectedYear, (days: IDay[]) => {
        setMonth(MonthGen(days));
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(token);
    loadMonth();
  }, []);

  const [time, setTime] = useState(12);
  const grad = generateGradient(time);

  return (
    <div className="min-h-screen pb-6" style={{ background: grad }}>
      <div className="container-fluid nav z-50">
        <LinkButton linkTo="/" buttonText="Home" styleTags="mt-4"></LinkButton>
        <LinkButton
          linkTo="/correlationreport"
          buttonText="Correlation"
        ></LinkButton>
        <ActionButton
          onClick={() => {
            setModalVisibility(!modalVisibility);
          }}
          buttonText="📅"
          styleTags="z-50"
        ></ActionButton>
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
        <div className="container justify-content mx-auto max-w-lg">
          <h1 className="text-2xl mx-auto text-center">
            <b>
              {today.isSame(
                dayjs(`${selectedYear}-${selectedMonth}`, "YYYY-M"),
                "month"
              )
                ? `Today is ${today.format("MMMM DD, YYYY")}`
                : dayjs(`${selectedYear}, ${selectedMonth}`).format(
                    "MMMM, YYYY"
                  )}
            </b>
          </h1>
          {/* <h1 className="text-xl text-center">
            {`There are ${monthCount} days in ${today.format("MMMM")}.`}
            <br />
            One box represents each day:
          </h1> */}
        </div>
        {/* Content */}
        <div
          className={`mx-auto shadow-lg mt-10 container grid grid-cols-3 sm:grid-cols-7 place-content-center rounded bg-white/50 p-4 max-w-2xl `}
        >
          {month &&
            month.map((day) => (
              <div id={day.id.toString()} key={day.id}>
                <CalendarDay
                  selectedMonth={selectedMonth}
                  selectedYear={selectedYear}
                  dayIndex={day.id}
                  dayRating={day.dayRating}
                  notes={day.notes}
                ></CalendarDay>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Month;
