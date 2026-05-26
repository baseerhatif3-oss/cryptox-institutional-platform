import {
  LayoutDashboard,
  LineChart,
  CandlestickChart,
  Wallet,
  ClipboardList,
  ArrowDownToLine,
  ArrowUpFromLine,
  Bell,
  Shield,
  Brain,
  Coins,
  Trophy,
  Users,
  Settings,
  Activity,
  BarChart3,
  TrendingUp,
  Copy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

import {
  useState,
} from "react";

import Logo from "../Logo";

const Sidebar = () => {

  const [
    collapsed,
    setCollapsed,
  ] = useState(false);

  const links = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
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
      icon: TrendingUp,
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
      name: "Deposit",
      path: "/deposit",
      icon: ArrowDownToLine,
    },

    {
      name: "Withdraw",
      path: "/withdraw",
      icon: ArrowUpFromLine,
    },

    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell,
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
      name: "Admin",
      path: "/admin",
      icon: BarChart3,
    },

    {
      name: "Admin Analytics",
      path: "/admin-analytics",
      icon: Activity,
    },

    {
      name: "About Exchange",
      path: "/about-exchange",
      icon: Activity,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (

    <div className={`hidden lg:flex flex-col min-h-screen border-r border-yellow-500/10 bg-black/80 backdrop-blur-3xl sticky top-0 transition-all duration-300 ${
      collapsed
        ? "w-[110px]"
        : "w-[320px]"
    }`}>

      <div className="flex items-center justify-between p-6 border-b border-white/5">

        {
          !collapsed && (
            <Logo />
          )
        }

        <button
          onClick={() =>
            setCollapsed(
              !collapsed
            )
          }
          className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:border-yellow-400/30 transition-all"
        >

          {
            collapsed
              ? (
                <ChevronRight />
              )
              : (
                <ChevronLeft />
              )
          }

        </button>

      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <div className="space-y-3">

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
                    to={item.path}
                    className={({
                      isActive,
                    }) => `
                      flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group
                      ${
                        isActive
                          ? "bg-yellow-400 text-black font-black shadow-lg shadow-yellow-400/20"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >

                    <Icon
                      size={24}
                    />

                    {
                      !collapsed && (
                        <span className="text-[16px]">

                          {item.name}

                        </span>
                      )
                    }

                  </NavLink>
                );
              }
            )
          }

        </div>

      </div>

      <div className="p-5 border-t border-white/5">

        <div className="glass rounded-3xl p-5 overflow-hidden relative">

          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-green-400 font-bold text-sm">

                SYSTEM ONLINE

              </span>

            </div>

            {
              !collapsed && (
                <>

                  <h2 className="text-2xl font-black mb-3">

                    CryptoX Exchange

                  </h2>

                  <p className="text-zinc-500 text-sm leading-relaxed">

                    Enterprise-grade crypto trading infrastructure powered by AI systems.

                  </p>

                </>
              )
            }

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;