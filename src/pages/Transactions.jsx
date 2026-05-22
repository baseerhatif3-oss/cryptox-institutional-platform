import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Transactions = () => {
  const [
    transactions,
    setTransactions,
  ] = useState([]);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions =
    async () => {
      try {
        const response =
          await axios.get(
            `https://crypto-backend-dojp.onrender.com/api/transactions/${user._id}`
          );

        setTransactions(
          response.data
            .transactions
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Transactions
        </h1>

        <p className="text-gray-400 mt-2">
          Account activity history
        </p>
      </div>

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left pb-4">
                  Type
                </th>

                <th className="text-left pb-4">
                  Asset
                </th>

                <th className="text-left pb-4">
                  Amount
                </th>

                <th className="text-left pb-4">
                  Status
                </th>

                <th className="text-left pb-4">
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
                    <td className="py-4">
                      <span
                        className={`font-bold ${
                          tx.type ===
                            "BUY" ||
                          tx.type ===
                            "DEPOSIT"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {tx.type}
                      </span>
                    </td>

                    <td className="py-4">
                      {tx.asset}
                    </td>

                    <td className="py-4">
                      {tx.amount}
                    </td>

                    <td className="py-4 text-green-400">
                      {
                        tx.status
                      }
                    </td>

                    <td className="py-4">
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