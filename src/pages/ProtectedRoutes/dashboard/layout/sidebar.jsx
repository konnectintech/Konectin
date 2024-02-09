// import { NavLink, useLocation } from "react-router-dom";
// import { dashboardRoutes } from "./navigation";
import { uploadIcon } from "../../../../assets";

function Sidebar() {
  return (
    <div className="rounded-lg w-full py-3.5 px-4 md:p-8 bg-white flex md:flex-col items-center sm:justify-center gap-11 sm:gap-8">
      <div className="w-full order-2 sm:order-1 sm:my-3 flex flex-col gap-4">
        <div className=" sm:text-center text-xl font-bold">John Doe</div>
        <div className="sm:text-center text-gray-600 text-sm">
          john.doe@example.com
        </div>
      </div>
      
      <div className="relative flex justify-center order-1 sm:order-2">
        <img
          src="your-profile-image.jpg"
          alt="User Profile"
          className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-neutral-grey"
        />
        <button type="submit" className="sm:hidden absolute bottom-0 w-20 h-10 rounded-b-full flex justify-center items-center bg-[#00000066] opacity-0 transition-opacity hover:opacity-100">
          <img src={uploadIcon} alt="Upload" />
        </button>
        
      </div>

      <div className="hidden sm:block text-center order-3">
        <button className="bg-secondary-500 whitespace-nowrap text-white py-4 px-16 rounded-lg hover:bg-secondary-600">
          Upload Photo
        </button>
      </div>

      {/* mt-4 */}
      <div className="order-4 hidden sm:flex sm:mt-3.5 flex-col gap-4  text-center text-[#8C8C8F] border border-[#8C8C8F] text-xs bg-[#F0EFF5] rounded-lg p-4">
        <p>
          Upload a new picture. Larger image will be resized automatically.{" "}
        </p>
        <p>
          Maximum upload size is{" "}
          <span className="font-bold text-black">1MB</span>
        </p>
      </div>

      
      <div className="order-5 hidden sm:block text-center text-gray-600 text-sm">
        Member Since:{" "}
        <span className="font-bold text-black">October 1, 2020</span>
      </div>
    </div>
  );
}

export default Sidebar;

// const { pathname } = useLocation();
// return (
//   <div className="bg-neutral-1000 flex flex-col justify-between h-full">
//     <div className="flex flex-col gap-10 mt-4">
//       {dashboardRoutes.map((route, index) => (
//         <NavLink
//           key={route + index}
//           className={`${
//             pathname.split("/")[1] === route.name.toLowerCase() ||
//             (pathname.split("/")[1] === "dashboard" &&
//               route.name.toLowerCase() === "jobs")
//               ? "text-primary-500 bg-primary-500 bg-opacity-25 border-l-[6px] rounded-l-md border-primary-500 ml-1"
//               : "text-neutral-100"
//           } flex items-center gap-4 px-4 py-2`}
//         >
//           <img src={route.icon} alt={route.name} />
//           <h4>{route.name}</h4>
//         </NavLink>
//       ))}
//     </div>
//   </div>
// );
// }
