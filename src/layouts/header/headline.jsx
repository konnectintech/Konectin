import { Link } from "react-router-dom";
import { megaSpeakerIcon } from "../../assets";
import { TiArrowRight } from "react-icons/ti";

function Headline({ message, pageTo }) {
  return (
    <section className="w-full py-4 px-2 text-center bg-primary-500 text-white flex gap-3 items-center justify-center">
      <img src={megaSpeakerIcon} alt={message} />
      <p>{message}</p>
      <Link to={pageTo}>
        <TiArrowRight size="1.6rem" />
      </Link>
    </section>
  );
}

export default Headline;
