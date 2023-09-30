import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import ResumeHeader from "./resumeHeader";
import Header from "../header";
import ResumeFooter from "./resumeFooter";
import { BuilderBg } from "../../assets";
import { useAuth } from "../../middleware/auth";
import { useEffect } from "react";

function ResumeRoutes() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <>
      {pathname.split("/")[2] === "builder" ? <ResumeHeader /> : <Header />}
      <main
        className=""
        style={{
          backgroundImage: `linear-gradient(rgba(249, 249, 249, .98), rgba(249, 249, 249, .98)), url("${BuilderBg}")`,
          backgroundSize: "cover",
        }}
      >
        <Outlet />
      </main>
      <ResumeFooter />
    </>
  );
}

export default ResumeRoutes;
