import React, { useState } from "react";
import Step1 from "../../../components/hireTalent/step1";
import Step2 from "../../../components/hireTalent/step2";
import Step3 from "../../../components/hireTalent/step3";
import Step4 from "../../../components/hireTalent/step4";
import Step5 from "../../../components/hireTalent/step5";
import { MdCheck } from "react-icons/md";
import Success from "../../../components/hireTalent/success";
import axios from "axios";

const HireTalent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    requiredRole: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: "",
    supportEmail: "",
    companyAddress: "",
    country: "",
    companySize: "",
    logo: null,
    companyDescription: "",
    hiringFrequency: "",
    preferedField: "",
    internshipType: "",
    mouContent: "",
    mouConfirmed: false,
  });
  const [error, setError] = useState("");

  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await axios.post(`${url}/user/partner`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setCurrentStep(6);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setError("Partnership application already exists");
        } else if (error.response.status === 500) {
          setError("Internal server error");
        }
      } else {
        setError("Error submitting the form");
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 handleChange={handleChange} values={formData} />;
      case 2:
        return <Step2 handleChange={handleChange} values={formData} />;
      case 3:
        return <Step3 handleChange={handleChange} values={formData} />;
      case 4:
        return <Step4 handleChange={handleChange} values={formData} />;

      case 5:
        return <Step5 handleChange={handleChange} values={formData} />;

      case 6:
        return <Success handleChange={handleChange} values={formData} />;
      default:
        return <Step1 handleChange={handleChange} values={formData} />;
    }
  };
  return (
    <main className="flex bg-neutral-50 justify-center items-center">
      <div className="w-full max-w-2xl pt-12">
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
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="flex items-center w-3/4 justify-center gap-4 mb-8">
              {[1, 2, 3, 4].map((num) => (
                <div className="flex w-full items-center mb-2 gap-3">
                  <span
                    className={`h-6 w-6 flex justify-center items-center border-2 ${
                      currentStep > num
                        ? "bg-primary-500 border-primary-500"
                        : currentStep === num
                        ? "border-primary-500 text-primary-500"
                        : "border-neutral-500 text-neutral-500"
                    } rounded-full text-xs`}
                  >
                    {currentStep > num ? <MdCheck color="white" /> : num}
                  </span>
                  <div className="flex-1 flex items-center">
                    <span
                      className={`block flex-1 h-0.5 ${
                        currentStep >= num ? "bg-primary-500" : "bg-neutral-500"
                      } rounded-full`}
                    ></span>
                    <span
                      className={`h-2 w-2 ${
                        currentStep >= num ? "bg-primary-500" : "bg-neutral-500"
                      }  rounded-full`}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {renderStep()}
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {currentStep < 6 && (
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className=" mt-10 ali p-3 px-10 bg-white text-primary-600 border border-primary-600 font-semibold rounded-lg"
            >
              Previous step
            </button>
            <button
              onClick={currentStep === 5 ? handleSubmit : nextStep}
              className=" mt-10 ali p-3 px-10 bg-primary-600 text-white font-semibold rounded-lg"
            >
              {currentStep === 5 ? "Submit" : "Next step"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default HireTalent;
