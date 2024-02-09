// import { Routes, Route, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Suspense } from "react";
import { newdashboardRoutes } from "./layout/navigation";
// import { dashboardRoutes, newdashboardRoutes } from "./layout/navigation";
import Sidebar from "./layout/sidebar";
// import AsideBar from "./layout/asidebar";
// import Jobs from "./pages/job";
import Main from "./pages/main";
import UserInfo from "./pages/userInfo";

const DashBoard = () => {
  return (
    <>
      <div className="py-28 px-6 sm:px-14 flex flex-col gap-5 sm:flex-row items-start justify-between min-h-screen bg-primary-100 ">
        <div className="w-full sm:w-1/4 sm:min-w-[170px] md:min-w-[230px]">
          <Sidebar />
        </div>
        
        <div className="flex flex-1 h-full flex-col gap-6 justify-between min-h-screen bg-gray-25">
          <Routes>
            <Route
              element={
                <Suspense
                  fallback={<div className="animate-spin">Loading</div>}
                >
                  <Main />
                </Suspense>
              }
            >
              <Route path="/" element={<UserInfo />} />
              {newdashboardRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Route>
          </Routes>
        </div>

        <div class="sm:hidden text-center text-gray-600 text-sm mt-10 -mb-12 mx-auto">
          Member Since:{" "}
          <span className="font-bold text-black">October 1, 2020</span>
        </div>
      </div>
      
    </>
  );
};

export default DashBoard;
