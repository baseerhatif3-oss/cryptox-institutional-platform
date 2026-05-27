import {
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  BarChart3,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

const MobileNavbar = () => {

  const links = [

    {
      icon:
        LayoutDashboard,

      path:
        "/dashboard",
    },

    {
      icon:
        CandlestickChart,

      path:
        "/markets",
    },

    {
      icon:
        BarChart3,

      path:
        "/trading",
    },

    {
      icon:
        Wallet,

      path:
        "/wallet",
    },
  ];

  return (

    <div className="xl:hidden fixed bottom-0 left-0 w-full z-50 border-t border-white/5 bg-black/95 backdrop-blur-xl px-6 py-5">

      <div className="flex items-center justify-between">

        {
          links.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <NavLink
                  key={index}
                  to={
                    item.path
                  }
                  className={(
                    {
                      isActive,
                    }
                  ) =>

                    `p-4 rounded-2xl transition-all ${
                      isActive
                        ? "bg-yellow-400 text-black"
                        : "text-zinc-500"
                    }`
                  }
                >

                  <Icon
                    size={26}
                  />

                </NavLink>
              );
            }
          )
        }

      </div>

    </div>
  );
};

export default MobileNavbar;