function Profile({ data }) {
  return (
    data && (
      <section className="section py-4 underline__bottom">
        <div>
          <h2>Profile</h2>
          <div
            className="sub-content"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
      </section>
    )
  );
}

export default Profile;
