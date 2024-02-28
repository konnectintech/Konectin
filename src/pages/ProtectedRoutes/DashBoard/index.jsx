import { Routes, Route } from "react-router-dom";
import { dashboardRoutes } from "./layout/navigation";

import Header from "./layout/header";
import Sidebar from "./layout/sidebar";

function DashBoard() {
  return (
    <main className="bg-primary-100">
      <div className="w-11/12 mx-auto max-w-screen-2xl flex max-md:flex-col gap-6 md:gap-8 py-4">
        <div className="w-full sm:max-w-[240px] lg:max-w-[290px] sm:hidden md:block">
          <Sidebar />
        </div>

        <div className="flex w-full min-w-0 h-full flex-col gap-8 justify-between sm:bg-white rounded-lg bg-primary-100">
          <Header />

          <div className="sm:pb-8 sm:px-6 lg:px-10">
            <Routes>
              {dashboardRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </div>
        </div>

        <div className="sm:hidden text-center text-gray-600 text-sm mt-10 -mb-12 mx-auto">
          Member Since:{" "}
          <span className="font-bold text-black">October 1, 2020</span>
        </div>
      </div>
    </main>
  );
}

export default DashBoard;
