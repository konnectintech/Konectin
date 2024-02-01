function Experience({ jobExperience, currentEditedJob }) {
  return (
    currentEditedJob >= 1 && (
      <section className="section">
        <style>
          {`
            .exp-section {
              padding:10px;
              padding-bottom: 0;
            }
            
            .exp-text {
              font-family: poppins;
              color: #333333;
            }

            .exp-heading {
              background:#FF947C;
              color: #000 !important;
              padding: 10px;
              text-align: center;
              border-radius: 20px;
    
            }
            
            .exp-detail {
              padding: 5px;
              border-radius: 3px;
            }
            
            .exp-item {
              margin-bottom: 8px;
            }
            
            .exp-info {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-justify-content: space-between; /* WebKit-based browsers */
              justify-content: space-between;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
              margin-bottom: 10px;
            }
            
            .exp-year {
              color: #fff;
              white-space: nowrap;
            }
            
            .location {
              color: #fff !important;
              margin: 10px 0;
            }
          `}
        </style>
        <div className="exp-section">
          <h2 className="exp-heading">Employment</h2>
          <div className="exp-detail">
            {jobExperience.map((experience, index) => (
              <div className="exp-item" key={index}>
                <div className="exp-info">
                  <h3>
                    {experience?.company} {experience.jobTitle}
                  </h3>
                  <div className="exp-year">
                    {experience.startYear}
                    {experience.current
                      ? " - Present"
                      : ` - ${experience.endYear}`}
                  </div>
                </div>
                <div key={index} className="sub-section">
                  <p className="location">
                    {experience.state && experience.state}

                    {experience.state && experience.country && ", "}

                    {experience.country && experience.country}
                  </p>

                  <div className="list-none">
                    {experience.workDesc !== "" && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: experience.workDesc,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default Experience;
