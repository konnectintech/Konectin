function Contacts ({ data }) {
  return (
    (data.state || data.country || data.email || data.city || data.zipCode) && (
      <section className="section pb-4 underline__bottom">

        <div className="pl-4 separated-div ">
          <div className=" list-none ">
            {/* Address */}
            {(data.state || data.country || data.city || data.zipCode) && (
              <div>
               
                  {data.zipCode && data.zipCode}

                  {data.zipCode && data.city && ", "}

                  {data.city && data.city}

                  {(data.zipCode || data.city) && data.state && ", "}

                  {data.state && data.state}

                  {data.state && data.country && ", "}

                  {data.country && data.country}
                
              </div>
            )}

            {/* Email */}
            {data.email && (
              <div>
                <li>{data.email}</li>
              </div>
            )}

            {data.phoneNumber && (
              <div>
                <li>{data.phoneNumber}</li>
              </div>
            )}
          </div>
          <div className="sub-section toLowerCase ml-md">
            <p>
              {data.firstName && data.lastName
              ? `${data.firstName}${data.lastName}portfolio`
              : data.firstName
              ? data.firstName
              : data.lastName
              ? data.lastName
              : "Your Name"}
            </p>
          </div>
        </div>
      </section>
    )
  );
}

export default Contacts;
