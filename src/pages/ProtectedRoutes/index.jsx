import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

function ProtectedRoutes() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default ProtectedRoutes;
