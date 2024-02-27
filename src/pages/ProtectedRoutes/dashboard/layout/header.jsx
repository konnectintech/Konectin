import { NavLink } from "react-router-dom";
import { dashboardRoutes } from "./navigation";

function Header() {
  return (
    <div className="flex flex-col gap-3 sm:bg-primary-600 sm:text-white sm:pt-6 px-10 sm:rounded-tl-lg sm:rounded-tr-lg">
      <h1 className="text-3xl !leading-normal font-semibold hidden sm:block">
        Edit Profile
      </h1>

      <div className="flex items-center text-sm gap-6">
        {dashboardRoutes.map((route) => (
          <NavLink
            key={route.path}
            to={`/dashboard${route.path}`}
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer font-bold border-b-2 sm:border-b-[3px] border-secondary-600 text-neutral-300 sm:text-white whitespace-nowrap py-2.5"
                : "border-b-[3px] border-transparent text-neutral-300 sm:text-neutral-600 font-bold sm:hover:text-white whitespace-nowrap py-2.5"
            }
            aria-current={route.current ? "page" : undefined}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
