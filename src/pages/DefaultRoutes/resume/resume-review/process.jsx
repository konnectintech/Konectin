import "./review.css";
import ReviewSection from "../../../../components/resume/reviewSection";

function Process() {
  return (
    <section className="bg-process w-full mx-auto max-w-screen-2xl flex flex-col gap-6 py-16 px-2 xxs:px-4 lg:px-16">
      <div className="flex flex-col">
        <h3 className="hidden sm:block font-semibold text-xl">How It Works</h3>
        <h4 className="font-semibold text-2xl md:text-3xl max-w-md !leading-snug">
          Gain a Competitive Edge with{" "}
          <span className="text-secondary-600">
            Powerful AI and ATS Analytics
          </span>
        </h4>
      </div>
      <ReviewSection />
    </section>
  );
}

export default Process;
