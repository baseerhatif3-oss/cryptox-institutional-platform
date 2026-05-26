const AISignals = () => {

  const signals = [

    {
      pair:
        "BTC/USDT",

      signal:
        "STRONG BUY",

      accuracy:
        "96%",
    },

    {
      pair:
        "ETH/USDT",

      signal:
        "BUY",

      accuracy:
        "91%",
    },

    {
      pair:
        "SOL/USDT",

      signal:
        "HOLD",

      accuracy:
        "88%",
    },

    {
      pair:
        "BNB/USDT",

      signal:
        "SELL",

      accuracy:
        "84%",
    },
  ];

  return (

    <div className="glass rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-black">

          AI Trading Signals

        </h2>

        <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl">

          <span className="text-green-400 font-bold">

            LIVE AI

          </span>

        </div>

      </div>

      <div className="space-y-5">

        {
          signals.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="bg-black/30 border border-white/5 rounded-2xl p-5 flex items-center justify-between"
              >

                <div>

                  <h2 className="text-2xl font-black">

                    {
                      item.pair
                    }

                  </h2>

                  <p className="text-zinc-500 mt-2">

                    Accuracy:
                    {" "}
                    {
                      item.accuracy
                    }

                  </p>

                </div>

                <div>

                  <span
                    className={`px-5 py-3 rounded-2xl font-black ${
                      item.signal.includes(
                        "BUY"
                      )
                        ? "bg-green-500 text-white"
                        : item.signal ===
                          "SELL"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-400 text-black"
                    }`}
                  >

                    {
                      item.signal
                    }

                  </span>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default AISignals;