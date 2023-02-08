import { Route, Routes } from "react-router-dom";
import Header from "../../layouts/header";
import Landing from "./landing";
import ResumeBuilder from "./resume";
import Footer from "../../layouts/footer";

function ProtectedRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<ResumeBuilder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default ProtectedRoutes;
