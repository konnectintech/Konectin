import {
  ResumeTemplateSample1Image,
  eye,
  edit,
  download,
  copy,
  trash,
} from "../../../../assets";

export default function TemplateComponent({ item }) {
  const date = new Date(item.date)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = date.toLocaleDateString(undefined, options)
  return (
    <div className="flex flex-col grow gap-2 items-start max-w-xs w-1/4 xl:w-full min-w-[182px]">
      {/* h-[515px] */}
      <div className="flex flex-col gap-1.5">
        <p className="text-sm md:text-xl font-black text-neutral-100">
          {item.title}
        </p>
        <p className="text-xs">{formattedDate}</p>
      </div>
      <div className="mt-2">
        <img
          className=""
          src={ResumeTemplateSample1Image}
          alt="Cover Letter Template"
        />
      </div>
      <div className="p-2 hidden md:flex justify-between items-center w-full">
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
