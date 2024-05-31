export default function Benefits() {
  const data = [
    {
      id: "01",
      title: "Exceptional Resume Builder",
      desc: "With our resume builder, make a lasting first impression on recruiters. Showcase your skills and experiences to a global network of employers. Take the first step towards landing your dream internship- start building your standout resume with us today.",
    },
    {
      id: "02",
      title: "Direct Connections with Recruiters",
      desc: "Take advantage of great chances and get in touch with recruiters who are looking for candidates with your kind of experience.  We ensure the utmost transparency in your interactions with potential employers, paving the way for a trust-filled professional journey.",
    },
    {
      id: "03",
      title: "Recruit Qualified Candidates",
      desc: "At Konectin, we bridge the gap between you and the ideal candidates, whether professionals seeking employment or interns with diverse skill sets. Use our platform to connect with proficient individuals and enhance your organization's growth.",
    },
    {
      id: "04",
      title: "Cost Effective Solution",
      desc: "Unlock Success with Konectin Experience the perfect blend of quality and affordability with Konectin's premium career solutions. We're committed to supporting your professional journey cost-effectively. With Konectin, achieving your career goals is not just feasible, it's also budget-friendly.",
    },
    {
      id: "05",
      title: "Trust and Transparency",
      desc: "Konectin guarantees a seamless experience. We uphold the highest standards of authenticity and transparency in all interactions, ensuring your engagements with potential employers or candidates are transparent and reliable.",
    },
    {
      id: "06",
      title: "Reliable Support",
      desc: "At Konectin, our devoted team is always on standby to assist whenever you need it. Our dedicated team at Konectin is always available to ensure a seamless and remarkable experience for you.",
    },
  ];
  return (
    <section className="bg-whites-200">
      <div className="w-full lg:w-11/12 relative z-10 mx-auto max-w-screen-2xl flex flex-col gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-0">
        <div className="flex flex-col gap-1 md:gap-4">
          <h4 className="text-3xl md:text-4xl md:tracking-tight font-semibold text-neutral-100">
            What We <span className="text-secondary-600">Offer</span>
          </h4>
          <p className="max-w-xl text-sm md:text-base text-neutral-200">
            Whether you're a higher education institution seeking a versatile
            program collaborator or a business organization striving to attract,
            retain, and nurture your workforce, Konectin is your ally.
          </p>
        </div>
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-[30px]">
          {data.map((item, index) => (
            <BenefitCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitCard({ item }) {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 bg-white py-8 px-6 md:p-10 rounded-[10px] md:rounded-xl hover:bg-whites-200 hover:shadow-2xl">
      <div className="w-full flex justify-end">
        <p className="font-bold text-4xl md:text-5xl">{item.id}</p>
      </div>
      <div className="flex flex-col gap-2.5 md:gap-3.5">
        <p className="font-bold text-lg md:text-xl text-neutral-100 tracking-tighter sm:tracking-normal">
          {item.title}
        </p>
        <p className="text-neutral-200 text-sm md:text-base">{item.desc}</p>
      </div>
    </div>
  );
}
