import { Outlet } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { dashboardRoutes } from "../layout/navigation";

function Main() {
  return (
    <div className="bg-white rounded-lg">
<<<<<<< HEAD
      <div className=" flex flex-col gap-8 bg-primary-600 text-white pt-6 px-12 rounded-tl-lg rounded-tr-lg">
        <div className=" font-extrabold text-3xl ">Edit Profile</div>
        <div className="flex items-center">
          {newdashboardRoutes.map((route) => (
            <NavLink
              to={`/dashboard${route.path}`}
              className={({isActive}) => 
                isActive 
                ? "cursor-pointer py-2.5 px-[18px] text-xl font-bold border-b-[3px] border-secondary-600 text-white" 
                : "text-neutral-600 py-2.5 px-[18px] text-xl font-bold hover:text-white"
              }
              aria-current={route.current ? "page" : undefined}
=======
      <div className=" flex flex-col gap-8 bg-primary-600 text-white p-4 px-8 rounded-lg ">
        <div className=" font-[900] text-4xl">Edit Profile</div>
        <div className="flex items-center gap-4">
          {/* {dashboardRoutes.map((route) => (
            <NavLink
              to={`/dashboard${route.path}`}
              className="text-white cursor-pointer "
>>>>>>> 5e20bd8ddd917e078c6efde1fc1be8be9785962a
            >
              {route.name}
            </NavLink>
          ))} */}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;