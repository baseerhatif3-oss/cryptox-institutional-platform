import MainLayout from "../components/layout/MainLayout";

const CryptoCard = () => {

  const transactions = [

    {
      merchant:
        "Apple Store",

      amount:
        "-$1,240",

      status:
        "Completed",
    },

    {
      merchant:
        "Amazon",

      amount:
        "-$420",

      status:
        "Completed",
    },

    {
      merchant:
        "Netflix",

      amount:
        "-$19",

      status:
        "Completed",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-indigo-500/10 border border-indigo-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>

          <span className="text-indigo-400 font-bold">

            GLOBAL PAYMENT NETWORK ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Crypto
          <span className="text-yellow-400">
            {" "}Card
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-10">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-10 min-h-[320px]">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 h-full flex flex-col justify-between text-black">

            <div className="flex items-center justify-between">

              <h2 className="text-4xl font-black">

                CryptoX

              </h2>

              <span className="text-2xl font-black">

                VISA

              </span>

            </div>

            <div>

              <h3 className="text-4xl font-black tracking-[6px] mb-6">

                4582 8291 9921 1204

              </h3>

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm font-bold">

                    CARD HOLDER

                  </p>

                  <h4 className="text-2xl font-black">

                    BASEER HATIF

                  </h4>

                </div>

                <div>

                  <p className="text-sm font-bold">

                    EXPIRES

                  </p>

                  <h4 className="text-2xl font-black">

                    09/30

                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Spending Analytics

          </h2>

          <div className="space-y-8">

            <div>

              <div className="flex items-center justify-between mb-3">

                <span className="text-zinc-500">

                  Monthly Spending

                </span>

                <span className="text-yellow-400 font-black">

                  $12,480

                </span>

              </div>

              <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">

                <div className="w-[72%] h-full bg-yellow-400 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-3">

                <span className="text-zinc-500">

                  Cashback Earned

                </span>

                <span className="text-green-400 font-black">

                  $1,820

                </span>

              </div>

              <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">

                <div className="w-[48%] h-full bg-green-400 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-3">

                <span className="text-zinc-500">

                  Card Usage

                </span>

                <span className="text-blue-400 font-black">

                  89%

                </span>

              </div>

              <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">

                <div className="w-[89%] h-full bg-blue-400 rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-8 overflow-x-auto">

        <h2 className="text-4xl font-black mb-8">

          Recent Transactions

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4 text-zinc-500">

                Merchant

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

                    <td className="py-6 font-black">

                      {
                        item.merchant
                      }

                    </td>

                    <td className="py-6 text-red-400 font-black">

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

export default CryptoCard;