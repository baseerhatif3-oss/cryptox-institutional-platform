import {
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Notifications from "../components/Notifications";

import LiveTicker from "../components/LiveTicker";

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

        <div className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col overflow-y-auto">
          {/* LOGO */}

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              CryptoX
            </h1>

            <p className="text-slate-400 mt-2">
              AI Powered Exchange
            </p>
          </div>

          {/* NAVIGATION */}

          <nav className="space-y-4 flex-1">
            <Link
              to="/"
              className="block bg-slate-800 hover:bg-slate-700 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Trading Terminal
            </Link>

            <Link
              to="/markets"
              className="block bg-blue-700 hover:bg-blue-600 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Markets
            </Link>

            <Link
              to="/portfolio"
              className="block bg-purple-700 hover:bg-purple-600 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Portfolio
            </Link>

            <Link
              to="/ai-trading"
              className="block bg-yellow-600 hover:bg-yellow-500 px-5 py-4 rounded-2xl font-semibold transition"
            >
              AI Trading
            </Link>

            <Link
              to="/copy-trading"
              className="block bg-cyan-600 hover:bg-cyan-500 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Copy Trading
            </Link>

            <Link
              to="/referrals"
              className="block bg-orange-600 hover:bg-orange-500 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Referrals
            </Link>

            <Link
              to="/staking"
              className="block bg-emerald-600 hover:bg-emerald-500 px-5 py-4 rounded-2xl font-semibold transition"
            >
              Staking & Earn
            </Link>

            <Link
              to="/p2p"
              className="block bg-indigo-600 hover:bg-indigo-500 px-5 py-4 rounded-2xl font-semibold transition"
            >
              P2P Marketplace
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
              className="block bg-pink-700 hover:bg-pink-600 px-5 py-4 rounded-2xl font-semibold transition"
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

        {/* MAIN */}

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* TOPBAR */}

          <div className="h-24 border-b border-slate-800 bg-slate-900 px-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                CryptoX Exchange
              </h2>

              <p className="text-slate-400">
                Advanced AI Trading Platform
              </p>
            </div>

            <Notifications />
          </div>

          {/* LIVE TICKER */}

          <LiveTicker />

          {/* PAGE */}

          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

export default DashboardLayout;