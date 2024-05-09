import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ResumeRoutes from "./layouts/resumeRoutes";
import DefaultRoutes from "./pages/DefaultRoutes";
import ProtectedRoutes from "./pages/ProtectedRoutes";

import { AuthProvider } from "./middleware/auth";

const TemplateProvider = lazy(() =>
  import("./middleware/resume").then((module) => ({
    default: module.TemplateProvider,
  }))
);
const WalkthroughProvider = lazy(() =>
  import("./middleware/walkthrough").then((module) => ({
    default: module.WalkthroughProvider,
  }))
);
const CVProvider = lazy(() =>
  import("./middleware/cv").then((module) => ({ default: module.CVProvider }))
);

const Options = lazy(() =>
  import("./pages/DefaultRoutes/resume/resume-builder")
);
const ResumeBuilder = lazy(() =>
  import("./pages/DefaultRoutes/resume/resume-landing")
);

const Builder = lazy(() =>
  import("./pages/DefaultRoutes/resume/resume-builder/screens")
);
const AIStarter = lazy(() =>
  import("./pages/DefaultRoutes/resume/resume-builder/screens-ai")
);
const ResumeUpload = lazy(() =>
  import("./pages/DefaultRoutes/resume/resume-builder/screen-upload")
);

const Landing = lazy(() => import("./pages/DefaultRoutes/landing"));
const Internship = lazy(() => import("./pages/DefaultRoutes/internship"));
const About = lazy(() => import("./pages/DefaultRoutes/about"));
const Blog = lazy(() => import("./pages/DefaultRoutes/blog"));
const BlogContent = lazy(() =>
  import("./pages/DefaultRoutes/blog/blogContent")
);
const Feeds = lazy(() => import("./pages/DefaultRoutes/blog/feeds"));
const RouteIdentifier = lazy(() => import("./layouts/routeIdentifier"));
const VerifyMail = lazy(() => import("./pages/sign/signup/verifyMail"));
const TermsAndCondition = lazy(() =>
  import("./pages/DefaultRoutes/terms/TermsAndConditions")
);
const PrivacyPolicy = lazy(() =>
  import("./pages/DefaultRoutes/policy/PrivacyPolicy")
);
const Faq = lazy(() => import("./pages/DefaultRoutes/faq/Faq"));
const Contact = lazy(() => import("./pages/DefaultRoutes/contact"));

const Sign = lazy(() => import("./pages/sign"));
const Login = lazy(() => import("./pages/sign/login/login"));
const SignUp = lazy(() => import("./pages/sign/signup/signup"));
const ForgetPassword = lazy(() => import("./pages/sign/login/forgetPassword"));
const ResetPassword = lazy(() => import("./pages/sign/login/resetPassword"));
const Coverletter = lazy(() => import("./pages/DefaultRoutes/cover-letter"));
const ErrorPage = lazy(() => import("./pages/404"));
const InternApplication = lazy(() =>
  import("./pages/DefaultRoutes/internship/intern-application")
);

const UserDashBoard = lazy(() =>
  import("./pages/ProtectedRoutes/user-dashboard")
);
const DashboardDisplay = lazy(() =>
  import("./pages/ProtectedRoutes/dashboardDisplay")
);

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
            <Route path="/services/internship" element={<Internship />} />
            <Route
              path="/services/internship/intern-application"
              element={<InternApplication />}
            />
            <Route path="/services/resume" element={<ResumeBuilder />} />
            <Route path="/terms" element={<TermsAndCondition />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blog/" element={<Blog />}>
              <Route path="/blog/:feed" element={<Feeds />} />
              <Route path="/blog/:feed/:id" element={<BlogContent />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard/*" element={<UserDashBoard />} />
            <Route path="/dashboard/display/*" element={<DashboardDisplay />} />

            <Route
              path="/dashboard/display"
              element={<Navigate to="/dashboard/display/resumes" />}
            />
          </Route>

          {/* Resume Builder Routes */}
          <Route element={<ResumeRoutes />}>
            <Route path="/services/resume/options" element={<Options />} />
          </Route>

          <Route
            element={
              <TemplateProvider>
                <WalkthroughProvider>
                  <CVProvider>
                    <ResumeRoutes />
                  </CVProvider>
                </WalkthroughProvider>
              </TemplateProvider>
            }
          >
            <Route path="/services/cover-letter/*" element={<Coverletter />} />
            <Route path="/services/resume/ai/*" element={<AIStarter />} />
            <Route path="/services/resume/builder/*" element={<Builder />} />
          </Route>
          <Route path="/services/resume/upload/*" element={<ResumeUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
