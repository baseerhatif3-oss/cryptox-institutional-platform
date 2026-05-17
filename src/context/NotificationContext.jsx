import {
  createContext,
  useContext,
  useState,
} from "react";

const NotificationContext =
  createContext();

export const NotificationProvider = ({
  children,
}) => {
  const [notifications, setNotifications] =
    useState([]);

  const addNotification = (
    message,
    type = "info"
  ) => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications((prev) => [
      newNotification,
      ...prev,
    ]);
  };

  const removeNotification = (
    id
  ) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications =
  () => useContext(NotificationContext);