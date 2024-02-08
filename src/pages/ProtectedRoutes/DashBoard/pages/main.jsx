import React from "react";
import { Outlet } from "react-router-dom";
import { newdashboardRoutes } from "../layout/navigation";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="sm:bg-white rounded-lg mt-10 sm:my-0 flex flex-col gap-10 bg-primary-100">
      <div className="flex flex-col gap-8 sm:bg-primary-600 sm:text-white sm:pt-6 px-12 sm:rounded-tl-lg sm:rounded-tr-lg">
        <div className=" font-extrabold text-3xl hidden sm:block">Edit Profile</div>
        <div className="flex items-center gap-6 sm:gap-0">
          {newdashboardRoutes.map((route) => (
            <NavLink
              to={`/dashboard${route.path}`}
              className={({isActive}) => 
                isActive 
                ? "cursor-pointer py-2.5 sm:px-[18px] text-xs sm:text-xl font-bold border-b-2 sm:border-b-[3px] border-secondary-600 text-neutral-300 sm:text-white  whitespace-nowrap" 
                : "border-b-[3px] border-transparent text-neutral-300 sm:text-neutral-600 py-2.5 sm:px-[18px] text-xs sm:text-xl font-bold sm:hover:text-white whitespace-nowrap"
              }
              aria-current={route.current ? "page" : undefined}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;