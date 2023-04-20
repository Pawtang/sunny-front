import ActionButton from "../elements/ActionButton";

const MonthPickModal = (props: { visibility: string; onClick: any }) => {
  const { visibility, onClick } = props;
  return (
    <>
      <div
        className={`fixed z-10 ${visibility} inset-0 bg-white bg-opacity-10 backdrop-blur overflow-y-auto h-full w-full`}
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="items-center px-4 py-3">
              <ActionButton onClick={onClick} buttonText="OK" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthPickModal;
