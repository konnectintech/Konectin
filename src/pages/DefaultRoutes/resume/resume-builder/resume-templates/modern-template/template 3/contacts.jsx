function Contacts({ data }) {
  return (
    (data.state ||
      data.country ||
      data.email ||
      data.phoneNumber ||
      data.city ||
      data.zipCode) && (
      <section className="contacts">
        <p>
          {data.zipCode && data.zipCode}&#160; {data.city && data.city}
          {(data.zipCode || data.city) && data.state && ", "}
          {data.state && data.state}
          {data.state && data.country && ", "}
          {data.country && data.country}
        </p>

        <p>{data.email && <a href={`mailto:${data.email}`}>{data.email}</a>}</p>

        <p>
          {data.phoneNumber && (
            <a href={`tel:${data.phoneCode}${data.phoneNumber}`}>
              +{data.phoneCode} {data.phoneNumber}
            </a>
          )}
        </p>
      </section>
    )
  );
}

export default Contacts;
