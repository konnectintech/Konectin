function Skills({ data }) {
  return (
    data.length >= 1 && (
      <section className="sub-section p-4">
        <h2>Soft Skills</h2>
        <div>
          <ul className=" list-none ps-4">
            {data.map((item, index) => (
              <li key={index} className="">
                <div className="separated-div relative">
                  <h3 className="capitalize">{item === "" ? `Skill ${index + 1}` : item}</h3>
                  <h4 className="mr-no">Expert</h4>
                </div>
                <input type="range" className="skills__range" value="78" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
}

export default Skills;
