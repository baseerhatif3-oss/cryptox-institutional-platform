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
    ];

    return (
      <div className="flex min-h-screen bg-[#0b0e11] text-white">
        {/* SIDEBAR */}

        <aside className="w-64 bg-black border-r border-gray-800 hidden md:flex flex-col">
          <div className="p-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold text-yellow-400">
              CryptoX
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Professional Exchange
            </p>
          </div>

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
                  className={`block px-4 py-3 rounded-xl transition ${
                    location.pathname ===
                    item.path
                      ? "bg-yellow-500 text-black font-bold"
                      : "hover:bg-gray-900 text-gray-300"
                  }`}
                >
                  {
                    item.name
                  }
                </Link>
              )
            )}
          </nav>
        </aside>

        {/* MAIN */}

        <div className="flex-1 flex flex-col">
          {/* TOPBAR */}

          <header className="h-16 border-b border-gray-800 bg-[#111] flex items-center justify-between px-6">
            <div>
              <h2 className="font-semibold text-lg">
                CryptoX Exchange
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                Live Market
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem(
                    "token"
                  );

                  window.location.href =
                    "/login";
                }}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          </header>

          {/* PAGE */}

          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    );
  };

export default DashboardLayout;