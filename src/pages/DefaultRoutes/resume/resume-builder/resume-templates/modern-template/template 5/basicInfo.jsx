function BasicInfo({ data }) {
  return (
    <section className="section">

      <div className="main-content sub-section">
        <p>{data.profession ? data.profession : "Your Profession"}</p>
        <h1 className="capitalize">
          {data.firstName && data.lastName
            ? `${data.firstName} ${data.lastName}`
            : data.firstName
            ? data.firstName
            : data.lastName
            ? data.lastName
            : "Your Name"}
        </h1>
        
      </div>
    </section>
  );
}

export default BasicInfo;
