import { FAQ } from "./resumeData";
import CTASection from "./cta";
import HeroSection from "./hero";
import SliderSection from "./slider";
import SolutionSection from "./solutions";

import MapSection from "../../../../components/map";
import CustomFAQ from "../../../../components/customFAQ";
import Brands from "../../../../components/brandsListing";
import TestimonialSection from "../../../../components/testimonials";
import CoverLetterSection from "./coverletter";
import WorkingSection from "./workings";
import TemplateSelector from "./templateSelector";

function ResumeBuilder() {
  return (
    <main className="resume-section flex flex-col overflow-hidden text-neutral-100 relative pt-36">
      <HeroSection />

      <div className="bg-gradient-to-b from-white from-40% to-whites-200">
        <Brands />
      </div>

      <SolutionSection />
      <CTASection />
      <div className="bg-gradient-to-b from-white from-20% to-whites-200">
        <SliderSection />
        <TemplateSelector />
      </div>

      <div className="bg-gradient-to-b from-white from-40% to-whites-200">
        <div className="w-full lg:w-11/12 relative mx-auto max-w-screen-2xl flex flex-col gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-0">
          <CoverLetterSection />
          <WorkingSection />
        </div>
      </div>

      <section className="bg-white">
        <TestimonialSection />
      </section>
      <CustomFAQ data={FAQ} />
      <MapSection />
    </main>
  );
}

export default ResumeBuilder;
