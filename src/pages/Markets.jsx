import React from "react";

const Markets = () => {

  const coins = [

    {
      coin: "Bitcoin",
      symbol: "BTC",
      price: "$81,420",
      change: "+5.8%",
      marketCap: "$1.6T",
    },

    {
      coin: "Ethereum",
      symbol: "ETH",
      price: "$4,120",
      change: "+3.2%",
      marketCap: "$492B",
    },

    {
      coin: "Solana",
      symbol: "SOL",
      price: "$188",
      change: "+11.4%",
      marketCap: "$88B",
    },

    {
      coin: "Avalanche",
      symbol: "AVAX",
      price: "$54",
      change: "+8.1%",
      marketCap: "$22B",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Global Markets
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Real-time cryptocurrency market overview and analytics
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
          LIVE MARKET DATA
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#22c55e,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Global Crypto Market Capitalization
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            $3.12T
          </h1>

          <div className="mt-6 inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
            +4.8% TODAY
          </div>

        </div>

      </div>

      {/* MARKET STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <p className="text-gray-400">
            BTC Dominance
          </p>

          <h2 className="text-5xl font-black mt-4">
            54.2%
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <p className="text-gray-400">
            Fear & Greed
          </p>

          <h2 className="text-5xl font-black mt-4 text-green-400">
            78
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <p className="text-gray-400">
            24h Volume
          </p>

          <h2 className="text-5xl font-black mt-4">
            $182B
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <p className="text-gray-400">
            Active Traders
          </p>

          <h2 className="text-5xl font-black mt-4">
            12.8M
          </h2>

        </div>

      </div>

      {/* COIN TABLE */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <h2 className="text-3xl font-black">
            Top Performing Assets
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
                  Price
                </th>

                <th className="text-left p-6 text-gray-400">
                  24h
                </th>

                <th className="text-left p-6 text-gray-400">
                  Market Cap
                </th>

              </tr>

            </thead>

            <tbody>

              {coins.map(
                (
                  coin,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-t border-white/5"
                  >

                    <td className="p-6">

                      <div>

                        <h3 className="font-black">
                          {coin.coin}
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                          {coin.symbol}
                        </p>

                      </div>

                    </td>

                    <td className="p-6 font-bold">
                      {coin.price}
                    </td>

                    <td className="p-6 text-green-400 font-bold">
                      {coin.change}
                    </td>

                    <td className="p-6">
                      {coin.marketCap}
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

export default Markets;