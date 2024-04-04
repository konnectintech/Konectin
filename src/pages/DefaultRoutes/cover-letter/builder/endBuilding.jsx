import { useNavigate } from "react-router-dom";
import img from "../../../../assets/images/bot/bot.svg";

function EndBuilding({ data }) {
  // const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");

    if (data) {
      // setErrorMessage("Error with CV data")
      // console.log(data);
      navigate("/cover-letter/display");
    }
  };

  return (
    <div className="flex flex-col items-center lg:w-3/4 px-12 lg:px-32 text-center">
      <img src={img} alt="bot__image" width={180} height={180} />

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
    </div>
  );
}

export default EndBuilding;
