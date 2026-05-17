import { useState } from "react";

import {
  Coins,
  Lock,
  TrendingUp,
} from "lucide-react";

import toast from "react-hot-toast";

const stakingPools = [
  {
    id: 1,
    coin: "BTC",
    apy: "4.2%",
    duration: "30 Days",
    min: 100,
    color:
      "from-yellow-500 to-orange-500",
  },

  {
    id: 2,
    coin: "ETH",
    apy: "6.8%",
    duration: "60 Days",
    min: 50,
    color:
      "from-blue-500 to-cyan-500",
  },

  {
    id: 3,
    coin: "SOL",
    apy: "12.4%",
    duration: "90 Days",
    min: 25,
    color:
      "from-purple-500 to-pink-500",
  },

  {
    id: 4,
    coin: "BNB",
    apy: "8.1%",
    duration: "45 Days",
    min: 40,
    color:
      "from-amber-500 to-yellow-500",
  },
];

const Staking = () => {
  const [stakes, setStakes] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "stakes"
        )
      ) || []
    );

  const handleStake = (
    pool
  ) => {
    const amount = prompt(
      `Enter amount to stake in ${pool.coin}`
    );

    if (
      !amount ||
      Number(amount) <= 0
    ) {
      return toast.error(
        "Invalid amount"
      );
    }

    const newStake = {
      id: Date.now(),

      coin: pool.coin,

      amount,

      apy: pool.apy,

      duration:
        pool.duration,

      rewards: (
        Number(amount) * 0.12
      ).toFixed(2),
    };

    const updated = [
      newStake,
      ...stakes,
    ];

    setStakes(updated);

    localStorage.setItem(
      "stakes",
      JSON.stringify(updated)
    );

    toast.success(
      `${pool.coin} staked successfully`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Crypto Staking
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Earn passive rewards by
            staking your crypto assets.
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Coins
              size={40}
              className="text-yellow-400 mb-4"
            />

            <p className="text-slate-400">
              Total Staked
            </p>

            <h2 className="text-4xl font-bold mt-2">
              $
              {stakes
                .reduce(
                  (
                    total,
                    stake
                  ) =>
                    total +
                    Number(
                      stake.amount
                    ),
                  0
                )
                .toLocaleString()}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <TrendingUp
              size={40}
              className="text-green-400 mb-4"
            />

            <p className="text-slate-400">
              Estimated Rewards
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              $
              {stakes
                .reduce(
                  (
                    total,
                    stake
                  ) =>
                    total +
                    Number(
                      stake.rewards
                    ),
                  0
                )
                .toFixed(2)}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Lock
              size={40}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              Active Stakes
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {stakes.length}
            </h2>
          </div>
        </div>

        {/* STAKING POOLS */}

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Staking Pools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stakingPools.map(
              (pool) => (
                <div
                  key={pool.id}
                  className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
                >
                  <div
                    className={`h-3 bg-gradient-to-r ${pool.color}`}
                  />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-bold">
                        {pool.coin}
                      </h3>

                      <div className="bg-slate-800 px-3 py-1 rounded-xl text-sm">
                        {pool.duration}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-slate-400">
                          APY
                        </p>

                        <h4 className="text-4xl font-bold text-green-400">
                          {pool.apy}
                        </h4>
                      </div>

                      <div>
                        <p className="text-slate-400">
                          Minimum Stake
                        </p>

                        <h4 className="text-xl font-bold">
                          $
                          {pool.min}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        handleStake(
                          pool
                        )
                      }
                      className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-bold transition"
                    >
                      Stake Now
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ACTIVE STAKES */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-3xl font-bold mb-8">
            Active Stakes
          </h2>

          {stakes.length === 0 ? (
            <div className="text-slate-400">
              No active stakes yet.
            </div>
          ) : (
            <div className="space-y-5">
              {stakes.map((stake) => (
                <div
                  key={stake.id}
                  className="bg-slate-800 rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold">
                      {stake.coin}
                    </h3>

                    <p className="text-slate-400 mt-1">
                      {
                        stake.duration
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Amount
                    </p>

                    <h4 className="text-xl font-bold">
                      $
                      {
                        stake.amount
                      }
                    </h4>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      APY
                    </p>

                    <h4 className="text-xl font-bold text-green-400">
                      {stake.apy}
                    </h4>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Estimated Rewards
                    </p>

                    <h4 className="text-xl font-bold text-yellow-400">
                      $
                      {
                        stake.rewards
                      }
                    </h4>
                  </div>

                  <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold">
                    Unstake
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Staking;