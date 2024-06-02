import React, { useState } from "react";

function Form4({ handleChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    handleChange("mouConfirmed", !isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <div className="mb-4">
      <div className="bg-neutral-50 p-5 text-xs border-dashed border rounded-md">
        <div className=" font-semibold">Memorandum of Understanding (MOU)</div>
        <div className="text-neutral-200">
          <p>
            <strong>Date:</strong> [Insert Date]
          </p>
          <p>
            This Memorandum of Understanding (hereinafter referred to as "MOU")
            is entered into by and between [Company Name], located at [Company
            Address], and [Employer/Individual Name], located at
            [Employer/Individual Address].
          </p>
          <p>
            <strong>Purpose:</strong> The purpose of this MOU is to establish a
            framework for collaboration between [Company Name] and
            [Employer/Individual Name] for the provision of internship
            opportunities.
          </p>
          <p>
            <strong>Scope:</strong>
          </p>
          <ol className="list-decimal list-inside">
            <li>
              [Company Name] agrees to offer internship opportunities to
              students or individuals recommended by [Employer/Individual Name].
            </li>
            <li>
              [Employer/Individual Name] agrees to assist in the selection
              process for interns and provide necessary support and guidance
              during the internship period.
            </li>
            <li>
              Both parties agree to abide by the applicable laws and regulations
              governing internships and ensure the safety and well-being of
              interns.
            </li>
          </ol>
        </div>
      </div>
      <div className="mt-4 text-xs">
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-purple-600"
          />
          <span className="ml-2 text-gray-700">
            By ticking this box, you confirm that you have read and acknowledged
            the Memorandum of Understanding (MOU).
          </span>
        </label>
      </div>
    </div>
  );
}

export default Form4;
