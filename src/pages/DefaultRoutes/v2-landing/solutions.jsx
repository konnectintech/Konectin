import {
  solution1,
  solution2,
  solution3,
  solution4,
  arrowRight,
} from "../../../assets";

export default function Solutions() {
  const data = [
    {
      id: 1,
      title: "AI-Powered ATS Standard Resume Builder",
      desc: "Use our AI-powered Resume Builder, specifically designed to meet ATS standards, to ensure your resume stands out.",
      cta: "Get Started Now",
      img: solution1,
    },
    {
      id: 2,
      title: "Professional Resume Review & Edit",
      desc: "Take advantage of our resume review and edit service. A combination of human and machine learning technology that guarantees a well-crafted and powerful resume.",
      cta: "Upgrade Your Resume Now",
      img: solution2,
    },
    {
      id: 3,
      title: "Professional Blog",
      desc: "Stay updated and informed with our Professionalism Blog. Gain essential knowledge needed to improve your employability and hasten your career advancement.",
      cta: "Explore Now",
      img: solution3,
    },
    {
      id: 4,
      title: "Konectin Internship Program",
      desc: "Begin your professional journey with the Konectin Internship Program. Connect with companies offering enriching work experiences.",
      cta: "Enroll Now in Our Internship Program",
      img: solution4,
    },
  ];
  return (
    <div className="flex flex-col py-16 px-6 md:px-20 md:py-28 gap-10 md:gap-20">
      <div className="flex flex-col gap-1 md:gap-4">
        <p className="text-3xl md:text-4xl md:tracking-tight font-extrabold text-neutral-100">
          We are Bridging the Gap between{" "}
          <span className="text-secondary-500">Skill</span> and{" "}
          <span className="text-primary-400">Opportunity</span>.
        </p>
        <p className="w-10/12 text-sm text-neutral-200 md:text-xl">
          Explore our innovative suite of resources, meticulously designed to
          cater to the unique needs of the African job and education sectors.
        </p>
      </div>
      <div className="solutions flex flex-col gap-10">
        {data.map((item, index) => (
          <SolutionsCard key={index} item={item} total={data.length} />
        ))}
      </div>
    </div>
  );
}

export function SolutionsCard({ item, total }) {
  return (
    <div className="group flex flex-col md:flex-row justify-between md:h-[540px] md:py-5 bg-white gap-4">
      <div className="md:group-odd:order-2 flex flex-col justify-center gap-4 md:w-[58ch] md:h-[500px]">
        <div className="flex flex-col gap-3 md:gap-2">
          <p className="text-xs md:text-lg md:font-medium text-neutral-200">
            <span>{item.id}</span> of <span>{total}</span>
          </p>
          <p className="text-xl text-neutral-100 md:text-4xl md:tracking-tight font-bold">
            {item.title}
          </p>
          <p className="text-neutral-200 text-sm md:text-xl md:font-medium">
            {item.desc}
          </p>
        </div>
        <button className="px-4 py-3 flex items-center justify-center gap-2.5 w-fit">
          <span className="text-secondary-600 font-bold text-sm md:text-2xl">{item.cta}</span>
          <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="md:group-odd:order-1 bg-whites-200 md:w-6/12 rounded-lg md:rounded-2xl p-5 md:py-24 md:px-10">
        <img src={item.img} alt={item.title} />
      </div>
    </div>
  );
}
