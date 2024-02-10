function Experience({ jobExperience, currentEditedJob }) {
  return (
    currentEditedJob >= 1 && (
      <section className="exp-section">
        <style>
          {`
            .exp-section {
              -webkit-flex: 1; /* WebKit-based browsers */
              flex: 1;
            }
            
            .exp-text {
              font-family: poppins;
              color: #333333;
            }
            
            .exp-item {
              border-left: 4px solid #0470DC;
              margin-bottom: 8px;
              padding-left: 8px;
            }
            
            .exp-info {
              display: -webkit-flex; /* WebKit-based browsers */
              display: flex;
              -webkit-justify-content: space-between; /* WebKit-based browsers */
              justify-content: space-between;
              -webkit-align-items: center; /* WebKit-based browsers */
              align-items: center;
            }
            
            .exp-year {
              white-space: nowrap;
            }
            
            .location {
              font-weight: 600;
              margin-top: 5px;
              color: #000 !important;
            }
          `}
        </style>
        <div className="exp-section">
          <h2>Employment</h2>
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
