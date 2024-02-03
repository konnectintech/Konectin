import React from "react";


function UserInfo() {
  return <div className="py-14 px-12">
    <div className="">
      <form action="#">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="firstName" className="text-[#66666A] text-xl font-bold tracking-[-0.2px]">First Name</label>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" className="h-[60px] rounded-lg border border-solid border-[#B2B3B4] bg-[#F0EFF5] pt-6 px-4 pb-[18px] placeholder:text-[#8C8C8F]" />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="lastName" className="text-[#66666A] text-xl font-bold tracking-[-0.2px]">Last Name</label>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="h-[60px] rounded-lg border border-solid border-[#B2B3B4] bg-[#F0EFF5] pt-6 px-4 pb-[18px] placeholder:text-[#8C8C8F]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="emailAddress" className="text-[#66666A] text-xl font-bold tracking-[-0.2px]">Email Address</label>
            <input type="email" name="emailAddress" id="emailAddress" placeholder="Email Address" className="h-[60px] rounded-lg border border-solid border-[#B2B3B4] bg-[#F0EFF5] pt-6 px-4 pb-[18px] placeholder:text-[#8C8C8F]" />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="phoneNumber" className="text-[#66666A] text-xl font-bold tracking-[-0.2px]">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" className="h-[60px] rounded-lg border border-solid border-[#B2B3B4] bg-[#F0EFF5] pt-6 px-4 pb-[18px] placeholder:text-[#8C8C8F]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="country" className="text-[#66666A] text-xl font-bold tracking-[-0.2px]">Country</label>
            <input type="text" name="country" id="country" placeholder="Country" className="h-[60px] rounded-lg border border-solid border-[#B2B3B4] bg-[#F0EFF5] pt-6 px-4 pb-[18px] placeholder:text-[#8C8C8F]" />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="city" className="text-[#66666A] text-xl font-bold tracking-[-0.2px]">City</label>
            <input type="text" name="city" id="city" placeholder="City" className="h-[60px] rounded-lg border border-solid border-[#B2B3B4] bg-[#F0EFF5] pt-6 px-4 pb-[18px] placeholder:text-[#8C8C8F]" />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="college" className="text-[#66666A] text-xl font-bold tracking-[-0.2px]">College / University Name</label>
            <textarea name="college" id="college" cols="30" rows="6" placeholder="College / University Name" className="resize-none rounded-lg border border-solid border-[#B2B3B4] pt-6 px-4 pb-[18px] placeholder:text-[#8C8C8F]"></textarea>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button type="submit" className="flex items-center justify-center rounded-lg border border-solid border-[#332A66] bg-[#403580] text-white font-bold text-xl h-[60px] py-8 w-72">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>;
}

export default UserInfo;
