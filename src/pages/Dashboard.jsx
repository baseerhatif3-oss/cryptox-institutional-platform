import MainLayout from "../components/layout/MainLayout";

import ActivityFeed from "../components/dashboard/ActivityFeed";
import StatsGrid from "../components/dashboard/StatsGrid";
import Testimonials from "../components/dashboard/Testimonials";

const stats = [

  {
    title: "Portfolio Value",
    value: "$842,420",
    change: "+18.4%",
    color: "text-yellow-400",
  },

  {
    title: "24H Profit",
    value: "+$24,820",
    change: "+12.8%",
    color: "text-green-400",
  },

  {
    title: "Active Trades",
    value: "148",
    change: "+22",
    color: "text-blue-400",
  },

  {
    title: "Win Rate",
    value: "82%",
    change: "+6.2%",
    color: "text-purple-400",
  },
];

const assets = [

  {
    coin: "BTC",
    amount: "$342,000",
    profit: "+12.4%",
  },

  {
    coin: "ETH",
    amount: "$188,000",
    profit: "+8.7%",
  },

  {
    coin: "SOL",
    amount: "$94,000",
    profit: "+22.1%",
  },

  {
    coin: "BNB",
    amount: "$76,000",
    profit: "+5.4%",
  },
];

const Dashboard = () => {

  return (

    <MainLayout>

      <div className="mb-12">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            LIVE PORTFOLIO ACTIVE

          </span>

        </div>

        <h1 className="text-7xl font-black leading-tight mb-6">

          Institutional
          <span className="text-yellow-400">

            {" "}Dashboard

          </span>

        </h1>

        <p className="text-zinc-500 text-2xl max-w-3xl leading-relaxed">

          Enterprise-grade cryptocurrency trading and portfolio management infrastructure.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        {
          stats.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 relative overflow-hidden"
              >

                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl"></div>

                <p className="text-zinc-500 text-lg mb-5">

                  {
                    item.title
                  }

                </p>

                <h2 className={`text-5xl font-black mb-5 ${item.color}`}>

                  {
                    item.value
                  }

                </h2>

                <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full">

                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>

                  <span className="text-green-400 font-bold">

                    {
                      item.change
                    }

                  </span>

                </div>

              </div>
            )
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">

        <div className="xl:col-span-2 glass rounded-3xl p-10">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-4xl font-black mb-3">

                Portfolio Allocation

              </h2>

              <p className="text-zinc-500 text-lg">

                Real-time institutional asset monitoring.

              </p>

            </div>

            <div className="bg-yellow-400/10 px-5 py-3 rounded-2xl">

              <span className="text-yellow-400 font-black">

                LIVE

              </span>

            </div>

          </div>

          <div className="space-y-8">

            {
              assets.map(
                (
                  asset,
                  index
                ) => (

                  <div
                    key={index}
                    className="border-b border-white/5 pb-6"
                  >

                    <div className="flex items-center justify-between mb-4">

                      <div>

                        <h3 className="text-3xl font-black mb-2">

                          {
                            asset.coin
                          }

                        </h3>

                        <p className="text-zinc-500">

                          Digital Asset Position

                        </p>

                      </div>

                      <div className="text-right">

                        <h3 className="text-3xl font-black mb-2">

                          {
                            asset.amount
                          }

                        </h3>

                        <p className="text-green-400 font-bold">

                          {
                            asset.profit
                          }

                        </p>

                      </div>

                    </div>

                    <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{
                          width: `${70 - index * 12}%`,
                        }}
                      ></div>

                    </div>

                  </div>
                )
              )
            }

          </div>

        </div>

        <div className="glass rounded-3xl p-10">

          <h2 className="text-4xl font-black mb-10">

            Market Overview

          </h2>

          <div className="space-y-8">

            <div className="flex items-center justify-between">

              <span className="text-zinc-500 text-lg">

                Bitcoin Dominance

              </span>

              <span className="text-yellow-400 font-black text-2xl">

                54.2%

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-500 text-lg">

                Fear & Greed Index

              </span>

              <span className="text-green-400 font-black text-2xl">

                74

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-500 text-lg">

                Market Volume

              </span>

              <span className="text-blue-400 font-black text-2xl">

                $182B

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-500 text-lg">

                ETH Gas Fees

              </span>

              <span className="text-purple-400 font-black text-2xl">

                22 GWEI

              </span>

            </div>

          </div>

        </div>

      </div>

      <ActivityFeed />

      <div className="mt-10">

        <StatsGrid />

      </div>

      <div className="mt-10">

        <Testimonials />

      </div>

    </MainLayout>
  );
};

export default Dashboard;