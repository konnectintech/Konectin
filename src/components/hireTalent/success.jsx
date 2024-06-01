import React from "react";
import { MdCheck } from "react-icons/md";

const Success = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-green-500 rounded-full mb-4 p-4">
          <MdCheck color="white" size={30} />
        </div>
        <div className="text-xl mb-4 font-medium">
          Thank you for submitting your internship request
        </div>
        <div className="mb-8  text-neutral-300 text-center">
          Thank you for submitting your internship request! Our team will review
          your information and reach out to discuss next steps. We appreciate
          your interest in partnering with us to provide valuable internship
          opportunities.
        </div>
        <button className=" mt-10 ali p-3 px-10 bg-primary-600 text-white font-semibold rounded-lg">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Success;
