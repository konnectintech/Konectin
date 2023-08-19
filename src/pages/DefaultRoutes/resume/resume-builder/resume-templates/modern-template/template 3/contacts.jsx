function Contacts({ data }) {
  return (
    (data.state || data.country || data.email || data.city || data.zipCode) && (
      <section className="contacts">
        <p>
          {data.zipCode && data.zipCode}&#160; {data.city && data.city}
          {(data.zipCode || data.city) && data.state && ", "}
          {data.state && data.state}
          {data.state && data.country && ", "}
          {data.country && data.country}
        </p>

        {data.email && <p>{data.email}</p>}

        {data.phoneNumber && <p>{data.phoneNumber}</p>}
      </section>
    )
  );
}

export default Contacts;
