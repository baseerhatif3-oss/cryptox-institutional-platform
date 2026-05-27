import {
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  Settings,
  User,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

const links = [

  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Markets",
    path: "/markets",
    icon: CandlestickChart,
  },

  {
    name: "Wallet",
    path: "/wallet",
    icon: Wallet,
  },

  {
    name: "Admin",
    path: "/admin",
    icon: User,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const MobileNavbar = () => {

  return (

    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-white/10 xl:hidden">

      <div className="grid grid-cols-5">

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

                    `flex flex-col items-center justify-center py-4 gap-2 transition-all ${
                      isActive
                        ? "text-yellow-400"
                        : "text-zinc-500"
                    }`
                  }
                >

                  <Icon size={22} />

                  <span className="text-xs font-bold">

                    {
                      item.name
                    }

                  </span>

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