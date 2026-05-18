import {
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

const DashboardLayout =
  () => {
    const navigate =
      useNavigate();

    const logout = () => {
      localStorage.removeItem(
        "token"
      );

      navigate(
        "/login"
      );
    };

    return (
      <div className="min-h-screen bg-slate-950 text-white flex">
        {/* SIDEBAR */}

        <div className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
          {/* LOGO */}

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              CryptoX
            </h1>

            <p className="text-slate-400 mt-2">
              Exchange Platform
            </p>
          </div>

          {/* NAVIGATION */}

          <nav className="space-y-4 flex-1">
            <Link
              to="/"
              className="block bg-slate-800 hover:bg-slate-700 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Dashboard
            </Link>

            <Link
              to="/futures"
              className="block bg-slate-800 hover:bg-slate-700 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Futures Trading
            </Link>

            <Link
              to="/deposit"
              className="block bg-green-700 hover:bg-green-600 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Deposit Funds
            </Link>

            <Link
              to="/withdraw"
              className="block bg-red-700 hover:bg-red-600 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Withdraw Funds
            </Link>

            <Link
              to="/admin"
              className="block bg-purple-700 hover:bg-purple-600 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Admin Panel
            </Link>
          </nav>

          {/* LOGOUT */}

          <button
            onClick={logout}
            className="mt-10 bg-slate-800 hover:bg-slate-700 px-5 py-4 rounded-2xl font-bold transition"
          >
            Logout
          </button>
        </div>

        {/* MAIN CONTENT */}

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    );
  };

export default DashboardLayout;