// import { useState } from "react"
import { search, chevronUpArrow } from "../../../../assets";

export default function FilterMenu() {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="w-56 h-60 px-3 py-9 flex flex-col gap-2 rounded mt-3 bg-white">
        <div className="h-[34px] border border-solid border-black rounded p-1.5 flex justify-center items-center gap-1">
          <input
            type="text"
            className="placeholder:text-neutral-500 w-5/6"
            name="custom-search"
            id="custom-search"
            placeholder="Custom search"
          />
          <button className="rounded-full bg-[#f5f5f5] w-6 h-6 flex justify-center items-center">
            <img src={search} alt="Custom search" />
          </button>
        </div>
        <div className="h-[34px] p-1.5 hover:bg-[#f5f5f5] cursor-pointer rounded">
          <p>Oldest to Newest</p>
        </div>
        <div className="h-[34px] p-1.5 hover:bg-[#f5f5f5] cursor-pointer rounded">
          <p>Newest to Oldest</p>
        </div>
        <div className="h-[34px] p-1.5 hover:bg-[#f5f5f5] cursor-pointer rounded">
          <p>Latest Edit</p>
        </div>
        <div className="h-[34px] p-1.5 hover:bg-[#f5f5f5] cursor-pointer rounded">
          <img src={chevronUpArrow} alt="chevron up" />
        </div>
      </div>
    </>
  );
}