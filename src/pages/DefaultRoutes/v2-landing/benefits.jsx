export default function Benefits() {
  const data = [
    {
      id: "01",
      title: "A unique resume builder",
      desc: "Create a long lasting first impression in the minds of recruiters. Make an attractive presentation of your skills and experiences to a vast number of employers all over the world and get hired now",
    },
    {
      id: "02",
      title: "Connect directly with recruiters",
      desc: "Discover millions of incredible opportunities and connect with recruiters that yearn for talents like yours. Every of your dealings with your potential employers are made as transparent as possible",
    },
    {
      id: "03",
      title: "Hire qualified candidates",
      desc: "At Konectin we help to provide you with the right candidates, be it job seekers or interns who are skilled in diverse fields. Take this step to connect with skilled experts and advance in your career",
    },
    {
      id: "04",
      title: "Cost-Effective Career Solutions",
      desc: "Konectin offers top-notch career solutions at unbeatable prices. We provide quality, affordability, and excellence in one package, making your journey to professional success both accessible and budget-friendly",
    },
    {
      id: "05",
      title: "100% Trust",
      desc: "Incorporated in Delaware, USA, we assure you of a glitch free experience. You can be assured of validity and transparency in every of your dealings with your potential employers or candidates",
    },
    {
      id: "06",
      title: "Dedicated Support",
      desc: "Our dedicated team is always ready to assist you whenever you need help, ensuring you have the best experience possible with Konectin",
    },
  ];
  return (
    <div className="flex flex-col py-16 px-6 md:px-20 md:py-28 bg-[#f5f5f5] gap-10 md:gap-20">
      <div className="flex flex-col gap-1 md:gap-4">
        <p className="text-3xl md:text-4xl md:tracking-tight font-extrabold text-neutral-100">
          What We <span className="text-secondary-600">Offer</span>
        </p>
        <p className="w-10/12 text-sm text-neutral-200 md:text-xl">
          Whether you're a higher education institution seeking a versatile
          program collaborator or a business organization striving to attract,
          retain, and nurture your workforce, Konectin is your ally.
        </p>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-[30px]">
        {data.map((item, index) => (
          <BenefitCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export function BenefitCard({ item }) {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 bg-white py-8 px-6 md:p-10 rounded-[10px] md:rounded-xl hover:bg-whites-200 hover:shadow-2xl ">
      <div className="w-full flex justify-end">
        <p className="font-extrabold text-4xl md:text-5xl">{item.id}</p>
      </div>
      <div className="flex flex-col gap-2.5 md:gap-3.5 mb-10">
        <p className="font-extrabold text-xl md:text-2xl text-neutral-100 tracking-tighter sm:tracking-normal">
          {item.title}
        </p>
        <p className="text-neutral-200 text-sm md:text-xl">{item.desc}</p>
      </div>
    </div>
  );
}
