import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";
import { attributeObject } from "../utilities/types";
import { useState } from "react";

const Setup = () => {
  const [attributes, setAttributes] = useState<attributeObject>({});
  const [attributeName, setAttributeName] = useState<string>("");
  const [attributeType, setAttributeType] = useState<string>("");

  const attributesList = () => {
    return attributes && Object.entries(attributes);
  };

  const assignType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeType(e.currentTarget.value);
  };

  const writeAttribute = () => {
    setAttributes({ ...attributes, [attributeName]: attributeType });
    setAttributeType("");
    setAttributeName("");
  };

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center`}
      >
        <form className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-lg shadow-md max-w-md hover:-translate-y-1 duration-200 ease-linear">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Set Up Your Tracking
          </h2>

          <div className="mb-4">
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
          <div className="mb-6">
            <label>
              <input
                type="radio"
                name="option"
                value="number"
                checked={attributeType === "number"}
                onChange={(e) => assignType(e)}
              />
              Number
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="boolean"
                checked={attributeType === "boolean"}
                onChange={(e) => assignType(e)}
              />
              True/False
            </label>
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
