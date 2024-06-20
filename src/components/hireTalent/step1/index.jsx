import React from "react";
import Form1 from "./form1";

function Step1({ handleChange, values }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl">Tell Us About Yourself</h2>
        <p className="text-neutral-300 text-sm">
          Please, provide your personal information below. This will help us
          connect with you and understand your internship needs better.
        </p>
      </div>
      <Form1 handleChange={handleChange} values={values} />
    </div>
  );
}

export default Step1;
