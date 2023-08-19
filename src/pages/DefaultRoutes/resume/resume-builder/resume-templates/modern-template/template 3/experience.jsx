function Experience({ jobExperience, currentEditedJob }) {
  return (
    currentEditedJob >= 1 && (
      <section>
        <h2>Employment</h2>

        <div>
          {jobExperience.map((experience, index) => (
            <div key={index} className="half-pass w-full mt-2">
              <span>
                {experience.startYear !== "" && (
                  <>
                    {experience.startYear} <br /> - <br />
                  </>
                )}

                {experience.current ? "Present" : `${experience.endYear}`}
              </span>
              <div>
                <h3>
                  {experience.jobTitle && experience.jobTitle}

                  {experience.jobTitle && experience.company && " at "}

                  {experience.company && experience.company}
                </h3>

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
      </section>
    )
  );
}

export default Experience;
