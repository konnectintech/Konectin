import BrandCard from "./brandcard";

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
