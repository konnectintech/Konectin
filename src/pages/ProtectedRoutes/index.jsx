import { Outlet } from "react-router-dom";
import { RequireAuth } from "../../middleware/auth";

function ProtectedRoutes() {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
}

export default ProtectedRoutes;
