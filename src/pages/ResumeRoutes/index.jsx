import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
import ResumeFooter from "../../layouts/resumeHeader-Footer/ResumeFooter";
import ResumeHeader from "../../layouts/resumeHeader-Footer/ResumeHeader";

function ResumeRoutes() {
  return (
    <>
      <ScrollToTop />
      <ResumeHeader />
      <Outlet />
      <ResumeFooter />
    </>
  );
}

export default ResumeRoutes;
