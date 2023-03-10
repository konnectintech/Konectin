import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./middleware/signAuth";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Landing from "./pages/ProtectedRoutes/landing";
import ResumeBuilder from "./pages/ProtectedRoutes/resume";
import DashBoard from "./pages/ProtectedRoutes/DashBoard";
import Options from "./pages/ProtectedRoutes/builder/options";
import StartBuilder from "./pages/ProtectedRoutes/builder/start";
import Builder from "./pages/ProtectedRoutes/builder/screens";
import Internship from "./pages/ProtectedRoutes/internship";
import Sign from "./pages/sign";
import Login from "./pages/sign/login/login";
import SignUp from "./pages/sign/signup/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sign />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route
          element={
            <RequireAuth>
              <ProtectedRoutes />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Landing />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/resume/options" element={<Options />} />
          <Route path="/resume/start" element={<StartBuilder />} />
          <Route path="/resume/builder" element={<Builder />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/blog" element={<div></div>} />
          <Route path="/about" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
