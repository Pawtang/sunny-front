import React, { FunctionComponent, useEffect } from "react";
import { useState } from "react";
import BooleanRating from "../elements/BooleanRating";
import NumberRating from "../elements/NumberRating";
import RangeRating from "../elements/RangeRating";
import dayjs, { Dayjs } from "dayjs";
import LinkButton from "../elements/LinkButton";
import BackgroundGradient from "../utilities/BackgroundGradient";
import { mapQueryParamsToObject } from "../utilities/QueryParamsUtils";
import ActionButton from "../elements/ActionButton";
import { getDayData, submitDay } from "../middleware/dayServiceCalls";
import { useLocation } from "react-router-dom";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { dayProps } from "../utilities/types";
import { EmojiLibrary } from "../utilities/EmojiLibrary";
import { getAttributesForUser } from "../middleware/setupServiceCalls";
import { attributeObject } from "../utilities/types";

const today = dayjs();
dayjs.extend(customParseFormat);

const Day: FunctionComponent<dayProps> = (props) => {
  const [id, setId] = useState(null);
  const [dayRating, setDayRating] = useState(5);
  const [attributes, setAttributes] = useState<attributeObject[]>([]);
  const [notes, setNotes] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const location = useLocation();
  const params = mapQueryParamsToObject(location.search);
  const date = dayjs(params.date, "YYYYMMDD");
  console.log(typeof dayjs(date).format("MMMM DD, YYYY"));

  useEffect(() => {
    getAttributesForUser("646808d38d816587d6ec320e", (data: any) => {
      // console.log(data);
      setAttributes(data);
    });
    getDayData(params.date, (data: any) => {
      // console.log(data);
      if (data) {
        setDayRating(data.dayRating);
        setNotes(data.notes);
        // setIsEditing(false);
        setId(data._id);
      }
    });
  }, []);

  const time = parseInt(today.format("hh"));

  return (
    <div
      className="Day h-screen w-screen flex items-center"
      style={{ backgroundImage: `${BackgroundGradient(time)}` }}
    >
      <div className="container mx-auto">
        <div className="journal max-w-lg mx-auto shadow-sm hover:shadow-lg">
          <div className="float-right">
            <ActionButton buttonText="❌" onClick={() => {}}></ActionButton>
          </div>
          <div className="relative float-left container mx-auto p-4 mt-4 ">
            <div className="mx-auto">
              <h1 className="text-3xl font-bold underline center ">
                Hello, Ben
              </h1>
              {isEditing && <h1>This item contains unsaved changes</h1>}
              {today.diff(date, "day") === 0 ? (
                <>
                  <h2 className="center text-2xl">
                    {dayjs(date).format("MMMM DD, YYYY")}
                  </h2>
                  <h2 className="center mt-2">
                    <b> How was your day?</b>
                  </h2>
                </>
              ) : (
                <>
                  <h2 className="center text-2xl">
                    {dayjs(date).format("MMMM DD, YYYY")}
                  </h2>
                  <h2 className="center mt-2">
                    <b> Edit your journal entry?</b>
                  </h2>
                </>
              )}
              <h2 className="mt-4 center text-3xl">
                {EmojiLibrary(dayRating)}
              </h2>
            </div>
          </div>
          <div className="rating-inputs container mx-auto max-w-lg">
            <RangeRating
              label="Day Rating"
              maximum={5}
              onChange={(rating: number) => setDayRating(rating)}
              value={dayRating}
            />
            {attributes.map((attribute) =>
              attribute.type === "number" ? (
                <NumberRating label={attribute.name}></NumberRating>
              ) : (
                <BooleanRating label={attribute.name}></BooleanRating>
              )
            )}
            {/* <RangeRating value="Sleep" maximum={12}></RangeRating>
            <BooleanRating value="Exercise"></BooleanRating>
            <NumberRating value="Miles Run"></NumberRating>
            <NumberRating value="Minutes Read"></NumberRating> */}
          </div>
          <div className="freetext center mt-4">
            <label htmlFor="journal-entry">
              <b>Anything you want to talk about today?</b>
            </label>
            <textarea
              className="text-black mt-2 bg-white/50 peer block min-h-3  w-full 
              rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all 
              duration-200 ease-linear focus:placeholder:opacity-100 
              data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
              
               [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
              id="journal-entry"
              rows={3}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
              value={notes}
              placeholder="Tell me about your day"
            />
          </div>
        </div>
        <div className="m-10 mx-auto flex justify-center max-w-sm">
          <LinkButton
            linkTo="/Month"
            buttonText="Back"
            styleTags="text-center"
          ></LinkButton>
          <ActionButton
            onClick={() => {
              submitDay(
                {
                  id,
                  notes,
                  dayRating,
                  attributes,
                  date: dayjs(date).format("YYYY-MM-DD"),
                },
                (data: any) => {
                  const { _id, notes, dayRating } = data;
                  setId(_id);
                  setNotes(notes);
                  setDayRating(dayRating);
                  setIsEditing(false);
                }
              );
            }}
            buttonText="Submit"
            styleTags="text-center"
          ></ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Day;
