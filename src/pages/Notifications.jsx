import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const Notifications =
  () => {
    const [
      notifications,
      setNotifications,
    ] = useState([]);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      fetchNotifications();
    }, []);

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
          console.log(
            error
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    const markAsRead =
      async (
        id
      ) => {
        try {
          await API.put(
            `/notifications/${id}/read`
          );

          fetchNotifications();
        } catch (error) {
          console.log(
            error
          );
        }
      };

    const deleteNotification =
      async (
        id
      ) => {
        try {
          await API.delete(
            `/notifications/${id}`
          );

          fetchNotifications();
        } catch (error) {
          console.log(
            error
          );
        }
      };

    if (loading) {
      return (
        <div className="text-white">
          Loading notifications...
        </div>
      );
    }

    return (
      <div>
        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="text-gray-400 mt-2">
            Realtime exchange alerts and updates
          </p>
        </div>

        {/* NOTIFICATIONS */}

        <div className="space-y-4">
          {notifications.length >
          0 ? (
            notifications.map(
              (
                notification
              ) => (
                <div
                  key={
                    notification._id
                  }
                  className={`border rounded-2xl p-6 ${
                    notification.read
                      ? "bg-[#111] border-gray-800"
                      : "bg-yellow-500/10 border-yellow-500"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* LEFT */}

                    <div>
                      <h2 className="text-xl font-bold">
                        {
                          notification.title
                        }
                      </h2>

                      <p className="text-gray-400 mt-2">
                        {
                          notification.message
                        }
                      </p>

                      <p className="text-sm text-gray-500 mt-3">
                        {new Date(
                          notification.createdAt
                        ).toLocaleString()}
                      </p>
                    </div>

                    {/* ACTIONS */}

                    <div className="flex gap-3">
                      {!notification.read && (
                        <button
                          onClick={() =>
                            markAsRead(
                              notification._id
                            )
                          }
                          className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-xl font-bold"
                        >
                          Mark Read
                        </button>
                      )}

                      <button
                        onClick={() =>
                          deleteNotification(
                            notification._id
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-bold"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-10 text-center text-gray-400">
              No notifications found
            </div>
          )}
        </div>
      </div>
    );
  };

export default Notifications;