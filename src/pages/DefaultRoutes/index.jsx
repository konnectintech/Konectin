import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
// import ResumeFooter from "../../layouts/resumeHeader-Footer/ResumeFooter";

function DefaultRoutes() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      {/* <ResumeFooter /> */}
    </>
  );
}

export default DefaultRoutes;
