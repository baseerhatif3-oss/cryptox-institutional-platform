import MainLayout from "../components/layout/MainLayout";

import TradingViewWidget from "../components/TradingViewWidget";

import TradingPanel from "../components/TradingPanel";

import MarketOverview from "../components/MarketOverview";

import OrderBook from "../components/OrderBook";

import RecentTrades from "../components/RecentTrades";

const Trading = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black text-white">
          Advanced Trading
        </h1>

        <p className="text-gray-500 mt-3">
          Professional trading terminal
        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">

        <div className="xl:col-span-3">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-3xl font-black text-white">
                  BTC/USDT
                </h2>

                <p className="text-gray-500">
                  Live Trading Chart
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

            <TradingViewWidget />

          </div>

        </div>

        <div className="space-y-6">

          <TradingPanel />

          <OrderBook />

        </div>

        <div className="space-y-6">

          <MarketOverview />

          <RecentTrades />

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;