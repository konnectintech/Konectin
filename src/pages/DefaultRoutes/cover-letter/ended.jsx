function Ended({ data }) {
  const handleSubmit = () => {
    console.log("first");
  };

  return (
    <div className="flex items-center flex-col">
      <h2 className="py-4 mb-3 font-bold text-2xl md:text-4xl leading-10">
        <span className=" text-secondary-500">Great! </span>
        You've provided all the necessary information.
      </h2>
      <p className="w-full max-w-2xl text-center ">
        Now, let's create a compelling cover letter that truly showcases your
        unique skills and passion for the role.{" "}
      </p>
      <button
        type="submit"
        className="text-white mt-4 w-fit rounded-md bg-primary-600 py-3 px-12"
        onClick={handleSubmit}
      >
        Create Cover Letter
      </button>
    </div>
  );
}

export default Ended;
