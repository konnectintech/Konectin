function Education({ data }) {
  return (
    data.currentEditedEducation >= 1 && (
      <section className="section">
        <div className="w-full">
          <div className="side-content">
            <h2>Education</h2>
          </div>

          {data?.education.map((edu, index) => (
            <div key={index} className="section w-full mt-2">
              <div className="side-content">
                <span>
                  {edu?.month && edu?.month}

                  {edu?.month && edu?.year && " "}

                  {edu?.year && edu?.year}

                  {!edu?.month && !edu?.year && "Currently pursuing"}
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

                  <ul className="capitalize list-none ps-4 sub-section">
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
      </section>
    )
  );
}

export default Education;
