import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
import ResumeHeader from "./resumeHeader";
import Header from "../header";
import ResumeFooter from "./resumeFooter";

function ResumeRoutes() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      {pathname.split("/")[2] === "builder" ? <ResumeHeader /> : <Header />}
      <Outlet />
      <ResumeFooter />
    </>
  );
}

export default ResumeRoutes;
