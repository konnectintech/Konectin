import {
    ResumeTemplateSample1Image,
    eye,
    edit,
    download,
    copy,
    trash,
  } from "../../../../assets";
  
  export default function TemplateComponent() {
    return (
      <div className="flex flex-col gap-2 items-start max-w-xs w-64">
        {/* h-[515px] */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xl font-black text-neutral-100">
            Marketing Specialist
          </p>
          <p className="text-xs">January 14, 2023</p>
        </div>
        <div className="mt-2">
          <img
            className=""
            src={ResumeTemplateSample1Image}
            alt="Cover Letter Template"
          />
        </div>
        <div className="p-2 flex justify-between items-center w-full">
          <div className="flex gap-4 justify-center items-center">
            <button>
              <img src={eye} alt="Preview" />
            </button>
            <button>
              <img src={edit} alt="Edit" />
            </button>
            <button>
              <img src={copy} alt="Duplicate" />
            </button>
            <button>
              <img src={download} alt="Download" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  