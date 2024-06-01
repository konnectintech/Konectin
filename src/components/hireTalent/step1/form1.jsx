import React from "react";

const Form1 = ({ handleChange, values }) => {
  return (
    <div>
      <input
        type="email"
        className="input-container"
        required
        placeholder="Email Address*"
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <input
        type="text"
        className="input-container"
        required
        placeholder="Full Name*"
        onChange={(e) => handleChange("fullName", e.target.value)}
      />

      <input
        type="text"
        className="input-container"
        placeholder="Role*"
        required
        onChange={(e) => handleChange("role", e.target.value)}
      />

      <input
        type="tel"
        className="input-container"
        placeholder="Phone Number*"
        onChange={(e) => handleChange("phoneNumber", e.target.value)}
        required
      />
    </div>
  );
};

export default Form1;
