import axios from "axios";
import { useNavigate } from "react-router";
import { useCVData } from "../../../../middleware/cv";

function CreateLetter() {
  const { CVData, setCVData } = useCVData();
  const navigate = useNavigate();
  const primaryURL = import.meta.env.VITE_CLIENT_SERVER_URL;

  const handleSubmit = async () => {
    navigate("/cover-letter/editor");
    // await axios
    //   .post(`${primaryURL}/letter`, CVData)
    //   .then((res) => {
    //     setCVData({ ...res.data.data });
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center flex-col">
      <h2 className="py-4 mb-3 font-bold text-2xl md:text-4xl leading-10">
        <span className="text-secondary-500">Great! </span>
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

export default CreateLetter;
