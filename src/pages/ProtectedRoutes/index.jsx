import { Outlet } from "react-router-dom";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

function ProtectedRoutes() {
  return (
    <>
      <Header />
      <div className="page-hero">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default ProtectedRoutes;
