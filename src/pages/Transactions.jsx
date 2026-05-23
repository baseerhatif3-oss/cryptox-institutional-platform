import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Transactions = () => {

  const [transactions, setTransactions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );



  /*
  ==========================================
  FETCH TRANSACTIONS
  ==========================================
  */

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions =
    async () => {
      try {

        const res =
          await axios.get(
            `${API}/transactions/${user.id}`
          );

        setTransactions(
          res.data.transactions || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };



  /*
  ==========================================
  LOADING
  ==========================================
  */

  if (loading) {
    return (
      <div className="text-2xl font-bold">
        Loading Transactions...
      </div>
    );
  }



  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-4xl font-bold">
          Transactions
        </h1>

        <p className="text-gray-400 mt-2">
          Deposit, withdrawal and trading activity
        </p>

      </div>



      {/* TABLE */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-gray-800">

                <th className="text-left py-4">
                  Type
                </th>

                <th className="text-left py-4">
                  Asset
                </th>

                <th className="text-left py-4">
                  Amount
                </th>

                <th className="text-left py-4">
                  Status
                </th>

                <th className="text-left py-4">
                  Time
                </th>

              </tr>

            </thead>

            <tbody>

              {transactions.map(
                (tx) => (

                  <tr
                    key={tx._id}
                    className="border-b border-gray-900"
                  >

                    <td
                      className={`py-4 font-bold ${
                        tx.type ===
                        "BUY"
                          ? "text-green-400"
                          : tx.type ===
                            "SELL"
                          ? "text-red-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {tx.type}
                    </td>

                    <td className="py-4">
                      {tx.asset}
                    </td>

                    <td className="py-4">
                      {tx.amount}
                    </td>

                    <td className="py-4">
                      Completed
                    </td>

                    <td className="py-4 text-gray-400">
                      {new Date(
                        tx.createdAt
                      ).toLocaleString()}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Transactions;