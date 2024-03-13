import Notifications from "../pages/notifications";
// import SocialProfile from "../pages/socialProfile";
import UserInfo from "../pages/userInfo";

export const dashboardRoutes = [
  { path: "/", name: "User Info", element: UserInfo },
  // {
  //   path: "/socials",
  //   name: "Social Profile",
  //   element: SocialProfile,
  // },
  { path: "/notifications", name: "Notifications", element: Notifications },
];

export const notificationInfo = [
  {
    id: "resumeStatusUpdates",
    heading: "Resume Status Updates",
    text: "Enable notifications for updates on your resume status. You'll be notified when your resume has been reviewed or edited, or if there's feedback.",
  },
  {
    id: "jobAlerts",
    heading: "Job Alerts",
    text: "Turn on job alerts to be notified about job opportunities that match your skills and preferences. Be the first to know when a suitable job is posted.",
  },
  {
    id: "internshipAlerts",
    heading: "Internship Alerts",
    text: "Enable internship alerts to stay informed about available internships that can provide you with valuable work experience.",
  },
  {
    id: "blogUpdates",
    heading: "Blog Updates",
    text: "Stay updated with our upcoming blog. Enable this setting to receive notifications about new blog posts and valuable tips.",
  },
  {
    id: "reminders",
    heading: "Reminders",
    text: "Stay on top of your tasks. Enable reminders to be notified about upcoming events, deadlines, or tasks you need to complete.",
  },
];
