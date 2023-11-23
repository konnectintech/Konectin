import { useState, useRef } from "react";
import { GetState } from "react-country-state-city/dist/cjs";
import { verifyInput } from "../../pages/DefaultRoutes/resume/resume-builder/screens/verification";

function StateInput({ countryId, handleChange, state, setStateId }) {
  const [stateList, setStateList] = useState([]);
  const [showState, setShowState] = useState(false);
  const errorMessage = useRef(null);

  const handleStateInput = (input) => {
    setShowState(true);
    GetState(countryId).then((result) => {
      const filtered = result.filter((state) =>
        state.name.toLowerCase().startsWith(input.toLowerCase())
      );

      if (filtered.length >= 0) {
        setStateList(filtered);
      }
    });

    handleChange("state", input);

    verifyInput(input, errorMessage.current, "state");
  };

  const handleSelectChange = (name) => {
    handleChange("state", name);
    verifyInput(name, errorMessage.current, "state");
  };

  return (
    <div id="state" className="input-container relative">
      <div
        onClick={() => setShowState((prev) => !prev)}
        className="cursor-pointer flex flex-col gap-2 w-full"
      >
        <div className="flex items-center">
          <input
            className="bg-transparent outline-none border-none w-full h-full"
            id="states"
            name="state"
            value={state}
            placeholder="Enter State"
            onChange={(e) => handleStateInput(e.target.value)}
            onInput={(e) => handleStateInput(e.target.value)}
          />
        </div>
        <label
          htmlFor="states"
          id="stateError"
          className="absolute mt-8 text-error-500 hidden"
          ref={errorMessage}
        ></label>
      </div>
      {showState && state.length >= 3 && (
        <div className="absolute flex flex-col bg-primary-600 text-white left-0 border overflow-y-auto max-h-[30vh] h-fit top-full w-full">
          {stateList.map((item, index) => (
            <div
              className="w-full py-3 px-6 cursor-pointer hover:bg-primary-400"
              key={index}
              onClick={() => {
                setShowState((prev) => !prev);
                setStateId(item.id);
                handleSelectChange(item.name);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StateInput;
