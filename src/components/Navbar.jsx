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

import ThemeToggle from "./ThemeToggle";

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

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  const navLinks = [

    {
      name:
        "Dashboard",

      path:
        "/dashboard",
    },

    {
      name:
        "Markets",

      path:
        "/markets",
    },

    {
      name:
        "Community",

      path:
        "/community",
    },

    {
      name:
        "AI Portfolio",

      path:
        "/ai-portfolio",
    },

    {
      name:
        "Academy",

      path:
        "/academy",
    },

    {
      name:
        "Rewards",

      path:
        "/rewards",
    },

    {
      name:
        "Portfolio",

      path:
        "/portfolio",
    },

    {
      name:
        "Buy Crypto",

      path:
        "/buy-crypto",
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
        "AI Signals",

      path:
        "/ai-signals",
    },

    {
      name:
        "Copy Trading",

      path:
        "/copy-trading",
    },

    {
      name:
        "Staking",

      path:
        "/staking",
    },

    {
      name:
        "NFT",

      path:
        "/nft",
    },

    {
      name:
        "Launchpad",

      path:
        "/launchpad",
    },

    {
      name:
        "News",

      path:
        "/news",
    },

    {
      name:
        "Support",

      path:
        "/support",
    },

    {
      name:
        "Security",

      path:
        "/security",
    },

    {
      name:
        "Wallet",

      path:
        "/wallet",
    },

    {
      name:
        "Analytics",

      path:
        "/analytics",
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

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-xl">

              C

            </div>

            <div>

              <h1 className="text-2xl font-black">
                CryptoX
              </h1>

              <p className="text-xs text-gray-500">
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

                    className={`px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
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

          {/* RIGHT SIDE */}

          {token ? (

            <div className="hidden lg:flex items-center gap-4">

              {/* THEME */}

              <ThemeToggle />

              {/* NOTIFICATIONS */}

              <NotificationCenter />

              {/* USER */}

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">

                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-black text-black">

                  {user?.name
                    ? user.name[0]
                    : "U"}

                </div>

                <div>

                  <h3 className="font-bold text-sm">
                    {user?.name || "User"}
                  </h3>

                  <p className="text-xs text-gray-400">
                    Verified Trader
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

          ) : (

            <div className="hidden lg:flex items-center gap-4">

              <ThemeToggle />

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

          {/* MOBILE MENU BUTTON */}

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

            className="lg:hidden border-t border-white/10 bg-black/95"
          >

            <div className="p-5 space-y-3">

              {/* MOBILE TOP */}

              <div className="flex items-center justify-between mb-6">

                <ThemeToggle />

                <NotificationCenter />

              </div>

              {/* MOBILE USER */}

              {token && (

                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-3xl p-5 mb-6">

                  <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center font-black text-black text-xl">

                    {user?.name
                      ? user.name[0]
                      : "U"}

                  </div>

                  <div>

                    <h3 className="font-black text-lg">
                      {user?.name || "User"}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Premium Trader
                    </p>

                  </div>

                </div>

              )}

              {/* NAV LINKS */}

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

              {/* MOBILE LOGOUT */}

              {token && (

                <button
                  onClick={logout}
                  className="w-full mt-6 bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-black"
                >

                  Logout

                </button>

              )}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
};

export default Navbar;