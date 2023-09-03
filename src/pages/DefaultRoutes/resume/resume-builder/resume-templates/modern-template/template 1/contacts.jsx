function Contacts({ data }) {
  return (
    (data.state ||
      data.country ||
      data.email ||
      data.phoneNumber ||
      data.city ||
      data.zipCode) && (
      <section className="section">
        <div className="side-content">
          <h2>Contacts</h2>
        </div>

        <div className="main-content">
          <ul className="sub-section list-disc ps-4">
            {/* Address */}
            {(data.state || data.country || data.city || data.zipCode) && (
              <div>
                <li>
                  {data.zipCode && data.zipCode}

                  {data.zipCode && data.city && ", "}

                  {data.city && data.city}

                  {(data.zipCode || data.city) && data.state && ", "}

                  {data.state && data.state}

                  {data.state && data.country && ", "}

                  {data.country && data.country}
                </li>
              </div>
            )}

            {/* Email */}
            {data.email && (
              <li>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </li>
            )}

            {data.phoneNumber && (
              <li>
                <a href={`tel:${data.phoneCode}${data.phoneNumber}`}>
                  +{data.phoneCode} {data.phoneNumber}
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>
    )
  );
}

export default Contacts;
