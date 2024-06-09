function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="section">
        <style>
          {`
          .modern-4 .skills.separated-div, .separated-div .separated-div {
            display: -webkit-flex;
            -webkit-flex-wrap: wrap;
            align-items: center;
          }

          .modern-4 .separated-div span, .modern-4 .separated-div div:nth-child(even) {
            margin-left: auto;
          }

          .modern-4 .separated-div div {
            width: 45%;
            margin-top: 6px;
          }

          .modern-4 .separated-div div:nth-child(2), .separated-div div:first-child {
            margin-top: 0px;
          }

          .modern-4 .mb-2 {
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
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default Skills;
