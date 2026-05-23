import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

const Navbar = () => {

  const navigate =
    useNavigate();

  const [mobileOpen, setMobileOpen] =
    useState(false);

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

  /*
  ==========================================
  NAV LINKS
  ==========================================
  */

  const navLinks = [

    {
      name:
        "Dashboard",

      path: "/",
    },

    {
      name:
        "Spot",

      path: "/spot",
    },

    {
      name:
        "Futures",

      path:
        "/futures",
    },

    {
      name:
        "Wallet",

      path:
        "/wallet",
    },

    {
      name:
        "Transactions",

      path:
        "/transactions",
    },

    {
      name:
        "KYC",

      path:
        "/kyc",
    },
  ];

  if (
    user?.role ===
    "admin"
  ) {

    navLinks.push({
      name:
        "Admin",

      path:
        "/admin",
    });
  }

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-xl shadow-lg shadow-yellow-500/30">
              C
            </div>

            <div>

              <h1 className="text-2xl font-black tracking-tight">
                CryptoX
              </h1>

              <p className="text-xs text-gray-500 -mt-1">
                Exchange
              </p>

            </div>

          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden lg:flex items-center gap-2">

            {navLinks.map(
              (link) => (

                <Link
                  key={
                    link.name
                  }

                  to={
                    link.path
                  }

                  className="px-5 py-3 rounded-xl text-sm font-semibold hover:bg-white/5 transition"
                >

                  {
                    link.name
                  }

                </Link>

              )
            )}

          </div>

          {/* RIGHT SIDE */}

          <div className="hidden lg:flex items-center gap-4">

            {/* USER */}

            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">

              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-black">
                {user?.name
                  ?.charAt(0)}
              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h3 className="font-semibold text-sm">
                    {
                      user?.name
                    }
                  </h3>

                  {isVerified && (

                    <span className="bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full font-bold">
                      VERIFIED
                    </span>

                  )}

                </div>

                <p className="text-xs text-gray-500">
                  {
                    user?.email
                  }
                </p>

              </div>

            </div>

            {/* LOGOUT */}

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-bold text-sm"
            >

              Logout

            </button>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            className="lg:hidden text-3xl"
          >

            {mobileOpen
              ? <FiX />
              : <FiMenu />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >

            <div className="p-5 space-y-3">

              {/* USER */}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-black">
                    {user?.name
                      ?.charAt(0)}
                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <h3 className="font-bold">
                        {
                          user?.name
                        }
                      </h3>

                      {isVerified && (

                        <span className="bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full font-bold">
                          VERIFIED
                        </span>

                      )}

                    </div>

                    <p className="text-xs text-gray-500">
                      {
                        user?.email
                      }
                    </p>

                  </div>

                </div>

              </div>

              {/* LINKS */}

              {navLinks.map(
                (link) => (

                  <Link
                    key={
                      link.name
                    }

                    to={
                      link.path
                    }

                    onClick={() =>
                      setMobileOpen(
                        false
                      )
                    }

                    className="block bg-white/5 hover:bg-white/10 transition px-5 py-4 rounded-2xl font-semibold"
                  >

                    {
                      link.name
                    }

                  </Link>

                )
              )}

              {/* LOGOUT */}

              <button
                onClick={
                  logout
                }
                className="w-full mt-4 bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-bold"
              >

                Logout

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
};

export default Navbar;