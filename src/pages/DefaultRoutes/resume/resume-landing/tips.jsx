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
            Do you worry about how your resume should look? At Konectin, we have
            structured amazing templates to ease you of the stress of worrying
            about how your resume should appear. We have a wide array of
            organized and professional templates you can choose from.
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
            Follow <font className="text-secondary-600">useful tips</font> from
            industry experts around the globe
          </h1>
          <p className="text-neutral-300 mb-2">
            Enter your email below to stay up-to-date with helpful information
            that has been tested and trusted to give you desired results in your
            career.
          </p>
          <ResumeButton />
        </div>
      </div>
    </>
  );
}

export default TipSection;
