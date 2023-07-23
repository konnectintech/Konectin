import {
  card3Image,
  ResumeTemplateSample1Image,
  ResumeTemplateSampleImage,
} from "../../../../assets";
import { ResumeButton } from "../../../../components/button";
import InfiniteLooper from "../../../../components/elementScroll";
import "./index.css";

function TipSection() {
  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row items-center justify-between text-xm">
        <div className="flex w-full md:w-7/12 lg:w-8/12 flex-col gap-4 text-start items-start justify-center">
          <h1 className="text-2xl font-semibold md:text-3xl md:leading-relaxed">
            Choose from our professional template
          </h1>
          <p className="w-10/12 text-neutral-300 mb-2">
            At konectin, we believe that first impresions matter, that’s why we
            make sure you put your best foot forward with eye-catching resume
            designs that stand out from the rest.
          </p>
          <ResumeButton />
        </div>
        <div className="w-full md:w-5/12 lg:w-4/12 overflow-hidden">
          <InfiniteLooper speed="12" direction="left">
            <img
              src={ResumeTemplateSampleImage}
              className="mx-auto"
              alt="Get started with Konectin"
            />
            <img
              src={ResumeTemplateSample1Image}
              className="mx-auto"
              alt="Get started with Konectin"
            />
          </InfiniteLooper>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="w-3/4 md:w-full">
          <img src={card3Image} alt="useful tips" />
        </div>
        <div className="flex flex-col gap-1 w-11/12">
          <h1 className="text-2xl font-semibold mb-2 md:text-3xl md:leading-relaxed">
            Follow useful tips from industry experts
          </h1>
          <p className="text-neutral-300 mb-2">
            At konectin, we believe that first impresions matter, that’s why we
            make sure you put your best foot forward with eye-catching resume
            designs that stand out from the rest
          </p>
          <ResumeButton />
        </div>
      </div>
    </>
  );
}

export default TipSection;
