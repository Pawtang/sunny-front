const Modal = (props: { visible: boolean; onClick: any; content?: any }) => {
  const { visible, onClick, content } = props;
  if (!visible) return null;
  return (
    <div
      id="modalContainer"
      onClick={(e) => {
        if ((e.target as HTMLInputElement).id === "modalContainer") {
          onClick(e);
        }
      }}
      className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-100 ">{content}</div>
    </div>
  );
};

export default Modal;
