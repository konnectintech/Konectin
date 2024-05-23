import { Outlet } from "react-router-dom";
import { RequireAuth } from "../../middleware/auth";
import Header from "../../layouts/header";
import { Suspense } from "react";
import Footer from "../../layouts/footer";
import { konectinLogo } from "../../assets";

function ProtectedRoutes() {
  return (
    <RequireAuth>
      <Header />
      <Suspense
        fallback={
          <main className="min-h-screen relative overflow-hidden">
            <div className="bg-neutral-100 opacity-70 absolute w-full h-full"></div>
            <div className="relative z-10 w-full h-full flex">
              <div className="animate-pulse m-auto bg-white p-4 rounded-full">
                <img className="w-6" src={konectinLogo} alt="" />
              </div>
            </div>
          </main>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </RequireAuth>
  );
}

export default ProtectedRoutes;
