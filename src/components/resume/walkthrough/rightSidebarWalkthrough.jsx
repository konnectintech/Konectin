import { FaTimes } from "react-icons/fa";
import { useWalkthrough } from "../../../middleware/walkthrough";
import { useEffect } from "react";

function RightSidebarWalkthrough() {
  useEffect(() => {
    // Add 'modal-open' class to the body when the modal is open
    document.body.classList.add("modal-open");

    // Remove 'modal-open' class from the body when the modal is closed
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const {
    totalModules,
    currentModule,
    nextModule,
    prevModule,
    skipWalkthrough,
  } = useWalkthrough();

  const array = new Array(totalModules);
  console.log(array);

  return (
    <div className="fixed inset-0 z-[100]  ">
      <div className="w-16 absolute right-0  top-0  h-20 bg-black bg-opacity-40 " />
      <div className="absolute inset-y-0 left-0 right-16 bg-black bg-opacity-40">
        <div className="absolute right-4 top-24 bg-[#191A1F] py-10 px-14 rounded-lg w-1/2 flex flex-col items-center gap-8 ">
          <div className="absolute -right-3 bg-[#191A1F] rotate-45 top-20 w-6 h-6 " />
          <div className="absolute top-4 right-4">
            <button onClick={skipWalkthrough} className="">
              <FaTimes className="bg-secondary-600 text-white rounded-full p-1" />
            </button>
          </div>
          <h2 className="text-2xl font-bold mt-4 text-secondary-600 w-full ">
            Right Sidebar Menu
          </h2>
          <p className=" text-white font-medium text-lg w-full ">
            Now, glance at the Right Sidebar Menu. This is your toolbox:
          </p>
          <p className=" text-white font-medium text-lg  ">
            <span className="text-primary-500">Preview Resume:</span> Curious
            about your resume's appearance? Click here for a live preview.
            <br />
            <span className="text-primary-500">
              Rearrange Resume Section:
            </span>{" "}
            Adjust the order of sections to your preference here.
            <br />
            <span className="text-primary-500">
              Change Resume Template:
            </span>{" "}
            Want a different aesthetic? Click here to switch resume styles.
            <br />
            <span className="text-primary-500">
              Add/Remove Resume Photo:
            </span>{" "}
            Personalize your resume with a photo or choose to remove it here.
            <br />
            <span className="text-primary-500">Format Resume:</span> Customize
            your resume's color and font to align with your personal brand.. 😉
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
    </div>
  );
}

export default RightSidebarWalkthrough;
