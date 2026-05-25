import MainLayout from "../components/layout/MainLayout";

import TradingViewWidget from "../components/TradingViewWidget";

const Futures = () => {

  const positions = [

    {
      pair: "BTCUSDT",
      side: "LONG",
      leverage: "20x",
      pnl: "+$1,240",
      positive: true,
    },

    {
      pair: "ETHUSDT",
      side: "SHORT",
      leverage: "10x",
      pnl: "-$420",
      positive: false,
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Futures Trading
        </h1>

        <p className="text-zinc-500 mt-2">
          Advanced leveraged derivatives trading
        </p>

      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-4 gap-8">

        <div className="2xl:col-span-3">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6 mb-8">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-4xl font-black">
                  BTCUSDT PERPETUAL
                </h2>

                <p className="text-zinc-500">
                  Binance Futures Market
                </p>

              </div>

              <div className="text-right">

                <h2 className="text-3xl font-black text-yellow-400">

                  20x

                </h2>

                <p className="text-zinc-500">
                  Selected Leverage
                </p>

              </div>

            </div>

            <TradingViewWidget />

          </div>

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl overflow-hidden">

            <div className="p-6 border-b border-yellow-500/10">

              <h2 className="text-3xl font-black">
                Open Positions
              </h2>

            </div>

            <table className="w-full">

              <thead className="bg-black">

                <tr>

                  <th className="text-left p-5 text-yellow-400">
                    Pair
                  </th>

                  <th className="text-left p-5 text-yellow-400">
                    Side
                  </th>

                  <th className="text-left p-5 text-yellow-400">
                    Leverage
                  </th>

                  <th className="text-left p-5 text-yellow-400">
                    Unrealized PnL
                  </th>

                </tr>

              </thead>

              <tbody>

                {
                  positions.map(
                    (position, index) => (

                      <tr
                        key={index}
                        className="border-t border-yellow-500/10"
                      >

                        <td className="p-5 font-black">
                          {position.pair}
                        </td>

                        <td className="p-5">

                          <span className={`px-4 py-2 rounded-xl text-sm font-bold ${
                            position.side === "LONG"
                              ? "bg-green-500 text-black"
                              : "bg-red-500 text-white"
                          }`}>

                            {position.side}

                          </span>

                        </td>

                        <td className="p-5 font-bold">
                          {position.leverage}
                        </td>

                        <td className={`p-5 font-bold ${
                          position.positive
                            ? "text-green-400"
                            : "text-red-400"
                        }`}>

                          {position.pnl}

                        </td>

                      </tr>
                    )
                  )
                }

              </tbody>

            </table>

          </div>

        </div>

        <div className="space-y-8">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <h2 className="text-3xl font-black mb-6">
              Futures Order
            </h2>

            <div className="space-y-5">

              <select className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none">

                <option>
                  Cross Margin
                </option>

                <option>
                  Isolated Margin
                </option>

              </select>

              <select className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none">

                <option>
                  5x Leverage
                </option>

                <option>
                  10x Leverage
                </option>

                <option>
                  20x Leverage
                </option>

                <option>
                  50x Leverage
                </option>

              </select>

              <input
                placeholder="Position Size"
                className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
              />

              <div className="grid grid-cols-2 gap-4">

                <button className="bg-green-500 hover:bg-green-400 transition-all py-5 rounded-2xl font-black text-black">

                  LONG

                </button>

                <button className="bg-red-500 hover:bg-red-400 transition-all py-5 rounded-2xl font-black text-white">

                  SHORT

                </button>

              </div>

            </div>

          </div>

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <h2 className="text-2xl font-black mb-5">
              Risk Management
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Margin Ratio
                </span>

                <span className="font-bold text-yellow-400">
                  12.4%
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Liquidation Price
                </span>

                <span className="font-bold text-red-400">
                  $72,400
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Maintenance Margin
                </span>

                <span className="font-bold">
                  $2,850
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Futures;