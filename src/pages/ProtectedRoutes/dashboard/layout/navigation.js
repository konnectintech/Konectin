import { application, job, profile, web } from "../../../../assets";
import Jobs from "../pages/job";

export const dashboardRoutes = [
  { path: "/jobs/*", name: "Jobs", element: Jobs, icon: job },
  {
    path: "/application/*",
    name: "Application",
    element: Jobs,
    icon: application,
  },
  { path: "/profile/*", name: "Profile", element: Jobs, icon: profile },
  { path: "/blog/*", name: "Blog", element: Jobs, icon: web },
  { path: "/settings/*", name: "Settings", element: Jobs, icon: web },
];
