import MainLayout from "../components/layout/MainLayout";

import AIInsights from "../components/dashboard/AIInsights";

import Watchlist from "../components/dashboard/Watchlist";

import NotificationPanel from "../components/ui/NotificationPanel";

import ActivityFeed from "../components/ui/ActivityFeed";

import {
  TrendingUp,
  Wallet,
  BarChart3,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Portfolio Balance",
    value: "$842,450",
    change: "+12.8%",
    icon: Wallet,
    color: "text-yellow-400",
  },

  {
    title: "24H Profit",
    value: "$18,240",
    change: "+4.2%",
    icon: TrendingUp,
    color: "text-green-400",
  },

  {
    title: "Active Trades",
    value: "128",
    change: "+18%",
    icon: BarChart3,
    color: "text-blue-400",
  },

  {
    title: "Market Activity",
    value: "98%",
    change: "+2.1%",
    icon: Activity,
    color: "text-purple-400",
  },
];

const Dashboard = () => {

  return (

    <MainLayout>

      <div className="mb-12">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            LIVE INSTITUTIONAL INFRASTRUCTURE

          </span>

        </div>

        <h1 className="text-6xl xl:text-7xl font-black mb-6">

          Institutional

          <span className="text-yellow-400">

            {" "}Dashboard

          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        {
          stats.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <div
                  key={index}
                  className="glass rounded-[32px] p-8 card-hover"
                >

                  <div className="flex items-center justify-between mb-8">

                    <div className={`w-16 h-16 rounded-3xl bg-black/40 flex items-center justify-center ${item.color}`}>

                      <Icon size={34} />

                    </div>

                    <div className="flex items-center gap-2 text-green-400 font-bold">

                      <ArrowUpRight size={18} />

                      {
                        item.change
                      }

                    </div>

                  </div>

                  <p className="text-zinc-500 text-lg mb-3">

                    {
                      item.title
                    }

                  </p>

                  <h2 className="text-5xl font-black">

                    {
                      item.value
                    }

                  </h2>

                </div>

              );
            }
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <AIInsights />

        <Watchlist />

        <NotificationPanel />

        <ActivityFeed />

      </div>

    </MainLayout>

  );
};

export default Dashboard;