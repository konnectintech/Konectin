import { application, job, profile, web } from "../../../../assets";
import Jobs from "../pages/job";
import Notifications from "../pages/notifications";
import SocialProfile from "../pages/socialProfile";
import UserInfo from "../pages/userInfo";

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
  { path: "/", name: "User Info", element: UserInfo },
  {
    path: "/social/",
    name: "Social Profile",
    element: SocialProfile,
  },
  { path: "/notifications/", name: "Notifications", element: Notifications },
];
