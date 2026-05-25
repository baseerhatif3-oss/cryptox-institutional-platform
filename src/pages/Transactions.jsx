import MainLayout from "../components/layout/MainLayout";

const transactions = [

  {
    coin: "BTC",
    type: "Buy",
    amount: "0.42",
    value: "$35,000",
  },

  {
    coin: "ETH",
    type: "Sell",
    amount: "1.8",
    value: "$7,200",
  },

  {
    coin: "SOL",
    type: "Buy",
    amount: "14",
    value: "$2,540",
  },
];

const Transactions = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Transactions
        </h1>

        <p className="text-gray-500 mt-2">
          Trading history overview
        </p>

      </div>

      <div className="bg-[#111] border border-yellow-500/10 rounded-3xl overflow-hidden">

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
                Value
              </th>

            </tr>

          </thead>

          <tbody>

            {
              transactions.map(
                (
                  tx,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-t border-yellow-500/10"
                  >

                    <td className="p-5">
                      {tx.coin}
                    </td>

                    <td className={`p-5 font-bold ${
                      tx.type ===
                      "Buy"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}>
                      {tx.type}
                    </td>

                    <td className="p-5">
                      {tx.amount}
                    </td>

                    <td className="p-5">
                      {tx.value}
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