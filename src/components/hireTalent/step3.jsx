import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const hireNeeds = ["Always hiring", "Hiring frequently", "Hire few months"];
const roles = [
  "Product Manager",
  "Software Developer (Frontend)",
  "Software Developer (Backend)",
];
const types = ["Paid", "Unpaid", "Both"];

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  const [showData, setShowData] = useState({
    hireNeed: false,
    role: false,
    type: false,
  });
  return (
    <div>
      <div>
        <div className="text-2xl">Internship Requirements</div>
        <div className="mb-8 text-neutral-300">
          Let us know the specific skills and qualities you're seeking in an
          intern. This will help us find the perfect match for your team.
        </div>
        <div>
          <div className="flex flex-col gap-2 min-w-[160px] relative mb-4">
            <div
              onClick={() =>
                setShowData((prev) => ({ ...prev, hireNeed: !prev.hireNeed }))
              }
              className="flex items-center relative cursor-pointer"
            >
              <input
                className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-md focus:border-primary-500 focus:border-[1.5px]"
                value={values?.hireNeed}
                name="hireNeed"
                id="hireNeed"
                placeholder="Industry Hiring needs*"
                readOnly
              />
              <MdArrowDropDown
                className={`${
                  showData.hireNeed ? "rotate-180" : "rotate-0"
                } absolute right-2 duration-300 text-neutral-300`}
                hireNeed="1.5rem"
              />
            </div>
            {showData.hireNeed && (
              <div className="bg-neutral-100 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
                {hireNeeds.map((hireNeed) => (
                  <div
                    key={hireNeed}
                    onClick={() => {
                      console.log(hireNeed);
                      handleChange(hireNeed, "hireNeed");
                      setShowData((prev) => ({
                        ...prev,
                        hireNeed: !prev.hireNeed,
                      }));
                    }}
                    className={`${
                      values?.hireNeed === hireNeed
                        ? "bg-primary-500"
                        : "hover:bg-neutral-200"
                    } flex gap-2 items-center py-3 px-4 cursor-pointer`}
                  >
                    <span
                      className={`${
                        values?.hireNeed === hireNeed
                          ? "bg-secondary-600 border-transparent"
                          : "border-white"
                      } rounded-full block w-4 h-4 border`}
                    />
                    <div className="truncate">{hireNeed}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 min-w-[160px] relative mb-4">
            <div
              onClick={() =>
                setShowData((prev) => ({ ...prev, role: !prev.role }))
              }
              className="flex items-center relative cursor-pointer"
            >
              <input
                className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-md focus:border-primary-500 focus:border-[1.5px]"
                value={values?.role}
                name="role"
                id="role"
                placeholder="Roles you are looking to hire*"
                readOnly
              />
              <MdArrowDropDown
                className={`${
                  showData.role ? "rotate-180" : "rotate-0"
                } absolute right-2 duration-300 text-neutral-300`}
                role="1.5rem"
              />
            </div>
            {showData.role && (
              <div className="bg-neutral-100 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
                {roles.map((role) => (
                  <div
                    key={role}
                    onClick={() => {
                      console.log(role);
                      handleChange(role, "role");
                      setShowData((prev) => ({ ...prev, role: !prev.role }));
                    }}
                    className={`${
                      values?.role === role
                        ? "bg-primary-500"
                        : "hover:bg-neutral-200"
                    } flex gap-2 items-center py-3 px-4 cursor-pointer`}
                  >
                    <span
                      className={`${
                        values?.role === role
                          ? "bg-secondary-600 border-transparent"
                          : "border-white"
                      } rounded-full block w-4 h-4 border`}
                    />
                    <div className="truncate">{role}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 min-w-[160px] relative mb-4">
            <div
              onClick={() =>
                setShowData((prev) => ({ ...prev, type: !prev.type }))
              }
              className="flex items-center relative cursor-pointer"
            >
              <input
                className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-md focus:border-primary-500 focus:border-[1.5px]"
                value={values?.type}
                name="type"
                id="type"
                placeholder="Internship Type*"
                readOnly
              />
              <MdArrowDropDown
                className={`${
                  showData.type ? "rotate-180" : "rotate-0"
                } absolute right-2 duration-300 text-neutral-300`}
                type="1.5rem"
              />
            </div>
            {showData.type && (
              <div className="bg-neutral-100 w-full max-h-48 z-10 overflow-y-auto text-white py-1 rounded flex flex-col">
                {types.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      console.log(type);
                      handleChange(type, "type");
                      setShowData((prev) => ({ ...prev, type: !prev.type }));
                    }}
                    className={`${
                      values?.type === type
                        ? "bg-primary-500"
                        : "hover:bg-neutral-200"
                    } flex gap-2 items-center py-3 px-4 cursor-pointer`}
                  >
                    <span
                      className={`${
                        values?.type === type
                          ? "bg-secondary-600 border-transparent"
                          : "border-white"
                      } rounded-full block w-4 h-4 border`}
                    />
                    <div className="truncate">{type}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
