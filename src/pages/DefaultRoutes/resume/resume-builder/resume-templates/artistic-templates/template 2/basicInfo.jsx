function BasicInfo({ data }) {
  return (
    <section className="section">
      <style>
        {`
          .basic_info {
            position: relative;
            left: -10px;
            top: -10px;
            padding: 60px 30px 30px 40px;
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
            color: white;
            margin-bottom: 10px;
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
          <h1 className="name">{`${data.firstName} ${data.lastName}`}</h1>
          <div className="profession">
            {data.profession || "Your Profession"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
