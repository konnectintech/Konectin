import React from "react";
import Form2 from "./form2";

const Step2 = ({ handleChange, values }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl">Company Information</h2>
        <p className="mb-8 text-neutral-300 text-sm">
          Please, share details about your organization. This will assist us in
          matching interns with suitable opportunities within your company.
        </p>
      </div>
      <Form2 handleChange={handleChange} values={values} />
    </div>
  );
};

export default Step2;
