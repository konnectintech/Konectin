import { useTemplateContext } from "../../../../../../../middleware/resume";

function BasicInfo({ data }) {
  const { templateData } = useTemplateContext();
  return (
    <section className="section">
  
      <div className="side-content"></div>

      <div className="main-content sub-section mt-10">
      
        <h1 className="capitalize pt-4 text-[24px]">
          {data.firstName && data.lastName
            ? `${data.firstName} ${data.lastName}`
            : data.firstName
            ? data.firstName
            : data.lastName
            ? data.lastName
            : "Your Name"}
        </h1>
       <p className="">{data.profession ? data.profession : "Your Profession"}</p>
      </div>
      <div className="image-container">
      {templateData.image.value && (
            <img
              src={templateData.image.value}
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover absolute top-5 right-12"
            />
          )}
  </div>
    </section>
  );
}

export default BasicInfo;
