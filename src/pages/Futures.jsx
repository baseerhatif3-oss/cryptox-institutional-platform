import React, {
  useState,
} from "react";

import TradingViewWidget from "react-tradingview-widget";

const Futures = () => {

  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [side, setSide] =
    useState("LONG");

  const [leverage, setLeverage] =
    useState(10);

  const [margin, setMargin] =
    useState("");

  /*
  ==========================================
  MOCK POSITIONS
  ==========================================
  */

  const positions = [

    {
      symbol:
        "BTCUSDT",

      side:
        "LONG",

      leverage:
        "20x",

      entry:
        103400,

      mark:
        104120,

      pnl:
        "+$1,420",

      liquidation:
        98200,
    },

    {
      symbol:
        "ETHUSDT",

      side:
        "SHORT",

      leverage:
        "10x",

      entry:
        4850,

      mark:
        4780,

      pnl:
        "+$620",

      liquidation:
        5210,
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Futures Trading
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Advanced perpetual futures terminal
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-3 rounded-2xl font-bold">
            UP TO 100X
          </div>

          <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
            LOW LATENCY
          </div>

        </div>

      </div>

      {/* CHART */}

      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111] p-2">

        <div className="rounded-[28px] overflow-hidden">

          <TradingViewWidget
            symbol={symbol}
            theme="dark"
            locale="en"
            autosize
          />

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}

        <div className="xl:col-span-2 space-y-8">

          {/* FUTURES ORDER PANEL */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-black">
                  Open Position
                </h2>

                <p className="text-gray-400 mt-2">
                  Manage leveraged positions
                </p>

              </div>

              <div
                className={`px-5 py-3 rounded-2xl font-bold ${
                  side === "LONG"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >

                {side}

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* SYMBOL */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Contract
                </label>

                <select
                  value={symbol}
                  onChange={(e) =>
                    setSymbol(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                >

                  <option>
                    BTCUSDT
                  </option>

                  <option>
                    ETHUSDT
                  </option>

                  <option>
                    SOLUSDT
                  </option>

                  <option>
                    XRPUSDT
                  </option>

                </select>

              </div>

              {/* SIDE */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Position Side
                </label>

                <select
                  value={side}
                  onChange={(e) =>
                    setSide(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                >

                  <option>
                    LONG
                  </option>

                  <option>
                    SHORT
                  </option>

                </select>

              </div>

              {/* LEVERAGE */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Leverage
                </label>

                <input
                  type="range"
                  min="1"
                  max="100"
                  value={leverage}
                  onChange={(e) =>
                    setLeverage(
                      e.target.value
                    )
                  }
                  className="w-full"
                />

                <div className="mt-3 text-yellow-400 font-black text-2xl">
                  {leverage}x
                </div>

              </div>

              {/* MARGIN */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Margin
                </label>

                <input
                  type="number"
                  placeholder="Enter margin"
                  value={margin}
                  onChange={(e) =>
                    setMargin(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                />

              </div>

            </div>

            {/* BUTTONS */}

            <div className="grid grid-cols-2 gap-5 mt-8">

              <button className="bg-green-500 hover:bg-green-600 transition py-5 rounded-2xl font-black text-lg">
                Open Long
              </button>

              <button className="bg-red-500 hover:bg-red-600 transition py-5 rounded-2xl font-black text-lg">
                Open Short
              </button>

            </div>

          </div>

          {/* OPEN POSITIONS */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-black">
                  Open Positions
                </h2>

                <p className="text-gray-400 mt-2">
                  Active leveraged trades
                </p>

              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-bold">
                LIVE
              </div>

            </div>

            <div className="space-y-5">

              {positions.map(
                (
                  position,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black border border-white/5 rounded-3xl p-6"
                  >

                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                      {/* LEFT */}

                      <div>

                        <div className="flex items-center gap-4">

                          <h3 className="text-2xl font-black">
                            {
                              position.symbol
                            }
                          </h3>

                          <span
                            className={`px-4 py-2 rounded-xl text-sm font-bold ${
                              position.side ===
                              "LONG"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-red-500/10 text-red-400"
                            }`}
                          >

                            {
                              position.side
                            }

                          </span>

                        </div>

                        <p className="text-gray-500 mt-3">
                          Leverage:
                          {" "}
                          {
                            position.leverage
                          }
                        </p>

                      </div>

                      {/* STATS */}

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div>

                          <p className="text-gray-500 text-sm">
                            Entry
                          </p>

                          <h3 className="font-black mt-2">
                            $
                            {position.entry.toLocaleString()}
                          </h3>

                        </div>

                        <div>

                          <p className="text-gray-500 text-sm">
                            Mark
                          </p>

                          <h3 className="font-black mt-2">
                            $
                            {position.mark.toLocaleString()}
                          </h3>

                        </div>

                        <div>

                          <p className="text-gray-500 text-sm">
                            Unrealized PNL
                          </p>

                          <h3 className="font-black mt-2 text-green-400">
                            {
                              position.pnl
                            }
                          </h3>

                        </div>

                        <div>

                          <p className="text-gray-500 text-sm">
                            Liquidation
                          </p>

                          <h3 className="font-black mt-2 text-red-400">
                            $
                            {position.liquidation.toLocaleString()}
                          </h3>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-8">

          {/* ACCOUNT */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-2xl font-black mb-6">
              Futures Account
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Wallet Balance
                </p>

                <h3 className="font-black">
                  $24,820
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Available Margin
                </p>

                <h3 className="font-black">
                  $18,200
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Unrealized PNL
                </p>

                <h3 className="font-black text-green-400">
                  +$2,040
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Margin Ratio
                </p>

                <h3 className="font-black text-yellow-400">
                  32%
                </h3>

              </div>

            </div>

          </div>

          {/* MARKET INFO */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-2xl font-black mb-6">
              Market Info
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Funding Rate
                </p>

                <h3 className="font-black text-green-400">
                  +0.012%
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Open Interest
                </p>

                <h3 className="font-black">
                  $940M
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  24H Volume
                </p>

                <h3 className="font-black">
                  $2.8B
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Insurance Fund
                </p>

                <h3 className="font-black">
                  $120M
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Futures;