import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { dashboardRoutes } from "../layout/navigation";

function Main() {
  return (
    <div className="bg-white rounded-lg">
      <div className=" flex flex-col gap-8 bg-primary-600 text-white p-4 px-8 rounded-lg debug">
        <div className=" font-[900] text-4xl debug">Edit Profile</div>
        <div className="flex items-center gap-4 debug">
          {dashboardRoutes.map((route) => (
            <NavLink
              to={`/dashboard${route.path}`}
              className="text-white cursor-pointer "
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
