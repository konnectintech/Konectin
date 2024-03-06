function Education({ data }) {
  return (
    data.currentEditedEducation >= 1 && (
      <section className="section">
        <div className="w-full">
          <div className="side-content">
            <h2>Education</h2>
          </div>

          <div className="separated-section">
            {data?.education.map((edu, index) => (
              <div key={index} className="section w-full">
                <div className="side-content">
                  <span>
                    {edu?.endMonth && edu?.endMonth}

                    {edu?.endMonth && edu?.endYear && " "}

                    {edu?.endYear && edu?.endYear}

                    {!edu?.endMonth && !edu?.endYear && "Pursuing"}
                  </span>
                </div>

                <div className="main-content">
                  <div className="sub-section">
                    <h3>{edu?.schoolName && edu?.schoolName}</h3>

                    <p>{edu?.degree && edu?.degree}</p>

                    <ul className="capitalize list-none sub-section">
                      {edu?.relevantCourses?.map(
                        (item, index) =>
                          item.name !== "" && <li key={index}>{item.name}</li>
                      )}
                    </ul>

                    <ul className="capitalize list-none sub-section">
                      {edu?.awards?.map(
                        (item, index) =>
                          item.name !== "" && <li key={index}>{item.name}</li>
                      )}
                    </ul>
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

export default Education;
