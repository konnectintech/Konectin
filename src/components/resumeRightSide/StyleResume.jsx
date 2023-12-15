import React, { useState } from "react";
import { BsDroplet, BsFonts } from "react-icons/bs";
import { CgFontHeight } from "react-icons/cg";
import { useTemplateContext } from "../../middleware/resume";

const StyleResume = () => {
  const { onInputChange } = useTemplateContext();
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedColor, setSelectedColor] = useState("");

  const fontOptions = ["Arial", "Helvetica", "Times New Roman", "Courier New"];
  const sizeOptions = ["small", "medium", "big"];
  const colorOptions = ["red", "blue", "green", "yellow", "orange", "purple"];

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
    onInputChange({
      section: "theme",
      subsection: "font",
      values: event.target.value,
    });
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onInputChange({ section: "theme", subsection: "color", values: color });
  };

  return (
    <>
      <div className="space-y-4  bg-white p-[10px]">
        <div className="bg-neutral-800 p-3 flex flex-col gap-4 rounded">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BsFonts className="text-neutral-500" />
              <label className="mr-2 whitespace-nowrap font-semibold text-xs">
                Font Type
              </label>
            </div>
            <select
              value={selectedFont}
              onChange={handleFontChange}
              className="px-2 py-3 rounded text-xs border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              {fontOptions.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full h-[1px] bg-neutral-500" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CgFontHeight className="text-neutral-500" />
              <label className="mr-2 whitespace-nowrap font-semibold text-xs">
                Font Size
              </label>
            </div>
            <div className="flex items-center">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  className={`px-2 py-1 text-xs  rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 ${
                    selectedSize === size ? "bg-indigo-200" : ""
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-neutral-500" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BsDroplet className="text-neutral-500" />
              <label className="mr-2 whitespace-nowrap font-semibold text-xs">
                Style Color:
              </label>
            </div>
            <div className="flex space-x-2">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  className={`${
                    selectedColor === color ? "ring ring-indigo-200" : ""
                  } w-6 h-6 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 `}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-primary-500 cursor-pointer text-white rounded whitespace-nowrap text-xs px-4 py-2">
          Save Edit
        </button>
      </div>
    </>
  );
};

export default StyleResume;
