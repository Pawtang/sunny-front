const Modal = (props: {
  id: string;
  visible: boolean;
  onClick: any;
  content?: any;
}) => {
  const { id, visible, onClick, content } = props;
  if (!visible) return null;
  return (
    <div
      id={id}
      onClick={(e) => {
        if ((e.target as HTMLInputElement).id === id) {
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
