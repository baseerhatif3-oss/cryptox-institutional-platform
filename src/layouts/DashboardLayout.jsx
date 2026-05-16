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

import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const location =
    useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <LayoutDashboard size={20} />
      ),
      path: "/dashboard",
    },

    {
      name: "Portfolio",
      icon: (
        <BarChart3 size={20} />
      ),
      path: "/portfolio",
    },

    {
      name: "Wallet",
      icon: (
        <Wallet size={20} />
      ),
      path: "/wallet",
    },

    {
      name: "Transactions",
      icon: (
        <History size={20} />
      ),
      path: "/transactions",
    },

    {
      name: "Watchlist",
      icon: (
        <Star size={20} />
      ),
      path: "/watchlist",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      {/* SIDEBAR */}

      <div
        className={`bg-[#0f172a] border-r border-slate-800 transition-all duration-300 ${
          sidebarOpen
            ? "w-64"
            : "w-20"
        }`}
      >
        {/* LOGO */}

        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <h1
            className={`font-bold text-2xl text-blue-500 ${
              !sidebarOpen &&
              "hidden"
            }`}
          >
            CryptoX
          </h1>

          <button
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
          >
            {sidebarOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>
        </div>

        {/* MENU */}

        <div className="p-3 space-y-3">
          {menuItems.map(
            (item) => (
              <Link
                key={item.name}
                to={item.path}
              >
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    location.pathname ===
                    item.path
                      ? "bg-blue-600"
                      : "hover:bg-slate-800"
                  }`}
                >
                  {item.icon}

                  {sidebarOpen && (
                    <span>
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            )
          )}

          {/* LOGOUT */}

          <div className="flex items-center gap-4 p-4 rounded-xl bg-red-500 mt-10 cursor-pointer">
            <LogOut size={20} />

            {sidebarOpen && (
              <span>Logout</span>
            )}
          </div>
        </div>
      </div>

      {/* MAIN */}

      <div className="flex-1">
        {/* TOPBAR */}

        <div className="h-20 bg-[#0f172a] border-b border-slate-800 flex items-center px-8">
          <h1 className="text-2xl font-bold">
            Professional Crypto
            Exchange
          </h1>
        </div>

        {/* PAGE */}

        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;