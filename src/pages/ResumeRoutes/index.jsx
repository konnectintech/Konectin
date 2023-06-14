import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
import ResumeFooter from "../../layouts/resumeHeader-Footer/ResumeFooter";
import ResumeHeader from "../../layouts/resumeHeader-Footer/ResumeHeader";
import ResumeInfoHeader from "../../layouts/resumeHeader-Footer/ResumeInfoHeader";

function ResumeRoutes() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      {pathname === "/resume/builder" ||
      pathname === "/resume/builder/employment-experience" ||
      pathname === "/resume/builder/education" ||
      pathname === "/resume/builder/skills" ||
      pathname === "/resume/builder/download" ? (
        <ResumeInfoHeader />
      ) : (
        <ResumeHeader />
      )}
      <Outlet />
      <ResumeFooter />
    </>
  );
}

export default ResumeRoutes;
