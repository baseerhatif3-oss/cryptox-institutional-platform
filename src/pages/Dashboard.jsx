import MainLayout from "../components/layout/MainLayout";

import AIInsights from "../components/dashboard/AIInsights";

import Watchlist from "../components/dashboard/Watchlist";

import NotificationPanel from "../components/ui/NotificationPanel";

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

const trades = [
  {
    pair: "BTC/USDT",
    type: "BUY",
    amount: "$84,220",
    status: "Completed",
  },

  {
    pair: "ETH/USDT",
    type: "SELL",
    amount: "$4,180",
    status: "Completed",
  },

  {
    pair: "SOL/USDT",
    type: "BUY",
    amount: "$182",
    status: "Processing",
  },

  {
    pair: "BNB/USDT",
    type: "BUY",
    amount: "$704",
    status: "Completed",
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

        <p className="text-zinc-500 text-xl max-w-3xl leading-relaxed">

          Monitor digital asset performance, institutional liquidity,
          portfolio exposure, and enterprise-grade market analytics.

        </p>

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

                      <Icon
                        size={34}
                      />

                    </div>

                    <div className="flex items-center gap-2 text-green-400 font-bold">

                      <ArrowUpRight
                        size={18}
                      />

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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">

        <div className="xl:col-span-2 glass rounded-[32px] p-8">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-4xl font-black mb-3">

                Portfolio Performance

              </h2>

              <p className="text-zinc-500">

                Institutional asset growth and trading activity.

              </p>

            </div>

            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">

              +18.4%

            </div>

          </div>

          <div className="h-[320px] flex items-end gap-4">

            {
              [
                120,
                180,
                140,
                260,
                220,
                300,
                280,
                340,
                380,
                420,
                390,
                460,
              ].map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-t-3xl hover:opacity-80 transition-all"
                    style={{
                      height:
                        `${item}px`,
                    }}
                  ></div>

                )
              )
            }

          </div>

        </div>

        <div className="glass rounded-[32px] p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-4xl font-black">

              Market Sentiment

            </h2>

            <div className="w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>

          </div>

          <div className="space-y-8">

            <div>

              <div className="flex items-center justify-between mb-4">

                <span className="text-zinc-500">

                  Bitcoin

                </span>

                <span className="text-green-400 font-bold">

                  Bullish

                </span>

              </div>

              <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                <div className="h-full bg-green-400 rounded-full w-[84%]"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-4">

                <span className="text-zinc-500">

                  Ethereum

                </span>

                <span className="text-yellow-400 font-bold">

                  Neutral

                </span>

              </div>

              <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                <div className="h-full bg-yellow-400 rounded-full w-[68%]"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-4">

                <span className="text-zinc-500">

                  Solana

                </span>

                <span className="text-green-400 font-bold">

                  Strong Buy

                </span>

              </div>

              <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                <div className="h-full bg-green-400 rounded-full w-[92%]"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="glass rounded-[32px] p-8 mb-12">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl font-black mb-3">

              Recent Transactions

            </h2>

            <p className="text-zinc-500">

              Institutional trading activity and execution history.

            </p>

          </div>

          <button className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-6 py-3 rounded-2xl font-black">

            View All

          </button>

        </div>

        <div className="space-y-5">

          {
            trades.map(
              (
                trade,
                index
              ) => (

                <div
                  key={index}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 bg-black/30 border border-white/5 rounded-3xl p-6"
                >

                  <div className="flex items-center gap-5">

                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${
                      trade.type === "BUY"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}>

                      {
                        trade.type === "BUY"
                          ? (
                            <ArrowUpRight
                              size={30}
                            />
                          )
                          : (
                            <ArrowDownRight
                              size={30}
                            />
                          )
                      }

                    </div>

                    <div>

                      <h3 className="text-3xl font-black mb-2">

                        {
                          trade.pair
                        }

                      </h3>

                      <p className="text-zinc-500">

                        {
                          trade.type
                        } order executed

                      </p>

                    </div>

                  </div>

                  <div className="text-left lg:text-right">

                    <h3 className="text-3xl font-black text-yellow-400 mb-2">

                      {
                        trade.amount
                      }

                    </h3>

                    <p className={`font-bold ${
                      trade.status === "Completed"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}>

                      {
                        trade.status
                      }

                    </p>

                  </div>

                </div>

              )
            )
          }

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <AIInsights />

        <Watchlist />

        <NotificationPanel />

      </div>

    </MainLayout>

  );
};

export default Dashboard;