import Notifications from "../pages/notifications";
import SocialProfile from "../pages/socialProfile";
import UserInfo from "../pages/userInfo";

export const dashboardRoutes = [
  { path: "/", name: "User Info", element: UserInfo },
  {
    path: "/social/",
    name: "Social Profile",
    element: SocialProfile,
  },
  { path: "/notifications/", name: "Notifications", element: Notifications },
];
