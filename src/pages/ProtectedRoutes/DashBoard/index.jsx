import { Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import { Suspense } from "react";
import { dashboardRoutes } from "./layout/navigation";
import Sidebar from "./layout/sidebar";
import Header from "./layout/header";
import AsideBar from "./layout/asidebar";
import Jobs from "./pages/job";

const DashBoard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row items-start min-h-screen justify-between">
        <div className="w-full sm:w-2/12 min-w-[170px] md:min-w-[230px]">
          <div className="sm:fixed left-0 sm:h-screen sm:bg-white bg-gray-25 sm:w-2/12 min-w-[170px] md:min-w-[230px]">
            <Sidebar />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 justify-between min-h-screen bg-gray-25 px-6">
          <Routes>
            <Route
              element={
                <Suspense
                  fallback={<div className="animate-spin">Loading</div>}
                >
                  <Outlet />
                </Suspense>
              }
            >
              <Route path="/" element={<Jobs />} />
              {dashboardRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Route>
          </Routes>
        </div>

        <div className="w-full sm:w-2/12 min-w-[170px] md:min-w-[230px]">
          <div className="sm:fixed right-0 sm:h-screen sm:bg-white bg-gray-25 sm:w-2/12 min-w-[170px] md:min-w-[230px]">
            <AsideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
