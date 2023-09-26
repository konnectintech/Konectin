function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="section">
        <style>
          {`
            .skill-section {
              padding:10px;
              padding-bottom: 0;
            }

            .heading {
              background:#FEBC2C;
              color:#000000 !important;
              padding:10px;
              text-align:center;
              border-radius:3px

            }
            
            .skill-text {
              font-family: poppins;
              font-size: 10px;
              color: #333333;
            }
            
            .skill-item {
              -webkit-flex-basis: 50%; /* WebKit-based browsers */
              flex-basis: 50%;
            }
            
            .skill-info {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-justify-content: space-between; /* WebKit-based browsers */
              justify-content: space-between;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
            }
            
            .skill-year {
              font-size: 10px;
            }
          `}
        </style>
        <div className="skill-section">
          <h2 className="heading">Skills</h2>
          <div className="skill-detail">
            {data.map((item, index) => (
              <div key={index} className="mb-2">
                {item.name === "" ? `Skill ${index + 1}` : item.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default Skills;
