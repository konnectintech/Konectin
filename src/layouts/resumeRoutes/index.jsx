import { Outlet, useLocation } from "react-router-dom";
import ResumeHeader from "./resumeHeader";
import Header from "../header";
import ResumeFooter from "./resumeFooter";
import { BuilderBg } from "../../assets";
import ResumeLeftbar from "./resumeLeftbar";
import ResumeRightbar from "./resumeRightbar";

function ResumeRoutes() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.split("/")[2] === "builder" ? <ResumeHeader /> : <Header />}
      <div className="flex relative builder-main">
        {pathname.split("/")[2] === "builder" && <ResumeLeftbar />}
        <main
          className="min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 249, 249, .98), rgba(249, 249, 249, .98)), url("${BuilderBg}")`,
            backgroundSize: "cover",
          }}
        >
          <Outlet />
        </main>
        {pathname.split("/")[2] === "builder" && <ResumeRightbar />}
      </div>
      <ResumeFooter />
    </>
  );
}

export default ResumeRoutes;
