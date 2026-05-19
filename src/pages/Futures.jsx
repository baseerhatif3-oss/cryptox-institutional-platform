import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
  io,
} from "socket.io-client";

const socket =
  io(
    "https://crypto-backend-dojp.onrender.com"
  );

const Futures =
  () => {
    const [coin,
      setCoin] =
      useState("BTC");

    const [side,
      setSide] =
      useState("LONG");

    const [leverage,
      setLeverage] =
      useState(10);

    const [margin,
      setMargin] =
      useState(100);

    const [price,
      setPrice] =
      useState(65000);

    const [positions,
      setPositions] =
      useState([]);

    const [livePrices,
      setLivePrices] =
      useState({
        BTC:
          65000,

        ETH:
          3000,

        SOL:
          150,

        XRP:
          0.5,
      });

    const [loading,
      setLoading] =
      useState(false);

    const token =
      localStorage.getItem(
        "token"
      );

    /* =========================
       REALTIME MARKET
    ========================= */

    useEffect(() => {
      socket.on(
        "market_update",
        (
          data
        ) => {
          setLivePrices(
            data
          );
        }
      );

      socket.on(
        "new_futures_position",
        (
          position
        ) => {
          setPositions(
            (
              prev
            ) => [
              position,
              ...prev,
            ]
          );
        }
      );

      socket.on(
        "futures_closed",
        (
          closed
        ) => {
          setPositions(
            (
              prev
            ) =>
              prev.map(
                (
                  pos
                ) =>
                  pos._id ===
                  closed._id
                    ? closed
                    : pos
              )
          );
        }
      );

      return () => {
        socket.off(
          "market_update"
        );

        socket.off(
          "new_futures_position"
        );

        socket.off(
          "futures_closed"
        );
      };
    }, []);

    /* =========================
       AUTO PRICE UPDATE
    ========================= */

    useEffect(() => {
      if (
        livePrices[
          coin
        ]
      ) {
        setPrice(
          Number(
            livePrices[
              coin
            ]
          )
        );
      }
    }, [
      coin,
      livePrices,
    ]);

    /* =========================
       FETCH POSITIONS
    ========================= */

    useEffect(() => {
      fetchPositions();
    }, []);

    const fetchPositions =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/futures",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setPositions(
            res.data
          );
        } catch (error) {
          console.log(error);
        }
      };

    /* =========================
       OPEN POSITION
    ========================= */

    const openPosition =
      async () => {
        try {
          setLoading(true);

          await axios.post(
            "https://crypto-backend-dojp.onrender.com/api/futures/open",
            {
              coin,
              side,
              leverage,
              margin:
                Number(
                  margin
                ),
              entryPrice:
                Number(
                  price
                ),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            `${side} position opened`
          );

          fetchPositions();
        } catch (error) {
          console.log(error);

          toast.error(
            error.response
              ?.data
              ?.message ||
              "Failed to open position"
          );
        } finally {
          setLoading(false);
        }
      };

    /* =========================
       CLOSE POSITION
    ========================= */

    const closePosition =
      async (
        position
      ) => {
        try {
          const currentPrice =
            livePrices[
              position.coin
            ];

          await axios.post(
            `https://crypto-backend-dojp.onrender.com/api/futures/close/${position._id}`,
            {
              currentPrice,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Position closed"
          );

          fetchPositions();
        } catch (error) {
          console.log(error);

          toast.error(
            "Close failed"
          );
        }
      };

    /* =========================
       ANALYTICS
    ========================= */

    const openPositions =
      positions.filter(
        (
          p
        ) =>
          p.status ===
          "OPEN"
      );

    const totalMargin =
      openPositions.reduce(
        (
          acc,
          p
        ) =>
          acc +
          p.margin,
        0
      );

    const totalExposure =
      openPositions.reduce(
        (
          acc,
          p
        ) =>
          acc +
          p.margin *
            p.leverage,
        0
      );

    const totalPnL =
      openPositions.reduce(
        (
          acc,
          p
        ) => {
          const current =
            Number(
              livePrices[
                p.coin
              ]
            );

          let pnl = 0;

          if (
            p.side ===
            "LONG"
          ) {
            pnl =
              (current -
                p.entryPrice) *
              p.quantity;
          } else {
            pnl =
              (p.entryPrice -
                current) *
              p.quantity;
          }

          return (
            acc + pnl
          );
        },
        0
      );

    const roi =
      totalMargin > 0
        ? (
            (totalPnL /
              totalMargin) *
            100
          ).toFixed(2)
        : 0;

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Futures Trading
            </h1>

            <p className="text-slate-400 mt-3">
              Professional leveraged derivatives exchange
            </p>
          </div>

          {/* LIVE PRICES */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {Object.entries(
              livePrices
            ).map(
              (
                [
                  symbol,
                  value,
                ]
              ) => (
                <div
                  key={symbol}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
                >
                  <p className="text-slate-400 mb-2">
                    {symbol}
                  </p>

                  <h2 className="text-3xl font-bold text-green-400">
                    $
                    {Number(
                      value
                    ).toLocaleString()}
                  </h2>

                  <p className="text-green-400 mt-2">
                    LIVE
                  </p>
                </div>
              )
            )}
          </div>

          {/* FUTURES ANALYTICS */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* TOTAL MARGIN */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                Total Margin
              </p>

              <h2 className="text-3xl font-bold">
                $
                {totalMargin.toLocaleString()}
              </h2>
            </div>

            {/* TOTAL EXPOSURE */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                Total Exposure
              </p>

              <h2 className="text-3xl font-bold text-yellow-400">
                $
                {totalExposure.toLocaleString()}
              </h2>
            </div>

            {/* TOTAL PNL */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                Unrealized PnL
              </p>

              <h2
                className={`text-3xl font-bold ${
                  totalPnL >=
                  0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                $
                {totalPnL.toFixed(
                  2
                )}
              </h2>
            </div>

            {/* ROI */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                ROI
              </p>

              <h2
                className={`text-3xl font-bold ${
                  roi >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {roi}%
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT PANEL */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-8">
                Open Futures Position
              </h2>

              {/* LONG SHORT */}

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() =>
                    setSide(
                      "LONG"
                    )
                  }
                  className={`py-4 rounded-2xl font-bold text-xl ${
                    side ===
                    "LONG"
                      ? "bg-green-600"
                      : "bg-slate-800"
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
                  className={`py-4 rounded-2xl font-bold text-xl ${
                    side ===
                    "SHORT"
                      ? "bg-red-600"
                      : "bg-slate-800"
                  }`}
                >
                  SHORT
                </button>
              </div>

              {/* COIN */}

              <div className="mb-6">
                <label className="block mb-3">
                  Coin
                </label>

                <select
                  value={
                    coin
                  }
                  onChange={(e) =>
                    setCoin(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                >
                  <option>
                    BTC
                  </option>

                  <option>
                    ETH
                  </option>

                  <option>
                    SOL
                  </option>

                  <option>
                    XRP
                  </option>
                </select>
              </div>

              {/* LEVERAGE */}

              <div className="mb-6">
                <label className="block mb-3">
                  Leverage
                </label>

                <select
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
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                >
                  <option value={5}>
                    5x
                  </option>

                  <option value={10}>
                    10x
                  </option>

                  <option value={25}>
                    25x
                  </option>

                  <option value={50}>
                    50x
                  </option>
                </select>
              </div>

              {/* MARGIN */}

              <div className="mb-6">
                <label className="block mb-3">
                  Margin (USD)
                </label>

                <input
                  type="number"
                  value={
                    margin
                  }
                  onChange={(e) =>
                    setMargin(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                />
              </div>

              {/* ENTRY PRICE */}

              <div className="mb-6">
                <label className="block mb-3">
                  Entry Price
                </label>

                <input
                  type="number"
                  value={
                    price
                  }
                  readOnly
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                />
              </div>

              {/* POSITION INFO */}

              <div className="bg-slate-800 rounded-2xl p-5 mb-8 space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Position Size
                  </span>

                  <span className="font-bold">
                    $
                    {(
                      margin *
                      leverage
                    ).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Estimated Quantity
                  </span>

                  <span className="font-bold">
                    {(
                      (margin *
                        leverage) /
                      price
                    ).toFixed(
                      6
                    )}
                  </span>
                </div>
              </div>

              {/* BUTTON */}

              <button
                onClick={
                  openPosition
                }
                disabled={
                  loading
                }
                className={`w-full py-5 rounded-2xl font-bold text-2xl ${
                  side ===
                  "LONG"
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-red-600 hover:bg-red-500"
                }`}
              >
                {loading
                  ? "Opening..."
                  : `Open ${side}`}
              </button>
            </div>

            {/* POSITIONS */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-800">
                <h2 className="text-3xl font-bold">
                  Futures Positions
                </h2>
              </div>

              <div className="overflow-x-auto max-h-[700px] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-slate-800 sticky top-0">
                    <tr>
                      <th className="text-left p-5">
                        Side
                      </th>

                      <th className="text-left p-5">
                        Coin
                      </th>

                      <th className="text-left p-5">
                        Leverage
                      </th>

                      <th className="text-left p-5">
                        Entry
                      </th>

                      <th className="text-left p-5">
                        Liq
                      </th>

                      <th className="text-left p-5">
                        PnL
                      </th>

                      <th className="text-left p-5">
                        Status
                      </th>

                      <th className="text-left p-5">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {positions.length ===
                    0 ? (
                      <tr>
                        <td
                          colSpan="8"
                          className="p-10 text-center text-slate-400"
                        >
                          No futures positions
                        </td>
                      </tr>
                    ) : (
                      positions.map(
                        (
                          position
                        ) => {
                          const current =
                            Number(
                              livePrices[
                                position
                                  .coin
                              ]
                            );

                          let unrealizedPnL =
                            0;

                          if (
                            position.side ===
                            "LONG"
                          ) {
                            unrealizedPnL =
                              (current -
                                position.entryPrice) *
                              position.quantity;
                          } else {
                            unrealizedPnL =
                              (position.entryPrice -
                                current) *
                              position.quantity;
                          }

                          return (
                            <tr
                              key={
                                position._id
                              }
                              className="border-t border-slate-800"
                            >
                              <td className="p-5">
                                <span
                                  className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                    position.side ===
                                    "LONG"
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-red-500/20 text-red-400"
                                  }`}
                                >
                                  {
                                    position.side
                                  }
                                </span>
                              </td>

                              <td className="p-5">
                                {
                                  position.coin
                                }
                              </td>

                              <td className="p-5">
                                {
                                  position.leverage
                                }x
                              </td>

                              <td className="p-5">
                                $
                                {Number(
                                  position.entryPrice
                                ).toLocaleString()}
                              </td>

                              <td className="p-5 text-yellow-400">
                                $
                                {Number(
                                  position.liquidationPrice
                                ).toFixed(
                                  2
                                )}
                              </td>

                              <td
                                className={`p-5 font-bold ${
                                  unrealizedPnL >=
                                  0
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                              >
                                $
                                {unrealizedPnL.toFixed(
                                  2
                                )}
                              </td>

                              <td className="p-5">
                                <span
                                  className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                    position.status ===
                                    "OPEN"
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-slate-700 text-slate-300"
                                  }`}
                                >
                                  {
                                    position.status
                                  }
                                </span>
                              </td>

                              <td className="p-5">
                                {position.status ===
                                "OPEN" ? (
                                  <button
                                    onClick={() =>
                                      closePosition(
                                        position
                                      )
                                    }
                                    className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl text-sm font-bold"
                                  >
                                    Close
                                  </button>
                                ) : (
                                  <span className="text-slate-500">
                                    Closed
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        }
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Futures;