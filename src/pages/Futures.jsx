import MainLayout from "../components/layout/MainLayout";

const Futures = () => {

  const pairs = [

    {
      pair:
        "BTCUSDT",

      leverage:
        "125x",

      volume:
        "$18.4B",
    },

    {
      pair:
        "ETHUSDT",

      leverage:
        "100x",

      volume:
        "$11.2B",
    },

    {
      pair:
        "SOLUSDT",

      leverage:
        "75x",

      volume:
        "$4.8B",
    },

    {
      pair:
        "BNBUSDT",

      leverage:
        "50x",

      volume:
        "$3.1B",
    },
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-5 py-3 rounded-full mb-6">

            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>

            <span className="text-red-400 font-bold">

              HIGH LEVERAGE TRADING

            </span>

          </div>

          <h1 className="text-6xl font-black">

            Futures
            <span className="text-yellow-400">
              {" "}Trading
            </span>

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl">

            Professional leveraged derivatives trading with enterprise-grade execution infrastructure.

          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          pairs.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-5xl font-black">

                    {
                      item.pair
                    }

                  </h2>

                  <span className="bg-red-500/20 text-red-400 px-5 py-3 rounded-2xl font-black">

                    {
                      item.leverage
                    }

                  </span>

                </div>

                <div className="flex items-center justify-between mb-8">

                  <span className="text-zinc-500 text-lg">

                    24H Volume

                  </span>

                  <span className="text-green-400 text-3xl font-black">

                    {
                      item.volume
                    }

                  </span>

                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-4 rounded-2xl text-black font-black text-lg">

                  Open Position

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Futures;