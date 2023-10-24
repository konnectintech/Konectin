import { useRef } from "react";
import DatePicker from "react-multi-date-picker";
import { verifyInput } from "../../pages/DefaultRoutes/resume/resume-builder/screens/verification";

function DateSelector({
  monthPicker,
  handleDataChange,
  id,
  year,
  month,
  placeholder,
  maxDate,
  minDate,
}) {
  const error = useRef(null);

  const handleChange = (e) => {
    const date = e.toDate();
    let value;
    if (monthPicker) {
      value = `${date.toLocaleString("default", {
        month: "long",
      })}`;
    } else {
      value = `${date.getFullYear()}`;
    }

    handleDataChange(id, value);
    verifyInput(value, error.current, id);
  };

  return (
    <div className="flex flex-col w-full">
      <DatePicker
        format={monthPicker && "MMMM"}
        arrow={false}
        buttons={!monthPicker}
        id={id}
        onlyMonthPicker={monthPicker}
        onlyYearPicker={!monthPicker}
        placeholder={
          monthPicker && month === ""
            ? placeholder
            : monthPicker && month
            ? month
            : year
        }
        value={new Date(`${month} ${year}`)}
        inputClass="input-container"
        className="bg-primary-600 text-white"
        onChange={handleChange}
        maxDate={maxDate && new Date()}
        minDate={minDate && new Date(`${minDate.month} ${minDate.year}`)}
      />

      <label
        className="-mt-5 mb-1 text-xs pl-4 text-error-500 hidden"
        id={`${id}Error`}
        ref={error}
      ></label>
    </div>
  );
}

export default DateSelector;
