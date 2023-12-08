import { FaTimes } from "react-icons/fa";
import { useWalkthrough } from "../../context/WalkthroughContext";
import { botIcon } from "../../assets";
import { useEffect } from "react";

function WelcomeWalkthrough() {
  const { totalModules, currentModule, nextModule, skipWalkthrough } =
    useWalkthrough();

  useEffect(() => {
    // Add 'modal-open' class to the body when the modal is open
    document.body.classList.add("modal-open");

    // Remove 'modal-open' class from the body when the modal is closed
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[110] bg-black bg-opacity-40">
      <div className="relative bg-[#191A1F] p-10 rounded-lg w-1/2 flex flex-col items-center">
        <div className="absolute top-4 right-4">
          <button onClick={skipWalkthrough} className="">
            <FaTimes className="bg-secondary-600 text-white rounded-full p-1" />
          </button>
        </div>
        <img src={botIcon} alt="Step " className="mx-auto mt-4 w-1/4" />
        <h2 className="text-2xl font-bold my-4 text-white ">
          Welcome to Konectin AI Resume Builder
        </h2>
        <p className="mt-2 text-white font-medium text-lg text-center ">
          Harness the power of AI and craft a resume that lands you your dream
          job. Ready to take the next big step in your career? Click{" "}
          <span className="text-primary-500">'Begin Tour'</span> and let's get
          you closer to your dream job! 😉
        </p>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              if (currentModule < totalModules - 1) {
                nextModule();
              } else {
                // Close the modal when the tour is complete
                skipWalkthrough();
              }
            }}
            className="px-9 py-2 bg-primary-500 text-white rounded-md text-base font-medium hover:bg-primary-600"
          >
            Begin Tour
          </button>
        </div>
        <div className="text-center mt-8">
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

export default WelcomeWalkthrough;
