import React from "react";

function Hobbies({ data, handleInputChange }) {
  return data.additionalInformation["hobbies"].map((entry, index) => (
    <div className="bg-white border rounded-xl border-neutral-500 py-8 px-12 my-8">
      <div className="font-bold mb-4 text-neutral-300 ">Select Hobbies</div>
      <div className="flex flex-col">
        <input
          className="input-container"
          type="text"
          name="hobby"
          id="hobby"
          value={entry.hobby}
          onChange={(e) =>
            handleInputChange(e.target.value, "hobbies", index, "hobby")
          }
          placeholder="Search"
        />
      </div>
    </div>
  ));
}

export default Hobbies;
