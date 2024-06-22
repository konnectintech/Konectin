function BasicInfo({ data }) {
  return (
    <section className="section-top text-center">
      <style>{`
        .doc-body .section-top {
          width: 100%;
          margin-top: 10px;
        }

        .text-center {
          text-align: center;
        }

        .basiInfo-section {
       display: flex;
      align-items: center;
       gap: 34px;
  
        }

        .profession-section {
        margin-Top:20px;
        }
      `}</style>
      <div className="basiInfo-section">
  <div className="image-container">
  {data.imageUrl && (
        <img 
          src={data.imageUrl} 
          alt="Profile" 
          style={{
            borderRadius: "50%",
            width: "64px",
            height: "64px",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />
      )}
  </div>
  <div className="profession-section">
      <h1 className="capitalize">
        {data.firstName && data.lastName
          ? `${data.firstName} ${data.lastName}`
          : data.firstName
          ? data.firstName
          : data.lastName
          ? data.lastName
          : "Your Name"}
        {", "}
        {data.profession ? data.profession : "Your Profession"}
      </h1>

      {/* Contact */}
      {(data.state ||
        data.country ||
        data.email ||
        data.city ||
        data.phoneNumber ||
        data.zipCode) && (
        <p>
          {/* Address */}
          {data.zipCode && data.zipCode}&#160; {data.city && data.city}
          {(data.zipCode || data.city) && data.state && ", "}
          {data.state && data.state}
          {data.state && data.country && ", "}
          {data.country && data.country}
          {((data.email &&
            (data.state || data.country || data.city || data.zipCode)) ||
            (data.phoneNumber &&
              (data.state || data.country || data.city || data.zipCode))) &&
            ", "}
          {/* Email */}
          {data.email && (
            <a href={`mailto:${data.phoneNumber}`}>{data.email}</a>
          )}
          {data.email && data.phoneNumber && ", "}
          {data.phoneNumber && (
            <a href={`tel:${data.phoneCode}${data.phoneNumber}`}>
              +{data.phoneCode} {data.phoneNumber}
            </a>
          )}
        </p>
      )}
      </div>
      </div>
    </section>
  );
}

export default BasicInfo;
