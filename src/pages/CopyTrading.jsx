import MainLayout from "../components/layout/MainLayout";

const CopyTrading = () => {

  const traders = [

    {
      name:
        "AlphaTrader",

      roi:
        "+248%",
    },

    {
      name:
        "CryptoTitan",

      roi:
        "+192%",
    },

    {
      name:
        "FutureMaster",

      roi:
        "+176%",
    },

    {
      name:
        "WhaleHunter",

      roi:
        "+158%",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black">

          Copy
          <span className="text-yellow-400">
            {" "}Trading
          </span>

        </h1>

        <p className="text-zinc-500 text-xl mt-4">

          Automatically replicate strategies from top-performing professional traders.

        </p>

      </div>

      <div className="space-y-8">

        {
          traders.map(
            (
              trader,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center gap-6">

                  <div className="w-20 h-20 rounded-3xl bg-yellow-400 text-black flex items-center justify-center text-3xl font-black">

                    {
                      trader.name.charAt(
                        0
                      )
                    }

                  </div>

                  <div>

                    <h2 className="text-4xl font-black">

                      {
                        trader.name
                      }

                    </h2>

                    <p className="text-zinc-500 mt-2">

                      Verified professional trader

                    </p>

                  </div>

                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">

                  <div>

                    <p className="text-zinc-500 mb-2">

                      ROI Performance

                    </p>

                    <h2 className="text-5xl font-black text-green-400">

                      {
                        trader.roi
                      }

                    </h2>

                  </div>

                  <button className="bg-yellow-400 hover:bg-yellow-300 transition-all px-8 py-4 rounded-2xl text-black font-black text-lg">

                    Copy Trader

                  </button>

                </div>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default CopyTrading;