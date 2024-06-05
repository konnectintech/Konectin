import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../../components/button";
import { solution1 } from "../../../../assets";

function CoverLetterSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative">
      <div className="bg-primary-600 relative rounded-3xl w-9/12 p-10">
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
            className="w-56 md:w-72"
          >
            <CustomButton primary colorType="secondary">
              Create your Cover Letter Now
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="bg-white absolute right-0 rounded-3xl w-1/2 p-10 min-h-[400px] top-28 shadow-xl flex items-center justify-center">
        <img src={solution1} alt="Create your Cover Letter Now" />
      </div>
    </div>
  );
}

export default CoverLetterSection;
