import MainLayout from "../components/layout/MainLayout";

const Transactions = () => {
  const transactions = [
    {
      type: "Deposit",
      amount: "$12,000",
      status: "Completed",
    },
    {
      type: "Withdraw",
      amount: "$2,500",
      status: "Pending",
    },
    {
      type: "Buy BTC",
      amount: "$5,000",
      status: "Completed",
    },
  ];

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Transactions
      </h1>

      <div className="bg-[#111] border border-yellow-500/20 rounded-3xl overflow-hidden">
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
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className="border-t border-yellow-500/10"
              >
                <td className="p-5 text-white">
                  {tx.type}
                </td>

                <td className="p-5 text-white">
                  {tx.amount}
                </td>

                <td className="p-5">
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Transactions;