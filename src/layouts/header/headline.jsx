import { Link } from "react-router-dom";
import { megaSpeakerIcon } from "../../assets";
import { TiArrowRight } from "react-icons/ti";

function Headline({ message, pageTo }) {
  return (
    <section className="max-sm:mx-2 max-sm:mt-3 max-sm:rounded sm:w-full py-4 px-3 xxs:px-4 bg-primary-500 text-white flex gap-2 sm:gap-3 items-center justify-between sm:justify-center">
      <img className="max-sm:hidden" src={megaSpeakerIcon} alt={message} />
      <p className="max-xxs:text-xs">{message}</p>
      <Link to={pageTo}>
        <TiArrowRight size="1.6rem" />
      </Link>
    </section>
  );
}

export default Headline;
