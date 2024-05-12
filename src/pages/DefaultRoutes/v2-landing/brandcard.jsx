import { logos } from "../../../utils/logos";

export default function BrandCard() {
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
