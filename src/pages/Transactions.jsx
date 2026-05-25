import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import {
  getTransactions,
} from "../services/walletService";

const Transactions = () => {

  const [transactions,
    setTransactions] =
    useState([]);

  useEffect(() => {

    fetchTransactions();

  }, []);

  const fetchTransactions =
    async () => {

      try {

        const data =
          await getTransactions();

        setTransactions(data);

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
          Complete transaction history
        </p>

      </div>

      <div className="bg-[#111] rounded-3xl border border-yellow-500/10 overflow-hidden">

        <table className="w-full">

          <thead className="bg-black">

            <tr>

              <th className="text-left p-5 text-yellow-400">
                Coin
              </th>

              <th className="text-left p-5 text-yellow-400">
                Type
              </th>

              <th className="text-left p-5 text-yellow-400">
                Amount
              </th>

              <th className="text-left p-5 text-yellow-400">
                Price
              </th>

              <th className="text-left p-5 text-yellow-400">
                Total
              </th>

              <th className="text-left p-5 text-yellow-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {
              transactions.length > 0 ? (

                transactions.map(
                  (tx) => (

                    <tr
                      key={tx._id}
                      className="border-t border-yellow-500/10"
                    >

                      <td className="p-5">
                        {tx.coin}
                      </td>

                      <td className={`p-5 font-bold ${
                        tx.type === "buy"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}>

                        {
                          tx.type.toUpperCase()
                        }

                      </td>

                      <td className="p-5">
                        {tx.amount}
                      </td>

                      <td className="p-5">
                        ${tx.price}
                      </td>

                      <td className="p-5">
                        $
                        {
                          (
                            tx.amount *
                            tx.price
                          ).toLocaleString()
                        }
                      </td>

                      <td className="p-5">

                        <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">

                          Completed

                        </span>

                      </td>

                    </tr>
                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center p-10 text-zinc-500"
                  >
                    No transactions found
                  </td>

                </tr>
              )
            }

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default Transactions;