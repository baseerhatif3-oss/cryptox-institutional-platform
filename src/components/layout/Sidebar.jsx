import {
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  Shield,
  Settings,
  Rocket,
  ImageIcon,
  Users,
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
    name: "Trading",
    path: "/trading",
    icon: CandlestickChart,
  },

  {
    name: "Portfolio",
    path: "/portfolio",
    icon: Wallet,
  },

  {
    name: "Wallet",
    path: "/wallet",
    icon: Wallet,
  },

  {
    name: "NFT Market",
    path: "/nft",
    icon: ImageIcon,
  },

  {
    name: "Launchpad",
    path: "/launchpad",
    icon: Rocket,
  },

  {
    name: "Admin",
    path: "/admin",
    icon: Users,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {

  return (

    <div className="w-[300px] min-h-screen bg-black border-r border-white/5 p-8 hidden xl:flex flex-col">

      <div className="mb-14">

        <h1 className="text-5xl font-black text-yellow-400">

          CryptoX

        </h1>

      </div>

      <div className="flex flex-col gap-4">

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

                    `flex items-center gap-4 px-6 py-5 rounded-2xl font-bold transition-all ${
                      isActive
                        ? "bg-yellow-400 text-black"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >

                  <Icon size={24} />

                  {
                    item.name
                  }

                </NavLink>
              );
            }
          )
        }

      </div>

      <div className="mt-auto glass rounded-3xl p-6 border border-green-500/10">

        <div className="flex items-center gap-4 mb-4">

          <Shield
            className="text-green-400"
            size={28}
          />

          <h2 className="text-2xl font-black">

            Security

          </h2>

        </div>

        <p className="text-zinc-500 leading-relaxed mb-5">

          Institutional-grade multi-layer protection active.

        </p>

        <div className="flex items-center gap-3">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            Systems Operational

          </span>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;