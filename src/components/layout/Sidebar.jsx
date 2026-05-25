import {
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  ClipboardList,
  ArrowLeftRight,
  BrainCircuit,
  Trophy,
  Shield,
  Settings,
  Landmark,
  ArrowDownCircle,
  ArrowUpCircle,
  Users,
  BadgeCheck,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

const Sidebar = () => {

  const navItems = [

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
      icon: ArrowLeftRight,
    },

    {
      name: "Deposit",
      path: "/deposit",
      icon: ArrowDownCircle,
    },

    {
      name: "Withdraw",
      path: "/withdraw",
      icon: ArrowUpCircle,
    },

    {
      name: "Admin",
      path: "/admin",
      icon: Users,
    },

    {
      name: "KYC",
      path: "/kyc",
      icon: BadgeCheck,
    },

    {
      name: "AI Signals",
      path: "/ai-signals",
      icon: BrainCircuit,
    },

    {
      name: "Staking",
      path: "/staking",
      icon: Landmark,
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: Trophy,
    },

    {
      name: "Referral",
      path: "/referral",
      icon: Trophy,
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

    <aside className="w-[260px] min-h-screen bg-black border-r border-yellow-500/10 p-5 flex flex-col sticky top-0 overflow-y-auto">

      <div className="mb-10">

        <h1 className="text-5xl font-black text-yellow-400">
          CryptoX
        </h1>

        <p className="text-zinc-500 mt-2">
          Exchange Platform
        </p>

      </div>

      <nav className="space-y-3">

        {
          navItems.map((item) => {

            const Icon =
              item.icon;

            return (

              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-bold ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-[#111] text-white hover:bg-yellow-400 hover:text-black"
                  }`
                }
              >

                <Icon size={20} />

                <span>
                  {item.name}
                </span>

              </NavLink>
            );
          })
        }

      </nav>

    </aside>
  );
};

export default Sidebar;