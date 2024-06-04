import React from "react";
import Form3 from "./form3";

const Step3 = ({ handleChange, values }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl">Internship Requirements</h2>
        <p className="text-neutral-300 text-sm">
          Let us know the specific skills and qualities you're seeking in an
          intern. This will help us find the perfect match for your team.
        </p>
      </div>
      <Form3 handleChange={handleChange} values={values} />
    </div>
  );
};

export default Step3;
