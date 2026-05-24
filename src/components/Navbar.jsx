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
        "Portfolio",

      path:
        "/portfolio",
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

          {token ? (

            <div className="hidden lg:flex items-center gap-4">

              <NotificationCenter />

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

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
};

export default Navbar;