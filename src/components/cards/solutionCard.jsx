import { Link } from "react-router-dom";
import { arrowRight } from "../../assets";

function SolutionsCard({ item, total }) {
  return (
    <div className="group flex flex-col md:flex-row justify-between bg-white gap-4 md:gap-16 lg:gap-24">
      <div className="md:group-odd:order-2 flex flex-1 flex-col justify-center gap-4">
        <div className="flex flex-col gap-3 md:gap-2">
          <p className="text-xs md:text-sm text-neutral-200">
            <span>{item.id}</span> of <span>{total}</span>
          </p>
          <h5 className="text-xl text-neutral-100 md:text-4xl !leading-tight font-semibold">
            {item.title}
          </h5>
          <p className="text-neutral-200">{item.desc}</p>
        </div>
        {item.cta && (
          <Link to={item.href} className="flex gap-2.5 items-center w-fit">
            <span className="text-secondary-600 font-semibold">{item.cta}</span>
            <img src={arrowRight} className="w-5" alt="" />
          </Link>
        )}
      </div>

      <div className="md:group-odd:order-1 bg-whites-200 flex-1 rounded-lg md:rounded-2xl p-5 md:py-16 md:px-10">
        <img src={item.img} alt={item.title} />
      </div>
    </div>
  );
}

export default SolutionsCard;
