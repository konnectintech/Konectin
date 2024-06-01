import React from "react";
import Form4 from "./form4";

const Step4 = ({ handleChange, values }) => {
  return (
    <div>
      <div>
        <div className="text-2xl">Formalizing the Partnership</div>
        <div className="mb-8 text-neutral-300">
          Review and acknowledge the terms of our Memorandum of Understanding
          (MOU) to formalize the internship partnership.
        </div>
        <div>
          <Form4 handleChange={handleChange} values={values} />
        </div>
      </div>
    </div>
  );
};

export default Step4;
