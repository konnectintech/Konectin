import { caseImage } from "../../../assets";

function MapSection() {
  return (
    <section className="flex flex-col gap-6 mt-16">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-10/12 mx-auto max-w-screen-lg text-center">
          <h1 className="text-3xl mb-2">
            What others have <font className="text-secondary-600">gained</font>
          </h1>
          <p>
            Read all about how Konectin has impacted other job seekers,
            recruiters and helped them achieve their goals.
          </p>
        </div>
      </div>
      <img src={caseImage} alt="Map" />
    </section>
  );
}

export default MapSection;
