const stakingPools = [
  {
    coin: "BTC",
    apy: "4.5%",
    duration: "30 Days",
    min: "0.001 BTC",
    users: "12,842",
  },

  {
    coin: "ETH",
    apy: "6.8%",
    duration: "60 Days",
    min: "0.05 ETH",
    users: "18,204",
  },

  {
    coin: "SOL",
    apy: "9.2%",
    duration: "15 Days",
    min: "2 SOL",
    users: "9,402",
  },

  {
    coin: "BNB",
    apy: "7.4%",
    duration: "45 Days",
    min: "0.2 BNB",
    users: "7,118",
  },
];

const Staking = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Staking & Earn
          </h1>

          <p className="text-slate-400 mt-2">
            Earn passive income from your crypto assets
          </p>
        </div>

        {/* OVERVIEW */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Value Locked
            </p>

            <h2 className="text-4xl font-bold">
              $128M
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Avg APY
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              6.9%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Active Stakers
            </p>

            <h2 className="text-4xl font-bold text-blue-400">
              84K
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Rewards Paid
            </p>

            <h2 className="text-4xl font-bold text-yellow-400">
              $18M
            </h2>
          </div>
        </div>

        {/* POOLS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {stakingPools.map(
            (pool, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                {/* HEADER */}

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-4xl font-bold">
                      {pool.coin}
                    </h2>

                    <p className="text-slate-400 mt-1">
                      Flexible Earn Pool
                    </p>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold text-2xl">
                    {pool.apy}
                  </div>
                </div>

                {/* STATS */}

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-slate-400 mb-2">
                      Duration
                    </p>

                    <h3 className="text-2xl font-bold">
                      {
                        pool.duration
                      }
                    </h3>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-slate-400 mb-2">
                      Minimum
                    </p>

                    <h3 className="text-2xl font-bold">
                      {pool.min}
                    </h3>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-5 col-span-2">
                    <p className="text-slate-400 mb-2">
                      Active Users
                    </p>

                    <h3 className="text-2xl font-bold">
                      {pool.users}
                    </h3>
                  </div>
                </div>

                {/* ACTIONS */}

                <div className="flex gap-4">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 py-4 rounded-2xl font-bold text-xl transition">
                    Stake Now
                  </button>

                  <button className="flex-1 bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl font-bold text-xl transition">
                    Learn More
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        {/* INFO */}

        <div className="mt-10 bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-4">
            Grow Your Crypto Passively
          </h2>

          <p className="text-xl text-white/90 leading-8 max-w-4xl">
            Stake supported cryptocurrencies and earn rewards daily.
            Flexible and locked staking pools available with competitive APY rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staking;