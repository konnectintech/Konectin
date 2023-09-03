function BasicInfo({ data }) {
  return (
    <section className="section">
      <style>
        {`
  .basic_info {
    padding: 50px 30px 10px 20px;
    background: -webkit-linear-gradient(180deg, #012166, #012E84);
    background: linear-gradient(180deg, #012166, #012E84);
    width: 80%;
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
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    color: white;
    margin-bottom:20px
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
