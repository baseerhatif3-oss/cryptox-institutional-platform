import MainLayout from "../components/layout/MainLayout";

import TradingPanel from "../components/TradingPanel";

import TradingViewWidget from "../components/TradingViewWidget";

import LiveOrderBook from "../components/LiveOrderBook";

import MarketOverview from "../components/MarketOverview";

import RecentTrades from "../components/RecentTrades";

const Trading = () => {

  return (

    <MainLayout>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-white">
            Advanced Trading
          </h1>

          <p className="text-zinc-500 mt-2">
            Professional crypto trading terminal
          </p>

        </div>

        <div className="bg-yellow-400 text-black px-6 py-4 rounded-2xl font-black text-xl">
          BTC/USDT
        </div>

      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-6 gap-6">

        {/* LEFT SIDE */}

        <div className="2xl:col-span-4 space-y-6">

          {/* CHART */}

          <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-3xl font-black text-white">
                  BTC/USDT
                </h2>

                <p className="text-zinc-500">
                  Live TradingView Chart
                </p>

              </div>

              <div className="text-right">

                <h2 className="text-4xl font-black text-white">
                  $84,520
                </h2>

                <p className="text-green-400 font-bold">
                  +4.82%
                </p>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden">

              <TradingViewWidget />

            </div>

          </div>

          {/* MARKET OVERVIEW */}

          <MarketOverview />

        </div>

        {/* RIGHT SIDE */}

        <div className="2xl:col-span-2 space-y-6">

          {/* TRADING PANEL */}

          <TradingPanel />

          {/* LIVE ORDER BOOK */}

          <LiveOrderBook />

          {/* RECENT TRADES */}

          <RecentTrades />

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;