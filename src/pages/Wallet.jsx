import MainLayout from "../components/layout/MainLayout";

import {
  walletData,
} from "../services/walletService";

const Wallet = () => {

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
            {" "}Wallets
          </span>

        </h1>

      </div>

      <div className="glass rounded-3xl p-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-5 text-zinc-500">

                Asset

              </th>

              <th className="text-left py-5 text-zinc-500">

                Balance

              </th>

              <th className="text-left py-5 text-zinc-500">

                USD Value

              </th>

            </tr>

          </thead>

          <tbody>

            {
              walletData.map(
                (
                  item,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-b border-white/5"
                  >

                    <td className="py-6 text-2xl font-black text-yellow-400">

                      {
                        item.asset
                      }

                    </td>

                    <td className="py-6 text-xl font-black">

                      {
                        item.balance
                      }

                    </td>

                    <td className="py-6 text-green-400 text-xl font-black">

                      {
                        item.usd
                      }

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