import { logos } from "../../../utils/logos";


export default function Brands() {
  return (
    <div className="p-6 md:p-28 flex gap-y-12 md:gap-y-6 flex-col items-center bg-neutral-1000">
      <p className="text-sm md:text-3xl">
        Our users have landed <span className="text-secondary-600">jobs</span>{" "}
        at: <span className="font-extrabold">*</span>
      </p>
      <div className="bg-white flex items-center justify-between p-8 rounded-xl border border-solid border-off_white w-full h-36">
        <BrandCard />
      </div>
    </div>
  );
}

export function BrandCard() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {logos &&
        logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-10 py-7 h-9 w-40 border-r border-solid border-[#f5f5f5] last:border-r-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        ))}
    </div>
  );
}