import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../../components/button";
import { solution1 } from "../../../../assets";

function CoverLetterSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative">
      <div className="bg-primary-600 relative rounded-3xl md:w-9/12 p-6 pb-24 sm:p-10">
        <div className="max-w-md flex flex-col gap-6 justify-center text-white min-h-[400px]">
          <h4 className="text-2xl md:text-3xl !leading-snug font-semibold">
            Craft Compelling{" "}
            <span className="text-secondary-600">Cover Letters</span> with AI
          </h4>
          <p className="text-sm max-w-sm">
            Our AI platform guides you through the process, making it easier
            than ever to present your qualifications effectively. <br />
            <br />
            Highlights your unique skills and experiences and make a strong
            impression on potential employers.
          </p>

          <div
            onClick={() => navigate("/services/resume/options")}
            className="max-sm:text-xs md:w-72"
          >
            <CustomButton primary colorType="secondary">
              Create your Cover Letter Now
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="bg-white relative md:absolute bottom-16 xxs:bottom-24 xxs:right-6 md:right-0 md:top-28 rounded-3xl w-11/12 xxs:w-9/12 mx-auto max-md:ml-auto md:w-1/2 p-4 xxs:p-10 md:min-h-[400px] shadow-xl flex items-center justify-center">
        <img src={solution1} alt="Create your Cover Letter Now" />
      </div>
    </div>
  );
}

export default CoverLetterSection;
