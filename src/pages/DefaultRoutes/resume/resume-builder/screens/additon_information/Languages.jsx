import React from "react";

function Languages({ data, handleInputChange }) {
  return data.additionalInformation["languages"].map((entry, index) => (
    <div className="bg-white border rounded-xl border-neutral-500 py-8 px-12 my-8">
      <div className="font-bold mb-4 text-neutral-300 ">Select Languages</div>
      <div className="flex flex-col">
        <input
          className="input-container"
          type="text"
          name="language"
          id="language"
          value={entry.language}
          onChange={(e) =>
            handleInputChange(e.target.value, "languages", index, "language")
          }
          placeholder="Search"
        />
      </div>
    </div>
  ));
}

export default Languages;
