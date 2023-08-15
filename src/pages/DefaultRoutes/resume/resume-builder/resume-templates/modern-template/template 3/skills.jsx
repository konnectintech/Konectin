function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="w-full">
        <h2>Key Skills</h2>

        <div className="separated-div list-none skills mb-2">
          <div>
            <h3>Professional</h3>
          </div>
          <div>
            <h3>Personal</h3>
          </div>
        </div>

        <div className="separated-div list-none skills">
          {data.map((item, index) => (
            <div key={index}>
              <h4>{item === "" ? `Skill ${index + 1}` : item}</h4>
            </div>
          ))}
        </div>
      </section>
    )
  );
}

export default Skills;
