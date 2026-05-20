import React, {
  useState,
} from "react";

const Futures =
  () => {
    const [
      leverage,
      setLeverage,
    ] = useState(10);

    const positions = [
      {
        pair:
          "BTCUSDT",

        side:
          "LONG",

        entry:
          "64850",

        pnl:
          "+$1,240",

        leverage:
          "20x",
      },

      {
        pair:
          "ETHUSDT",

        side:
          "SHORT",

        entry:
          "2980",

        pnl:
          "-$210",

        leverage:
          "10x",
      },
    ];

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Futures Trading
          </h1>

          <p className="text-gray-400 mt-2">
            Professional leveraged trading terminal
          </p>
        </div>

        {/* FUTURES PANEL */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* POSITION FORM */}

          <div className="xl:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Open Position
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Trading Pair"
                className="bg-black border border-gray-700 rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Margin (USDT)"
                className="bg-black border border-gray-700 rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Entry Price"
                className="bg-black border border-gray-700 rounded-xl px-4 py-3"
              />

              <div className="bg-black border border-gray-700 rounded-xl px-4 py-3">
                <label className="text-gray-400 text-sm">
                  Leverage:{" "}
                  {
                    leverage
                  }
                  x
                </label>

                <input
                  type="range"
                  min="1"
                  max="125"
                  value={
                    leverage
                  }
                  onChange={(
                    e
                  ) =>
                    setLeverage(
                      e.target
                        .value
                    )
                  }
                  className="w-full mt-2"
                />
              </div>
            </div>

            {/* LIQUIDATION */}

            <div className="mt-6 bg-black border border-gray-800 rounded-xl p-4">
              <div className="flex justify-between">
                <span className="text-gray-400">
                  Estimated Liquidation
                </span>

                <span className="text-red-400 font-bold">
                  $61,240
                </span>
              </div>

              <div className="flex justify-between mt-3">
                <span className="text-gray-400">
                  Estimated Fees
                </span>

                <span className="text-yellow-400 font-bold">
                  $12.40
                </span>
              </div>
            </div>

            {/* BUTTONS */}

            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-xl text-lg">
                LONG
              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl text-lg">
                SHORT
              </button>
            </div>
          </div>

          {/* MARKET STATS */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Futures Stats
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-gray-400">
                  Funding Rate
                </span>

                <span className="text-green-400">
                  +0.012%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Open Interest
                </span>

                <span>
                  $2.4B
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  24h Volume
                </span>

                <span>
                  $18.9B
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Top Trader Ratio
                </span>

                <span className="text-yellow-400">
                  68% Long
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* OPEN POSITIONS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Open Positions
          </h2>

          <div className="space-y-4">
            {positions.map(
              (
                pos,
                index
              ) => (
                <div
                  key={
                    index
                  }
                  className="grid grid-cols-2 md:grid-cols-5 gap-4 border-b border-gray-800 pb-4"
                >
                  <div>
                    <p className="text-gray-400 text-sm">
                      Pair
                    </p>

                    <p className="font-bold">
                      {
                        pos.pair
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Side
                    </p>

                    <p
                      className={
                        pos.side ===
                        "LONG"
                          ? "text-green-400 font-bold"
                          : "text-red-400 font-bold"
                      }
                    >
                      {
                        pos.side
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Entry
                    </p>

                    <p>
                      {
                        pos.entry
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      PnL
                    </p>

                    <p
                      className={
                        pos.pnl.startsWith(
                          "+"
                        )
                          ? "text-green-400 font-bold"
                          : "text-red-400 font-bold"
                      }
                    >
                      {
                        pos.pnl
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Leverage
                    </p>

                    <p className="text-yellow-400 font-bold">
                      {
                        pos.leverage
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

export default Futures;