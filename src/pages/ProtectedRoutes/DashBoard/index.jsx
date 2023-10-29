import { Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import { Suspense } from "react";
import { dashboardRoutes, newdashboardRoutes } from "./layout/navigation";
import Sidebar from "./layout/sidebar";
import Header from "./layout/header";
import AsideBar from "./layout/asidebar";
import Jobs from "./pages/job";
import Main from "./pages/main";
import UserProfile from "./pages/userProfile";

const DashBoard = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex pt-[67px] flex-col sm:flex-row items-start min-h-screen justify-between bg-[#F0EFF5] ">
        <div className="w-full sm:w-1/4 min-w-[170px] md:min-w-[230px]">
          {/* <div className="sm:h-screen sm:bg-white bg-gray-25 sm:w-2/12 min-w-[170px] md:min-w-[230px]"> */}
          <Sidebar />
          {/* </div> */}
        </div>

        <div className="flex flex-1 h-full flex-col gap-6 justify-between min-h-screen bg-gray-25 px-6">
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
              <Route path="/" element={<UserProfile />} />
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

        {/* <div className="w-full sm:w-2/12 min-w-[170px] md:min-w-[230px]">
          <div className="sm:fixed right-0 sm:h-screen sm:bg-white bg-gray-25 sm:w-2/12 min-w-[170px] md:min-w-[230px]">
            <AsideBar />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default DashBoard;
