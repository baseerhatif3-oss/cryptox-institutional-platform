import MainLayout from "../components/layout/MainLayout";

const AISignals = () => {

  const signals = [

    {
      pair:
        "BTC/USDT",

      signal:
        "BUY",

      confidence:
        "94%",
    },

    {
      pair:
        "ETH/USDT",

      signal:
        "BUY",

      confidence:
        "91%",
    },

    {
      pair:
        "SOL/USDT",

      signal:
        "SELL",

      confidence:
        "88%",
    },

    {
      pair:
        "BNB/USDT",

      signal:
        "BUY",

      confidence:
        "90%",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            AI ENGINE LIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          AI Trading
          <span className="text-yellow-400">
            {" "}Signals
          </span>

        </h1>

        <p className="text-zinc-500 text-xl mt-4">

          AI-powered professional market intelligence and trading signals.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          signals.map(
            (
              signal,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-4xl font-black">

                    {
                      signal.pair
                    }

                  </h2>

                  <div className={`px-5 py-3 rounded-2xl font-black ${
                    signal.signal ===
                    "BUY"

                      ? "bg-green-500/20 text-green-400"

                      : "bg-red-500/20 text-red-400"
                  }`}>

                    {
                      signal.signal
                    }

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-zinc-500 text-lg">

                    Confidence Score

                  </span>

                  <span className="text-yellow-400 text-3xl font-black">

                    {
                      signal.confidence
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

export default AISignals;