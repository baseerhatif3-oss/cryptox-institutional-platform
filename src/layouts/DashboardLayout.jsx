import {
  Outlet,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  LayoutDashboard,
  Wallet,
  PieChart,
  ArrowLeftRight,
  User,
  LogOut,
  ClipboardList,
  Star,
  Menu,
  X,
  Bell,
} from "lucide-react";

import { useState } from "react";

import NotificationPanel from "../components/NotificationPanel";

import { useNotifications } from "../context/NotificationContext";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const { notifications } =
    useNotifications();

  const user = localStorage.getItem(
    "user"
  )
    ? JSON.parse(
        localStorage.getItem("user")
      )
    : null;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: (
        <LayoutDashboard size={20} />
      ),
    },

    {
      name: "Wallet",
      path: "/wallet",
      icon: <Wallet size={20} />,
    },

    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <PieChart size={20} />,
    },

    {
      name: "Transactions",
      path: "/transactions",
      icon: (
        <ArrowLeftRight size={20} />
      ),
    },

    {
      name: "Open Orders",
      path: "/orders",
      icon: (
        <ClipboardList size={20} />
      ),
    },

    {
      name: "Watchlist",
      path: "/watchlist",
      icon: <Star size={20} />,
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />,
    },
  ];

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <NotificationPanel
        open={notificationOpen}
        setOpen={
          setNotificationOpen
        }
      />

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <div
        className={`
        fixed lg:static top-0 left-0 z-50
        w-72 h-screen
        bg-slate-900 border-r border-slate-800
        flex flex-col justify-between
        transform transition-transform duration-300

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-500">
                CryptoX
              </h1>

              <p className="text-slate-400 text-sm mt-1">
                Professional Crypto
                Exchange
              </p>
            </div>

            <button
              onClick={() =>
                setSidebarOpen(false)
              }
              className="lg:hidden"
            >
              <X size={26} />
            </button>
          </div>

          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() =>
                  setSidebarOpen(false)
                }
                className={({
                  isActive,
                }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-800 text-slate-300"
                  }`
                }
              >
                {item.icon}

                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800 p-4 rounded-2xl mb-4">
            <p className="font-semibold">
              {user?.name || "User"}
            </p>

            <p className="text-slate-400 text-sm">
              {user?.email ||
                "No email"}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
          >
            <LogOut size={18} />

            Logout
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={() =>
              setSidebarOpen(true)
            }
          >
            <Menu size={28} />
          </button>

          <h1 className="text-xl font-bold text-blue-500">
            CryptoX
          </h1>

          <button
            onClick={() =>
              setNotificationOpen(
                true
              )
            }
            className="relative"
          >
            <Bell size={24} />

            {notifications.length >
              0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {
                  notifications.length
                }
              </div>
            )}
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;