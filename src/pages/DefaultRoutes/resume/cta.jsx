import { ResumeCTAImage } from "../../../assets";

function CTASection() {
  return (
    <section className="resume-cta p-8 md:p-16 relative my-16">
      <div className="absolute left-0 top-0 w-full h-full">
        <img
          src={ResumeCTAImage}
          className="w-full h-full"
          alt="There's a great power in words, if you don't hitch too many of them
    together."
        />
      </div>
      <p className="relative z-10 w-3/4 mx-auto text-center space-y-3 text-white md:text-xl md:font-semibold">
        <q>
          There's a great power in words, if you don't hitch too many of them
          together.
        </q>
        <cite className="block">Josh Billings.</cite>
      </p>
    </section>
  );
}

export default CTASection;
