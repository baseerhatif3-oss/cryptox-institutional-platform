import {
  useEffect,
  useState,
} from "react";

import API from "../api/axios";

const Notifications = () => {
  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [open, setOpen] =
    useState(false);

  const fetchNotifications =
    async () => {
      try {
        const res =
          await API.get(
            "/notifications"
          );

        setNotifications(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchNotifications();

    const interval =
      setInterval(() => {
        fetchNotifications();
      }, 5000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  const unreadCount =
    notifications.filter(
      (n) => !n.read
    ).length;

  const markAsRead =
    async (id) => {
      try {
        await API.put(
          `/notifications/read/${id}`
        );

        fetchNotifications();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="relative">
      {/* BELL */}

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="relative bg-slate-800 hover:bg-slate-700 p-4 rounded-2xl transition"
      >
        🔔

        {unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {unreadCount}
          </div>
        )}
      </button>

      {/* DROPDOWN */}

      {open && (
        <div className="absolute right-0 mt-4 w-96 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl z-50 overflow-hidden">
          <div className="p-5 border-b border-slate-800">
            <h2 className="text-2xl font-bold">
              Notifications
            </h2>
          </div>

          <div className="max-h-[500px] overflow-y-auto">
            {notifications.length ===
            0 ? (
              <div className="p-6 text-slate-400">
                No notifications
              </div>
            ) : (
              notifications.map(
                (
                  notification
                ) => (
                  <div
                    key={
                      notification._id
                    }
                    onClick={() =>
                      markAsRead(
                        notification._id
                      )
                    }
                    className={`p-5 border-b border-slate-800 cursor-pointer hover:bg-slate-800 transition ${
                      !notification.read
                        ? "bg-slate-800/50"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">
                          {
                            notification.title
                          }
                        </h3>

                        <p className="text-slate-400 mt-1">
                          {
                            notification.message
                          }
                        </p>
                      </div>

                      {!notification.read && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                      )}
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;