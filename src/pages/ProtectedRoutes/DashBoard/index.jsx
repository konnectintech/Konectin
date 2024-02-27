import { Routes, Route } from "react-router-dom";
import { dashboardRoutes } from "./layout/navigation";

import Header from "./layout/header";
import Sidebar from "./layout/sidebar";

function DashBoard() {
  return (
    <main className="bg-primary-100">
      <div className="w-11/12 mx-auto max-w-screen-2xl flex justify-between gap-8 py-4 mt-20">
        <div className="w-full sm:w-1/4 sm:min-w-[170px] md:min-w-[290px]">
          <Sidebar />
        </div>

        <div className="flex flex-1 h-full flex-col gap-10 justify-between sm:bg-white rounded-lg mt-4 sm:my-0 bg-primary-100">
          <Header />

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

        <div className="sm:hidden text-center text-gray-600 text-sm mt-10 -mb-12 mx-auto">
          Member Since:{" "}
          <span className="font-bold text-black">October 1, 2020</span>
        </div>
      </div>
    </main>
  );
}

export default DashBoard;
