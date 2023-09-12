function Education({ education, currentEditedEducation }) {
  return (
    currentEditedEducation >= 1 && (
      <section className="section mb-lg">
       
        <div className="">
        <h2>Education</h2>
          <div className="sub-section">
            {education.map((edu, index) => (
              <div key={index} className="sub-section">
                <div className="">
                  <h4>
                    {edu?.month && `Graduated ${edu?.month}`}

                    {edu?.month && edu?.year && ` ${edu?.year}`}

                    {!edu?.month && edu?.year && "Currently pursuing"}

                    {edu.year && edu.schoolName && edu.degree && " - "}
                    
                    {edu?.schoolName && edu?.degree && edu?.schoolName}
                  </h4>

                  <p>
                    {edu?.state && edu?.state}
                    {edu?.state && edu?.country && ", "}

                    {edu?.country && edu?.country}
                  </p>
                </div>

                <span>{edu?.degree ? edu?.degree : edu?.schoolName}</span>

                <ul className="list-none sub-section">
                  {edu?.relevantCourses?.map(
                    (item, index) =>
                      item.name !== "" && <li key={index}>{item.name}</li>
                  )}
                </ul>

                <ul className="list-none sub-section">
                  {edu?.awards?.map(
                    (item, index) =>
                      item.name !== "" && <li key={index}>{item.name}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
      </section>
    )
  );
}

export default Education;
