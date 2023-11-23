import { useWalkthrough } from "../../context/WalkthroughContext";

function FinishWalkthrough() {
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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-[#191A1F] py-10 px-14 rounded-lg w-1/2 flex flex-col items-center gap-8 ">
        <h2 className="text-2xl font-bold mt-4 text-secondary-600 w-full ">
          Finish Tour
        </h2>
        <p className=" text-white font-medium text-lg  ">
          You're now equipped with the power of our Resume Builder. It's time to
          create a resume that not only stands out but speaks volumes about your
          skills and potential. Click 'Finishc' and let's embark on the journey
          to your dream job with Konectin! 😉
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
            Finish
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

export default FinishWalkthrough;
