import MainLayout from "../components/layout/MainLayout";

import OrderBook from "../components/trading/OrderBook";

import LiveTrades from "../components/trading/LiveTrades";

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

        <h1 className="text-6xl font-black">

          Professional
          <span className="text-yellow-400">
            {" "}Trading
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2">

          <div className="glass rounded-3xl p-8 h-[600px] flex items-center justify-center">

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

        <div className="space-y-8">

          <OrderBook />

          <LiveTrades />

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;