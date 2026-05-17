import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  PieChart,
  ArrowLeftRight,
  User,
  LogOut,
} from "lucide-react";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
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
      icon: <ArrowLeftRight size={20} />,
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
      <div className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-slate-800">
            <h1 className="text-3xl font-bold text-blue-500">
              CryptoX
            </h1>

            <p className="text-slate-400 text-sm mt-1">
              Professional Crypto Exchange
            </p>
          </div>

          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
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
              {user?.email || "No email"}
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
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;