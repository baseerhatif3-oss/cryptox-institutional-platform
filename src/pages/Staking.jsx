import MainLayout from "../components/layout/MainLayout";

const Staking = () => {

  const pools = [

    {
      asset:
        "ETH",

      apy:
        "12.8%",

      locked:
        "$12.4M",
    },

    {
      asset:
        "SOL",

      apy:
        "18.2%",

      locked:
        "$8.1M",
    },

    {
      asset:
        "BNB",

      apy:
        "9.4%",

      locked:
        "$18.7M",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>

          <span className="text-purple-400 font-bold">

            STAKING ENGINE ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Crypto
          <span className="text-yellow-400">
            {" "}Staking
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {
          pools.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-5xl font-black text-yellow-400">

                    {
                      item.asset
                    }

                  </h2>

                  <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl">

                    <span className="text-green-400 font-black">

                      {
                        item.apy
                      } APY

                    </span>

                  </div>

                </div>

                <div className="mb-8">

                  <p className="text-zinc-500 mb-3">

                    Total Locked

                  </p>

                  <h3 className="text-4xl font-black">

                    {
                      item.locked
                    }

                  </h3>

                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black text-xl">

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