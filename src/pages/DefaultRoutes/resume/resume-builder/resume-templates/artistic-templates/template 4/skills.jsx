function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="section">
        <style>
          {`
            .skill-section {
              padding: 10px;
              padding-bottom: 0;
            }

            .skill-heading {
              background: #AEFF7C;
              color: #000 !important;
              padding: 10px;
              text-align: center;
              border-radius: 20px;
            }
            
            .skill-item {
              margin: 15px auto;
            }
          `}
        </style>
        <div className="skill-section">
          <h2 className="skill-heading">Skills</h2>
          <div className="skill-detail">
            {data.map((item, index) => (
              <div key={index} className="skill-item">
                <h3>{item.name === "" ? `Skill ${index + 1}` : item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default Skills;
