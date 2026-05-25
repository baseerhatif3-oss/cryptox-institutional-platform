import {
  LayoutDashboard,
  Wallet,
  CandlestickChart,
  ClipboardList,
  Settings,
  Shield,
  Bot,
  Coins,
  Users,
  Trophy,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

const Sidebar = () => {

  const location =
    useLocation();

  const menu = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon:
        LayoutDashboard,
    },

    {
      name: "Trading",
      path: "/trading",
      icon:
        CandlestickChart,
    },

    {
      name: "Wallet",
      path: "/wallet",
      icon: Wallet,
    },

    {
      name: "Orders",
      path: "/orders",
      icon:
        ClipboardList,
    },

    {
      name: "AI Signals",
      path: "/ai-signals",
      icon: Bot,
    },

    {
      name: "Staking",
      path: "/staking",
      icon: Coins,
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: Trophy,
    },

    {
      name: "Referral",
      path: "/referral",
      icon: Users,
    },

    {
      name: "Security",
      path: "/security",
      icon: Shield,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (

    <div className="w-[260px] h-screen bg-black border-r border-yellow-500/10 fixed left-0 top-0 p-6">

      <h1 className="text-3xl font-black text-yellow-400 mb-10">
        CryptoX
      </h1>

      <div className="space-y-2">

        {
          menu.map((item) => {

            const Icon =
              item.icon;

            return (

              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                  location.pathname ===
                  item.path
                    ? "bg-yellow-500 text-black font-bold"
                    : "text-gray-400 hover:bg-[#111]"
                }`}
              >

                <Icon
                  size={22}
                />

                <span>
                  {item.name}
                </span>

              </Link>
            );
          })
        }

      </div>

    </div>
  );
};

export default Sidebar;