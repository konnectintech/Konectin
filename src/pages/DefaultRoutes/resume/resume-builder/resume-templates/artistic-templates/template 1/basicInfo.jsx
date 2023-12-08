import { useTemplateData } from "../../../../../../../middleware/resume";

function BasicInfo({ data }) {
  const { templateData } = useTemplateData();
  return (
    <section className="section">
      <style>
        {`
   .basic_info {
    padding: 30px;
    background:  ${templateData?.theme?.color};
  }
  
  .basic_info_content {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  
  .basic_info_content > * {
    margin-top: 20px; /* Add spacing between elements */
  }
  
  .basic_info_content .name {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    color: white;
  }
  
  .basic_info_content .profession {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    color: white;
  }
  
  `}
      </style>
      <div className="basic_info">
        <div className="basic_info_content">
          <div className="name">{`${data.firstName} ${data.lastName}`}</div>
          <div className="profession">
            {data.profession || "Your Profession"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
