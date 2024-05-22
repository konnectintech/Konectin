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

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
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
      <div>
        <div className="text-2xl">Company Information</div>
        <div className="mb-8 text-neutral-300">
          Please, share details about your organization. This will assist us in
          matching interns with suitable opportunities within your company.
        </div>
        <div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              required
              placeholder="Company’s Name*"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              required
              placeholder="Company’s Website*"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              placeholder="Company’s Support Email*"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              placeholder="Company Address*"
              required
            />
          </div>

          <div className="flex flex-col gap-2 min-w-[160px] relative mb-4">
            <div
              onClick={() =>
                setShowData((prev) => ({ ...prev, location: !prev.location }))
              }
              className="flex items-center relative cursor-pointer"
            >
              <input
                className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-md focus:border-primary-500 focus:border-[1.5px]"
                value={values?.location}
                name="location"
                id="location"
                placeholder="Country Located*"
                readOnly
              />
              <MdArrowDropDown
                className={`${
                  showData.location ? "rotate-180" : "rotate-0"
                } absolute right-2 duration-300 text-neutral-300`}
                size="1.5rem"
              />
            </div>
            {showData.location && (
              <div className="bg-neutral-100 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
                {country.map((location) => (
                  <div
                    key={location.name}
                    onClick={() => {
                      handleChange(location.name, "location");
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

          <div className="flex flex-col gap-2 min-w-[160px] relative mb-4">
            <div
              onClick={() =>
                setShowData((prev) => ({ ...prev, size: !prev.size }))
              }
              className="flex items-center relative cursor-pointer"
            >
              <input
                className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-md focus:border-primary-500 focus:border-[1.5px]"
                value={values?.size}
                name="size"
                id="size"
                placeholder="Company’s Size*"
                readOnly
              />
              <MdArrowDropDown
                className={`${
                  showData.size ? "rotate-180" : "rotate-0"
                } absolute right-2 duration-300 text-neutral-300`}
                size="1.5rem"
              />
            </div>
            {showData.size && (
              <div className="bg-neutral-100 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
                {sizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => {
                      console.log(size);
                      handleChange(size, "size");
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
            <label className="block text-gray-700">
              Upload Company's Logo*
            </label>
            <div
              className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer"
              onClick={handleFileUpload}
            >
              <p className="text-gray-600">Choose file to upload</p>
              <p className="text-gray-500">
                File can exist as pdf, png, jpeg or doc.{" "}
                <span className="text-orange-600 cursor-pointer">
                  Upload here
                </span>
              </p>
              <p className="text-gray-500">(Maximum file size is 2MB)</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleChange("companyLogo")}
                className="hidden"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              value={values.companyInfo}
              onChange={handleChange("companyInfo")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              rows="4"
              required
              placeholder="Brief info of your company*"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
