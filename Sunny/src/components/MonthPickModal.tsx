const MonthPickModal = (props) => {
  const { visibility: string } = props;
  return (
    <>
      <div
        className={`fixed z-10 ${visibility} inset-0 bg-gray-200 bg-opacity-50 overflow-y-auto h-full w-full`}
        id="my-modal"
      ></div>
    </>
  );
};

export default MonthPickModal;
