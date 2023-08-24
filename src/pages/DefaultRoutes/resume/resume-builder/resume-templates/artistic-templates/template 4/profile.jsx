function Profile({ data }) {
  return (
    data && (
      <section>
        <style>
          {`
           .profile-section {
            padding: 10px;
            padding-bottom: 0;
          }
          .text > ul > li {
            font-family:poppins;
            font-size:10px;
            color:#ffffff !important;
          }
          `}
        </style>
        <div className="profile-section">
          <div className="text" dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </section>
    )
  );
}

export default Profile;
