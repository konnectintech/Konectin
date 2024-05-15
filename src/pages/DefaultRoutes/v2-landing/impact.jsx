import { impact, graduate, workers } from "../../../assets";

export default function Impact() {
  const data = [
    {
      src: graduate,
      numbers: 10897,
      title: "Students Enrolled",
    },
    {
      src: workers,
      numbers: 22854,
      title: "Professionals Advancing",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row bg-primary-500 py-16 px-6 md:px-20 md:py-28">
      <div className="flex flex-col gap-y-20 md:gap-y-28 md:gap-x-16">
        <div>
          <p className="min-w-[17ch] tracking-tighter sm:tracking-normal md:w-[24ch] bg-gradient-to-r from-white from-5% via-[#3DF110] via-35% to-secondary-600 to-65% bg-clip-text text-transparent text-3xl md:text-4xl font-extrabold">
            Empowering Africa’s Future: Our Impact, Their Success
          </p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-14">
          <div className="flex items-center justify-center md:w-[48%]">
            <img src={impact} alt="Empower Africa" />
          </div>
          <div className="flex flex-col gap-[76px] md:w-[52%] justify-center">
            {data.map((item, index) => (
              <ImpactCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImpactCard({ item }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-11 rounded-2xl bg-white p-12">
      <div className="flex items-center justify-center bg-neutral-800 rounded-tl-3xl rounded-br-3xl md:w-52 md:h-fit p-9 md:p-12">
        <img
          src={item.src}
          alt={item.title}
          style={{ maxWidth: "100%", height: "auto" }}
          className="w-20 h-20"
        />
      </div>

      <div className="flex flex-col gap-6 items-center md:items-start justify-center w-full">
        <p className="text-secondary-600 font-black text-5xl text-center whitespace-nowrap md:text-start">
          {item.numbers}
        </p>
        <p className="font-medium md:tracking-tight text-2xl md:text-3xl text-center whitespace-nowrap md:text-start">
          {item.title}
        </p>
      </div>
    </div>
  );
}
