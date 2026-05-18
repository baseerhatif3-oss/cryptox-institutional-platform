const traders = [
  {
    id: 1,
    name: "AlphaTrader",
    roi: "+324%",
    winRate: "78%",
    followers: 12842,
    pnl: "+$182,400",
    risk: "Medium",
  },

  {
    id: 2,
    name: "BTCMaster",
    roi: "+218%",
    winRate: "71%",
    followers: 9842,
    pnl: "+$94,200",
    risk: "Low",
  },

  {
    id: 3,
    name: "FutureKing",
    roi: "+492%",
    winRate: "83%",
    followers: 24122,
    pnl: "+$421,000",
    risk: "High",
  },

  {
    id: 4,
    name: "ETHWhale",
    roi: "+176%",
    winRate: "69%",
    followers: 7140,
    pnl: "+$52,300",
    risk: "Medium",
  },
];

const CopyTrading = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Copy Trading
          </h1>

          <p className="text-slate-400 mt-2">
            Follow elite traders automatically
          </p>
        </div>

        {/* OVERVIEW */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Active Traders
            </p>

            <h2 className="text-4xl font-bold">
              1,248
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Followers
            </p>

            <h2 className="text-4xl font-bold">
              182K
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Avg ROI
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              +218%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Platform Status
            </p>

            <h2 className="text-4xl font-bold text-blue-400">
              Live
            </h2>
          </div>
        </div>

        {/* TRADERS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {traders.map(
            (trader) => (
              <div
                key={trader.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                {/* HEADER */}

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold">
                      {
                        trader.name
                      }
                    </h2>

                    <p className="text-slate-400 mt-1">
                      Elite Trader
                    </p>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-2xl font-bold">
                    {trader.roi}
                  </div>
                </div>

                {/* STATS */}

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-slate-400 mb-2">
                      Win Rate
                    </p>

                    <h3 className="text-2xl font-bold">
                      {
                        trader.winRate
                      }
                    </h3>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-slate-400 mb-2">
                      Followers
                    </p>

                    <h3 className="text-2xl font-bold">
                      {trader.followers.toLocaleString()}
                    </h3>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-slate-400 mb-2">
                      Total PNL
                    </p>

                    <h3 className="text-2xl font-bold text-green-400">
                      {
                        trader.pnl
                      }
                    </h3>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-slate-400 mb-2">
                      Risk
                    </p>

                    <h3 className="text-2xl font-bold">
                      {
                        trader.risk
                      }
                    </h3>
                  </div>
                </div>

                {/* ACTIONS */}

                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-bold text-xl transition">
                    Copy Trader
                  </button>

                  <button className="flex-1 bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl font-bold text-xl transition">
                    View Stats
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CopyTrading;