import React from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {

  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const isVerified =
    user?.isVerified;

  /*
  ==========================================
  LOGOUT
  ==========================================
  */

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  return (

    <nav className="border-b border-gray-900 bg-black sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="text-4xl font-black text-yellow-400"
        >
          CryptoX
        </Link>

        {/* NAVIGATION */}

        <div className="flex items-center gap-6 text-sm font-semibold">

          <Link
            to="/"
            className="hover:text-yellow-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/spot"
            className="hover:text-yellow-400 transition"
          >
            Spot Trading
          </Link>

          <Link
            to="/futures"
            className="hover:text-yellow-400 transition"
          >
            Futures
          </Link>

          <Link
            to="/wallet"
            className="hover:text-yellow-400 transition"
          >
            Wallet
          </Link>

          <Link
            to="/transactions"
            className="hover:text-yellow-400 transition"
          >
            Transactions
          </Link>

          <Link
            to="/kyc"
            className="hover:text-yellow-400 transition"
          >
            KYC
          </Link>

          {user?.role ===
            "admin" && (

            <Link
              to="/admin"
              className="hover:text-yellow-400 transition"
            >
              Admin
            </Link>

          )}

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          {/* USER */}

          <div className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-2 rounded-xl">

            <span className="font-semibold">
              {user?.name}
            </span>

            {isVerified && (

              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                VERIFIED
              </span>

            )}

          </div>

          {/* LOGOUT */}

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-xl font-bold"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;