import MainLayout from "../components/layout/MainLayout";

const Futures = () => {

  const positions = [

    {
      pair:
        "BTCUSDT",

      leverage:
        "25x",

      pnl:
        "+$12,840",
    },

    {
      pair:
        "ETHUSDT",

      leverage:
        "10x",

      pnl:
        "+$4,220",
    },

    {
      pair:
        "SOLUSDT",

      leverage:
        "50x",

      pnl:
        "-$1,920",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>

          <span className="text-red-400 font-bold">

            FUTURES ENGINE ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Futures
          <span className="text-yellow-400">
            {" "}Trading
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-10">

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Open Interest

          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            $82M

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            24H Volume

          </p>

          <h2 className="text-5xl font-black text-green-400">

            $412M

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Active Traders

          </p>

          <h2 className="text-5xl font-black text-blue-400">

            24K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Liquidations

          </p>

          <h2 className="text-5xl font-black text-red-400">

            $8.2M

          </h2>

        </div>

      </div>

      <div className="glass rounded-3xl p-8 mb-10">

        <h2 className="text-4xl font-black mb-8">

          Open Positions

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4 text-zinc-500">

                Pair

              </th>

              <th className="text-left py-4 text-zinc-500">

                Leverage

              </th>

              <th className="text-left py-4 text-zinc-500">

                PNL

              </th>

            </tr>

          </thead>

          <tbody>

            {
              positions.map(
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
                        item.pair
                      }

                    </td>

                    <td className="py-6 text-yellow-400 font-black">

                      {
                        item.leverage
                      }

                    </td>

                    <td
                      className={`py-6 font-black ${
                        item.pnl.includes(
                          "+"
                        )
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >

                      {
                        item.pnl
                      }

                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Open Position

          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Trading Pair"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="number"
              placeholder="Leverage"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="number"
              placeholder="Position Size"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button className="w-full bg-green-500 hover:bg-green-400 transition-all text-white py-4 rounded-2xl font-black text-xl">

              Open Long

            </button>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Risk Metrics

          </h2>

          <div className="space-y-6">

            <div className="flex items-center justify-between">

              <span className="text-zinc-500">

                Liquidation Price

              </span>

              <span className="text-red-400 text-2xl font-black">

                $78,200

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-500">

                Margin Ratio

              </span>

              <span className="text-yellow-400 text-2xl font-black">

                42%

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-500">

                Unrealized PNL

              </span>

              <span className="text-green-400 text-2xl font-black">

                +$8,240

              </span>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Futures;