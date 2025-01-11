import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";
import { attributeObject } from "../utilities/types";
import { useContext, useEffect, useState } from "react";
import CheckItem from "../elements/CheckItem";
import RadioItem from "../elements/RadioItem";
import { UserContext } from "../contexts/userContext";
import { displayMsg } from "../utilities/Toasts";

const Setup = () => {
  const { APIGetAuthy, APIPostAuthy, user } = useContext(UserContext);
  const [attributes, setAttributes] = useState<attributeObject[]>([]);
  const [attributeName, setAttributeName] = useState<string>("");
  const [attributeType, setAttributeType] = useState<string>("");
  const [isSetup, setIsSetup] = useState<boolean>(false);

  const API_URL: string =
    process.env.REACT_APP_URL || "sunny-back-production.up.railway.app";
  const SETUP_URL = API_URL.concat("attributes");

  useEffect(() => {
    user && setAttributes(user.attributes);
    user && setIsSetup(user.isSetup);
  }, [user]);

  const assignType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttributeType(e.currentTarget.value);
  };

  const writeAttribute = () => {
    if (!attributeName || !attributeType) return;

    const attributeExists = attributes.some(
      (attribute) =>
        attribute.name === attributeName && attribute.type === attributeType
    );

    if (attributeExists) return;

    setAttributes((prevAttributes) => [
      ...prevAttributes,
      { name: attributeName, type: attributeType },
    ]);

    setAttributeName("");
  };

  const removeAttribute = (name: String, type: String) => {
    setAttributes((prevAttributes) =>
      prevAttributes.filter(
        (attribute) => !(attribute.name === name && attribute.type === type)
      )
    );
  };

  const commitAttributes = () => {
    const toSubmit = [...attributes].filter((val) => val);
    try {
      APIPostAuthy(SETUP_URL, { attributes: toSubmit }, (data: any) => {
        displayMsg("Attributes saved!");
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(isSetup);
  return (
    <>
      <Navbar />
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center`}
      >
        <form className="my-24 container-xl max-w-4xl bg-white/50 hover:bg-white/60 transition-all p-6 rounded-lg shadow-md hover:-translate-y-1 duration-200 ease-linear">
          <div className="mb-6">
            <h2 className="text-3xl font-bold  text-center">
              {!isSetup ? "Set Up Your Tracking" : "Edit Your Tracking"}
            </h2>
            <i>
              {!isSetup
                ? "Welcome to Sunny! To begin tracking your days, please add the attributes you want to track. You can change these later, but it's best to set up correctly the first time to collect good data!"
                : "While you can change these at any time, you will only have partial data if you start tracking new attributes after you have already started using Sunny. This may affect the quality of the correlations."}
            </i>
          </div>

          {!isSetup ? (
            <div></div>
          ) : (
            <div>
              <h2 className="text-xl ">
                <b>Currently Tracking:</b>
              </h2>

              <div className="outline outline-1 outline-white py-1 px-2 my-2 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2">
                {attributes.map((attribute, index) => {
                  return (
                    <div className="my-1 w-full" key={index}>
                      <div className="flex w-full bg-white/20 p-2 rounded-md">
                        {/* Type icon */}
                        <div className="flex items-center p-2 bg-white/50 rounded-md mr-2">
                          <img
                            className="w-5"
                            src={`/icons/${
                              attribute.type === "boolean"
                                ? "true-false.png"
                                : "numbers.png"
                            }`}
                            alt=""
                          />
                        </div>
                        {/* Attr Name */}
                        <div className="flex-grow flex items-center">
                          <b className="text-sm">{attribute.name}</b>
                        </div>
                        {/* Delete */}
                        <div className="">
                          <ActionButton
                            onClick={(e: Event) => {
                              e.preventDefault();
                              console.log(attributes);
                              removeAttribute(attribute.name, attribute.type);
                              console.log(attributes);
                            }}
                            buttonText="-"
                            imageStyle="object-cover"
                            styleTags="text-center"
                          />
                        </div>
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

          <div className="outline outline-1 outline-white/50 py-1 px-2 my-2 rounded-md">
            {/* Custom tracking */}
            <div className="my-2">
              <i>
                You can add as many additional attributes as you like. They can
                be either a number, or a true/false. You get best results when
                you record data for each of them every day.
              </i>
            </div>

            <div className="flex flex-wrap gap-y-2 mb-2">
              <div className="flex items-center w-24">
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
              <div className="flex items-center w-32">
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
              <div className="flex-auto md:w-300 flex ">
                <input
                  type="text"
                  id="name"
                  className="rounded-lg px-4 focus:outline-blue-500 focus:outline-2 h-10 flex-auto"
                  placeholder="What do you want to track?"
                  value={attributeName}
                  onChange={(e) => setAttributeName(e.currentTarget.value)}
                />
                <ActionButton
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    writeAttribute();
                  }}
                  buttonText="Add"
                  styleTags=""
                ></ActionButton>
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
