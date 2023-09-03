function Experience({ jobExperience, currentEditedJob }) {
  return (
    currentEditedJob >= 1 && (
      <section className="section">
        <style>
          {`
          .exp-section {
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
          
          .exp-text {
            font-family: poppins;
            font-size: 10px;
            color: #333333;
          }
          
          .exp-detail {
            display: -webkit-flex; /* WebKit-based browsers */
            display: flex;
            -webkit-flex-wrap: wrap; /* WebKit-based browsers */
            flex-wrap: wrap;
          }
          
          .exp-item {
            -webkit-flex: 1; /* WebKit-based browsers */
            flex: 1;
            margin-right: 15px; /* Add margin to create gap */
            margin-bottom: 15px; /* Add margin to create gap */
          }
          
          .exp-item:last-child {
            margin-right: 0; /* Remove margin on the last child */
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
            font-size: 10px;
          }
          
          `}
        </style>
        <div className="exp-section">
          <h2>Employment</h2>
          <div className="highlight-bar" />
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
                  <p>
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
