import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import NotificationCenter from "./NotificationCenter";

const Navbar = () => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const token =
    localStorage.getItem(
      "token"
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

      path:
        "/dashboard",
    },

    {
      name:
        "Spot",

      path:
        "/spot",
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
        "Leaderboard",

      path:
        "/leaderboard",
    },

    {
      name:
        "VIP",

      path:
        "/vip",
    },

    {
      name:
        "Referral",

      path:
        "/referral",
    },

    {
      name:
        "Analytics",

      path:
        "/analytics",
    },

    {
      name:
        "Settings",

      path:
        "/settings",
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

  /*
  ==========================================
  HIDE NAVBAR ON LANDING
  ==========================================
  */

  if (
    location.pathname === "/"
  ) {

    return null;
  }

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to={
              token
                ? "/dashboard"
                : "/"
            }
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

          {token && (

            <div className="hidden lg:flex items-center gap-2 overflow-x-auto">

              {navLinks.map(
                (link) => (

                  <Link
                    key={
                      link.name
                    }

                    to={
                      link.path
                    }

                    className={`px-5 py-3 rounded-xl text-sm font-semibold transition whitespace-nowrap ${
                      location.pathname ===
                      link.path
                        ? "bg-yellow-500 text-black"
                        : "hover:bg-white/5"
                    }`}
                  >

                    {
                      link.name
                    }

                  </Link>

                )
              )}

            </div>

          )}

          {/* RIGHT */}

          {token ? (

            <div className="hidden lg:flex items-center gap-4">

              <NotificationCenter />

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

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-bold text-sm"
              >

                Logout

              </button>

            </div>

          ) : (

            <div className="hidden lg:flex items-center gap-4">

              <Link
                to="/login"
                className="border border-white/10 hover:bg-white/5 transition px-6 py-3 rounded-xl font-bold"
              >

                Login

              </Link>

              <Link
                to="/register"
                className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-xl font-bold text-black"
              >

                Get Started

              </Link>

            </div>

          )}

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

              {token ? (

                <>

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

                        className={`block px-5 py-4 rounded-2xl font-semibold transition ${
                          location.pathname ===
                          link.path
                            ? "bg-yellow-500 text-black"
                            : "bg-white/5 hover:bg-white/10"
                        }`}
                      >

                        {
                          link.name
                        }

                      </Link>

                    )
                  )}

                  <button
                    onClick={
                      logout
                    }
                    className="w-full mt-4 bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-bold"
                  >

                    Logout

                  </button>

                </>

              ) : (

                <>

                  <Link
                    to="/login"
                    className="block text-center border border-white/10 hover:bg-white/5 transition px-6 py-4 rounded-2xl font-bold"
                  >

                    Login

                  </Link>

                  <Link
                    to="/register"
                    className="block text-center bg-yellow-500 hover:bg-yellow-600 transition px-6 py-4 rounded-2xl font-bold text-black"
                  >

                    Get Started

                  </Link>

                </>

              )}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
};

export default Navbar;