import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Transactions = () => {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [
    transactions,
    setTransactions,
  ] = useState([]);

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
      }
    };

  /*
  ==========================================
  TOTALS
  ==========================================
  */

  const totalVolume =
    transactions.reduce(
      (
        total,
        tx
      ) =>
        total +
        Number(
          tx.amount || 0
        ),

      0
    );

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Transactions
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Monitor deposits, withdrawals and trading activity
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
          ACCOUNT ACTIVE
        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Total Transactions
          </p>

          <h2 className="text-5xl font-black mt-4">
            {
              transactions.length
            }
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Total Volume
          </p>

          <h2 className="text-5xl font-black mt-4">
            $
            {totalVolume.toLocaleString()}
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            System Status
          </p>

          <h2 className="text-5xl font-black mt-4 text-green-400">
            LIVE
          </h2>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-[#111] border border-white/10 rounded-[32px] overflow-hidden">

        {/* HEADER */}

        <div className="p-8 border-b border-white/10">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div>

              <h2 className="text-3xl font-black">
                Transaction History
              </h2>

              <p className="text-gray-400 mt-2">
                Full account activity overview
              </p>

            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-bold">
              REALTIME DATA
            </div>

          </div>

        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="bg-black/40">

              <tr className="text-left">

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Type
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Coin
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Amount
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Status
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {transactions.length === 0 && (

                <tr>

                  <td
                    colSpan="5"
                    className="px-8 py-12 text-center text-gray-500"
                  >

                    No transactions found

                  </td>

                </tr>

              )}

              {transactions.map(
                (tx) => (

                  <tr
                    key={tx._id}
                    className="border-t border-white/5 hover:bg-white/[0.02] transition"
                  >

                    {/* TYPE */}

                    <td className="px-8 py-6">

                      <span
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${
                          tx.type ===
                          "DEPOSIT"
                            ? "bg-green-500/10 text-green-400"
                            : tx.type ===
                              "WITHDRAW"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >

                        {
                          tx.type
                        }

                      </span>

                    </td>

                    {/* COIN */}

                    <td className="px-8 py-6 font-bold">

                      {
                        tx.coin
                      }

                    </td>

                    {/* AMOUNT */}

                    <td className="px-8 py-6 font-bold">

                      $
                      {Number(
                        tx.amount
                      ).toLocaleString()}

                    </td>

                    {/* STATUS */}

                    <td className="px-8 py-6">

                      <span
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${
                          tx.status ===
                          "COMPLETED"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >

                        {
                          tx.status
                        }

                      </span>

                    </td>

                    {/* DATE */}

                    <td className="px-8 py-6 text-gray-400">

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