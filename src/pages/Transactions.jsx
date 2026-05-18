import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeftRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import API from "../api/axios";

const Transactions = () => {
  const [trades, setTrades] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchTrades =
    async () => {
      try {
        const res =
          await API.get(
            "/trades"
          );

        setTrades(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchTrades();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading trades...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-green-600 p-4 rounded-3xl">
            <ArrowLeftRight size={38} />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              Trade History
            </h1>

            <p className="text-slate-400 mt-2 text-lg">
              Real completed trades
            </p>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Total Trades
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {trades.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Buy Trades
            </p>

            <h2 className="text-5xl font-bold mt-4 text-green-400">
              {
                trades.filter(
                  (t) =>
                    t.side ===
                    "BUY"
                ).length
              }
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Sell Trades
            </p>

            <h2 className="text-5xl font-bold mt-4 text-red-400">
              {
                trades.filter(
                  (t) =>
                    t.side ===
                    "SELL"
                ).length
              }
            </h2>
          </div>
        </div>

        {/* TABLE */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-5">
                    Coin
                  </th>

                  <th className="text-left p-5">
                    Side
                  </th>

                  <th className="text-left p-5">
                    Amount
                  </th>

                  <th className="text-left p-5">
                    Price
                  </th>

                  <th className="text-left p-5">
                    Total
                  </th>

                  <th className="text-left p-5">
                    Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {trades.length ===
                0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center p-10 text-slate-400"
                    >
                      No trades yet
                    </td>
                  </tr>
                ) : (
                  trades.map(
                    (trade) => (
                      <tr
                        key={
                          trade._id
                        }
                        className="border-t border-slate-800"
                      >
                        <td className="p-5">
                          <div>
                            <h3 className="font-bold text-lg">
                              {
                                trade.coin
                              }
                            </h3>

                            <p className="text-slate-400 text-sm">
                              {
                                trade.symbol
                              }
                            </p>
                          </div>
                        </td>

                        <td className="p-5">
                          <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${
                              trade.side ===
                              "BUY"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {trade.side ===
                            "BUY" ? (
                              <TrendingUp size={18} />
                            ) : (
                              <TrendingDown size={18} />
                            )}

                            {
                              trade.side
                            }
                          </div>
                        </td>

                        <td className="p-5 font-bold">
                          {
                            trade.amount
                          }
                        </td>

                        <td className="p-5">
                          $
                          {trade.price.toLocaleString()}
                        </td>

                        <td className="p-5 font-bold">
                          $
                          {trade.total.toLocaleString()}
                        </td>

                        <td className="p-5 text-slate-400">
                          {new Date(
                            trade.createdAt
                          ).toLocaleString()}
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

export default Transactions;