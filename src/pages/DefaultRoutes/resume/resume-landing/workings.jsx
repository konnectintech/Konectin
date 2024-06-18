import ReviewSection from "../../../../components/resume/reviewSection";

function WorkingSection() {
  return (
    <div className="flex flex-col gap-6 justify-center min-h-[400px] py-16">
      <h4 className="max-w-md text-2xl md:text-3xl !leading-snug font-semibold">
        Review your Resume and Gain a Competitive Edge with{" "}
        <span className="text-secondary-600">
          Powerful AI and ATS Analytics
        </span>
      </h4>

      <ReviewSection />
    </div>
  );
}

export default WorkingSection;
