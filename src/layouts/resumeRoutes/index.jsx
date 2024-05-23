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
      <Header post={pathname.split("/")[3] === "builder"} />
      {pathname.split("/")[3] === "builder" && <ResumeHeader />}
      <div className="flex relative builder-main justify-center">
        {pathname.split("/")[3] === "builder" && <ResumeLeftbar />}
        <main
          className={`min-h-screen ${
            pathname.split("/")[3] === "builder" ? "pt-12" : "false"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(249, 249, 249, .98), rgba(249, 249, 249, .98)), url("${BuilderBg}")`,
            backgroundSize: "cover",
          }}
        >
          <Outlet />
        </main>
        {pathname.split("/")[3] === "builder" && <ResumeRightbar />}
      </div>
      <ResumeFooter />
    </>
  );
}

export default ResumeRoutes;
