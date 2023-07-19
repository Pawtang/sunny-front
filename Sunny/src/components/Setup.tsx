import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";
import { attributeObject } from "../utilities/types";
import { useContext, useEffect, useState } from "react";
import CheckItem from "../elements/CheckItem";
import RadioItem from "../elements/RadioItem";
import { UserContext } from "../contexts/userContext";

const HOURS_SLEPT = "Hours Slept";
const MILES_RUN = "Miles Run";
const MINUTES_READ = "Minutes Read";
const WENT_TO_GYM = "Went to Gym";
const DRINKS_HAD = "Drinks Had";

const hoursSleptObject: attributeObject = {
  name: HOURS_SLEPT,
  type: "number",
};
const milesRunObject: attributeObject = { name: MILES_RUN, type: "number" };
const minutesReadObject: attributeObject = {
  name: MINUTES_READ,
  type: "number",
};
const wentToGymObject: attributeObject = {
  name: WENT_TO_GYM,
  type: "boolean",
};
const drinksHadObject: attributeObject = { name: DRINKS_HAD, type: "number" };

const Setup = () => {
  const { APIGetAuthy, APIPostAuthy } = useContext(UserContext);
  const [attributes, setAttributes] = useState<attributeObject[]>([]);
  const [hoursSlept, setHoursSlept] = useState<boolean>(false);
  const [milesRun, setMilesRun] = useState<boolean>(false);
  const [minutesRead, setMinutesRead] = useState<boolean>(false);
  const [wentToGym, setWentToGym] = useState<boolean>(false);
  const [drinksHad, setDrinksHad] = useState<boolean>(false);
  const [attributeName, setAttributeName] = useState<string>("");
  const [attributeType, setAttributeType] = useState<string>("");
  const [firstVisit, setFirstVisit] = useState<boolean>(true);

  const API_URL: string =
    process.env.REACT_APP_URL || "sunny-back-production.up.railway.app";
  const SETUP_URL = API_URL.concat("attributes");

  useEffect(() => {
    APIGetAuthy(SETUP_URL, (data: any) => {
      setAttributes(
        data
        // .filter(
        //   (attr: attributeObject) =>
        //     ![
        //       HOURS_SLEPT,
        //       MILES_RUN,
        //       MINUTES_READ,
        //       WENT_TO_GYM,
        //       DRINKS_HAD,
        //     ].includes(attr.name)
        // )
      );
    });
  }, []);

  const assignType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeType(e.currentTarget.value);
  };

  const writeAttribute = () => {
    if (!attributeName || !attributeType) return;
    setAttributes([
      ...attributes,
      { name: attributeName, type: attributeType },
    ]);
    setAttributeName("");
  };

  const commitAttributes = () => {
    //check if boolean set to true (from user checkmark or from load attributes) and commit if so
    const commonAttributes = [
      hoursSlept && hoursSleptObject,
      milesRun && milesRunObject,
      minutesRead && minutesReadObject,
      wentToGym && wentToGymObject,
      drinksHad && drinksHadObject,
    ];

    const toSubmit = [...commonAttributes, ...attributes].filter((val) => val);
    console.log("TO SUBMIT", toSubmit);
    APIPostAuthy(SETUP_URL, { attributes: toSubmit }, (data: any) => {
      console.log(data);
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center`}
      >
        <ActionButton
          onClick={() => setFirstVisit(!firstVisit)}
          buttonText="Flip State"
          styleTags="absolute top-4 right-4"
        ></ActionButton>
        <form className="my-24 container-xl max-w-4xl bg-white/50 hover:bg-white/60 transition-all p-6 rounded-lg shadow-md hover:-translate-y-1 duration-200 ease-linear">
          <div className="mb-6">
            <h2 className="text-3xl font-bold  text-center">
              {firstVisit ? "Set Up Your Tracking" : "Edit Your Tracking"}
            </h2>
            <i>
              {firstVisit
                ? "Welcome to Sunny! To begin tracking your days, please add the attributes you want to track. You can change these later, but it's best to set up correctly the first time to collect good data!"
                : "While you can change these at any time, you will only have partial data if you start tracking new attributes after you have already started using Sunny. This may affect the quality of the correlations."}
            </i>
          </div>

          {firstVisit ? (
            <div></div>
          ) : (
            <div>
              <h2 className="text-xl ">
                <b>Currently Tracking:</b>
              </h2>

              <div className="outline outline-1 outline-white py-1 px-2 my-2 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {attributes.map((attribute) => {
                  return (
                    <div className="my-4 w-100">
                      <div className="p-2 bg-white/50 rounded-md inline w-100 mx-2">
                        <img
                          className="w-6 inline"
                          src={`/icons/${
                            attribute.type === "boolean"
                              ? "true-false.png"
                              : "numbers.png"
                          }`}
                          alt=""
                        />
                      </div>
                      <b>{`${attribute.name}`}</b>
                      <div className="inline w-2">
                        <ActionButton
                          onClick={() => {}}
                          buttonText="-"
                          // buttonImagePath="/icons/trash.png"
                          imageStyle="object-cover"
                          styleTags="text-center"
                        ></ActionButton>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <h2 className="text-xl mt-4">
            <b>Add Attributes:</b>
          </h2>

          {/* Common Attributes */}
          <div className="outline outline-1 outline-white/50 py-1 px-2 my-2 rounded-md">
            <div className="my-4 ">
              <h2 className="text-xl ">
                <b>Common Attributes</b>
              </h2>
              <i>
                These are provided as examples of common things people track
              </i>
              <br></br>
              <CheckItem
                label="Hours Slept"
                checked={hoursSlept}
                onClick={() => setHoursSlept(!hoursSlept)}
              ></CheckItem>
              <CheckItem
                label="Miles Run"
                checked={milesRun}
                onClick={() => setMilesRun(!milesRun)}
              ></CheckItem>

              <CheckItem
                label="Minutes Read"
                checked={minutesRead}
                onClick={() => setMinutesRead(!minutesRead)}
              ></CheckItem>

              <CheckItem
                // name="gym"
                // id="check-gym"
                label="Went to Gym"
                checked={wentToGym}
                onClick={() => setWentToGym(!wentToGym)}
              ></CheckItem>

              <CheckItem
                label="Drinks Had"
                checked={drinksHad}
                onClick={() => setDrinksHad(!drinksHad)}
              ></CheckItem>
            </div>
            {/* Custom tracking */}
            <div className="mb-4">
              <h2 className="text-xl bold">
                <b>Custom Attributes</b>
              </h2>
              <div className="my-2">
                <i>
                  You can add as many additional attributes as you like. They
                  can be either a number, or a true/false. You get best results
                  when you record data for each of them every day.
                </i>
              </div>

              <label
                htmlFor="name"
                className="block font-semibold text-gray-700 mb-2"
              >
                Attribute Name
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="name"
                  className="rounded-lg px-4 w-full focus:outline-blue-500 focus:outline-2"
                  placeholder="What do you want to track?"
                  value={attributeName}
                  onChange={(e) => setAttributeName(e.currentTarget.value)}
                />
                <ActionButton
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    writeAttribute();
                  }}
                  buttonText="+"
                  styleTags="w-12"
                ></ActionButton>
              </div>
            </div>

            <div className="mb-6 flex center">
              <div className="flex items-center">
                <RadioItem
                  name="option"
                  value="number"
                  label="Number"
                  isChecked={attributeType === "number"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    assignType(e);
                  }}
                ></RadioItem>
              </div>
              <div className="flex items-center">
                <RadioItem
                  name="option"
                  value="boolean"
                  label="True/False"
                  isChecked={attributeType === "boolean"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    assignType(e);
                  }}
                ></RadioItem>
              </div>
            </div>
          </div>

          <div className="flex justify-center"></div>
          <div className="flex justify-center">
            <ActionButton
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                commitAttributes();
              }}
              buttonText="Save List"
              styleTags="w-96 mt-4"
            ></ActionButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Setup;
