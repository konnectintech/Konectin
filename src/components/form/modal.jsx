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

export function NotifyModal({ error, header, paragraph1, paragraph2, click }) {
  return (
    <div className="relative w-10/12 py-10 transition ease-in-out duration-300 flex px-6  gap-6 items-center text-white">
      <div className="absolute left-0 w-full h-full">
        <img className="w-full h-full" src={modalBackground} alt="background" />
      </div>
      <div className="relative z-10 w-3/12">
        {!error ? (
          <img className="w-full" src={notifySuccess} alt="error" />
        ) : (
          <img className="w-full" src={notifyError} alt="error" />
        )}
      </div>
      <div className="w-9/12 relative z-10 flex flex-col gap-4">
        <h1 className="text-[17px]">{header}</h1>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div
          onClick={() => click()}
          className="cursor-pointer text-neutral-100 bg-secondary-500 w-fit px-10 py-1 rounded-md"
        >
          Go back home
        </div>
      </div>
    </div>
  );
}
