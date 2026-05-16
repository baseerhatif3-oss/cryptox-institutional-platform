import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const Transactions = () => {
  const [trades, setTrades] =
    useState([]);

  const fetchTrades =
    async () => {
      try {
        const { data } =
          await API.get(
            "/trades"
          );

        setTrades(data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchTrades();

    const interval =
      setInterval(() => {
        fetchTrades();
      }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Transactions
        </h1>

        <p className="text-slate-400 mt-3">
          Live trading history
        </p>
      </div>

      <div className="space-y-5">
        {trades.map((trade) => (
          <div
            key={trade._id}
            className="bg-slate-900 p-6 rounded-3xl border border-slate-800"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  {trade.coin}
                </h2>

                <p
                  className={`mt-2 ${
                    trade.type ===
                    "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {trade.type}
                </p>
              </div>

              <div className="text-right">
                <h2 className="text-2xl font-bold">
                  {trade.amount}
                </h2>

                <p className="text-slate-400 mt-2">
                  $
                  {trade.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;