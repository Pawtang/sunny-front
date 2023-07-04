import { useContext, FunctionComponent, useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import BooleanRating from "../elements/BooleanRating";
import NumberRating from "../elements/NumberRating";
import RangeRating from "../elements/RangeRating";
import dayjs from "dayjs";
import LinkButton from "../elements/LinkButton";
import BackgroundGradient from "../utilities/BackgroundGradient";
import { mapQueryParamsToObject } from "../utilities/QueryParamsUtils";
import ActionButton from "../elements/ActionButton";
import { useLocation, useNavigate } from "react-router-dom";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { attributeObject, dayObject, dayProps } from "../utilities/types";
import { EmojiLibrary } from "../utilities/EmojiLibrary";
import Modal from "./Modal";
import ConfirmActionModal from "./ConfirmActionModal";
import { dummyUserID, DAY_URL, SETUP_URL } from "../utilities/constants";
import { UserContext } from "../contexts/userContext";

// import { GradientOnMouseMove } from "../utilities/GradientOnMouseMove";
const today = dayjs();
dayjs.extend(customParseFormat);

const Day: FunctionComponent<dayProps> = () => {
  const { token, user } = useContext(UserContext);
  const { APIPostAuthy, APIGetAuthy, APIDeleteAuthy } = useContext(UserContext);
  const [eraseModalVisibility, setEraseModalVisibility] = useState(false);
  const [overwriteModalVisibility, setOverwriteModalVisibility] =
    useState(false);
  const [loadedDayObject, setLoadedDayObject] = useState<dayObject>({});
  const [dayRating, setDayRating] = useState(5);
  const [attributes, setAttributes] = useState<attributeObject[]>([]);
  const [notes, setNotes] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const params = mapQueryParamsToObject(location.search);
  const date = dayjs(params.date, "YYYYMMDD");

  const navigate = useNavigate();

  const dayExists = () => loadedDayObject && loadedDayObject._id;

  const sortAttributes = (data: Array<attributeObject>) => {
    const sortedData = data.sort((a: any, b: any) => {
      if (a.type < b.type) {
        return 1;
      }
      if (a.type > b.type) {
        return -1;
      }
      return 0;
    });
    return sortedData;
  };

  const initAttributes = (attributes: Array<attributeObject>) => {
    attributes.map((attribute, index: number) => {
      const initializedAttributes = [...attributes]; // Create a shallow copy of the attributes array
      initializedAttributes[index] = {
        ...attribute,
        value: 0,
      };
    });
  };

  const loadDay = () => {
    APIGetAuthy(`${DAY_URL}?date=${params.date}`, (dayData: any) => {
      setLoadedDayObject(dayData);
      if (dayData) {
        setDayRating(dayData.dayRating);
        setAttributes(sortAttributes(dayData.attributes));
        setNotes(dayData.notes);
      } else {
        APIGetAuthy(SETUP_URL, (attributeData: Array<attributeObject>) => {
          const sortedData = sortAttributes(attributeData);
          setAttributes(sortedData);
        });
      }
    });
  };

  useEffect(() => {
    loadDay();
  }, []);

  const time = parseInt(today.format("hh"));

  const handleSubmitDay = () => {
    const dayToSubmit = dayExists()
      ? {
          ...loadedDayObject,
          notes,
          dayRating,
          attributes,
          date,
          owner: dummyUserID,
        }
      : {
          notes,
          dayRating,
          attributes,
          date: dayjs(date).format("YYYY-MM-DD"),
          owner: dummyUserID,
        };
    console.log(dayToSubmit);
    try {
      APIPostAuthy(DAY_URL, dayToSubmit, (data: any) => {
        const { notes, dayRating } = data;
        setLoadedDayObject(data);
        setNotes(notes);
        setDayRating(dayRating);
        setIsEditing(false);
      });
    } catch (error) {
      return error;
    }
    navigate("/month");
  };

  const handleDeleteDay = () => {
    APIDeleteAuthy(`${DAY_URL}?date=${params.date}`, (data: any) => {
      console.log("deleted", data);
    });
    loadDay();
  };

  return (
    <div
      className="Day min-h-screen h-full w-screen flex items-center py-6"
      style={{ backgroundImage: `${BackgroundGradient(time)}` }}
    >
      <Modal
        id="confirmOverwriteModal"
        onClick={() => {
          setOverwriteModalVisibility(!overwriteModalVisibility);
        }}
        visible={overwriteModalVisibility}
        content={
          <ConfirmActionModal
            onClickConfirm={() => {
              handleSubmitDay();
              setOverwriteModalVisibility(!overwriteModalVisibility);
            }}
            onClickCancel={() => {
              setOverwriteModalVisibility(!overwriteModalVisibility);
            }}
            modalText="Save changes to this day?"
            buttonText="Save"
          ></ConfirmActionModal>
        }
      ></Modal>

      <Modal
        id="confirmCancelModal"
        onClick={() => {
          setEraseModalVisibility(!eraseModalVisibility);
        }}
        visible={eraseModalVisibility}
        content={
          <ConfirmActionModal
            onClickConfirm={() => {
              handleDeleteDay();
            }}
            onClickCancel={() => {
              setEraseModalVisibility(!eraseModalVisibility);
            }}
            modalText="Are you sure you want to delete this day's data and start over?"
            buttonText="Delete"
            buttonType="danger"
          ></ConfirmActionModal>
        }
      ></Modal>

      <div className="container mx-auto">
        {/* <p>{user ? user : "No user"}</p> */}
        <div
          className={`journal max-w-lg mx-auto shadow-sm hover:shadow-lg ${
            isEditing ? "" : ""
          }`}
        >
          <div className="float-right">
            <LinkButton
              linkTo="/correlationreport"
              buttonText=""
              buttonImagePath="/icons/chart.png"
            ></LinkButton>
            <ActionButton
              buttonText=""
              buttonImagePath="/icons/reset.png"
              onClick={() => {
                setEraseModalVisibility(!eraseModalVisibility);
              }}
              styleTags="!bg-red-400 !hover:bg-red-200"
            ></ActionButton>
          </div>
          <div className="relative float-left container mx-auto p-4 mt-4 ">
            <div className="mx-auto">
              <h1 className="text-3xl font-bold underline center ">
                {`Hello, ${user?.split(" ")[0]}`}
              </h1>

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
              onChange={(rating: number) => {
                setDayRating(rating);
                setIsEditing(true);
              }}
              value={dayRating}
            />
            {attributes.map((attribute, index: number) =>
              attribute.type === "number" ? (
                <Fragment key={index}>
                  <NumberRating
                    index={index}
                    label={attribute.name}
                    value={attribute.value ? attribute.value : 0}
                    onChange={(rating: number) => {
                      const updatedAttributes = [...attributes]; // Create a shallow copy of the attributes array
                      updatedAttributes[index] = {
                        ...attribute,
                        value: rating,
                      }; // Update the specific item at the given index
                      console.log(updatedAttributes, attributes);
                      setAttributes(updatedAttributes);
                      setIsEditing(true);
                    }}
                    increment={() => {
                      const updatedAttributes = [...attributes]; // Create a shallow copy of the attributes array
                      if (attribute.value) {
                        updatedAttributes[index] = {
                          ...attribute,
                          value: attribute.value + 1,
                        };
                      } else {
                        updatedAttributes[index] = {
                          ...attribute,
                          value: 1,
                        };
                      }

                      setAttributes(updatedAttributes);
                      setIsEditing(true);
                    }}
                    decrement={() => {
                      const updatedAttributes = [...attributes]; // Create a shallow copy of the attributes array
                      if (attribute.value && attribute.value > 0) {
                        updatedAttributes[index] = {
                          ...attribute,
                          value: attribute.value - 1,
                        };
                      } else {
                        updatedAttributes[index] = {
                          ...attribute,
                          value: 0,
                        };
                      }

                      setAttributes(updatedAttributes);
                      setIsEditing(true);
                    }}
                  ></NumberRating>
                </Fragment>
              ) : (
                <Fragment key={index}>
                  <BooleanRating
                    index={index}
                    label={attribute.name}
                    checked={attribute.value ? attribute.value : 0}
                    onChange={() => {
                      const updatedAttributes = [...attributes]; // Create a shallow copy of the attributes array

                      updatedAttributes[index].value === undefined &&
                        (updatedAttributes[index].value = 0);
                      if (updatedAttributes[index].value === 0)
                        updatedAttributes[index].value = 1;
                      else if (updatedAttributes[index].value === 1)
                        updatedAttributes[index].value = 0;
                      console.log(updatedAttributes[index]);
                      console.log(updatedAttributes);
                      setAttributes(updatedAttributes);
                      setIsEditing(true);
                    }}
                  ></BooleanRating>
                </Fragment>
              )
            )}
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
                setIsEditing(true);
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
            buttonImagePath="/icons/calendar.png"
            styleTags="text-center"
          ></LinkButton>
          <ActionButton
            onClick={() => {
              isEditing && dayExists()
                ? setOverwriteModalVisibility(!overwriteModalVisibility)
                : handleSubmitDay();
            }}
            buttonText={`${dayExists() ? "Save Changes" : "Submit"}`}
            styleTags={`text-center`}
            buttonType={isEditing ? "confirm" : "disabled"}
          ></ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Day;
