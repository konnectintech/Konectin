function Profile({ data }) {
  return (
    data && (
      <section className="section">
        <div className="side-content">
          <h2>Profile</h2>
        </div>

        <div className="main-content">
          <div className="leading-relaxed list-none">
            <div dangerouslySetInnerHTML={{ __html: data }} />
          </div>
        </div>
      </section>
    )
  );
}

export default Profile;
