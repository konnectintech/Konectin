function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="section">
        <style>
          {`
            .skill-section {
              padding: 20px;
              padding-bottom: 0;
            }
            
            highlight-bar {
              border: 2px solid #3F3EF4;
              background: #3F3EF4;
              width: 100px;
              margin: 0.5rem 0;
              border-radius: 5px;
            }
            
            .skill-text {
              font-family: poppins;
              font-size: 10px;
              color: #333333;
            }
            
            .skill-detail {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-flex-wrap: wrap; /* WebKit-based browsers */
              flex-wrap: wrap;
              -webkit-justify-content: space-around; /* WebKit-based browsers */
              justify-content: space-around;
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
          <h2>Skills</h2>
          <div className="highlight-bar" />
          <div className="skill-detail">
            {data.map((item, index) => (
              <div key={index} className="mb-2">
                {item === "" ? `Skill ${index + 1}` : item}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default Skills;
