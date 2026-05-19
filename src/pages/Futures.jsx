import {
  useState,
} from "react";

const Futures = () => {
  const [position,
    setPosition] =
    useState("LONG");

  const [leverage,
    setLeverage] =
    useState(10);

  const [amount,
    setAmount] =
    useState(1000);

  const [positions,
    setPositions] =
    useState([]);

  const openPosition =
    () => {
      const newPosition =
        {
          id: Date.now(),

          type:
            position,

          leverage,

          margin:
            amount,

          size:
            amount *
            leverage,

          entry:
            65000,

          pnl:
            position ===
            "LONG"
              ? (
                  amount *
                  leverage *
                  0.08
                ).toFixed(
                  2
                )
              : (
                  amount *
                  leverage *
                  -0.05
                ).toFixed(
                  2
                ),
        };

      setPositions([
        newPosition,

        ...positions,
      ]);
    };

  const btcPrice =
    65000;

  const positionSize =
    amount * leverage;

  const pnl =
    position ===
    "LONG"
      ? positionSize *
        0.08
      : positionSize *
        -0.05;

  const liquidationPrice =
    position ===
    "LONG"
      ? btcPrice -
        btcPrice /
          leverage
      : btcPrice +
        btcPrice /
          leverage;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Futures Trading
          </h1>

          <p className="text-slate-400 mt-3">
            Professional leveraged trading system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TRADING PANEL */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Open Position
            </h2>

            {/* POSITION */}

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() =>
                  setPosition(
                    "LONG"
                  )
                }
                className={`py-4 rounded-2xl font-bold text-xl ${
                  position ===
                  "LONG"
                    ? "bg-green-600"
                    : "bg-slate-800"
                }`}
              >
                LONG
              </button>

              <button
                onClick={() =>
                  setPosition(
                    "SHORT"
                  )
                }
                className={`py-4 rounded-2xl font-bold text-xl ${
                  position ===
                  "SHORT"
                    ? "bg-red-600"
                    : "bg-slate-800"
                }`}
              >
                SHORT
              </button>
            </div>

            {/* LEVERAGE */}

            <div className="mb-6">
              <label className="block mb-3 text-slate-300">
                Leverage:
                {" "}
                {leverage}x
              </label>

              <input
                type="range"
                min="1"
                max="100"
                value={
                  leverage
                }
                onChange={(e) =>
                  setLeverage(
                    Number(
                      e.target
                        .value
                    )
                  )
                }
                className="w-full"
              />
            </div>

            {/* AMOUNT */}

            <div className="mb-6">
              <label className="block mb-3 text-slate-300">
                Margin Amount
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    Number(
                      e.target
                        .value
                    )
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
              />
            </div>

            {/* BUTTON */}

            <button
              onClick={
                openPosition
              }
              className={`w-full py-5 rounded-2xl font-bold text-2xl ${
                position ===
                "LONG"
                  ? "bg-green-600 hover:bg-green-500"
                  : "bg-red-600 hover:bg-red-500"
              }`}
            >
              Open {position}
            </button>
          </div>

          {/* POSITION DETAILS */}

          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                BTC Price
              </p>

              <h2 className="text-4xl font-bold">
                $
                {btcPrice.toLocaleString()}
              </h2>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                Position Size
              </p>

              <h2 className="text-4xl font-bold">
                $
                {positionSize.toLocaleString()}
              </h2>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                Unrealized PNL
              </p>

              <h2
                className={`text-4xl font-bold ${
                  pnl >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {pnl >= 0
                  ? "+"
                  : ""}
                $
                {pnl.toLocaleString()}
              </h2>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                Liquidation Price
              </p>

              <h2 className="text-4xl font-bold text-yellow-400">
                $
                {liquidationPrice.toFixed(
                  2
                )}
              </h2>
            </div>
          </div>
        </div>

        {/* OPEN POSITIONS */}

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-800">
            <h2 className="text-3xl font-bold">
              Open Positions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-5">
                    Type
                  </th>

                  <th className="text-left p-5">
                    Leverage
                  </th>

                  <th className="text-left p-5">
                    Margin
                  </th>

                  <th className="text-left p-5">
                    Size
                  </th>

                  <th className="text-left p-5">
                    Entry
                  </th>

                  <th className="text-left p-5">
                    PNL
                  </th>
                </tr>
              </thead>

              <tbody>
                {positions.length ===
                0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="p-10 text-center text-slate-400"
                    >
                      No open positions
                    </td>
                  </tr>
                ) : (
                  positions.map(
                    (
                      pos
                    ) => (
                      <tr
                        key={
                          pos.id
                        }
                        className="border-t border-slate-800"
                      >
                        <td className="p-5">
                          <span
                            className={`px-4 py-2 rounded-xl text-sm font-bold ${
                              pos.type ===
                              "LONG"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {
                              pos.type
                            }
                          </span>
                        </td>

                        <td className="p-5">
                          {
                            pos.leverage
                          }x
                        </td>

                        <td className="p-5">
                          $
                          {
                            pos.margin
                          }
                        </td>

                        <td className="p-5">
                          $
                          {
                            pos.size
                          }
                        </td>

                        <td className="p-5">
                          $
                          {
                            pos.entry
                          }
                        </td>

                        <td
                          className={`p-5 font-bold ${
                            Number(
                              pos.pnl
                            ) >= 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          $
                          {
                            pos.pnl
                          }
                        </td>
                      </tr>
                    )
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