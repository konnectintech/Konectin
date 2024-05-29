import SectionWrapper from "../animation/sectionWrapper";
import { coverage } from "../../assets";
import { CustomButton } from "../button";

function MapSection() {
  return (
    <div className="flex flex-col items-center w-[98%] max-w-screen-lg mx-auto px-4 py-12 md:py-20 gap-12">
      <div className="text-center space-y-2">
        <h5 className="text-4xl md:text-5xl leading-snug">
          Join Our&nbsp;
          <span className="text-secondary-500">Pan-African</span>&nbsp;
          <span className="hidden md:inline">Movement</span>
          <span className="md:hidden">Reach</span>
        </h5>
        <p className="md:text-lg max-w-3xl">
          Connect with diverse and vibrant communities across Africa. Join
          Konectin and be a part of the Pan-African network of professionals,
          job seekers, and students, all striving towards revolutionizing
          Africa's hitting and EdTech Industry.
        </p>
      </div>

      <div className="h-fit md:h-[550px] w-full bg-primary-500 rounded-xl md:rounded-2xl px-6 md:px-12 pt-12 md:py-16 flex flex-col md:flex-row items-center shadow-[5px_5px_2px_0px] md:shadow-[10px_10px_2px_0px] shadow-secondary-500 md:shadow-secondary-500 gap-20 md:gap-0">
        <div className="md:w-7/12 flex flex-col justify-center gap-7 md:gap-14">
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-4xl !leading-snug text-white font-semibold">
              <span className="text-secondary-500">
                <span className="hidden md:inline-block">Spanning</span> Over
                20+ Countries
              </span>{" "}
              <span className="md:hidden">Covered </span>Across Africa
            </p>
            <p className="hidden md:block font-medium text-lg text-white">
              Konectin is your trustworthy ally. Whether you're a corporation
              focused on team development, a professional seeking career
              advancement, a student striving for academic success, or an
              educational institution in search of a credible collaborator,
              Konectin is here to assist you.
            </p>
            <p className="md:hidden text-white font-medium">
              Whether you're a student aiming for success, a professional
              seeking advancement, an educational institution in search of a
              reliable partner, or a business committed to fostering your team,
              Konectin is your dependable ally.
            </p>
          </div>
          <div className="max-w-sm">
            <CustomButton primary colorType="secondary">
              Join the Konectin Community Today
            </CustomButton>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="w-full"
            src={coverage}
            alt="Map of Africa highlighting Konectin's coverage"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(MapSection, "map");
