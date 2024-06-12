import { useCountUp } from "../../../../../utils/useCountUp";

export default function Impact() {
  const data = [
    {
      number: 3000,
      remark: "Resumes Edited & Reviewed",
    },
    {
      number: 2783,
      remark: "Happy Customers",
    },
    {
      number: 5568,
      remark: "Interviews Landed",
    },
  ];

  return (
    <section className="bg-primary-500 py-24 px-16">
      <div className="text-white flex flex-col items-center justify-center gap-12">
        <p className="text-2xl md:text-3xl font-bold">Our Impact so far</p>
        <div className="flex gap-6 w-full items-center justify-center ">
          {data.map((item, index) => (
            <ImpactCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const ImpactCard = ({ item }) => {
  const [ref, count] = useCountUp(0, item.number, 1);
  return (
    <div
      ref={ref}
      className="w-[480px] flex flex-col items-center justify-center gap-1"
    >
      <div>
        <p className="text-3xl md:text-5xl font-bold gap-2.5 flex">
          <span>{count}</span>
          <span className="text-orange-600">+</span>
        </p>
      </div>
      <p className="text-xs md:text-xl whitespace-nowrap">{item.remark}</p>
    </div>
  );
};
