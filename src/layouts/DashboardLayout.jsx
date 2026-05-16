import React, {
  useState,
} from "react";

import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  History,
  Star,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react";

import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const location =
    useLocation();

  const user = JSON.parse(
    localStorage.getItem(
      "user"
    )
  );

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

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    window.location.href =
      "/";
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      {/* OVERLAY */}

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}

      <div
        className={`fixed lg:static z-50 top-0 left-0 h-full bg-[#0f172a] border-r border-slate-800 w-72 transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* LOGO */}

        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h1 className="text-3xl font-bold text-blue-500">
            CryptoX
          </h1>

          <button
            onClick={() =>
              setSidebarOpen(false)
            }
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        {/* USER PROFILE */}

        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
              <User size={28} />
            </div>

            <div>
              <h2 className="font-bold text-lg">
                {user?.name ||
                  "Trader"}
              </h2>

              <p className="text-slate-400 text-sm">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* MENU */}

        <div className="p-4 space-y-3">
          {menuItems.map(
            (item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() =>
                  setSidebarOpen(false)
                }
              >
                <div
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    location.pathname ===
                    item.path
                      ? "bg-blue-600"
                      : "hover:bg-slate-800"
                  }`}
                >
                  {item.icon}

                  <span className="font-medium">
                    {item.name}
                  </span>
                </div>
              </Link>
            )
          )}

          {/* LOGOUT */}

          <button
            onClick={logout}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-500 hover:bg-red-600 transition-all mt-10"
          >
            <LogOut size={20} />

            <span className="font-medium">
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* MAIN */}

      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}

        <div className="h-20 bg-[#0f172a] border-b border-slate-800 flex items-center justify-between px-6">
          <button
            onClick={() =>
              setSidebarOpen(true)
            }
            className="lg:hidden"
          >
            <Menu size={28} />
          </button>

          <h1 className="text-2xl md:text-3xl font-bold">
            Professional Crypto
            Exchange
          </h1>

          <div className="hidden md:flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>

            <span className="text-slate-400">
              Live Market
            </span>
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;