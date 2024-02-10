function Profile({ data }) {
  return (
    data && (
      <section className="section">
        <style>
          {`
           .profile-section {
            padding: 20px;
            padding-bottom: 0;
          }
          
          .highlight-bar {
            border: 2px solid #3F3EF4;
            background: #3F3EF4;
            width: 100px;
            margin:0.5rem 0;
            border-radius:5px;
          }
          .text{
            font-family:poppins;
            font-size:10px;
            color:#333333
          }
          `}
        </style>
        <div className="profile-section">
          <h2>About me</h2>
          <div className="highlight-bar" />

          <div className="text" dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </section>
    )
  );
}

export default Profile;
