import React from "react";
import Form1 from "./step1/form1";
import Form2 from "./step2/form2";
import Form3 from "./step3/form3";
import Form4 from "./step4/form4";

const Step5 = ({ handleChange, values }) => {
  return (
    <div>
      <div>
        <div className="text-2xl">Review and Confirm</div>
        <div className="mb-8 text-neutral-300">
          Take a moment to review your information. Once confirmed, submit your
          internship request, and we'll be in touch shortly
        </div>
        <div>
          <div className="mb-4">
            <Form1 handleChange={handleChange} values={values} />
            <Form2 handleChange={handleChange} values={values} />
            <Form3 handleChange={handleChange} values={values} />
            <Form4 handleChange={handleChange} values={values} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
