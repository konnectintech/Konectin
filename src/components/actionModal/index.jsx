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
    <>
      {isOpen && (
        <div className="absolute no-scrollbar w-full min-h-screen top-0 left-0 z-[100] flex justify-center items-center">
          <div className="bg-neutral-100 opacity-70 w-full h-screen absolute"></div>
          <div className="px-[71px] py-[54px] w-[760px] h-[360px] flex flex-col gap-3 justify-center items-center rounded-2xl bg-black z-10">
            <div className="flex flex-col gap-7 w-10/12 justify-center items-center">
              {icon && <img src={icon} alt="Icon" className="w-12 h-12" />}
              <div className="text-center text-neutral-800">
                <p>{header}</p>
                <p>{body}</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full gap-12">
              <button
                onClick={onClose}
                className="flex h-14 w-full px-20 py-4 justify-center items-center gap-2 rounded-lg bg-[#f5f5f5] border-2 border-solid border-[#b2b3b4] text-neutral-200 font-bold text-lg text-center"
              >
                Cancel
              </button>
              <button
                onClick={actionFn}
                className={`flex justify-center items-center h-14 w-full px-20 py-4 gap-2 rounded-lg  border border-solid ${btnColors} text-white font-bold text-lg text-center`}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ActionModal;
