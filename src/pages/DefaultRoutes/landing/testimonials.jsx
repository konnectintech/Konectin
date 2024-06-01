import { person1, person2, person3, person4 } from "../../../assets";
import InfiniteLooper from "../../../components/infiniteScroller";

export default function Testimonials() {
  const data = [
    {
      src: person1,
      name: "Chimwe Obi",
      job: "Fullstack Developer",
      review:
        "Konectin was a game-changer for me. The intuitive resume builder and AI-powered suggestions helped me highlight my strengths in unique ways. I landed my dream job at a top tech company within weeks of using Konectin. Highly recommended.",
    },
    {
      src: person2,
      name: "Kwame Mensah",
      job: "Fullstack Developer",
      review:
        "I was struggling with my job search until I discovered Konectin. The platform is easy to use, and the templates are professional and customizable. I created a standout resume and cover letter, and I got a job offer from a leading marketing firm. Thank you, Konectin.",
    },
    {
      src: person3,
      name: "Amina Yusuf",
      job: "Fullstack Developer",
      review:
        "Konectin made the daunting task of resume and cover letter creation a breeze. The real-time editing feature and the ability to import information from LinkedIn saved me so much time. I secured a job at a prestigious financial institution thanks to Konectin. It's a must-use platform for job seekers!",
    },
    {
      src: person4,
      name: "Hudson Oboh",
      job: "Fullstack Developer",
      review:
        "Konectin made the daunting task of resume and cover letter creation a breeze. The real-time editing feature and the ability to import information from LinkedIn saved me so much time. I secured a job at a prestigious financial institution thanks to Konectin. It's a must-use platform for job seekers!",
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-16 px-6 md:p-28">
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="hidden md:block text-secondary-500 font-medium">
          Success Stories from Our Users
        </p>
        <>
          <div className="md:hidden">
            <h4 className="font-semibold text-3xl leading-10">
              Our Testimonials
            </h4>
            <p className="text-neutral-200">
              Nothing speaks louder than success. Hear from our users who have
              transformed their career journey with Konectin. From crafting
              compelling resumes to landing their dream jobs, their stories are
              sure to inspire you.
            </p>
          </div>
          <div className="hidden md:block text-center">
            <h4 className="text-4xl font-semibold">
              Real Stories from Real People
            </h4>
            <p className="w-[76ch]">
              Explore the inspiring journeys of job seekers and recruiters who
              have benefitted from Konectin's innovative solution. .
            </p>
          </div>
        </>
      </div>
      <div className="flex flex-col gap-7 md:hidden select-none">
        {data.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>
      <div className="hidden md:flex flex-col gap-11 -mx-28 select-none">
        <InfiniteLooper speed={70} direction="left" holdable>
          {data.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </InfiniteLooper>
        <InfiniteLooper speed={70} direction="right" holdable>
          {data.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </InfiniteLooper>
      </div>
    </div>
  );
}

export function TestimonialCard({ item }) {
  return (
    <div className="relative flex flex-col md:flex-row md:px-9 md:py-10 md:w-[850px]  md:h-52 bg-neutral-900 gap-4 md:gap-6 rounded-lg md:rounded items-center justify-center hover:bg-neutral-700 hover:shadow-xl">
      <div className="md:w-[500px] md:grow md:order-3 h-full flex items-center justify-center px-6 py-7">
        <p className="text-sm md:text-base font-medium text-neutral-300 hover:text-neutral-100">
          {item.review}
        </p>
      </div>

      <div className="hidden md:flex md:order-2 h-full border-l-2 border-solid border-neutral-700 hover:border-neutral-600"></div>
      <div className="h-full md:w-72 md:p-0 border-t border-solid border-neutral-700 md:border-t-0 rounded-b-lg md:rounded-sm w-full flex  items-center md:justify-center bg-whites-200 px-8 py-7 hover:bg-neutral-900">
        <div className="flex items-center gap-2.5">
          <img
            className="w-12 h-12 rounded-md md:w-14 md:h-14 md:rounded-lg"
            src={item.src}
            alt={item.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div className="md:order-1 flex flex-col w-full">
            <p className="font-bold md:text-lg whitespace-nowrap">
              {item.name}
            </p>
            <p className="text-sm md:text-base whitespace-nowrap">{item.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
}