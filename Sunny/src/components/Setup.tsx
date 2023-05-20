import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";
import { attributeObject } from "../utilities/types";
import { useEffect, useState } from "react";
import CheckItem from "../elements/CheckItem";
import RadioItem from "../elements/RadioItem";
import { submitAttributes } from "../middleware/setupServiceCalls";

const hoursSleptObject: attributeObject = {
  name: "Hours Slept",
  type: "number",
};
const milesRunObject: attributeObject = { name: "Miles Run", type: "number" };
const minutesReadObject: attributeObject = {
  name: "Minutes Read",
  type: "number",
};
const wentToGymObject: attributeObject = {
  name: "Went to Gym",
  type: "boolean",
};
const drinksHadObject: attributeObject = { name: "Drinks Had", type: "number" };

const Setup = () => {
  const [attributes, setAttributes] = useState<attributeObject[]>([]);
  const [hoursSlept, setHoursSlept] = useState<boolean>(false);
  const [milesRun, setMilesRun] = useState<boolean>(false);
  const [minutesRead, setMinutesRead] = useState<boolean>(false);
  const [wentToGym, setWentToGym] = useState<boolean>(false);
  const [drinksHad, setDrinksHad] = useState<boolean>(false);
  const [attributeName, setAttributeName] = useState<string>("");
  const [attributeType, setAttributeType] = useState<string>("");
  const [checkedAttributes, setCheckedAttributes] = useState<string>("");

  const assignType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeType(e.currentTarget.value);
  };

  const writeAttribute = () => {
    if (!attributeName || !attributeType) return;
    {
      setAttributes([
        ...attributes,
        { name: attributeName, type: attributeType },
      ]);
    }
    // setAttributeType("number");
    setAttributeName("");
  };

  const commitAttributes = () => {
    const commonAttributes = [
      hoursSlept && hoursSleptObject,
      milesRun && milesRunObject,
      minutesRead && minutesReadObject,
      wentToGym && wentToGymObject,
      drinksHad && drinksHadObject,
    ];

    const toSubmit = [...commonAttributes, ...attributes].filter((val) => val);
    console.log("TO SUBMIT", toSubmit);
    submitAttributes({ attributes: toSubmit }, (data: any) => {
      console.log(data);
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center`}
      >
        <form className="bg-white/50 hover:bg-white/60 transition-all p-6 rounded-lg shadow-md max-w-md hover:-translate-y-1 duration-200 ease-linear">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Set Up Your Tracking
          </h2>
          <h2 className="text-xl ">
            <b>You Are Tracking:</b>
            <p>/Enumerate current attributes/</p>
          </h2>

          {/* Common Attributes */}
          <div className="mb-4">
            <h2 className="text-xl ">
              <b>Common Attributes</b>
            </h2>
            <CheckItem
              // name="sleep"
              // id="check-sleep"
              label="Hours Slept"
              checked={hoursSlept}
              onClick={() => setHoursSlept(!hoursSlept)}
            ></CheckItem>
            <CheckItem
              // name="miles-run"
              // id="check-miles-run"
              label="Miles Run"
              checked={milesRun}
              onClick={() => setMilesRun(!milesRun)}
            ></CheckItem>

            <CheckItem
              // name="minutes-read"
              // id="check-minutes-read"
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
              // name="drinks"
              // id="check-drinks"
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

            <label
              htmlFor="name"
              className="block font-semibold text-gray-700 mb-2"
            >
              Attribute Name
            </label>
            <input
              type="text"
              id="name"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="What do you want to track?"
              value={attributeName}
              onChange={(e) => setAttributeName(e.currentTarget.value)}
            />
          </div>
          <div className="mb-6 flex center">
            <div className="flex items-center">
              <RadioItem
                name="option"
                value="number"
                label="Number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e);
                  assignType(e);
                }}
                attributeType={attributeType}
              ></RadioItem>
            </div>
            <div className="flex items-center">
              <RadioItem
                name="option"
                value="boolean"
                label="True/False"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e);
                  assignType(e);
                }}
                attributeType={attributeType}
              ></RadioItem>
            </div>
          </div>

          {attributes.map((attribute) => {
            return (
              <>
                <p>{`${attribute.name}: ${attribute.type}`}</p>
              </>
            );
          })}

          <div className="flex justify-center">
            <ActionButton
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                writeAttribute();
              }}
              buttonText="Add Attribute"
              styleTags="w-96 mt-4"
            ></ActionButton>
          </div>
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
