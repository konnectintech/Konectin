import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../middleware/auth";
import Preloader from "../../../../components/preloader";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [isFilled, setIsFilled] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    country: false,
    city: false,
    college: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuthContext();

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

  useEffect(() => {
    Object.entries(details).map((item) => {
      if (item[1].trim().length !== 0) {
        return setIsFilled((prev) => ({ ...prev, [item[0]]: true }));
      } else {
        return setIsFilled((prev) => ({ ...prev, [item[0]]: false }));
      }
    });
  }, [details]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
      case "lastName":
      case "email":
      case "phoneNumber":
      case "country":
      case "city":
      case "college":
        setIsFilled((prev) => ({ ...prev, [name]: value.trim().length !== 0 }));
        break;
      default:
        break;
    }
  };

  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { firstName, lastName, email, phoneNumber, country, city, college } =
      details;

    await axios
      .put(
        `${url}/v2/updateUser?userId=${user?._id}`,
        {
          fullname: `${firstName} ${lastName}`,
          email,
          phoneNumber,
          country,
          city,
          college,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(() => {
        setIsLoading(false);
        toast.success("User information updated successfully");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Information was not saved... Try again later");
      });
  };

  return (
    <form className="w-full" method="POST" onSubmit={handleSubmit}>
      {isLoading && <Preloader />}
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
              onBlur={handleBlur}
              className={`h-[60px] rounded-lg border border-neutral-500 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400 ${
                isFilled.firstName ? "bg-primary-100" : "bg-white"
              }`}
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
              onBlur={handleBlur}
              className={`h-[60px] rounded-lg border border-neutral-500 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400 ${
                isFilled.lastName ? "bg-primary-100" : "bg-white"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="email"
              className="hidden sm:block text-neutral-300 font-bold tracking-[-0.2px] cursor-pointer"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email Address"
              value={details?.email}
              onChange={handleChange}
              onInput={handleChange}
              onBlur={handleBlur}
              className={`h-[60px] rounded-lg border border-neutral-500 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400  ${
                isFilled.email ? "bg-primary-100" : "bg-white"
              }`}
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
              onChange={handleChange}
              onInput={handleChange}
              onBlur={handleBlur}
              className={`h-[60px] rounded-lg border border-neutral-500 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400 ${
                isFilled.phoneNumber ? "bg-primary-100" : "bg-white"
              }`}
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
              autoComplete="name"
              placeholder="Country"
              onChange={handleChange}
              onInput={handleChange}
              onBlur={handleBlur}
              className={`h-[60px] rounded-lg border border-neutral-500 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400 ${
                isFilled.country ? "bg-primary-100" : "bg-white"
              }`}
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
              onChange={handleChange}
              onInput={handleChange}
              onBlur={handleBlur}
              className={`h-[60px] rounded-lg border border-neutral-500 px-4 py-2 placeholder:text-neutral-400 text-xs outline-none focus:border-[1.7px] focus:border-primary-400 ${
                isFilled.city ? "bg-primary-100" : "bg-white"
              }`}
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
            onChange={handleChange}
            onInput={handleChange}
            onBlur={handleBlur}
            className={`resize-none rounded-lg border border-solid border-neutral-500 pt-6 px-4 pb-[18px] placeholder:text-neutral-400 ${
              isFilled.college ? "bg-primary-100" : "bg-white"
            }`}
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
