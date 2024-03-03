<<<<<<< HEAD
import { application, job, profile, web } from "../../../../assets";
import Jobs from "../pages/job";
import Notification from "../pages/notifications";
import SocialProfile from "../pages/socialProfile";
import UserProfile from "../pages/userInfo";
=======
import Notifications from "../pages/notifications";
import SocialProfile from "../pages/socialProfile";
import UserInfo from "../pages/userInfo";
>>>>>>> 3550d443878a55b4cf639c5c52355b042656b171

export const dashboardRoutes = [
  { path: "/", name: "User Info", element: UserInfo },
  {
    path: "/socials",
    name: "Social Profile",
    element: SocialProfile,
  },
  { path: "/notifications", name: "Notifications", element: Notifications },
];
