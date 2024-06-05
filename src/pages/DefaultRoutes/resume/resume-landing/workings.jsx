import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../../components/button";
import { ResumeAnalyticsImage } from "../../../../assets";

function WorkingSection() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md flex flex-col gap-6 justify-center min-h-[400px] py-16">
      <h4 className="text-2xl md:text-3xl !leading-snug font-semibold">
        Review your Resume and Gain a Competitive Edge with{" "}
        <span className="text-secondary-600">
          Powerful AI and ATS Analytics
        </span>
      </h4>

      <div className="flex gap-16 items-center">
        <img src={ResumeAnalyticsImage} alt="Resume Analytics" />
        {/* <div></div> */}
        <div className="space-y-6">
          <p className="text-sm max-w-sm">
            Our AI platform guides you through the process, making it easier
            than ever to present your qualifications effectively. <br />
            <br />
            Highlights your unique skills and experiences and make a strong
            impression on potential employers.
          </p>

          <div
            onClick={() => navigate("/services/resume/review")}
            className="w-56 md:w-72"
          >
            <CustomButton primary colorType="primary">
              Get Your Resume Reviewed Now
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingSection;
