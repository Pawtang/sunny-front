import { attributeObject, dayObject } from "./types";

export const Correlation = (props: { days: Array<dayObject> }) => {
  const { days } = props;

  const dayRatingArray: Array<number> = [];
  const attribute: Array<number> = [];

  console.log(days);

  return (
    <div className="">
      <div className="w-full">
        {days.map((day, index) => (
          <div className="outline outline-1 outline-offset-1 rounded hover:bg-white/50 my-4 p-4">
            <p>{`Day: ${index}, day rating: ${day.dayRating}`}</p>
            <div className="w-full">
              {day.attributes &&
                day.attributes.map((attribute, attrIndex) => (
                  <div className="" key={attrIndex}>
                    <p>{`${attrIndex}: ${attribute.name}: ${attribute.value}`}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
