import React from "react";

const CopyTrading = () => {

  const traders = [

    {
      name: "AlphaWolf",
      roi: "+184%",
      followers: "12.4K",
      winRate: "89%",
    },

    {
      name: "CryptoTitan",
      roi: "+162%",
      followers: "9.8K",
      winRate: "84%",
    },

    {
      name: "BullMaster",
      roi: "+141%",
      followers: "7.1K",
      winRate: "81%",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Copy Trading
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Follow elite traders and automatically copy strategies
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          AUTO COPY
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Automated Social Trading
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            COPY ELITE TRADERS
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Automatically mirror top-performing crypto traders
            with advanced copy trading infrastructure.
          </p>

        </div>

      </div>

      {/* TRADERS */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {traders.map(
          (
            trader,
            index
          ) => (

            <div
              key={index}
              className="relative overflow-hidden bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <h2 className="text-3xl font-black">
                    {trader.name}
                  </h2>

                  <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
                    LIVE
                  </span>

                </div>

                <div className="space-y-5 mt-8">

                  <div>

                    <p className="text-gray-400">
                      ROI
                    </p>

                    <h3 className="text-5xl font-black text-green-400 mt-2">
                      {trader.roi}
                    </h3>

                  </div>

                  <div>

                    <p className="text-gray-400">
                      Followers
                    </p>

                    <h3 className="text-3xl font-black mt-2">
                      {trader.followers}
                    </h3>

                  </div>

                  <div>

                    <p className="text-gray-400">
                      Win Rate
                    </p>

                    <h3 className="text-3xl font-black mt-2">
                      {trader.winRate}
                    </h3>

                  </div>

                </div>

                <button className="w-full mt-10 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

                  Copy Trader

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default CopyTrading;