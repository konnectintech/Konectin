function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="section">
        <div className="side-content">
          <h2>Soft Skills</h2>
        </div>

        <div className="main-content">
          <ul className="separated-div list-disc ps-4">
            {data.map((item, index) => (
              <li key={index} className="mb-2">
                <h3>{item.name === "" ? `Skill ${index + 1}` : item.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
}

export default Skills;
