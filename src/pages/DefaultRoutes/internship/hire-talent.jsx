import React, { useState } from "react";
import Step1 from "../../../components/hireTalent/step1";
import Step2 from "../../../components/hireTalent/step2";
import Step3 from "../../../components/hireTalent/step3";
import Step4 from "../../../components/hireTalent/step4";

const HireTalent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    role: "",
    phoneNumber: "",
    // Add more fields as needed for other steps
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 4:
        return <Step4 prevStep={prevStep} values={formData} />;
      default:
        return (
          <Step1
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}
          />
        );
    }
  };
  return (
    <div className="flex bg-neutral-50 justify-center py-24 mt-20 items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-semibold mb-2">
          Internship Partnership Form
        </h1>
        <p className="text-3xl font-semibold mb-6">
          Connecting Employers with Emerging Talents
        </p>
        <p className="text-gray-600 mb-4">
          Join us in shaping the future workforce by offering internship
          opportunities.
        </p>
        <div className="bg-white p-10   rounded-lg shadow-lg ">
          <div className="flex justify-center">
            <div className="flex items-center w-1/2 justify-center gap-4 mb-16">
              {[1, 2, 3, 4].map((num) => (
                <div className="flex w-1/4 items-center  mb-2 ">
                  <span
                    className={`h-6  w-6 flex justify-center items-center  border-2 ${
                      currentStep >= num
                        ? "border-primary-500 text-primary-500"
                        : "border-neutral-500 text-neutral-500"
                    } rounded-full mr-3`}
                  >
                    {num}
                  </span>
                  <span
                    className={`block w-1/2 h-0.5 ${
                      currentStep >= num ? "bg-primary-500" : "bg-neutral-500"
                    } rounded-full`}
                  ></span>
                  <span
                    className={`h-2 w-2  ${
                      currentStep >= num ? "bg-primary-500" : "bg-neutral-500"
                    }  rounded-full`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
          {renderStep()}
        </div>

        <div className="flex justify-between ">
          <button
            onClick={prevStep}
            className=" mt-10 ali p-3 px-10 bg-white text-primary-600 border border-primary-600 font-semibold rounded-lg"
          >
            Previous step
          </button>
          <button
            onClick={nextStep}
            className=" mt-10 ali p-3 px-10 bg-primary-600 text-white font-semibold rounded-lg"
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireTalent;
