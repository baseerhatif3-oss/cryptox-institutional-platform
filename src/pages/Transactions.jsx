import { useEffect, useState } from "react";
import API from "../services/api";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await API.get("/trades");
        setTransactions(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">
        Transactions
      </h1>

      <div className="space-y-4">
        {transactions.map((trade) => (
          <div
            key={trade._id}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={trade.image}
                alt={trade.coinName}
                className="w-10 h-10"
              />

              <div>
                <p className="font-semibold">
                  {trade.coinName}
                </p>

                <p className="text-slate-400 uppercase text-sm">
                  {trade.symbol}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p
                className={`font-bold ${
                  trade.type === "BUY"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {trade.type}
              </p>

              <p>${trade.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;