import React from "react";

const Staking = () => {

  const pools = [

    {
      coin: "BTC",
      apy: "6.2%",
      duration: "30 Days",
      min: "$100",
    },

    {
      coin: "ETH",
      apy: "9.4%",
      duration: "60 Days",
      min: "$250",
    },

    {
      coin: "SOL",
      apy: "14.8%",
      duration: "90 Days",
      min: "$100",
    },

    {
      coin: "USDT",
      apy: "18.2%",
      duration: "Flexible",
      min: "$50",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Staking & Earn
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Earn passive income with crypto staking pools
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          HIGH APY
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Passive Income Ecosystem
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            EARN DAILY REWARDS
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Stake digital assets and earn competitive APY
            through institutional-grade staking infrastructure.
          </p>

        </div>

      </div>

      {/* POOLS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {pools.map(
          (
            pool,
            index
          ) => (

            <div
              key={index}
              className="relative overflow-hidden bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <h2 className="text-4xl font-black">
                    {pool.coin}
                  </h2>

                  <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
                    LIVE
                  </span>

                </div>

                <div className="mt-10">

                  <p className="text-gray-400">
                    APY
                  </p>

                  <h3 className="text-6xl font-black text-yellow-400 mt-2">
                    {pool.apy}
                  </h3>

                </div>

                <div className="space-y-4 mt-8">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-400">
                      Duration
                    </span>

                    <span className="font-bold">
                      {pool.duration}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-400">
                      Minimum
                    </span>

                    <span className="font-bold">
                      {pool.min}
                    </span>

                  </div>

                </div>

                <button className="w-full mt-10 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

                  Start Staking

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default Staking;