import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import API from "../services/api";

const Transactions = () => {

  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {

    fetchTransactions();

  }, []);

  const fetchTransactions =
    async () => {

      try {

        const res =
          await API.get(
            "/transactions/my-transactions"
          );

        setTransactions(
          res.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Transactions
        </h1>

        <p className="text-zinc-500 mt-2">
          Trading history overview
        </p>

      </div>

      <div className="bg-[#111] border border-yellow-500/10 rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-black">

            <tr>

              <th className="text-left p-5 text-yellow-400">
                Type
              </th>

              <th className="text-left p-5 text-yellow-400">
                Amount
              </th>

              <th className="text-left p-5 text-yellow-400">
                Asset
              </th>

              <th className="text-left p-5 text-yellow-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {
              transactions.map(
                (tx) => (

                  <tr
                    key={tx._id}
                    className="border-t border-yellow-500/10"
                  >

                    <td className="p-5 text-white">
                      {tx.type}
                    </td>

                    <td className="p-5 text-white">
                      $
                      {tx.amount}
                    </td>

                    <td className="p-5 text-white">
                      {tx.asset}
                    </td>

                    <td className="p-5">

                      <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">

                        {
                          tx.status
                        }

                      </span>

                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default Transactions;