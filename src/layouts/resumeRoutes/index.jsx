import { Outlet, useLocation } from "react-router-dom";
import ResumeHeader from "./resumeHeader";
import Header from "../header";
import ResumeFooter from "./resumeFooter";
import { BuilderBg } from "../../assets";

function ResumeRoutes() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.split("/")[2] === "builder" ? <ResumeHeader /> : <Header />}
      <main
        className=""
        style={{
          backgroundImage: `linear-gradient(rgba(249, 249, 249, 0.81), rgba(249, 249, 249, 0.81)), url("${BuilderBg}")`,
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
