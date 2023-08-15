function Profile({ data }) {
  return (
    data && (
      <section>
        <h2>Profile</h2>

        <div className="list-none">
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </section>
    )
  );
}

export default Profile;
