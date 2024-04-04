// import { useState } from "react"

export default function FilterMenu() {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="w-56 h-60 px-3 py-9 flex flex-col gap-2 rounded mt-3 bg-white">
        <div className="h-[34px] border border-solid border-black rounded p-1.5 flex justify-center items-center">
          <input
            type="text"
            className="placeholder:text-neutral-500"
            name="custom-search"
            id="custom-search"
            placeholder="Custom search"
          />
          <button className="rounded-full bg-[#f5f5f5]">
            <img src={"#"} alt="Custom search" />
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
      </div>
    </>
  );
}
