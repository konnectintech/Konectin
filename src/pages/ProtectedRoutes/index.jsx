import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
import { RequireAuth } from "../../middleware/auth";

function ProtectedRoutes() {
  return (
    <RequireAuth>
      <ScrollToTop />
      <Outlet />
    </RequireAuth>
  );
}

export default ProtectedRoutes;
