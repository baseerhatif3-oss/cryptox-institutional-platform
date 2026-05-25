import MainLayout from "../components/layout/MainLayout";

import TradingPanel from "../components/TradingPanel";

import TradingViewWidget from "../components/TradingViewWidget";

import PortfolioCards from "../components/PortfolioCards";

import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {

  return (

    <MainLayout>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-white">
            Trading Dashboard
          </h1>

          <p className="text-zinc-500 mt-2">
            Monitor your portfolio and trading activity
          </p>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-6 py-4 rounded-2xl font-bold">
          Deposit Funds
        </button>

      </div>

      <PortfolioCards />

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">

        <div className="xl:col-span-3">

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

        </div>

        <div className="space-y-8">

          <TradingPanel />

          <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-black text-white">
                  Watchlist
                </h2>

                <p className="text-zinc-500">
                  Favorite assets overview
                </p>

              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between bg-black rounded-2xl p-4">

                <div>

                  <h3 className="text-white font-bold">
                    BTC
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    Bitcoin
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-white font-bold">
                    $84,520
                  </h3>

                  <p className="text-green-400 text-sm">
                    +4.82%
                  </p>

                </div>

              </div>

              <div className="flex items-center justify-between bg-black rounded-2xl p-4">

                <div>

                  <h3 className="text-white font-bold">
                    ETH
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    Ethereum
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-white font-bold">
                    $4,280
                  </h3>

                  <p className="text-green-400 text-sm">
                    +2.18%
                  </p>

                </div>

              </div>

              <div className="flex items-center justify-between bg-black rounded-2xl p-4">

                <div>

                  <h3 className="text-white font-bold">
                    SOL
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    Solana
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-white font-bold">
                    $182
                  </h3>

                  <p className="text-red-400 text-sm">
                    -1.34%
                  </p>

                </div>

              </div>

              <div className="flex items-center justify-between bg-black rounded-2xl p-4">

                <div>

                  <h3 className="text-white font-bold">
                    BNB
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    Binance Coin
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-white font-bold">
                    $712
                  </h3>

                  <p className="text-green-400 text-sm">
                    +1.88%
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-8">

        <RecentActivity />

      </div>

    </MainLayout>
  );
};

export default Dashboard;