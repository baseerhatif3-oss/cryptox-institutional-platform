import React, {
  useState,
} from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const Futures = () => {
  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [leverage, setLeverage] =
    useState(10);

  const [side, setSide] =
    useState("LONG");

  const [entryPrice, setEntryPrice] =
    useState(104250);

  const [quantity, setQuantity] =
    useState(0.01);

  /* PNL */

  const pnl =
    (
      Math.random() *
      1000
    ).toFixed(2);

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-bold">
          Futures Trading
        </h1>

        <p className="text-gray-400 mt-2">
          Trade perpetual futures
          contracts with leverage
        </p>
      </div>

      {/* CHART */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-4">
        <AdvancedRealTimeChart
          theme="dark"
          symbol={`BINANCE:${symbol}`}
          height={500}
          width="100%"
        />
      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}

        <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Futures Panel
          </h2>

          <div className="space-y-5">
            {/* PAIR */}

            <div>
              <label className="block mb-2 text-gray-400">
                Trading Pair
              </label>

              <select
                value={symbol}
                onChange={(e) =>
                  setSymbol(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
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
              </select>
            </div>

            {/* LEVERAGE */}

            <div>
              <label className="block mb-2 text-gray-400">
                Leverage
              </label>

              <input
                type="range"
                min="1"
                max="125"
                value={leverage}
                onChange={(e) =>
                  setLeverage(
                    e.target.value
                  )
                }
                className="w-full"
              />

              <div className="mt-2 text-yellow-400 font-bold text-2xl">
                {leverage}x
              </div>
            </div>

            {/* ENTRY */}

            <div>
              <label className="block mb-2 text-gray-400">
                Entry Price
              </label>

              <input
                type="number"
                value={entryPrice}
                onChange={(e) =>
                  setEntryPrice(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            {/* QUANTITY */}

            <div>
              <label className="block mb-2 text-gray-400">
                Quantity
              </label>

              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            {/* SIDE */}

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() =>
                  setSide("LONG")
                }
                className={`py-4 rounded-xl font-bold ${
                  side === "LONG"
                    ? "bg-green-500"
                    : "bg-black border border-gray-700"
                }`}
              >
                LONG
              </button>

              <button
                onClick={() =>
                  setSide("SHORT")
                }
                className={`py-4 rounded-xl font-bold ${
                  side === "SHORT"
                    ? "bg-red-500"
                    : "bg-black border border-gray-700"
                }`}
              >
                SHORT
              </button>
            </div>

            {/* OPEN POSITION */}

            <button
              className={`w-full py-4 rounded-xl font-bold text-white ${
                side === "LONG"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              Open {side} Position
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Position Info
          </h2>

          <div className="space-y-4">
            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Position Size
              </p>

              <h2 className="text-3xl font-bold mt-3">
                $
                {(
                  entryPrice *
                  quantity *
                  leverage
                ).toLocaleString()}
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Unrealized PnL
              </p>

              <h2 className="text-3xl font-bold text-green-400 mt-3">
                +${pnl}
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Liquidation Price
              </p>

              <h2 className="text-3xl font-bold text-red-400 mt-3">
                $
                {(
                  entryPrice *
                  0.9
                ).toFixed(2)}
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Margin Used
              </p>

              <h2 className="text-3xl font-bold text-yellow-400 mt-3">
                $
                {(
                  (entryPrice *
                    quantity) /
                  leverage
                ).toFixed(2)}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futures;