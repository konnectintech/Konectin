import DisplayHeader from "./layout/displayHeader";
import { Routes, Route } from "react-router-dom";
import Resumes from "./pages/resumes";
import CoverLetters from "./pages/coverletters";
import { useState } from "react";

function DashboardDisplay() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <main className="bg-primary-100">
      <div className="w-full mx-auto max-w-screen-2xl flex flex-col gap-6 md:gap-8 py-4">
        <DisplayHeader searchQuery={searchQuery} handleSearch={handleSearch} />

        <Routes>
          <Route
            path="/resumes"
            element={<Resumes searchQuery={searchQuery} />}
          />
          <Route
            path="/cover-letters"
            element={<CoverLetters searchQuery={searchQuery} />}
          />
        </Routes>
      </div>
    </main>
  );
}

export default DashboardDisplay;
