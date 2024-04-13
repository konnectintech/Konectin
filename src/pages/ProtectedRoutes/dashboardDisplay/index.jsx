import { displayRoutes } from "./layout/navigation";

// import { Outlet } from "react-router-dom";
import DisplayHeader from "./layout/displayHeader";
import { Routes, Route } from "react-router-dom";

function DashboardDisplay() {
  return (
    <main className="bg-primary-100">
      <div className="debug w-full mx-auto max-w-screen-2xl flex flex-col gap-6 md:gap-8 py-4">
        <DisplayHeader />

        <div className="sm:pb-8 sm:px-6 lg:px-10 border border-dashed border-blue-500 text-black">
          <Routes>
            {displayRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default DashboardDisplay;
