import { solution1, solution2, solution3, solution4 } from "../../../assets";
import { SolutionsCard } from "../../../components/cards";

export default function Solutions() {
  const data = [
    {
      id: 1,
      title: "AI-Powered ATS Standard Resume Builder",
      desc: "Use our AI-powered Resume Builder, specifically designed to meet ATS standards, to ensure your resume stands out.",
      cta: "Get Started Now",
      img: solution1,
      href: "/services/resume/options",
    },
    {
      id: 2,
      title: "Professional Resume Review & Edit",
      desc: "Take advantage of our resume review and edit service. A combination of human and machine learning technology that guarantees a well-crafted and powerful resume.",
      cta: "Upgrade Your Resume Now",
      img: solution2,
      href: "/services/resume/review",
    },
    {
      id: 3,
      title: "Professional Blog",
      desc: "Stay updated and informed with our Professionalism Blog. Gain essential knowledge needed to improve your employability and hasten your career advancement.",
      cta: "Explore Now",
      img: solution3,
      href: "/blog/all",
    },
    {
      id: 4,
      title: "Konectin Internship Program",
      desc: "Begin your professional journey with the Konectin Internship Program. Connect with companies offering enriching work experiences.",
      cta: "Enroll Now in Our Internship Program",
      img: solution4,
      href: "/services/internship/intern-application",
    },
  ];

  return (
    <div className="w-full lg:w-11/12 relative z-10 mx-auto max-w-screen-2xl flex flex-col gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-0">
      <div className="flex flex-col gap-1 md:gap-4">
        <h4 className="text-3xl md:text-4xl !leading-snug font-semibold text-neutral-100 max-w-2xl">
          We are Bridging the Gap between{" "}
          <span className="text-secondary-500">Skill</span> and{" "}
          <span className="text-primary-400">Opportunity</span>.
        </h4>
        <p className="w-10/12 text-neutral-200 max-w-lg">
          Explore our innovative suite of resources, meticulously designed to
          cater to the unique needs of the African job and education sectors.
        </p>
      </div>
      <div className="solutions flex flex-col gap-12 overflow-hidden">
        {data.map((item, index) => (
          <SolutionsCard
            key={index}
            item={item}
            direction={index % 2 === 0 ? "ltr" : "rtl"}
            total={data.length}
            bgColor="rgb(245,245,245)"
          />
        ))}
      </div>
    </div>
  );
}
