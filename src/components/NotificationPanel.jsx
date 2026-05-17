import {
  Bell,
  X,
} from "lucide-react";

import { useNotifications } from "../context/NotificationContext";

const NotificationPanel = ({
  open,
  setOpen,
}) => {
  const {
    notifications,
    removeNotification,
  } = useNotifications();

  return (
    <>
      {open && (
        <div
          onClick={() =>
            setOpen(false)
          }
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`
        fixed top-0 right-0 h-screen w-[380px]
        bg-slate-900 border-l border-slate-800
        z-50 transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell size={22} />

            <h2 className="text-2xl font-bold text-white">
              Notifications
            </h2>
          </div>

          <button
            onClick={() =>
              setOpen(false)
            }
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-80px)]">
          {notifications.length === 0 && (
            <div className="text-slate-400 text-center mt-10">
              No notifications yet
            </div>
          )}

          {notifications.map((n) => (
            <div
              key={n.id}
              className="bg-slate-800 p-4 rounded-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-white font-medium">
                    {n.message}
                  </p>

                  <p className="text-slate-400 text-sm mt-1">
                    {n.time}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeNotification(
                      n.id
                    )
                  }
                >
                  <X
                    size={18}
                    className="text-slate-400"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;