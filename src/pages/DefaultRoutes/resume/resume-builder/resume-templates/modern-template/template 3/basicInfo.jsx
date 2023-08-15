function BasicInfo({ data }) {
  return (
    <section>
      <h1 className="capitalize">
        {data.firstName && data.lastName
          ? `${data.firstName} ${data.lastName}`
          : data.firstName
          ? data.firstName
          : data.lastName
          ? data.lastName
          : "Your Name"}
      </h1>
      <p>{data.profession ? data.profession : "Your Profession"}</p>
    </section>
  );
}

export default BasicInfo;
