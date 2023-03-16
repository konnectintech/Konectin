import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./middleware/signAuth";

import ProtectedRoutes from "./pages/ProtectedRoutes";
import DashBoard from "./pages/ProtectedRoutes/DashBoard";
import Options from "./pages/ProtectedRoutes/builder/options";
import StartBuilder from "./pages/ProtectedRoutes/builder/start";
import Builder from "./pages/ProtectedRoutes/builder/screens";

import Sign from "./pages/sign";
import Login from "./pages/sign/login/login";
import SignUp from "./pages/sign/signup/signup";

import DefaultRoutes from "./pages/DefaultRoutes";
import Landing from "./pages/DefaultRoutes/landing";
import Internship from "./pages/DefaultRoutes/internship";
import ResumeBuilder from "./pages/DefaultRoutes/resume";
import About from "./pages/DefaultRoutes/about";
import Blog from "./pages/DefaultRoutes/blog";
import BlogContent from "./pages/DefaultRoutes/blog/feeds/feed/blogContent";
import Feeds from "./pages/DefaultRoutes/blog/feeds";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sign />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<DefaultRoutes />}>
          <Route path="/" element={<Landing />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/blog/" element={<Blog />}>
            <Route path="/blog/:feed" element={<Feeds />} />
            <Route path="/blog/:feed/:title" element={<BlogContent />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>

        <Route
          element={
            <RequireAuth>
              <ProtectedRoutes />
            </RequireAuth>
          }
        >
          <Route path="/resume/options" element={<Options />} />
          <Route path="/resume/start" element={<StartBuilder />} />
          <Route path="/resume/builder" element={<Builder />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
