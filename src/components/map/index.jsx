import { caseImage } from "../../assets";

function MapSection() {
  return (
    <section className="flex flex-col gap-6 mt-16">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-10/12 mx-auto max-w-screen-lg text-center">
          <h1 className="text-3xl mb-2">
            How Others Have{" "}
            <font className="text-secondary-600">Benefited</font>
          </h1>
          <p>
            Delve into the success stories of job seekers and recruiters who
            have leveraged Konectin's innovative features to their advantage.
          </p>
        </div>
      </div>
      <img src={caseImage} alt="Map" />
    </section>
  );
}

export default MapSection;
