import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../../../middleware/auth";
import ToggleCard from "./toggleCard";
import { notificationInfo } from "../../layout/navigation";

function Notifications() {
  const [notifications, setNotifications] = useState({
    blogUpdates: true,
    emails: true,
    internshipAlerts: true,
    jobAlerts: true,
    pushNotifications: true,
    reminders: true,
    resumeStatusUpdates: true,
  });

  const { user } = useAuthContext();
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const getNotifications = async () => {
    await axios
      .get(`${url}/v2/getNotificationSettings?userId=${user?._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = async (id, state) => {
    console.log(state);

    setNotifications((prevNotification) => ({
      ...prevNotification,
      [id]: state,
    }));

    await axios
      .put(
        `${url}/v2/updateNotificationSettings?userId=${user?._id}`,
        { [id]: state },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setNotifications(res.data.user.notificationSettings);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-base sm:text-2xl leading-[160%] text-neutral-200">
            Stay informed with Konectin
          </p>
          <p className="text-neutral-300 text-xs sm:text-base">
            Enable notifications for updates on Resume Status, Job Alerts,
            Internship Opportunities, Blog Posts, and Reminders. Customize your
            alerts to never miss a beat!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {notificationInfo.map((notificationItem) => (
            <ToggleCard
              key={notificationItem.id}
              value={notifications[notificationItem.id]}
              setValue={() =>
                handleToggle(
                  notificationItem.id,
                  !notifications[notificationItem.id]
                )
              }
              {...notificationItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Notifications;
