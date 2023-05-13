import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";
import { attributeObject } from "../utilities/types";
import { useState } from "react";
import CheckItem from "../elements/CheckItem";
import RadioItem from "../elements/RadioItem";
// import { submitAttributes } from "../middleware/setupServiceCalls";
// import { getAttributesForUser } from "../middleware/setupServiceCalls";

const Setup = () => {
  const [attributes, setAttributes] = useState<attributeObject>({});
  const [attributeName, setAttributeName] = useState<string>("");
  const [attributeType, setAttributeType] = useState<string>("number");
  // need to add a way to add checked attributes and radio attributes to a single list. change wording.
  const [checkedAttributes, setCheckedAttributes] = useState<string>("");
  // const [trackedAttributes, setTrackedAttributes] = useState;

  const attributesList = () => {
    return attributes && Object.entries(attributes);
  };

  const assignType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeType(e.currentTarget.value);
  };

  const writeAttribute = () => {
    if (!attributeName || !attributeType) return;
    {
      setAttributes({ ...attributes, [attributeName]: attributeType });
    }
    setAttributeType("number");
    setAttributeName("");
  };

  const commitAttributes = () => {
    //add all attributes to "you are tracking" list upon save
    return;
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
              name="sleep"
              id="check-sleep"
              label="Hours Slept"
            ></CheckItem>

            <CheckItem
              name="miles-run"
              id="check-miles-run"
              label="Miles Run"
            ></CheckItem>

            <CheckItem
              name="minutes-read"
              id="check-minutes-read"
              label="Minutes Read"
            ></CheckItem>

            <CheckItem
              name="gym"
              id="check-gym"
              label="Went to Gym"
            ></CheckItem>

            <CheckItem
              name="drinks"
              id="check-drinks"
              label="Drinks Had"
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  assignType(e)
                }
                attributeType={attributeType}
              ></RadioItem>
            </div>
            <div className="flex items-center">
              <RadioItem
                name="option"
                value="boolean"
                label="True/False"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  assignType(e)
                }
                attributeType={attributeType}
              ></RadioItem>
            </div>
          </div>

          {attributesList() &&
            attributesList().map((attribute) => {
              return (
                <>
                  <p>{`${attribute[0]}: ${attribute[1]}`}</p>
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
