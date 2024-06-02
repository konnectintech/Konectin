import React, { useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const country = [
  { name: "Ghana", image: "" },
  { name: "Nigeria", image: "" },
  { name: "Gambia", image: "" },
  { name: "South Africa", image: "" },
  { name: "Zambia", image: "" },
];

const sizes = ["1-10", "11-50", "51-100", "100+"];

const Form2 = ({ handleChange, values }) => {
  const [showData, setShowData] = useState({
    location: false,
    size: false,
  });

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <input
        type="text"
        className="input-container"
        required
        placeholder="Company’s Name*"
        onChange={(e) => handleChange("companyName", e.target.value)}
      />

      <input
        type="text"
        className="input-container"
        required
        onChange={(e) => handleChange("companyWebsite", e.target.value)}
        placeholder="Company’s Website*"
      />

      <input
        type="text"
        className="input-container"
        placeholder="Company’s Support Email*"
        onChange={(e) => handleChange("supportEmail", e.target.value)}
        required
      />

      <input
        type="tel"
        className="input-container"
        placeholder="Company Address*"
        required
        onChange={(e) => handleChange("companyAddress", e.target.value)}
      />

      <div className="flex flex-col gap-2 min-w-[160px] relative">
        <div
          onClick={() =>
            setShowData((prev) => ({ ...prev, location: !prev.location }))
          }
          className="flex items-center relative cursor-pointer"
        >
          <input
            className="input-container"
            value={values?.location}
            name="location"
            id="location"
            placeholder="Country Located*"
            readOnly
          />
          <MdArrowDropDown
            className={`${
              showData.location ? "rotate-180" : "rotate-0"
            } absolute right-2 top-3 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {showData.location && (
          <div className="bg-neutral-100 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col -translate-y-6">
            {country.map((location) => (
              <div
                key={location.name}
                onClick={() => {
                  handleChange("country", location.name);
                  setShowData((prev) => ({
                    ...prev,
                    location: !prev.location,
                  }));
                }}
                className={`${
                  values?.location === location.name
                    ? "bg-primary-500"
                    : "hover:bg-neutral-200"
                } flex gap-2 items-center py-3 px-4 cursor-pointer`}
              >
                <img
                  alt="img"
                  src={location.image}
                  className={`
                  }   w-4 h-4 `}
                />
                <div className="truncate">{location.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 min-w-[160px] relative">
        <div
          onClick={() => setShowData((prev) => ({ ...prev, size: !prev.size }))}
          className="flex items-center relative cursor-pointer"
        >
          <input
            className="input-container"
            value={values?.size}
            name="size"
            id="size"
            placeholder="Company’s Size*"
            readOnly
          />
          <MdArrowDropDown
            className={`${
              showData.size ? "rotate-180" : "rotate-0"
            } absolute right-2 top-3 duration-300 text-neutral-300`}
            size="1.5rem"
          />
        </div>
        {showData.size && (
          <div className="bg-neutral-100 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col -translate-y-6">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => {
                  handleChange("companySize", size);
                  setShowData((prev) => ({ ...prev, size: !prev.size }));
                }}
                className={`${
                  values?.size === size
                    ? "bg-primary-500"
                    : "hover:bg-neutral-200"
                } flex gap-2 items-center py-3 px-4 cursor-pointer`}
              >
                <span
                  className={`${
                    values?.size === size
                      ? "bg-secondary-600 border-transparent"
                      : "border-white"
                  } rounded-full block w-4 h-4 border`}
                />
                <div className="truncate">{size}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Upload Company's Logo*</label>
        <div
          className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer"
          onClick={handleFileUpload}
        >
          <p className="text-gray-600">Choose file to upload</p>
          <p className="text-gray-500">
            File can exist as pdf, png, jpeg or doc.{" "}
            <span className="text-orange-600 cursor-pointer">Upload here</span>
          </p>
          <p className="text-gray-500">(Maximum file size is 2MB)</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleChange("logo", e.target.files[0])}
            className="hidden"
          />
        </div>
      </div>
      <div className="mb-4">
        <textarea
          value={values.companyInfo}
          onChange={(e) => handleChange("companyDescription", e.target.value)}
          className="px-4 py-3 text-[11px] w-full text-primary-400 border rounded border-neutral-500 outline-0 bg-neutral-1000 focus:border-primary-500 focus:border-[1.5px]"
          rows="4"
          required
          placeholder="Brief info of your company*"
        />
      </div>
    </div>
  );
};

export default Form2;
