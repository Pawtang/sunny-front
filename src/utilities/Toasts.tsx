import { toast, Slide } from "react-toastify";

const message = ({ closeToast, toastProps }: any) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

export const displayMsg = (message: string) => {
  toast(message, {
    className: "bg-white/70 text-black",
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
};
