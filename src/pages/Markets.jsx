import MainLayout from "../components/layout/MainLayout";

const Markets = () => {

  const markets = [

    {
      pair:
        "BTC/USDT",

      price:
        "$84,320",

      change:
        "+4.2%",
    },

    {
      pair:
        "ETH/USDT",

      price:
        "$4,280",

      change:
        "+3.1%",
    },

    {
      pair:
        "SOL/USDT",

      price:
        "$182",

      change:
        "+8.4%",
    },

    {
      pair:
        "BNB/USDT",

      price:
        "$690",

      change:
        "+2.9%",
    },

    {
      pair:
        "XRP/USDT",

      price:
        "$1.82",

      change:
        "+6.7%",
    },

    {
      pair:
        "ADA/USDT",

      price:
        "$1.14",

      change:
        "+5.2%",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            LIVE MARKETS

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Crypto
          <span className="text-yellow-400">
            {" "}Markets
          </span>

        </h1>

        <p className="text-zinc-500 text-xl mt-4">

          Real-time cryptocurrency market tracking and exchange analytics.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {
          markets.map(
            (
              market,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 hover:scale-[1.02] transition-all duration-300"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-4xl font-black">

                    {
                      market.pair
                    }

                  </h2>

                  <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">

                    <span className="text-2xl">
                      📈
                    </span>

                  </div>

                </div>

                <div className="mb-6">

                  <h3 className="text-5xl font-black text-white mb-3">

                    {
                      market.price
                    }

                  </h3>

                  <span className="text-green-400 text-2xl font-black">

                    {
                      market.change
                    }

                  </span>

                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-4 rounded-2xl text-black font-black text-lg">

                  Trade Now

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Markets;