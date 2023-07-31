import { konectinLogo } from "../assets";

function Preloader() {
  return (
    <div className="fixed no-scrollbar w-full h-screen top-0 left-0 z-[100] flex">
      <div className="bg-neutral-100 opacity-70 absolute w-full h-full"></div>
      <div className="animate-pulse m-auto bg-white p-4 rounded-full">
        <img src={konectinLogo} alt="" />
      </div>
    </div>
  );
}

export default Preloader;
