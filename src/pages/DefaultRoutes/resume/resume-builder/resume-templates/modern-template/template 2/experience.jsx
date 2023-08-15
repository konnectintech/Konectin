import React from "react";

function Experience({ data }) {
  return (
    data.currentEditedJob >= 1 && (
      <section className="section">
        <div className="w-full">
          <div className="side-content">
            <h2>Employment</h2>
          </div>

          {data?.jobExperience.map((experience, index) => (
            <div key={index} className="section w-full mt-2">
              <div className="side-content">
                <span>
                  {experience.startYear !== "" && experience.startYear}
                  {experience.current
                    ? " - Present"
                    : ` - ${experience.endYear}`}
                </span>
              </div>
              <div className="main-content">
                <div className="sub-section">
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
            </div>
          ))}
        </div>
      </section>
    )
  );
}

export default Experience;
