// import { NavLink, useLocation } from "react-router-dom";
// import { dashboardRoutes } from "./navigation";

function Sidebar() {
  return (
    <div class="rounded-lg w-full p-8 bg-white">
      <div class="text-center text-xl font-bold mt-2 mb-4">John Doe</div>
      <div class="text-center text-gray-600 text-sm mt-1 mb-8">
        john.doe@example.com
      </div>
      <div class="flex justify-center">
        <img
          src="your-profile-image.jpg"
          alt="User Profile"
          class="w-32 h-32 rounded-full mb-4 bg-black"
        />
      </div>

      <div class="text-center my-4 mb-8">
        <button class="bg-secondary-500 whitespace-nowrap text-white py-4 px-16 rounded-lg hover:bg-secondary-600">
          Upload Photo
        </button>
      </div>

      <div class="flex flex-col gap-4 mt-4 text-center text-[#8C8C8F] border border-[#8C8C8F] text-xs bg-[#F0EFF5] rounded-lg p-4">
        <p>
          Upload a new picture. Larger image will be resized automatically.{" "}
        </p>
        <p>
          Maximum upload size is{" "}
          <span className="font-bold text-black">1MB</span>
        </p>
      </div>

      <div class="text-center text-gray-600 text-sm mt-4">
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
