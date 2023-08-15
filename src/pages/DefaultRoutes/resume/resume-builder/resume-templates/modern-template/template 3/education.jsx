function Education({ currentEditedEducation, education }) {
  return (
    currentEditedEducation >= 1 && (
      <section className="w-full">
        <h2>Education</h2>

        {education.map((edu, index) => (
          <div key={index} className="half-pass w-full mt-2">
            <span>
              {edu?.month && edu?.month}

              {edu?.month && edu?.year && (
                <>
                  <br />-<br />
                </>
              )}

              {edu?.year && edu?.year}

              {!edu?.month && !edu?.year && new Date().getUTCFullYear()}
            </span>

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
        ))}
      </section>
    )
  );
}

export default Education;
