import "./review.css";
import ReviewSection from "../../../../../components/resume/reviewSection";

function Process() {
  return (
    <section className="bg-process w-full mx-auto max-w-screen-2xl flex flex-col gap-12 md:gap-28 py-28 px-2 xxs:px-4 lg:px-16">
      <div className="flex flex-col gap-4">
        <p className="hidden sm:block font-bold text-xl">How It Works</p>
        <p className="font-bold text-3xl sm:text-4xl w-4/5 md:w-1/2">
          Gain a Competitive Edge with{" "}
          <span className="text-secondary-600">
            Powerful AI and ATS Analytics
          </span>
        </p>
      </div>
      <ReviewSection />
    </section>
  );
}

export default Process;
