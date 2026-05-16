import React, { useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  History,
  Star,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Portfolio",
      icon: <BarChart3 size={20} />,
      path: "/portfolio",
    },
    {
      name: "Wallet",
      icon: <Wallet size={20} />,
      path: "/wallet",
    },
    {
      name: "Transactions",
      icon: <History size={20} />,
      path: "/transactions",
    },
    {
      name: "Watchlist",
      icon: <Star size={20} />,
      path: "/watchlist",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      {/* SIDEBAR */}
      <div
        className={`bg-[#0f172a] border-r border-slate-800 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <h1
            className={`font-bold text-2xl text-blue-500 transition-all ${
              !sidebarOpen && "hidden"
            }`}
          >
            CryptoX
          </h1>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU */}
        <div className="p-3 space-y-3">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <div
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`}
              >
                {item.icon}

                {sidebarOpen && (
                  <span className="font-medium">{item.name}</span>
                )}
              </div>
            </Link>
          ))}

          {/* LOGOUT */}
          <div
            onClick={logout}
            className="flex items-center gap-4 p-4 rounded-xl cursor-pointer bg-red-500 hover:bg-red-600 transition-all mt-10"
          >
            <LogOut size={20} />

            {sidebarOpen && <span className="font-medium">Logout</span>}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <div className="h-20 border-b border-slate-800 bg-[#0f172a] flex items-center justify-between px-8">
          <div>
            <h2 className="text-2xl font-bold">Crypto Trading Platform</h2>
            <p className="text-slate-400 text-sm">
              Professional Crypto Exchange
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>

            <span className="text-sm text-slate-300">System Online</span>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;