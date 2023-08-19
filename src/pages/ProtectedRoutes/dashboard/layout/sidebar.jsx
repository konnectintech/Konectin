import { NavLink, useLocation } from "react-router-dom";
import { dashboardRoutes } from "./navigation";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="bg-neutral-1000 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-10 mt-4">
        {dashboardRoutes.map((route, index) => (
          <NavLink
            key={route + index}
            className={`${
              pathname.split("/")[1] === route.name.toLowerCase() ||
              (pathname.split("/")[1] === "dashboard" &&
                route.name.toLowerCase() === "jobs")
                ? "text-primary-500 bg-primary-500 bg-opacity-25 border-l-[6px] rounded-l-md border-primary-500 ml-1"
                : "text-neutral-100"
            } flex items-center gap-4 px-4 py-2`}
          >
            <img src={route.icon} alt={route.name} />
            <h4>{route.name}</h4>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
