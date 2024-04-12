import Resumes from "../pages/resumes";
import CoverLetters from "../pages/coverletters";

export const displayRoutes = [
  {
    path: "/resumes/display",
    name: "Resumes",
    element: Resumes,
  },
  {
    path: "/cover-letters/display",
    name: "Cover Letters",
    element: CoverLetters,
  },
];
