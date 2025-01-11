import { dayObject } from "../utilities/types";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Timeline = (props: { userDayData: dayObject[] }) => {
  const { userDayData } = props;
  const scoresArray = userDayData.map((day) => {
    return day.dayRating && day.dayRating;
  });

  const segmentColor = (score: number) => {
    // const score = parseFloat(n);
    if (score < 2) return "bg-red-400";
    else if (score < 3) return "bg-amber-400";
    else if (score < 4) return "bg-yellow-400";
    else if (score < 5) return "bg-lime-200";
    else return "bg-green-400";
  };

  const segmentWidth = () => {
    const count = userDayData.length;
    const pixelWidth = Math.floor(300 / count).toString();

    return `${pixelWidth}px`;
  };

  const navigate = useNavigate();

  return (
    <div className="">
      <div
        className="flex flex-row place-content-center h-16 bg-gray-800/70 hover:bg-gray-700/70 
      hover:scale-105 transition-all duration-200 ease-out w-[400px] p-3 rounded-xl mx-auto mb-8"
      >
        {scoresArray.length > 0 ? (
          userDayData.map((day, index: number) => {
            const score = day.dayRating;
            const date = dayjs(day.date).format("MMMM DD, YYYY");
            const linkDate = dayjs(day.date).format("YYYY-MM-DD");
            return (
              <div
                key={index}
                className={`group rounded-lg mr-0.5 h-10 hover:shadow-lg hover:scale-x-125 hover:scale-y-150 transition-all ease-out duration:200 m-0 p-0 ${
                  score ? segmentColor(score) : "bg-gray-800"
                } cursor-pointer`}
                style={score ? { width: segmentWidth() } : { width: 0 }}
                onClick={() => {
                  linkDate && navigate(`/Day?date=${linkDate}`);
                }}
              >
                <span className="text-center mx-auto absolute top-12 scale-0 transition-all ease-out duration-100 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 italic bg-opacity-70 w-48">
                  <p className="break-keep inline-block mx-auto text-center">
                    {date} quality: {score && score.toString()}
                  </p>
                </span>
              </div>
            );
          })
        ) : (
          <div className="">No data</div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
