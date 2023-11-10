import { docfolder, pdffolder } from "../../assets";

const DownloadResume = () => {
  return (
    <div className="flex gap-3 p-4 flex-col font-semibold text-xs">
      <div className="flex items-center cursor-pointer gap-2 py-1 px-3">
        <img src={pdffolder} alt={"pdffolder"} className="min-w-[24px]" />
        <p className="whitespace-nowrap">Download PDF</p>
      </div>
      <div className="flex items-center cursor-pointer gap-2 py-1 px-3">
        <img src={docfolder} alt={"docfolder"} className="min-w-[24px]" />
        <p className="whitespace-nowrap">Download DOC</p>
      </div>
    </div>
  );
};

export default DownloadResume;
