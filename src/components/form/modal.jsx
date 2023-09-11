import { MdClose } from "react-icons/md";
import {
  errorTriangle,
  modalBackground,
  notifyError,
  notifySuccess,
} from "../../assets";

export function SuccessModal({ text, popModal, closeModal }) {
  return (
    <div className="fixed h-screen w-screen left-0 top-0">
      <div
        className={`${
          popModal ? "-translate-y-8" : "-translate-y-36"
        } relative bg-neutral-600 max-w-md mx-auto py-6 transition ease-in-out duration-300`}
      >
        <p>{text}</p>
        <MdClose
          onClick={closeModal}
          className="cursor-pointer absolute top-2 right-3"
        />
      </div>
    </div>
  );
}

export function ErrorModal({ text }) {
  return (
    <div className="relative bg-red-300 w-full mx-auto py-6 transition ease-in-out duration-300 flex px-4 gap-4 items-center">
      <img src={errorTriangle} alt="error" />
      <p>{text}</p>
    </div>
  );
}

export function NotifyModal({
  error,
  header,
  paragraph1,
  paragraph2,
  click,
  children,
}) {
  return (
    <div className="relative w-10/12 max-w-screen-md py-8 transition ease-in-out duration-300 flex flex-col md:flex-row px-6 md:px-16 gap-6 md:gap-12 items-center text-white min-h-[70vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        <img className="w-full h-full" src={modalBackground} alt="background" />
      </div>
      <div className="relative z-10 w-1/2 md:w-4/12">
        {!error ? (
          <img className="w-full" src={notifySuccess} alt="success" />
        ) : (
          <img className="w-full" src={notifyError} alt="error" />
        )}
      </div>
      <div className="md:w-9/12 relative z-10 flex flex-col gap-4">
        <h1 className="text-[17px]">{header}</h1>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div
          onClick={() => click()}
          className="cursor-pointer bg-secondary-500 w-fit px-10 py-4 rounded-md"
        >
          {children ? children : "Go back home"}
        </div>
      </div>
    </div>
  );
}
