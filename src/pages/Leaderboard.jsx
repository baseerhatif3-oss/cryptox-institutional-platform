import React from "react";

const Leaderboard = () => {

  const traders = [

    {
      name: "AlphaWolf",
      pnl: "+184%",
      volume: "$2.4M",
      rank: "#1",
    },

    {
      name: "CryptoTitan",
      pnl: "+162%",
      volume: "$1.9M",
      rank: "#2",
    },

    {
      name: "BullMaster",
      pnl: "+141%",
      volume: "$1.4M",
      rank: "#3",
    },

    {
      name: "FutureKing",
      pnl: "+128%",
      volume: "$1.1M",
      rank: "#4",
    },

    {
      name: "ETHWhale",
      pnl: "+116%",
      volume: "$980K",
      rank: "#5",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Leaderboard
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Top performing traders and social trading rankings
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          TOP TRADERS
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Global Trading Competition
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            SOCIAL TRADING
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Discover elite traders, track leaderboard rankings,
            and explore high-performing trading strategies.
          </p>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-[#111] border border-white/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <h2 className="text-3xl font-black">
            Top Traders Ranking
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black/40">

              <tr>

                <th className="text-left p-6 text-gray-400">
                  Rank
                </th>

                <th className="text-left p-6 text-gray-400">
                  Trader
                </th>

                <th className="text-left p-6 text-gray-400">
                  PNL
                </th>

                <th className="text-left p-6 text-gray-400">
                  Volume
                </th>

                <th className="text-left p-6 text-gray-400">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {traders.map(
                (
                  trader,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-t border-white/5"
                  >

                    <td className="p-6 font-black text-yellow-400">
                      {trader.rank}
                    </td>

                    <td className="p-6 font-semibold">
                      {trader.name}
                    </td>

                    <td className="p-6 text-green-400 font-bold">
                      {trader.pnl}
                    </td>

                    <td className="p-6">
                      {trader.volume}
                    </td>

                    <td className="p-6">

                      <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">

                        ACTIVE

                      </span>

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

export default Leaderboard;