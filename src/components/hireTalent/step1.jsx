import React from "react";

function Step1() {
  return (
    <div>
      <div>
        <div className="text-2xl">Tell Us About Yourself</div>
        <div className="mb-8 text-neutral-300">
          Please, provide your personal information below. This will help us
          connect with you and understand your internship needs better.
        </div>
        <div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              required
              placeholder="Email Address*"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              required
              placeholder="Full Name*"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              placeholder="Role*"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="w-full mt-1 p-2 py-3 border border-neutral-600 bg-neutral-50 neutral-50 rounded-lg"
              placeholder="Phone Number*"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
