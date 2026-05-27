import MainLayout from "../components/layout/MainLayout";

import OrderBook from "../components/trading/OrderBook";
import LiveTrades from "../components/trading/LiveTrades";

const pairs = [

  {
    pair: "BTC/USDT",
    price: "$84,320",
    change: "+4.8%",
  },

  {
    pair: "ETH/USDT",
    price: "$4,820",
    change: "+2.1%",
  },

  {
    pair: "SOL/USDT",
    price: "$182",
    change: "+8.4%",
  },

  {
    pair: "BNB/USDT",
    price: "$710",
    change: "+1.4%",
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

        <h1 className="text-6xl font-black mb-4">

          Professional
          <span className="text-yellow-400">

            {" "}Trading

          </span>

        </h1>

        <p className="text-zinc-500 text-xl max-w-3xl">

          Institutional-grade multi-asset trading infrastructure with live order execution simulation.

        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-8">

        {
          pairs.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-6"
              >

                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-2xl font-black">

                    {
                      item.pair
                    }

                  </h2>

                  <span className="text-green-400 font-bold">

                    {
                      item.change
                    }

                  </span>

                </div>

                <h3 className="text-4xl font-black text-yellow-400">

                  {
                    item.price
                  }

                </h3>

              </div>
            )
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2 space-y-8">

          <div className="glass rounded-3xl p-8 h-[600px] flex flex-col">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-4xl font-black mb-3">

                  BTC/USDT Chart

                </h2>

                <p className="text-zinc-500">

                  Real-time institutional market visualization.

                </p>

              </div>

              <div className="bg-yellow-400/10 px-5 py-3 rounded-2xl">

                <span className="text-yellow-400 font-black">

                  LIVE

                </span>

              </div>

            </div>

            <div className="flex-1 rounded-3xl border border-white/5 bg-black/40 flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-5xl font-black text-yellow-400 mb-6">

                  TradingView Live Chart

                </h2>

                <p className="text-zinc-500 text-xl">

                  Real-time Binance market integration active.

                </p>

              </div>

            </div>

          </div>

          <div className="glass rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-4xl font-black">

                Quick Trade

              </h2>

              <div className="flex gap-3">

                <button className="bg-green-500 text-black px-6 py-3 rounded-2xl font-black">

                  BUY

                </button>

                <button className="bg-red-500 text-white px-6 py-3 rounded-2xl font-black">

                  SELL

                </button>

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Amount"
                className="bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none"
              />

              <input
                type="text"
                placeholder="Price"
                className="bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none"
              />

            </div>

            <button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-300 transition-all py-5 rounded-2xl text-black font-black text-xl">

              Execute Trade

            </button>

          </div>

        </div>

        <div className="space-y-8">

          <OrderBook />

          <LiveTrades />

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-black mb-8">

              Trading Stats

            </h2>

            <div className="space-y-6">

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  24H Volume

                </span>

                <span className="font-black">

                  $2.8B

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  Open Interest

                </span>

                <span className="font-black">

                  $982M

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  Long Ratio

                </span>

                <span className="text-green-400 font-black">

                  68%

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  Short Ratio

                </span>

                <span className="text-red-400 font-black">

                  32%

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;