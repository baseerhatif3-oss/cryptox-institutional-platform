import MainLayout from "../components/layout/MainLayout";

import TradingPanel from "../components/TradingPanel";

import TradingViewWidget from "../components/TradingViewWidget";

const Dashboard = () => {

  return (

    <MainLayout>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black text-white">
            Trading Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor your portfolio and trading activity
          </p>

        </div>

        <button className="bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold">
          Deposit Funds
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-gray-500 mb-4">
            Total Balance
          </p>

          <h2 className="text-5xl font-black text-white">
            $248,540
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-gray-500 mb-4">
            Today's Profit
          </p>

          <h2 className="text-5xl font-black text-green-400">
            +$12,845
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-gray-500 mb-4">
            Open Orders
          </p>

          <h2 className="text-5xl font-black text-white">
            12
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-gray-500 mb-4">
            Trading Volume
          </p>

          <h2 className="text-5xl font-black text-white">
            $2.8M
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        <div className="xl:col-span-3">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-3xl font-black text-white">
                  BTC/USDT
                </h2>

                <p className="text-gray-500">
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

            <TradingViewWidget />

          </div>

        </div>

        <div className="space-y-8">

          <TradingPanel />

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-black text-white">
                  Watchlist
                </h2>

                <p className="text-gray-500">
                  Favorite assets overview
                </p>

              </div>

            </div>

            <div className="space-y-6">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-white font-bold">
                    BTC
                  </h3>

                  <p className="text-gray-500 text-sm">
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

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-white font-bold">
                    ETH
                  </h3>

                  <p className="text-gray-500 text-sm">
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

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-white font-bold">
                    SOL
                  </h3>

                  <p className="text-gray-500 text-sm">
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

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;