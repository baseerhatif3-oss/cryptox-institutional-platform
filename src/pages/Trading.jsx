import MainLayout from "../components/layout/MainLayout";

import TradingViewWidget from "../components/TradingViewWidget";

import TradingPanel from "../components/TradingPanel";

import OrderBook from "../components/OrderBook";

import LiveTrades from "../components/LiveTrades";

const Trading = () => {

  return (

    <MainLayout>

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-5xl font-black">
            Advanced Trading
          </h1>

          <p className="text-zinc-500 mt-2">
            Professional real-time crypto trading terminal
          </p>

        </div>

        <div className="flex items-center gap-3 bg-green-500/20 px-5 py-3 rounded-2xl w-fit">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">
            LIVE TRADING ENGINE
          </span>

        </div>

      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-4 gap-8">

        <div className="2xl:col-span-3 space-y-8">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

              <div>

                <h2 className="text-4xl font-black">
                  BTC/USDT
                </h2>

                <p className="text-zinc-500 mt-2">
                  Binance Spot Market
                </p>

              </div>

              <div className="text-left md:text-right">

                <h2 className="text-4xl font-black text-green-400">
                  $84,520
                </h2>

                <p className="text-green-400 font-bold mt-1">
                  +2.84%
                </p>

              </div>

            </div>

            <TradingViewWidget />

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            <OrderBook />

            <LiveTrades />

          </div>

        </div>

        <div>

          <TradingPanel />

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;