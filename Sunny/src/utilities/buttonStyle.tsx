export const buttonStyle = (buttonType?: string) => {
  if (buttonType === "confirm") {
    return "bg-blue-500 hover:bg-blue-500/70 text-white transition-all ease-out duration-200 hover:drop-shadow-md  active:outline-double text-black font-bold py-2 px-4 mx-2 rounded";
  } else if (buttonType === "danger") {
    return "bg-red-400 hover:bg-red-300 transition-all ease-out duration-200 hover:drop-shadow-md  active:outline-double text-black font-bold py-2 px-4 mx-2 rounded";
  } else if (buttonType === "disabled") {
    return "bg-gray-400/50 transition-all ease-out duration-200 text-gray-500 font-bold py-2 px-4 mx-2 rounded cursor-default";
  } else
    return "bg-white/70 transition-all ease-out duration-200 hover:drop-shadow-md hover:bg-white active:outline-double text-black font-bold py-2 px-4 mx-2 rounded";
};
