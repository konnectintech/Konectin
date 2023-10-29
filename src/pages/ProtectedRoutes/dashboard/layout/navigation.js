import { application, job, profile, web } from "../../../../assets";
import Jobs from "../pages/job";
import Notification from "../pages/notification";
import SocialProfile from "../pages/socialProfile";
import UserProfile from "../pages/userProfile";

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

export const newdashboardRoutes = [
  { path: "/userprofile/*", name: "User Profile", element: UserProfile },
  {
    path: "/social/*",
    name: "Social Profile",
    element: SocialProfile,
  },
  { path: "/notification/*", name: "Notification", element: Notification },
];
