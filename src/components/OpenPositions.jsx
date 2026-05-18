import {
  useEffect,
  useState,
} from "react";

import API from "../api/axios";

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
  }, []);

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
            (position) => (
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

                <div className="grid grid-cols-2 gap-4">
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
                      Margin
                    </p>

                    <h2 className="text-2xl font-bold text-yellow-400">
                      $
                      {position.margin.toLocaleString()}
                    </h2>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default OpenPositions;