import MainLayout from "../components/layout/MainLayout";

const Wallet = () => {

  const transactions = [

    {
      type:
        "Deposit",

      asset:
        "BTC",

      amount:
        "+0.42 BTC",

      status:
        "Completed",
    },

    {
      type:
        "Withdrawal",

      asset:
        "ETH",

      amount:
        "-2.1 ETH",

      status:
        "Pending",
    },

    {
      type:
        "Deposit",

      asset:
        "USDT",

      amount:
        "+12,000 USDT",

      status:
        "Completed",
    },

    {
      type:
        "Withdrawal",

      asset:
        "SOL",

      amount:
        "-80 SOL",

      status:
        "Completed",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            WALLET INFRASTRUCTURE ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Asset
          <span className="text-yellow-400">
            {" "}Wallet
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Total Assets

          </p>

          <h2 className="text-6xl font-black text-yellow-400">

            $536K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Available Balance

          </p>

          <h2 className="text-6xl font-black text-green-400">

            $412K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Pending Transfers

          </p>

          <h2 className="text-6xl font-black text-blue-400">

            $28K

          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Deposit Funds

          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Asset (BTC, ETH, USDT)"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="number"
              placeholder="Amount"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black text-xl">

              Generate Deposit Address

            </button>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Withdraw Funds

          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Wallet Address"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="number"
              placeholder="Amount"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button className="w-full bg-red-500 hover:bg-red-400 transition-all text-white py-4 rounded-2xl font-black text-xl">

              Request Withdrawal

            </button>

          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-8 overflow-x-auto">

        <h2 className="text-4xl font-black mb-8">

          Transaction History

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4 text-zinc-500">

                Type

              </th>

              <th className="text-left py-4 text-zinc-500">

                Asset

              </th>

              <th className="text-left py-4 text-zinc-500">

                Amount

              </th>

              <th className="text-left py-4 text-zinc-500">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            {
              transactions.map(
                (
                  item,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-b border-white/5"
                  >

                    <td className="py-6 font-bold">

                      {
                        item.type
                      }

                    </td>

                    <td className="py-6 text-zinc-400">

                      {
                        item.asset
                      }

                    </td>

                    <td className="py-6 font-bold text-yellow-400">

                      {
                        item.amount
                      }

                    </td>

                    <td className="py-6">

                      <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl font-bold">

                        {
                          item.status
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

export default Wallet;