import { Outlet } from "react-router-dom";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

function DefaultRoutes() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultRoutes;
