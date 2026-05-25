import Navbar from "../components/Navbar";

export default function Dashboard() {

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-8">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-5xl font-bold mb-3">
              Trading Dashboard
            </h1>

            <p className="text-gray-400">
              Monitor your portfolio and trading activity
            </p>
          </div>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold">
            Deposit Funds
          </button>

        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">
              Total Balance
            </p>

            <h1 className="text-4xl font-bold">
              $248,540
            </h1>
          </div>

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">
              Today's Profit
            </p>

            <h1 className="text-4xl font-bold text-green-400">
              +$12,845
            </h1>
          </div>

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">
              Open Orders
            </p>

            <h1 className="text-4xl font-bold">
              12
            </h1>
          </div>

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">
              Trading Volume
            </p>

            <h1 className="text-4xl font-bold">
              $2.8M
            </h1>
          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-[#0b0b0b] border border-gray-800 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-bold">
                  BTC/USDT
                </h2>

                <p className="text-gray-400">
                  Advanced Trading Chart
                </p>
              </div>

              <div className="text-right">
                <h1 className="text-3xl font-bold">
                  $84,520
                </h1>

                <p className="text-green-400">
                  +4.82%
                </p>
              </div>

            </div>

            <div className="h-[400px] rounded-2xl border border-gray-800 flex items-center justify-center text-gray-500">
              TradingView Chart Area
            </div>

          </div>

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Watchlist
            </h2>

            <div className="space-y-6">

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">BTC</h3>
                  <p className="text-gray-400 text-sm">
                    Bitcoin
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="font-bold">$84,520</h3>
                  <p className="text-green-400 text-sm">
                    +4.82%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">ETH</h3>
                  <p className="text-gray-400 text-sm">
                    Ethereum
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="font-bold">$4,280</h3>
                  <p className="text-green-400 text-sm">
                    +2.18%
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">SOL</h3>
                  <p className="text-gray-400 text-sm">
                    Solana
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="font-bold">$182</h3>
                  <p className="text-red-400 text-sm">
                    -1.34%
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}