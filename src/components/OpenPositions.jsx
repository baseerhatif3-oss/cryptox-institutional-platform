import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const prices = {
  BTC: 105000,
  ETH: 6200,
  SOL: 210,
};

const OpenPositions = () => {
  const [positions, setPositions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchPositions =
    async () => {
      try {
        const res =
          await API.get(
            "/positions"
          );

        setPositions(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchPositions();

    const interval =
      setInterval(() => {
        fetchPositions();
      }, 4000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  const closePosition =
    async (id) => {
      try {
        await API.delete(
          `/positions/${id}`
        );

        toast.success(
          "Position closed"
        );

        fetchPositions();
      } catch (error) {
        toast.error(
          "Failed to close position"
        );
      }
    };

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white">
        Loading positions...
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-3xl font-bold text-white mb-8">
        Open Positions
      </h2>

      {positions.length ===
      0 ? (
        <div className="text-slate-400">
          No open positions
        </div>
      ) : (
        <div className="space-y-5">
          {positions.map(
            (position) => {
              const currentPrice =
                prices[
                  position.symbol
                ] || 0;

              let pnl = 0;

              if (
                position.side ===
                "LONG"
              ) {
                pnl =
                  ((currentPrice -
                    position.entryPrice) *
                    position.amount *
                    position.leverage) /
                  position.entryPrice;
              } else {
                pnl =
                  ((position.entryPrice -
                    currentPrice) *
                    position.amount *
                    position.leverage) /
                  position.entryPrice;
              }

              const liquidationPrice =
                position.side ===
                "LONG"
                  ? position.entryPrice *
                    0.9
                  : position.entryPrice *
                    1.1;

              return (
                <div
                  key={
                    position._id
                  }
                  className="bg-slate-800 rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {
                          position.coin
                        }
                      </h3>

                      <p className="text-slate-400">
                        {
                          position.symbol
                        }
                      </p>
                    </div>

                    <div
                      className={`px-4 py-2 rounded-xl font-bold ${
                        position.side ===
                        "LONG"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {
                        position.side
                      }
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                    <div className="bg-slate-900 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">
                        Amount
                      </p>

                      <h2 className="text-2xl font-bold text-white">
                        {
                          position.amount
                        }
                      </h2>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">
                        Leverage
                      </p>

                      <h2 className="text-2xl font-bold text-blue-400">
                        {
                          position.leverage
                        }
                        x
                      </h2>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">
                        Entry Price
                      </p>

                      <h2 className="text-2xl font-bold text-white">
                        $
                        {position.entryPrice.toLocaleString()}
                      </h2>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">
                        Current Price
                      </p>

                      <h2 className="text-2xl font-bold text-cyan-400">
                        $
                        {currentPrice.toLocaleString()}
                      </h2>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">
                        Liquidation
                      </p>

                      <h2 className="text-2xl font-bold text-orange-400">
                        $
                        {liquidationPrice.toLocaleString()}
                      </h2>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">
                        Unrealized PNL
                      </p>

                      <h2
                        className={`text-2xl font-bold ${
                          pnl >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        $
                        {pnl.toFixed(
                          2
                        )}
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      closePosition(
                        position._id
                      )
                    }
                    className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold transition"
                  >
                    Close Position
                  </button>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default OpenPositions;