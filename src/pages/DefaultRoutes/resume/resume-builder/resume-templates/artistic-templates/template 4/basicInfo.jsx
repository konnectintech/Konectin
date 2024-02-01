function BasicInfo({ data }) {
  return (
    <section className="basic-info">
      <style>
        {`
          .basic_info {
            padding: 10px;
          }
          
          .basic_info_content {
            display: -webkit-flex; /* WebKit-based browsers */
            display: flex;
            -webkit-flex-direction: column; /* WebKit-based browsers */
            flex-direction: column;
          }
          
          .basic_info_content .name {
            margin-bottom: 10px;
            color: #F5FF7C;
            text-align: center;
          }
          
          .basic_info_content .profession {
            color: #F5FF7C;
            text-align: center;
          }  
        `}
      </style>
      <div className="basic_info">
        <div className="basic_info_content">
          <h1 className="name">{`${data.firstName} ${data.lastName}`}</h1>
          <h3 className="profession">{data.profession || "Your Profession"}</h3>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
