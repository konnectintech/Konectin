import { Link } from "react-router-dom";
import SelectedTemplates from "../../resume-templates";

const Preview = ({ data }) => {
  return (
    <div className="mt-8 max-w-6xl flex mx-auto flex-col">
      <h2 className="max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
        Preview Resume
      </h2>
      <div className="w-full flex flex-col items-center sm:flex-row gap-10 mt-6">
        <div className="w-[200px] max-h-[360px] sm:max-h-[300px] md:w-fit md:max-h-full flex items-center justify-center">
          <div className="scale-[60%] sm:scale-[50%] md:scale-100 mt-10">
            <SelectedTemplates data={data} />
          </div>
        </div>
        <div className="md:w-1/2 px-4 md:px-0 flex-col md:flex items-center">
          <p className="max-w-[60ch] font-bold text-neutral-300 text-sm lg:text-center tracking-[-0.01rem] mt-3 mb-5">
            Before downloading your resume, we recommend previewing it to ensure
            it meets your expectations. If you would like to try a different
            resume template, you can easily make changes before finalizing your
            download. Thank you for using our resume builder!
          </p>
          <Link
            to="/resume/ai/template-selector"
            className="bg-secondary-500 font-bold rounded-lg w-full max-w-xs text-sm text-white py-3 px-3 text-center"
          >
            Change resume template
          </Link>
          <div className="max-w-xl w-full flex flex-col justify-center mt-8 lg:mt-16 md:mt-8 gap-5 md:flex-row mx-auto">
            <Link
              to="/resume/builder/bio"
              className="w-full text-center max-w-xs border border-neutral-500 rounded-lg text-sm py-3 px-3"
            >
              Back
            </Link>
            <Link
              to="/resume/builder/download"
              className="w-full text-center max-w-xs rounded-lg text-sm text-neutral-900 bg-primary-500 px-3 py-3"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
