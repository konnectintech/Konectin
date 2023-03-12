import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";

function ProtectedRoutes() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default ProtectedRoutes;
