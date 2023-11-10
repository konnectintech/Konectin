import React, { useState } from "react";

function Switch({ checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked || false);

  const toggleSwitch = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleSwitch}
        />
        <div
          className={` w-8 h-5 ${
            !isChecked ? "bg-neutral-400" : "bg-secondary-600"
          }  rounded-full shadow-inner`}
        ></div>
        <div
          className={` absolute w-5 h-5 bg-white border  rounded-full shadow left-0 top-0 transition ${
            isChecked
              ? "translate-x-3 border-secondary-600"
              : "border-neutral-400"
          }`}
        ></div>
      </div>
    </label>
  );
}

export default Switch;
