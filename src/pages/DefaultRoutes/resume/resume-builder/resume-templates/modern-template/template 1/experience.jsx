function Experience({ jobExperience, currentEditedJob }) {
  return (
    currentEditedJob >= 1 && (
      <section className="section">
        <div className="side-content">
          <h2>Employment</h2>
        </div>

        <div className="main-content">
          <div className="sub-section">
            {jobExperience.map((experience, index) => (
              <div key={index} className="sub-section">
                <div className="separated-div">
                  <h3>
                    {experience.startYear !== "" && experience.startYear}

                    {experience.current
                      ? " - Present"
                      : ` - ${experience.endYear}`}

                    {(experience.startYear ||
                      experience.current ||
                      experience.endYear) &&
                      (experience.jobTitle || experience.company) &&
                      " - "}

                    {experience.jobTitle && experience.jobTitle}

                    {experience.jobTitle && experience.company && " at "}

                    {experience.company && experience.company}
                  </h3>

                  <p>
                    {experience.state && experience.state}

                    {experience.state && experience.country && ", "}

                    {experience.country && experience.country}
                  </p>
                </div>

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
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default Experience;
