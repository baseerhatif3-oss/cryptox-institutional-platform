import MainLayout from "../components/layout/MainLayout";

const Staking = () => {

  const stakingPools = [

    {
      coin:
        "USDT",

      apy:
        "12%",
    },

    {
      coin:
        "BTC",

      apy:
        "8.5%",
    },

    {
      coin:
        "ETH",

      apy:
        "10%",
    },

    {
      coin:
        "SOL",

      apy:
        "15%",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black">

          Crypto
          <span className="text-yellow-400">
            {" "}Staking
          </span>

        </h1>

        <p className="text-zinc-500 text-xl mt-4">

          Earn passive rewards with institutional-grade staking pools.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          stakingPools.map(
            (
              pool,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-5xl font-black">

                    {
                      pool.coin
                    }

                  </h2>

                  <span className="text-green-400 text-4xl font-black">

                    {
                      pool.apy
                    }

                  </span>

                </div>

                <p className="text-zinc-500 mb-8">

                  Flexible staking with enterprise-grade infrastructure security.

                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-4 rounded-2xl text-black font-black text-lg">

                  Stake Now

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Staking;