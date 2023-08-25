function BasicInfo({ data }) {
  return (
    <section className="basic-info">
      <style>
        {`
        .basic-info {

          border-bottom: 1px solid #ffffff
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
  
  .basic_info_content > * {
  }
  
  .basic_info_content .name {
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    margin-bottom:10px;
    color:#ffffff;
    line-height:28px
  }
  
  .basic_info_content .profession {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    color: #FEBC2C;
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
