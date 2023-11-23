import { FaTimes } from "react-icons/fa";
import { useWalkthrough } from "../../context/WalkthroughContext";

function ProgressWalkthrough() {
  const {
    totalModules,
    currentModule,
    nextModule,
    prevModule,
    skipWalkthrough,
  } = useWalkthrough();

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
      <div className="absolute top-20 right-1/3 bg-[#191A1F] py-10 px-14 rounded-lg w-1/2 flex flex-col items-center gap-8 ">
        <div className="absolute left-8 bg-[#191A1F] rotate-45 -top-3 w-6 h-6 " />
        <div className="absolute top-4  right-4">
          <button onClick={skipWalkthrough} className="">
            <FaTimes className="bg-secondary-600 text-white rounded-full p-1" />
          </button>
        </div>
        <h2 className="text-2xl font-bold mt-4 text-secondary-600 w-full ">
          Progress Bar
        </h2>
        <p className=" text-white font-medium text-lg  ">
          Observe the Progress Bar at the top. It's your visual guide,
          progressively filling up as you complete each section of your resume,
          indicating your steady advancement towards a polished, professional
          resume. 😉
        </p>
        <div className="flex justify-between w-full ">
          <button
            onClick={prevModule}
            className="px-9 py-2  text-neutral-600 border-2 border-neutral-600  rounded-md text-base font-medium "
          >
            Back
          </button>
          <button
            onClick={() => {
              if (currentModule < totalModules - 1) {
                nextModule();
              } else {
                // Close the modal when the tour is complete
                skipWalkthrough();
              }
            }}
            className="px-9 py-2  bg-primary-500 text-white rounded-md text-base font-medium hover:bg-primary-600"
          >
            Next
          </button>
        </div>
        <div className="text-center ">
          {["1", "2", "3", "4", "5", "6", "7"].map((_, index) => (
            <span
              key={index}
              className={`h-2 mx-1 rounded-full inline-block ${
                index === currentModule
                  ? "bg-primary-500 w-6"
                  : "bg-primary-200 w-2 "
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressWalkthrough;
