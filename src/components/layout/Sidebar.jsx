import {
  NavLink,
} from "react-router-dom";

import {
  LayoutDashboard,
  CandlestickChart,
  Wallet,
  ArrowLeftRight,
  Bell,
  Shield,
  Settings,
  UserCheck,
  LineChart,
  Users,
  Trophy,
  Copy,
  Cpu,
  Activity,
  BarChart3,
  X,
} from "lucide-react";

import Logo from "../Logo";

const Sidebar = () => {

  const links = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon:
        LayoutDashboard,
    },

    {
      name: "Markets",
      path: "/markets",
      icon:
        LineChart,
    },

    {
      name: "Trading",
      path: "/trading",
      icon:
        CandlestickChart,
    },

    {
      name: "Futures",
      path: "/futures",
      icon:
        Activity,
    },

    {
      name: "Copy Trading",
      path: "/copy-trading",
      icon:
        Copy,
    },

    {
      name: "AI Signals",
      path: "/ai-signals",
      icon:
        Cpu,
    },

    {
      name: "Wallet",
      path: "/wallet",
      icon:
        Wallet,
    },

    {
      name: "Orders",
      path: "/orders",
      icon:
        ArrowLeftRight,
    },

    {
      name: "Transactions",
      path: "/transactions",
      icon:
        ArrowLeftRight,
    },

    {
      name: "Notifications",
      path: "/notifications",
      icon:
        Bell,
    },

    {
      name: "KYC",
      path: "/kyc",
      icon:
        UserCheck,
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon:
        Trophy,
    },

    {
      name: "Referral",
      path: "/referral",
      icon:
        Users,
    },

    {
      name: "Security",
      path: "/security",
      icon:
        Shield,
    },

    {
      name: "Security Center",
      path: "/security-center",
      icon:
        Shield,
    },

    {
      name: "Admin",
      path: "/admin",
      icon:
        Settings,
    },

    {
      name: "Admin Analytics",
      path: "/admin-analytics",
      icon:
        BarChart3,
    },

    {
      name: "System Status",
      path: "/system-status",
      icon:
        Activity,
    },

    {
      name: "Settings",
      path: "/settings",
      icon:
        Settings,
    },
  ];

  return (

    <div className="w-[280px] min-h-screen bg-black border-r border-yellow-500/10 p-6 fixed lg:sticky top-0 left-0 z-50 overflow-y-auto">

      <div className="flex items-center justify-between mb-10">

        <Logo />

        <button className="lg:hidden bg-[#111] border border-yellow-500/10 p-2 rounded-xl">

          <X size={18} />

        </button>

      </div>

      <div className="space-y-3">

        {
          links.map(
            (
              link,
              index
            ) => {

              const Icon =
                link.icon;

              return (

                <NavLink
                  key={index}
                  to={link.path}
                  className={({
                    isActive,
                  }) =>
                    `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold ${
                      isActive

                        ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"

                        : "text-zinc-400 hover:bg-[#111] hover:text-white"
                    }`
                  }
                >

                  <Icon
                    size={20}
                  />

                  <span>

                    {link.name}

                  </span>

                </NavLink>
              );
            }
          )
        }

      </div>

      <div className="mt-10 bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 border border-yellow-500/20 rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold text-sm">

            SYSTEM ONLINE

          </span>

        </div>

        <h3 className="text-2xl font-black mb-3">

          CryptoX Pro

        </h3>

        <p className="text-zinc-500 text-sm leading-relaxed mb-5">

          Enterprise-grade cryptocurrency exchange with AI-powered trading infrastructure.

        </p>

        <div className="space-y-3">

          <div className="flex items-center justify-between">

            <span className="text-zinc-500 text-sm">

              Security

            </span>

            <span className="text-green-400 font-bold text-sm">

              99.9%

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-zinc-500 text-sm">

              Performance

            </span>

            <span className="text-yellow-400 font-bold text-sm">

              Ultra Fast

            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;