import Resumes from "../pages/resumes";
import CoverLetters from "../pages/coverletters";

export const displayRoutes = [
  {
    path: "/display/resumes",
    name: "Resumes",
    element: Resumes,
  },
  {
    path: "/display/cover-letters",
    name: "Cover Letters",
    element: CoverLetters,
  },
];
