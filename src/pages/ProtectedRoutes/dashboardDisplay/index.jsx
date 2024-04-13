import DisplayHeader from "./layout/displayHeader";
import { Routes, Route } from "react-router-dom";
import Resumes from "./pages/resumes";
import CoverLetters from "./pages/coverletters";

function DashboardDisplay() {
  return (
    <main className="bg-primary-100">
      <div className="w-full mx-auto max-w-screen-2xl flex flex-col gap-6 md:gap-8 py-4">
        <DisplayHeader />

        <Routes>
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/cover-letters" element={<CoverLetters />} />
        </Routes>
      </div>
    </main>
  );
}

export default DashboardDisplay;
