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
    <div className="border-b border-gray-800 bg-[#111]">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="text-3xl font-bold text-yellow-400"
        >
          CryptoX
        </Link>



        {/* NAVIGATION */}

        <div className="flex items-center gap-6">

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



          {user?.role ===
            "admin" && (

            <Link
              to="/admin"
              className="hover:text-yellow-400 transition"
            >
              Admin
            </Link>

          )}



          {/* USER */}

          <div className="flex items-center gap-4 ml-6">

            <div className="bg-black border border-gray-700 px-4 py-2 rounded-xl">
              {user?.name}
            </div>



            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-xl font-semibold"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;