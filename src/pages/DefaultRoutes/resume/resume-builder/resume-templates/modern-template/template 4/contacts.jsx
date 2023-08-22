import * as CiIcons from "react-icons/ci";

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

        <div className="main-content pt-4">
          <div className="sub-section">
            {/* Email */}
            {data.email && (
              <div className="contacts">
                <CiIcons.CiMail />
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
            )}

            {/* Address */}
            {(data.state || data.country || data.city || data.zipCode) && (
              <div className="contacts">
                <CiIcons.CiLocationOn />
                <span>
                  {data.zipCode && data.zipCode}

                  {data.zipCode && data.city && ", "}

                  {data.city && data.city}

                  {(data.zipCode || data.city) && data.state && ", "}

                  {data.state && data.state}

                  {data.state && data.country && ", "}

                  {data.country && data.country}
                </span>
              </div>
            )}

            {data.phoneNumber && (
              <div className="contacts">
                <CiIcons.CiPhone />
                <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
}

export default Contacts;
