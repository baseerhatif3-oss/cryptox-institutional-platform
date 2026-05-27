import MainLayout from "../components/layout/MainLayout";

import {
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
} from "lucide-react";

const pairs = [
  {
    pair: "BTC/USDT",
    price: "$84,320",
    change: "+4.8%",
    positive: true,
  },

  {
    pair: "ETH/USDT",
    price: "$4,820",
    change: "+2.1%",
    positive: true,
  },

  {
    pair: "SOL/USDT",
    price: "$182",
    change: "+8.4%",
    positive: true,
  },

  {
    pair: "BNB/USDT",
    price: "$710",
    change: "+1.4%",
    positive: true,
  },
];

const orderbookBuy = [
  {
    price: "$84320",
    amount: "0.42 BTC",
  },

  {
    price: "$84310",
    amount: "0.31 BTC",
  },

  {
    price: "$84300",
    amount: "0.88 BTC",
  },

  {
    price: "$84280",
    amount: "1.24 BTC",
  },
];

const orderbookSell = [
  {
    price: "$84340",
    amount: "0.25 BTC",
  },

  {
    price: "$84350",
    amount: "0.62 BTC",
  },

  {
    price: "$84360",
    amount: "0.91 BTC",
  },

  {
    price: "$84380",
    amount: "1.44 BTC",
  },
];

const Trading = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            LIVE TRADING TERMINAL

          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          Professional

          <span className="text-yellow-400">

            {" "}Trading

          </span>

        </h1>

        <p className="text-zinc-500 text-xl max-w-3xl">

          Institutional-grade multi-asset trading infrastructure
          with live order execution simulation.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {
          pairs.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-6 card-hover"
              >

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-3xl font-black">

                    {
                      item.pair
                    }

                  </h2>

                  <div className={`font-bold flex items-center gap-2 ${
                    item.positive
                      ? "text-green-400"
                      : "text-red-400"
                  }`}>

                    {
                      item.positive
                        ? (
                          <TrendingUp
                            size={18}
                          />
                        )
                        : (
                          <TrendingDown
                            size={18}
                          />
                        )
                    }

                    {
                      item.change
                    }

                  </div>

                </div>

                <h3 className="text-5xl font-black text-yellow-400">

                  {
                    item.price
                  }

                </h3>

              </div>

            )
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="xl:col-span-2 glass rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-4xl font-black mb-2">

                BTC/USDT Chart

              </h2>

              <p className="text-zinc-500">

                Real-time institutional market visualization.

              </p>

            </div>

            <div className="bg-yellow-400/10 text-yellow-400 px-5 py-3 rounded-2xl font-black">

              LIVE

            </div>

          </div>

          <div className="h-[420px] rounded-3xl border border-white/10 bg-black/40 flex items-center justify-center">

            <div className="text-center">

              <h2 className="text-5xl font-black text-yellow-400 mb-5">

                TradingView Live Chart

              </h2>

              <p className="text-zinc-500 text-xl">

                Real-time Binance market integration active.

              </p>

            </div>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Live Orderbook

          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>

              <h3 className="text-green-400 font-black text-2xl mb-6">

                BUY ORDERS

              </h3>

              <div className="space-y-4">

                {
                  orderbookBuy.map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={index}
                        className="bg-black/30 rounded-2xl p-4"
                      >

                        <p className="text-green-400 font-black text-xl mb-2">

                          {
                            item.price
                          }

                        </p>

                        <p className="text-zinc-500">

                          {
                            item.amount
                          }

                        </p>

                      </div>

                    )
                  )
                }

              </div>

            </div>

            <div>

              <h3 className="text-red-400 font-black text-2xl mb-6">

                SELL ORDERS

              </h3>

              <div className="space-y-4">

                {
                  orderbookSell.map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={index}
                        className="bg-black/30 rounded-2xl p-4"
                      >

                        <p className="text-red-400 font-black text-xl mb-2">

                          {
                            item.price
                          }

                        </p>

                        <p className="text-zinc-500">

                          {
                            item.amount
                          }

                        </p>

                      </div>

                    )
                  )
                }

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <DollarSign
              className="text-yellow-400"
              size={38}
            />

            <h2 className="text-4xl font-black">

              Quick Trade

            </h2>

          </div>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Trading Pair"
              defaultValue="BTC/USDT"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none"
            />

            <input
              type="number"
              placeholder="Amount"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none"
            />

            <input
              type="number"
              placeholder="Limit Price"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none"
            />

            <div className="grid grid-cols-2 gap-5">

              <button className="bg-green-500 hover:bg-green-400 transition-all py-5 rounded-2xl text-black font-black text-xl">

                BUY

              </button>

              <button className="bg-red-500 hover:bg-red-400 transition-all py-5 rounded-2xl text-white font-black text-xl">

                SELL

              </button>

            </div>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <Activity
              className="text-blue-400"
              size={36}
            />

            <h2 className="text-4xl font-black">

              Trade Activity

            </h2>

          </div>

          <div className="space-y-5">

            {
              [
                "BTC long position opened",
                "ETH short closed",
                "SOL breakout detected",
                "Whale accumulation spotted",
                "Liquidity surge on BTC",
              ].map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black/30 border border-white/5 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <p className="font-semibold">

                      {
                        item
                      }

                    </p>

                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                  </div>

                )
              )
            }

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;