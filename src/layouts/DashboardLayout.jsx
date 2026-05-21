import {
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  motion,
} from "framer-motion";

const DashboardLayout =
  () => {
    const location =
      useLocation();

    const [
      sidebarOpen,
      setSidebarOpen,
    ] = useState(false);

    const menuItems = [
      {
        name:
          "Dashboard",

        path:
          "/dashboard",
      },

      {
        name:
          "Trading",

        path:
          "/trading",
      },

      {
        name:
          "Futures",

        path:
          "/futures",
      },

      {
        name:
          "Wallets",

        path:
          "/wallets",
      },

      {
        name:
          "Orders",

        path:
          "/orders",
      },

      {
        name:
          "Analytics",

        path:
          "/analytics",
      },

      {
        name:
          "Notifications",

        path:
          "/notifications",
      },

      {
        name:
          "Profile",

        path:
          "/profile",
      },

      {
        name:
          "Admin",

        path:
          "/admin",
      },
    ];

    return (
      <div className="flex min-h-screen bg-[#0b0e11] text-white overflow-hidden">
        {/* MOBILE OVERLAY */}

        {sidebarOpen && (
          <div
            onClick={() =>
              setSidebarOpen(
                false
              )
            }
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
          />
        )}

        {/* SIDEBAR */}

        <motion.aside
          initial={{
            x: -300,
          }}
          animate={{
            x: sidebarOpen
              ? 0
              : -300,
          }}
          transition={{
            duration: 0.3,
          }}
          className="fixed md:relative z-50 md:z-auto w-64 bg-black border-r border-gray-800 h-screen flex flex-col md:translate-x-0"
        >
          {/* LOGO */}

          <div className="p-6 border-b border-gray-800 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-yellow-400">
                CryptoX
              </h1>

              <p className="text-gray-500 text-sm mt-2">
                Professional Exchange
              </p>
            </div>

            <button
              className="md:hidden"
              onClick={() =>
                setSidebarOpen(
                  false
                )
              }
            >
              <FiX size={24} />
            </button>
          </div>

          {/* NAVIGATION */}

          <nav className="flex-1 p-4 space-y-2 overflow-auto">
            {menuItems.map(
              (
                item
              ) => (
                <Link
                  key={
                    item.path
                  }
                  to={
                    item.path
                  }
                  onClick={() =>
                    setSidebarOpen(
                      false
                    )
                  }
                  className={`block px-4 py-3 rounded-2xl transition font-medium ${
                    location.pathname ===
                    item.path
                      ? "bg-yellow-500 text-black"
                      : "hover:bg-[#111] text-gray-300"
                  }`}
                >
                  {
                    item.name
                  }
                </Link>
              )
            )}
          </nav>

          {/* FOOTER */}

          <div className="p-4 border-t border-gray-800">
            <div className="bg-[#111] rounded-2xl p-4">
              <p className="text-sm text-gray-400">
                Exchange Status
              </p>

              <div className="flex items-center gap-2 mt-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                <span className="text-green-400 font-semibold">
                  Online
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                All systems operational
              </p>
            </div>
          </div>
        </motion.aside>

        {/* MAIN */}

        <div className="flex-1 flex flex-col w-full">
          {/* TOPBAR */}

          <header className="h-16 bg-[#111] border-b border-gray-800 flex items-center justify-between px-4 md:px-6">
            {/* LEFT */}

            <div className="flex items-center gap-4">
              {/* MOBILE MENU */}

              <button
                onClick={() =>
                  setSidebarOpen(
                    true
                  )
                }
                className="md:hidden"
              >
                <FiMenu
                  size={26}
                />
              </button>

              <div>
                <h2 className="text-lg md:text-xl font-bold">
                  CryptoX Exchange
                </h2>

                <p className="text-xs text-gray-500 hidden md:block">
                  Professional Trading Platform
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">
              {/* LIVE */}

              <div className="hidden md:flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>

                <span className="text-sm font-medium">
                  Live Market
                </span>
              </div>

              {/* PROFILE */}

              <Link
                to="/profile"
                className="bg-[#1a1a1a] border border-gray-700 hover:border-yellow-500 px-4 py-2 rounded-xl transition"
              >
                Profile
              </Link>

              {/* LOGOUT */}

              <button
                onClick={() => {
                  localStorage.removeItem(
                    "token"
                  );

                  window.location.href =
                    "/login";
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-semibold transition"
              >
                Logout
              </button>
            </div>
          </header>

          {/* PAGE */}

          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <Outlet />
            </motion.div>
          </main>
        </div>
      </div>
    );
  };

export default DashboardLayout;