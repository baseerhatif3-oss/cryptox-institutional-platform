import {
  LayoutDashboard,
  Bell,
  CandlestickChart,
  ChartCandlestick,
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
  LineChart,
  LockKeyhole,
  Copy,
  Menu,
  X,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

import {
  useState,
} from "react";

const Sidebar = () => {

  const [open, setOpen] =
    useState(false);

  const navItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell,
    },

    {
      name: "Markets",
      path: "/markets",
      icon: LineChart,
    },

    {
      name: "Trading",
      path: "/trading",
      icon: CandlestickChart,
    },

    {
      name: "Futures",
      path: "/futures",
      icon: ChartCandlestick,
    },

    {
      name: "Copy Trading",
      path: "/copy-trading",
      icon: Copy,
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
      name: "Security Center",
      path: "/security-center",
      icon: LockKeyhole,
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

    <>

      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-yellow-400 text-black p-3 rounded-xl"
      >

        <Menu size={24} />

      </button>

      {
        open && (

          <div
            className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )
      }

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50
        w-[260px]
        min-h-screen
        bg-black
        border-r border-yellow-500/10
        p-5
        flex flex-col
        overflow-y-auto
        transition-all duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}>

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-black text-yellow-400">
              CryptoX
            </h1>

            <p className="text-zinc-500 mt-2">
              Exchange Platform
            </p>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-white"
          >

            <X size={28} />

          </button>

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
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-bold ${
                      isActive
                        ? "bg-yellow-400 text-black"
                        : "bg-[#111] text-white hover:bg-yellow-400 hover:text-black"
                    }`
                  }
                >

                  <Icon size={20} />

                  <span className="text-sm xl:text-base">
                    {item.name}
                  </span>

                </NavLink>
              );
            })
          }

        </nav>

      </aside>

    </>
  );
};

export default Sidebar;