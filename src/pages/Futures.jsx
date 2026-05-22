import React, {
  useEffect,
  useState,
} from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

import {
  openPosition,
  getPositions,
} from "../services/futuresApi";

const Futures = () => {
  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [side, setSide] =
    useState("LONG");

  const [
    leverage,
    setLeverage,
  ] = useState(10);

  const [
    quantity,
    setQuantity,
  ] = useState("");

  const [
    positions,
    setPositions,
  ] = useState([]);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  useEffect(() => {
    fetchPositions();
  }, []);

  /* LOAD POSITIONS */

  const fetchPositions =
    async () => {
      try {
        const data =
          await getPositions(
            user._id
          );

        setPositions(
          data.positions
        );
      } catch (error) {
        console.log(error);
      }
    };

  /* OPEN POSITION */

  const handleOpenPosition =
    async () => {
      try {
        await openPosition({
          userId: user._id,

          symbol,

          side,

          leverage,

          quantity,
        });

        alert(
          "Position Opened"
        );

        fetchPositions();
      } catch (error) {
        console.log(error);

        alert(
          "Failed to open position"
        );
      }
    };

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-bold">
          Futures Trading
        </h1>

        <p className="text-gray-400 mt-2">
          Trade perpetual futures
          with leverage
        </p>
      </div>

      {/* CHART */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
        <AdvancedRealTimeChart
          theme="dark"
          symbol={`BINANCE:${symbol}`}
          height={500}
        />
      </div>

      {/* TRADING PANEL */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ORDER FORM */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Open Position
          </h2>

          <div className="space-y-4">
            {/* SYMBOL */}

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

              <option>
                XRPUSDT
              </option>
            </select>

            {/* SIDE */}

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() =>
                  setSide(
                    "LONG"
                  )
                }
                className={`py-3 rounded-xl font-bold ${
                  side ===
                  "LONG"
                    ? "bg-green-500"
                    : "bg-black border border-gray-700"
                }`}
              >
                LONG
              </button>

              <button
                onClick={() =>
                  setSide(
                    "SHORT"
                  )
                }
                className={`py-3 rounded-xl font-bold ${
                  side ===
                  "SHORT"
                    ? "bg-red-500"
                    : "bg-black border border-gray-700"
                }`}
              >
                SHORT
              </button>
            </div>

            {/* LEVERAGE */}

            <div>
              <div className="flex items-center justify-between mb-2">
                <p>
                  Leverage
                </p>

                <p className="font-bold">
                  {leverage}x
                </p>
              </div>

              <input
                type="range"
                min="1"
                max="100"
                value={
                  leverage
                }
                onChange={(e) =>
                  setLeverage(
                    e.target.value
                  )
                }
                className="w-full"
              />
            </div>

            {/* QUANTITY */}

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
            />

            {/* BUTTON */}

            <button
              onClick={
                handleOpenPosition
              }
              className={`w-full py-4 rounded-xl font-bold text-lg ${
                side ===
                "LONG"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              Open {side}
            </button>
          </div>
        </div>

        {/* OPEN POSITIONS */}

        <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Open Positions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left pb-4">
                    Symbol
                  </th>

                  <th className="text-left pb-4">
                    Side
                  </th>

                  <th className="text-left pb-4">
                    Leverage
                  </th>

                  <th className="text-left pb-4">
                    Entry
                  </th>

                  <th className="text-left pb-4">
                    Margin
                  </th>

                  <th className="text-left pb-4">
                    Liquidation
                  </th>
                </tr>
              </thead>

              <tbody>
                {positions.map(
                  (
                    position
                  ) => (
                    <tr
                      key={
                        position._id
                      }
                      className="border-b border-gray-900"
                    >
                      <td className="py-4 font-bold">
                        {
                          position.symbol
                        }
                      </td>

                      <td
                        className={`py-4 font-bold ${
                          position.side ===
                          "LONG"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {
                          position.side
                        }
                      </td>

                      <td className="py-4">
                        {
                          position.leverage
                        }
                        x
                      </td>

                      <td className="py-4">
                        $
                        {
                          position.entryPrice
                        }
                      </td>

                      <td className="py-4">
                        $
                        {Number(
                          position.margin
                        ).toFixed(
                          2
                        )}
                      </td>

                      <td className="py-4 text-red-400">
                        $
                        {Number(
                          position.liquidationPrice
                        ).toFixed(
                          2
                        )}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futures;