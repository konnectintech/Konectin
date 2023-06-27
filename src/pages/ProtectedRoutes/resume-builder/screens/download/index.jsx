import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Download = ({ data, template }) => {
  const resumeRef = useRef();
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    pageStyle: `@media print {
      @page {
        size: 560px 560px;
        margin: 0;
      }
    }`,
    // documentTitle: `${data.basicInfo.firstName} ${data.basicInfo.lastName} Resume`,
    onPrintError: () => alert("Resume not downloaded"),
    onAfterPrint: () => alert("Resume downloaded"),
  });
  return (
    <div className="max-w-6xl flex mx-auto flex-col">
      <h2 className="max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug mb-8">
        Download Resume
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div ref={resumeRef}>{template()}</div>
        <div className="max-w-xl flex flex-col max-md:justify-center mt-16 gap-5">
          <button
            onClick={handlePrint}
            type="submit"
            className="rounded-lg text-sm text-neutral-900 py-3 px-[4.5rem] bg-primary-500"
          >
            Download
          </button>
          <button
            onClick={handlePrint}
            type="submit"
            className="rounded-lg text-sm text-neutral-900 py-3 px-[4.5rem] bg-primary-500"
          >
            Download
          </button>
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg text-sm py-3 px-[4.5rem] border border-neutral-500"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
