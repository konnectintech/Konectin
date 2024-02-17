function BasicInfo({ data }) {
  return (
    <section className="section">
      <div className="side-content"></div>

      <div className="main-content sub-section">
        <h1 className="capitalize pt-4">
          {data.firstName && data.lastName
            ? `${data.firstName} ${data.lastName}`
            : data.firstName
            ? data.firstName
            : data.lastName
            ? data.lastName
            : "Your Name"}
        </h1>
        <p>{data.profession ? data.profession : "Your Profession"}</p>
      </div>
    </section>
  );
}

export default BasicInfo;
