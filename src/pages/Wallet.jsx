import MainLayout from "../components/layout/MainLayout";

const Wallet = () => {

  const assets = [

    {
      coin:
        "BTC",

      balance:
        "2.48 BTC",

      value:
        "$208,000",
    },

    {
      coin:
        "ETH",

      balance:
        "18.2 ETH",

      value:
        "$77,900",
    },

    {
      coin:
        "USDT",

      balance:
        "84,000 USDT",

      value:
        "$84,000",
    },

    {
      coin:
        "SOL",

      balance:
        "920 SOL",

      value:
        "$167,000",
    },
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-6">

            <span className="text-yellow-400 font-bold">

              SECURE WALLET SYSTEM

            </span>

          </div>

          <h1 className="text-6xl font-black">

            Asset
            <span className="text-yellow-400">
              {" "}Wallet
            </span>

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl">

            Enterprise-grade digital asset management and secure crypto storage infrastructure.

          </p>

        </div>

      </div>

      <div className="glass rounded-3xl p-8 mb-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>

            <p className="text-zinc-500 mb-3">

              Total Portfolio Value

            </p>

            <h2 className="text-6xl font-black text-yellow-400">

              $536,900

            </h2>

          </div>

          <div className="flex flex-wrap gap-4">

            <button className="bg-yellow-400 hover:bg-yellow-300 transition-all px-8 py-4 rounded-2xl text-black font-black">

              Deposit

            </button>

            <button className="glass px-8 py-4 rounded-2xl font-black">

              Withdraw

            </button>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          assets.map(
            (
              asset,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-5xl font-black">

                      {
                        asset.coin
                      }

                    </h2>

                    <p className="text-zinc-500 mt-3">

                      Available Balance

                    </p>

                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-yellow-400/10 flex items-center justify-center">

                    <span className="text-3xl">
                      💰
                    </span>

                  </div>

                </div>

                <div>

                  <h3 className="text-4xl font-black text-white mb-3">

                    {
                      asset.balance
                    }

                  </h3>

                  <span className="text-green-400 text-2xl font-black">

                    {
                      asset.value
                    }

                  </span>

                </div>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Wallet;