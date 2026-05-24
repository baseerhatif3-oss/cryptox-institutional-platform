import React from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaHome,
  FaShieldAlt,
  FaWallet,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

const MobileBottomNav = () => {

  const location =
    useLocation();

  const token =
    localStorage.getItem(
      "token"
    );

  if (!token) {

    return null;
  }

  const navItems = [

    {
      name:
        "Home",

      icon:
        <FaHome />,

      path:
        "/dashboard",
    },

    {
      name:
        "Trade",

      icon:
        <FaChartLine />,

      path:
        "/spot",
    },

    {
      name:
        "Security",

      icon:
        <FaShieldAlt />,

      path:
        "/security",
    },

    {
      name:
        "Wallet",

      icon:
        <FaWallet />,

      path:
        "/wallet",
    },

    {
      name:
        "Settings",

      icon:
        <FaCog />,

      path:
        "/settings",
    },
  ];

  return (

    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl">

      <div className="grid grid-cols-5">

        {navItems.map(
          (item) => (

            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-2 py-4 text-xs font-bold transition ${
                location.pathname ===
                item.path
                  ? "text-yellow-400"
                  : "text-gray-500"
              }`}
            >

              <div className="text-xl">

                {item.icon}

              </div>

              <span>

                {item.name}

              </span>

            </Link>

          )
        )}

      </div>

    </div>

  );
};

export default MobileBottomNav;