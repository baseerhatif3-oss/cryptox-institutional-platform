import React from "react";

const Portfolio = () => {

  const assets = [

    {
      coin: "BTC",
      balance: "0.842",
      value: "$68,420",
      pnl: "+18.4%",
    },

    {
      coin: "ETH",
      balance: "12.4",
      value: "$49,120",
      pnl: "+11.2%",
    },

    {
      coin: "SOL",
      balance: "184",
      value: "$34,880",
      pnl: "+26.8%",
    },

    {
      coin: "USDT",
      balance: "24,500",
      value: "$24,500",
      pnl: "+0%",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Portfolio
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Track your crypto assets and performance analytics
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          LIVE PNL
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Total Portfolio Value
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            $176,920
          </h1>

          <div className="mt-6 inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
            +14.8% THIS MONTH
          </div>

        </div>

      </div>

      {/* ASSETS */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <h2 className="text-3xl font-black">
            Asset Allocation
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black/40">

              <tr>

                <th className="text-left p-6 text-gray-400">
                  Asset
                </th>

                <th className="text-left p-6 text-gray-400">
                  Balance
                </th>

                <th className="text-left p-6 text-gray-400">
                  Value
                </th>

                <th className="text-left p-6 text-gray-400">
                  PNL
                </th>

              </tr>

            </thead>

            <tbody>

              {assets.map(
                (
                  asset,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-t border-white/5"
                  >

                    <td className="p-6 font-black">
                      {asset.coin}
                    </td>

                    <td className="p-6">
                      {asset.balance}
                    </td>

                    <td className="p-6 font-bold">
                      {asset.value}
                    </td>

                    <td className="p-6 text-green-400 font-bold">
                      {asset.pnl}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Portfolio;