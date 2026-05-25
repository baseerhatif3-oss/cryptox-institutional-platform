import {
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  ClipboardList,
  Brain,
  Coins,
  Trophy,
  Users,
  Shield,
  Settings,
  ReceiptText,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Trading",
    path: "/trading",
    icon: CandlestickChart,
  },

  {
    name: "Wallet",
    path: "/wallet",
    icon: Wallet,
  },

  {
    name: "Orders",
    path: "/orders",
    icon: ClipboardList,
  },

  {
    name: "Transactions",
    path: "/transactions",
    icon: ReceiptText,
  },

  {
    name: "AI Signals",
    path: "/ai-signals",
    icon: Brain,
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

const Sidebar = () => {

  const location = useLocation();

  return (

    <div className="fixed left-0 top-0 w-[260px] h-screen bg-black border-r border-yellow-500/10 p-5 z-50">

      <div className="mb-10">

        <h1 className="text-4xl font-black text-yellow-400">
          CryptoX
        </h1>

      </div>

      <div className="flex flex-col gap-2">

        {
          menuItems.map((item) => {

            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (

              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 border ${
                  active
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-[#0d0d0d] text-white border-transparent hover:border-yellow-500/20 hover:bg-[#151515]"
                }`}
              >

                <Icon size={18} />

                <span className="font-semibold">
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