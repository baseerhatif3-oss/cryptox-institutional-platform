import React from "react";

const CopyTrading =
  () => {
    const traders = [
      {
        id: 1,

        name:
          "AlphaTrader",

        roi:
          "+248%",

        followers:
          12450,

        winRate:
          "82%",

        pnl:
          "+$482K",
      },

      {
        id: 2,

        name:
          "CryptoKing",

        roi:
          "+192%",

        followers:
          9850,

        winRate:
          "76%",

        pnl:
          "+$310K",
      },

      {
        id: 3,

        name:
          "FutureMaster",

        roi:
          "+158%",

        followers:
          7120,

        winRate:
          "74%",

        pnl:
          "+$224K",
      },

      {
        id: 4,

        name:
          "BTCWhale",

        roi:
          "+142%",

        followers:
          5430,

        winRate:
          "71%",

        pnl:
          "+$188K",
      },
    ];

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Copy Trading
          </h1>

          <p className="text-gray-400 mt-2">
            Follow and copy professional traders
          </p>
        </div>

        {/* HERO */}

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl p-8 text-black">
          <h2 className="text-4xl font-bold">
            Social Trading Platform
          </h2>

          <p className="mt-4 text-lg">
            Automatically copy top-performing crypto traders
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <p className="text-sm font-semibold">
                Active Traders
              </p>

              <h3 className="text-3xl font-bold mt-2">
                12,540
              </h3>
            </div>

            <div>
              <p className="text-sm font-semibold">
                Total Copiers
              </p>

              <h3 className="text-3xl font-bold mt-2">
                148K
              </h3>
            </div>

            <div>
              <p className="text-sm font-semibold">
                Volume Copied
              </p>

              <h3 className="text-3xl font-bold mt-2">
                $2.4B
              </h3>
            </div>
          </div>
        </div>

        {/* LEADERBOARD */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold">
              Top Traders Leaderboard
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black">
                <tr>
                  <th className="text-left p-4">
                    Trader
                  </th>

                  <th className="text-left p-4">
                    ROI
                  </th>

                  <th className="text-left p-4">
                    Win Rate
                  </th>

                  <th className="text-left p-4">
                    Followers
                  </th>

                  <th className="text-left p-4">
                    Total PnL
                  </th>

                  <th className="text-left p-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {traders.map(
                  (
                    trader
                  ) => (
                    <tr
                      key={
                        trader.id
                      }
                      className="border-t border-gray-800"
                    >
                      <td className="p-4">
                        <div>
                          <p className="font-bold text-lg">
                            {
                              trader.name
                            }
                          </p>

                          <p className="text-gray-400 text-sm mt-1">
                            Professional Trader
                          </p>
                        </div>
                      </td>

                      <td className="p-4 text-green-400 font-bold text-lg">
                        {
                          trader.roi
                        }
                      </td>

                      <td className="p-4">
                        {
                          trader.winRate
                        }
                      </td>

                      <td className="p-4">
                        {trader.followers.toLocaleString()}
                      </td>

                      <td className="p-4 text-yellow-400 font-bold">
                        {
                          trader.pnl
                        }
                      </td>

                      <td className="p-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-5 py-2 rounded-xl transition">
                          Copy Trader
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* FEATURES */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">
              Smart Copy
            </h3>

            <p className="text-gray-400 mt-4">
              Automatically mirror trades from elite traders in realtime.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">
              Risk Control
            </h3>

            <p className="text-gray-400 mt-4">
              Set stop-loss and capital allocation for safer copying.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">
              Verified Traders
            </h3>

            <p className="text-gray-400 mt-4">
              Follow verified profitable traders with transparent statistics.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default CopyTrading;