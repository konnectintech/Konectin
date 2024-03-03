import { useEffect, useState } from "react";
import { useAuth } from "../../../../middleware/auth";

function UserInfo() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    college: "",
  });

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setDetails((prevDetails) => ({
        ...prevDetails,
        firstName: user?.fullname.split(" ")[0],
        lastName: user?.fullname.split(" ")[1],
        email: user?.email,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="w-full">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="firstName"
              className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={details?.firstName}
              onChange={handleChange}
              onInput={handleChange}
              className="h-[60px] rounded-lg border border-neutral-500 valid:bg-yellow-300 empty:bg-white px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="lastName"
              className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={details?.lastName}
              onChange={handleChange}
              onInput={handleChange}
              className="h-[60px] rounded-lg border border-neutral-500 bg-primary-100 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="emailAddress"
              className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={details?.email}
              onChange={handleChange}
              onInput={handleChange}
              className="h-[60px] rounded-lg border border-neutral-500 bg-primary-100 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="phoneNumber"
              className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              className="h-[60px] rounded-lg border border-neutral-500 bg-primary-100 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="country"
              className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              className="h-[60px] rounded-lg border border-neutral-500 bg-primary-100 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="city"
              className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="h-[60px] rounded-lg border border-neutral-500 bg-primary-100 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="college"
            className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
          >
            College / University Name
          </label>
          <textarea
            name="college"
            id="college"
            cols="30"
            rows="6"
            placeholder="College / University Name"
            className="resize-none rounded-lg border border-solid border-neutral-500 pt-6 px-4 pb-[18px] placeholder:text-neutral-400"
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="flex items-center justify-center rounded-lg border border-solid border-[#332A66] bg-[#403580] text-white font-bold text-base sm h-[60px] py-4 sm:py-8 w-44 sm:w-72"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserInfo;
