import React from "react";

function Step1() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl">Tell Us About Yourself</h2>
        <p className="text-neutral-300 text-sm">
          Please, provide your personal information below. This will help us
          connect with you and understand your internship needs better.
        </p>
      </div>

      <form>
        <input
          type="email"
          className="input-container"
          required
          placeholder="Email Address*"
        />

        <input
          type="text"
          className="input-container"
          required
          placeholder="Full Name*"
        />

        <input
          type="text"
          className="input-container"
          placeholder="Role*"
          required
        />

        <input
          type="tel"
          className="input-container"
          placeholder="Phone Number*"
          required
        />
      </form>
    </div>
  );
}

export default Step1;
