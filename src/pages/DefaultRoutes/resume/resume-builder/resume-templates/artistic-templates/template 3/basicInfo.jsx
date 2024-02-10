function BasicInfo({ data }) {
  return (
    <section className="basic-info">
      <style>
        {`
          .basic-info {
            border-bottom: 1px solid #fff;
          }

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
            margin-bottom: 5px;
            color: #fff;
          }
          
          .basic_info_content .profession {
            color: #FEBC2C;
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
