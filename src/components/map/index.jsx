import SectionWrapper from "../animation/sectionWrapper";
import { coverage } from "../../assets";

function MapSection() {
  return (
    <div className="flex flex-col items-center py-12 md:py-24 px-6 md:px-20 gap-12">
      <div className="flex flex-col md:items-center gap-2">
        <p className="text-2xl md:text-5xl font-bold flex">
          Join Our&nbsp;
          <span className="md:text-secondary-500">Pan-African</span>&nbsp;
          <span className="hidden md:block">Movement</span>
          <span className="md:hidden">Reach</span>
        </p>
        <p className="hidden md:block text-xl font-medium text-center w-[76ch]">
          Connect with diverse and vibrant communities across Africa. Join
          Konectin and be a part of the Pan-African network of professionals,
          job seekers, and students, all striving towards revolutionizing
          Africa’s hitting and EdTech Industry.
        </p>
      </div>
      <div className="h-fit md:h-[550px] w-full bg-primary-500 rounded-xl md:rounded-2xl px-6 md:px-24 py-12 md:py-16 flex flex-col md:flex-row shadow-[5px_5px_2px_0px] md:shadow-[10px_10px_2px_0px] shadow-secondary-500 md:shadow-secondary-500 gap-20 md:gap-0">
        <div className="md:w-7/12 flex flex-col justify-center gap-7 md:gap-14">
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-4xl text-white font-bold">
              {" "}
              <span className="text-secondary-500">
                {" "}
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
          <button className="bg-secondary-500 px-5 md:px-9 py-3.5 text-white text-base md:text-xl font-bold w-fit whitespace-nowrap rounded md:rounded-none">
            Join the Konectin Community Today
          </button>
        </div>
        <div className="md:w-5/12 w-full">
          <img
            className="md:w-[500px] w-full md:h-full mx-auto h-60"
            src={coverage}
            alt="Map of Africa highlighting Konectin's coverage"
            style={{ maxWidth: "500px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(MapSection, "map");
