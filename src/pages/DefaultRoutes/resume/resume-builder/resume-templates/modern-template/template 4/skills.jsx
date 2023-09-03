function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="section">
        <style>
          {`
          .doc-body .skills.separated-div, .separated-div .separated-div {
            display: -webkit-flex;
            -webkit-flex-wrap: wrap;
          }

          .doc-body .separated-div span, .doc-body .separated-div div:nth-child(even) {
            margin-left: auto;
          }

          .doc-body .separated-div div {
            width: 45%;
            margin-top: 6px;
          }

          .doc-body .separated-div div:nth-child(2), .separated-div div:first-child {
            margin-top: 0px;
          }

          .doc-body .mb-2 {
            margin-bottom: 0.5rem/* 8px */;
          }
      `}
        </style>

        <div className="side-content">
          <h2>Skills</h2>
        </div>

        <div className="main-content pt-4">
          <div className="separated-div list-none skills">
            {data.map((item, index) => (
              <div key={index} className="mb-2 separated-div">
<<<<<<< HEAD
                <h3>{item === "" ? `Skill ${index + 1}` : item}</h3>
                <span>Expert</span>
=======
                <h3>{item.name === "" ? `Skill ${index + 1}` : item.name}</h3>
                {item.lvl !== "" && (
                  <span>
                    {item.lvl <= 70 && item.lvl > 40
                      ? "Proficient"
                      : item.lvl <= 40
                      ? "Novice"
                      : "Expert"}
                  </span>
                )}
>>>>>>> 5822cfa0a6b144e9a98bb71a8ed78e805a414b19
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default Skills;
