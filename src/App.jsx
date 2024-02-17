import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./middleware/auth";

import ResumeRoutes from "./layouts/resumeRoutes";
import DefaultRoutes from "./pages/DefaultRoutes";
import ProtectedRoutes from "./pages/ProtectedRoutes";

import Options from "./pages/DefaultRoutes/resume/resume-builder";
import ResumeBuilder from "./pages/DefaultRoutes/resume/resume-landing";
import Builder from "./pages/DefaultRoutes/resume/resume-builder/screens";
import AIStarter from "./pages/DefaultRoutes/resume/resume-builder/screens-ai";
import ResumeUpload from "./pages/DefaultRoutes/resume/resume-builder/screen-upload";

import Landing from "./pages/DefaultRoutes/landing";
import Internship from "./pages/DefaultRoutes/internship";
import About from "./pages/DefaultRoutes/about";
import Blog from "./pages/DefaultRoutes/blog";
import BlogContent from "./pages/DefaultRoutes/blog/blogContent";
import Feeds from "./pages/DefaultRoutes/blog/feeds";
import RouteIdentifier from "./layouts/routeIdentifier";
import VerifyMail from "./pages/sign/signup/verifyMail";
import TermsAndCondition from "./pages/DefaultRoutes/terms/TermsAndConditions";
import PrivacyPolicy from "./pages/DefaultRoutes/policy/PrivacyPolicy";
import Faq from "./pages/DefaultRoutes/faq/Faq";
import Contact from "./pages/DefaultRoutes/contact";

import Sign from "./pages/sign";
import Login from "./pages/sign/login/login";
import SignUp from "./pages/sign/signup/signup";
import ForgetPassword from "./pages/sign/login/forgetPassword";
import ResetPassword from "./pages/sign/login/resetPassword";
import DashBoard from "./pages/ProtectedRoutes/DashBoard";
import Coverletter from "./pages/DefaultRoutes/cover-letter/index";
// import ErrorPage from "./pages/404";
import ErrorPage from "./pages/404";
import InternApplication from "./pages/DefaultRoutes/internship/intern-application";
import { TemplateProvider } from "./middleware/resume";
import { WalkthroughProvider } from "./middleware/walkthrough";
import { CVProvider } from "./middleware/cv";

// import Admin from "./pages/ProtectedRoutes/DashBoard/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AuthProvider>
              <RouteIdentifier />
            </AuthProvider>
          }
          errorElement={<ErrorPage />}
        >
          <Route element={<Sign />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/verify-mail" element={<VerifyMail />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route element={<DefaultRoutes />}>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Landing />} />
            <Route path="/internship" element={<Internship />} />
            <Route
              path="/internship/intern-application"
              element={<InternApplication />}
            />
            <Route path="/resume" element={<ResumeBuilder />} />
            <Route path="/terms" element={<TermsAndCondition />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />

            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/blog/" element={<Blog />}>
              <Route path="/blog/:feed" element={<Feeds />} />
              <Route path="/blog/:feed/:id" element={<BlogContent />} />
            </Route>
            <Route path="/about" element={<About />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard/*" element={<DashBoard />} />
            </Route>
          </Route>

          {/* Resume Builder Routes */}
          <Route element={<ResumeRoutes />}>
            <Route path="/resume/options" element={<Options />} />
          </Route>

          <Route
            element={
              <WalkthroughProvider>
                <TemplateProvider>
                  <CVProvider>
                    <ResumeRoutes />
                  </CVProvider>
                </TemplateProvider>
              </WalkthroughProvider>
            }
          >
            <Route path="/cover-letter/*" element={<Coverletter />} />
            <Route path="/resume/ai/*" element={<AIStarter />} />
            <Route path="/resume/builder/*" element={<Builder />} />
          </Route>
          <Route path="/resume/upload/*" element={<ResumeUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
