function ActionModal({
  isOpen,
  onClose,
  icon,
  header,
  body,
  buttonText,
  btnColors,
  actionFn,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    isOpen && (
      <div className="fixed no-scrollbar w-full min-h-screen top-0 left-0 z-[100] flex justify-center items-center">
        <div
          className="bg-neutral-100 opacity-70 w-full h-screen absolute cursor-pointer"
          onClick={onClose}
        ></div>
        <div className="w-11/12 sm:w-10/12 max-w-screen-md py-16 sm:px-12 flex flex-col gap-6 items-center rounded-2xl bg-black z-10">
          <div className="flex flex-col gap-7 w-10/12 justify-center items-center">
            {icon && (
              <img
                src={icon}
                alt="Icon"
                className="w-10 h-10 brightness-[500]"
              />
            )}
            <div className="text-center text-neutral-800">
              <p>{header}</p>
              <p>{body}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-base">
            <div
              onClick={onClose}
              className="px-6 sm:px-8 md:px-16 py-3 rounded-lg cursor-pointer bg-neutral-1000 text-neutral-200 text-center"
            >
              Cancel
            </div>
            <div
              onClick={actionFn}
              className={`px-6 sm:px-8 md:px-16 py-3 rounded-lg cursor-pointer ${btnColors} text-white text-center`}
            >
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default ActionModal;
