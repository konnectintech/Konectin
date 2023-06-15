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
      pathname === "/resume/builder/download" ||
      pathname === "/resume/builder/employment-experience/responsibilities" ||
      pathname === "/resume/builder/employment-experience/job-activities" ||
      pathname === "/resume/builder/preview" ? (
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
