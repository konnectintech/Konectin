import DisplayHeader from "./layout/displayHeader";
import { Routes, Route } from "react-router-dom";
import Resumes from "./pages/resumes";
import CoverLetters from "./pages/coverletters";
import { useState } from "react";

function DashboardDisplay() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("oldest");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (sortCriteria) => {
    setSortCriteria(sortCriteria);
  };

  return (
    <main className="bg-primary-100">
      <div className="w-full mx-auto max-w-screen-2xl flex flex-col gap-6 md:gap-8">
        <DisplayHeader
          searchQuery={searchQuery}
          sortCriteria={sortCriteria}
          handleSearch={handleSearch}
          handleSort={handleSort}
        />

        <Routes>
          <Route
            path="/resumes"
            element={
              <Resumes searchQuery={searchQuery} sortCriteria={sortCriteria} />
            }
          />
          <Route
            path="/cover-letters"
            element={
              <CoverLetters
                searchQuery={searchQuery}
                sortCriteria={sortCriteria}
              />
            }
          />
        </Routes>
      </div>
    </main>
  );
}

export default DashboardDisplay;
