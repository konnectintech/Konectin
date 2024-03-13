import Toggle from "../../../../../components/toggle";

function ToggleCard({ value, setValue, id, heading, text }) {
  return (
    <div className="bg-white rounded-lg shadow-dropShadow flex items-center justify-between gap-6 p-6">
      <div className="flex flex-col gap-2 sm:w-[600px]">
        <p className="font-bold text-neutral-100 text-sm sm:text-xl">
          {heading}
        </p>
        <p className="font-medium text-neutral-300 text-xs sm:text-base">
          {text}
        </p>
      </div>
      <div className="">
        <Toggle
          toggle={value}
          id={id}
          onHandleToggleChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
}

export default ToggleCard;
