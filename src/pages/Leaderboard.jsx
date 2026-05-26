import MainLayout from "../components/layout/MainLayout";

const Leaderboard = () => {

  const traders = [

    {
      name:
        "AlphaTrader",

      profit:
        "$124,000",
    },

    {
      name:
        "CryptoWolf",

      profit:
        "$98,500",
    },

    {
      name:
        "FutureKing",

      profit:
        "$84,300",
    },

    {
      name:
        "MarketMaker",

      profit:
        "$75,100",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black">

          Global
          <span className="text-yellow-400">
            {" "}Leaderboard
          </span>

        </h1>

        <p className="text-zinc-500 text-xl mt-4">

          Top performing traders across CryptoX exchange.

        </p>

      </div>

      <div className="space-y-6">

        {
          traders.map(
            (
              trader,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 flex items-center justify-between hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center gap-6">

                  <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl font-black">

                    #
                    {
                      index + 1
                    }

                  </div>

                  <div>

                    <h2 className="text-3xl font-black">

                      {
                        trader.name
                      }

                    </h2>

                    <p className="text-zinc-500 mt-2">

                      Verified professional trader

                    </p>

                  </div>

                </div>

                <h2 className="text-4xl font-black text-green-400">

                  {
                    trader.profit
                  }

                </h2>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Leaderboard;