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
          .text{
            font-family:poppins;
            font-size:10px;
            color:#ffffff;
          }
          `}
        </style>
        <div className="profile-section">
          <h2>About me</h2>

          <div className="text" dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </section>
    )
  );
}

export default Profile;
