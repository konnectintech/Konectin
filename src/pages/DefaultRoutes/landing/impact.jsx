import { useState, useEffect, useRef } from "react";
import { impact, graduate, workers } from "../../../assets";
import { animate, useInView } from "framer-motion";

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
    <section className="bg-primary-500">
      <div className="w-full lg:w-11/12 relative z-10 mx-auto max-w-screen-2xl flex flex-col gap-10 lg:gap-12 py-16 px-2 xxs:px-4 lg:px-0">
        <div className="space-y-20 md:space-y-8">
          <div>
            <h4 className="max-w-xl tracking-tighter sm:tracking-normal bg-gradient-to-r from-white from-5% via-[#3DF110] via-35% to-secondary-600 to-65% bg-clip-text text-transparent text-3xl md:text-4xl md:!leading-snug font-semibold">
              Empowering Africa’s Future: Our Impact, Their Success
            </h4>
          </div>

          <div className="flex flex-col gap-12 md:flex-row md:gap-14">
            <div className="flex-1 flex items-center">
              <img src={impact} alt="Empower Africa" />
            </div>
            <div className="flex-1 space-y-8">
              {data.map((item, index) => (
                <ImpactCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImpactCard({ item }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, item.numbers, {
        duration: 1,
        onUpdate(value) {
          setCount(value.toFixed(0));
        },
      });
      return () => controls.stop();
    } else {
      setCount(0);
    }
  }, [inView, item.numbers]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-6 rounded-2xl bg-white p-6 lg:p-12"
    >
      <div className="flex items-center justify-center bg-neutral-800 rounded-tl-3xl rounded-br-3xl w-32 h-24">
        <img
          src={item.src}
          alt={item.title}
          style={{ maxWidth: "100%", height: "auto" }}
          className="w-10 h-10"
        />
      </div>

      <div className="flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-start w-full">
        <p className="text-secondary-600 text-3xl">{count}</p>
        <p className="text-2xl truncate">{item.title}</p>
      </div>
    </div>
  );
}
