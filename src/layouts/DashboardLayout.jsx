import {
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

const DashboardLayout =
  () => {
    const location =
      useLocation();

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
    ];

    return (
      <div className="flex min-h-screen bg-[#0b0e11] text-white">
        {/* SIDEBAR */}

        <aside className="w-64 bg-black border-r border-gray-800 hidden md:flex flex-col">
          {/* LOGO */}

          <div className="p-6 border-b border-gray-800">
            <h1 className="text-3xl font-bold text-yellow-400">
              CryptoX
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Professional Exchange
            </p>
          </div>

          {/* MENU */}

          <nav className="flex-1 p-4 space-y-2">
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
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <span className="text-green-400 font-semibold">
                  Online
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}

        <div className="flex-1 flex flex-col">
          {/* TOPBAR */}

          <header className="h-16 bg-[#111] border-b border-gray-800 flex items-center justify-between px-6">
            {/* LEFT */}

            <div>
              <h2 className="text-xl font-bold">
                CryptoX Exchange
              </h2>

              <p className="text-xs text-gray-500">
                Professional Trading Platform
              </p>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-4">
              {/* LIVE STATUS */}

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

          {/* PAGE CONTENT */}

          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    );
  };

export default DashboardLayout;