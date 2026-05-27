import MainLayout from "../components/layout/MainLayout";

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Wallet,
  ShieldCheck,
} from "lucide-react";

import ActivityFeed from "../components/ActivityFeed";

const Dashboard = () => {

  const stats = [

    {
      title:
        "Portfolio Balance",

      value:
        "$842,420",

      icon:
        DollarSign,

      color:
        "text-yellow-400",

      bg:
        "bg-yellow-400/10",

      change:
        "+12.4%",
    },

    {
      title:
        "24H Profit",

      value:
        "+$24,820",

      icon:
        TrendingUp,

      color:
        "text-green-400",

      bg:
        "bg-green-400/10",

      change:
        "+8.2%",
    },

    {
      title:
        "Open Positions",

      value:
        "18",

      icon:
        Activity,

      color:
        "text-blue-400",

      bg:
        "bg-blue-400/10",

      change:
        "+4",
    },

    {
      title:
        "Wallet Assets",

      value:
        "24",

      icon:
        Wallet,

      color:
        "text-purple-400",

      bg:
        "bg-purple-400/10",

      change:
        "+2",
    },
  ];

  const marketData = [

    {
      pair:
        "BTC/USDT",

      price:
        "$84,320",

      change:
        "+3.2%",

      positive:
        true,
    },

    {
      pair:
        "ETH/USDT",

      price:
        "$4,280",

      change:
        "+2.4%",

      positive:
        true,
    },

    {
      pair:
        "SOL/USDT",

      price:
        "$182",

      change:
        "+6.1%",

      positive:
        true,
    },

    {
      pair:
        "XRP/USDT",

      price:
        "$1.22",

      change:
        "-1.8%",

      positive:
        false,
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            EXCHANGE SYSTEMS OPERATIONAL

          </span>

        </div>

        <h1 className="text-6xl font-black mb-4">

          Trading
          <span className="text-yellow-400">
            {" "}Dashboard
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Institutional-grade crypto trading infrastructure overview.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

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
                  className="glass rounded-3xl p-8"
                >

                  <div className="flex items-center justify-between mb-8">

                    <div className={`${item.bg} p-4 rounded-2xl`}>

                      <Icon
                        size={32}
                        className={item.color}
                      />

                    </div>

                    <span className="text-green-400 font-black">

                      {
                        item.change
                      }

                    </span>

                  </div>

                  <h2 className="text-zinc-500 mb-3 text-lg">

                    {
                      item.title
                    }

                  </h2>

                  <h3 className="text-4xl font-black">

                    {
                      item.value
                    }

                  </h3>

                </div>
              );
            }
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-10">

        <div className="xl:col-span-2 glass rounded-3xl p-8">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-black">

              Market Overview

            </h2>

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-green-400 font-bold">

                LIVE MARKET

              </span>

            </div>

          </div>

          <div className="space-y-6">

            {
              marketData.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="flex items-center justify-between bg-black/20 border border-white/5 rounded-2xl px-6 py-5"
                  >

                    <div>

                      <h3 className="text-2xl font-black mb-2">

                        {
                          item.pair
                        }

                      </h3>

                      <p className="text-zinc-500">

                        Spot Trading Pair

                      </p>

                    </div>

                    <div className="text-right">

                      <h3 className="text-3xl font-black mb-2">

                        {
                          item.price
                        }

                      </h3>

                      <div className="flex items-center justify-end gap-2">

                        {
                          item.positive
                            ? (
                              <TrendingUp
                                size={20}
                                className="text-green-400"
                              />
                            )
                            : (
                              <TrendingDown
                                size={20}
                                className="text-red-400"
                              />
                            )
                        }

                        <span
                          className={`font-black text-lg ${
                            item.positive
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >

                          {
                            item.change
                          }

                        </span>

                      </div>

                    </div>

                  </div>
                )
              )
            }

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <ShieldCheck
              size={36}
              className="text-yellow-400"
            />

            <h2 className="text-4xl font-black">

              Security

            </h2>

          </div>

          <div className="space-y-8">

            <div className="border-b border-white/5 pb-6">

              <p className="text-zinc-500 mb-3">

                Infrastructure Status

              </p>

              <h3 className="text-2xl font-black text-green-400">

                Protected

              </h3>

            </div>

            <div className="border-b border-white/5 pb-6">

              <p className="text-zinc-500 mb-3">

                Active Sessions

              </p>

              <h3 className="text-2xl font-black">

                12 Devices

              </h3>

            </div>

            <div className="border-b border-white/5 pb-6">

              <p className="text-zinc-500 mb-3">

                24H Transactions

              </p>

              <h3 className="text-2xl font-black">

                1,284

              </h3>

            </div>

            <div>

              <p className="text-zinc-500 mb-3">

                Exchange Uptime

              </p>

              <h3 className="text-2xl font-black text-green-400">

                99.99%

              </h3>

            </div>

          </div>

        </div>

      </div>

      <ActivityFeed />

    </MainLayout>
  );
};

export default Dashboard;