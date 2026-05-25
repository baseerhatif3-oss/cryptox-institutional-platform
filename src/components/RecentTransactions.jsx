const RecentTransactions = () => {

  const transactions = [

    {
      coin: "BTC",
      type: "BUY",
      amount: "0.25",
      status: "Completed",
    },

    {
      coin: "ETH",
      type: "SELL",
      amount: "2.5",
      status: "Completed",
    },

    {
      coin: "SOL",
      type: "BUY",
      amount: "12",
      status: "Pending",
    },
  ];

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6 mt-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-black">
            Recent Transactions
          </h2>

          <p className="text-zinc-500">
            Latest account activity
          </p>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-yellow-500/10">

              <th className="pb-4">
                Coin
              </th>

              <th className="pb-4">
                Type
              </th>

              <th className="pb-4">
                Amount
              </th>

              <th className="pb-4">
                Status
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
                    className="border-b border-yellow-500/5"
                  >

                    <td className="py-5 font-bold">
                      {tx.coin}
                    </td>

                    <td className={`py-5 font-bold ${
                      tx.type === "BUY"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}>

                      {tx.type}

                    </td>

                    <td className="py-5">
                      {tx.amount}
                    </td>

                    <td className="py-5">

                      <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-bold">

                        {tx.status}

                      </span>

                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentTransactions;