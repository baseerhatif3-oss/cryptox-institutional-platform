import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Transactions =
  () => {
    const [transactions,
      setTransactions] =
      useState([]);

    const [loading,
      setLoading] =
      useState(true);

    useEffect(() => {
      fetchTransactions();
    }, []);

    const fetchTransactions =
      async () => {
        try {
          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/transactions",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setTransactions(
            res.data
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Transaction History
            </h1>

            <p className="text-slate-400 mt-3">
              Blockchain deposits & withdrawals
            </p>
          </div>

          {/* TABLE */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="text-left p-5">
                      Type
                    </th>

                    <th className="text-left p-5">
                      Coin
                    </th>

                    <th className="text-left p-5">
                      Amount
                    </th>

                    <th className="text-left p-5">
                      Status
                    </th>

                    <th className="text-left p-5">
                      Confirmations
                    </th>

                    <th className="text-left p-5">
                      TX Hash
                    </th>

                    <th className="text-left p-5">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="p-10 text-center text-slate-400"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : transactions.length ===
                    0 ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="p-10 text-center text-slate-400"
                      >
                        No transactions found
                      </td>
                    </tr>
                  ) : (
                    transactions.map(
                      (tx) => (
                        <tr
                          key={
                            tx._id
                          }
                          className="border-t border-slate-800 hover:bg-slate-800/40"
                        >
                          <td className="p-5">
                            <span
                              className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                tx.type ===
                                "DEPOSIT"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-red-500/20 text-red-400"
                              }`}
                            >
                              {
                                tx.type
                              }
                            </span>
                          </td>

                          <td className="p-5 font-bold">
                            {
                              tx.coin
                            }
                          </td>

                          <td className="p-5">
                            {
                              tx.amount
                            }
                          </td>

                          <td className="p-5">
                            <span
                              className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                tx.status ===
                                "CONFIRMED"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {
                                tx.status
                              }
                            </span>
                          </td>

                          <td className="p-5">
                            {
                              tx.confirmations
                            }
                          </td>

                          <td className="p-5">
                            <div className="max-w-[220px] truncate text-slate-400 text-sm">
                              {
                                tx.txHash
                              }
                            </div>
                          </td>

                          <td className="p-5 text-slate-400">
                            {new Date(
                              tx.createdAt
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