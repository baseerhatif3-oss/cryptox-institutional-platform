import React from "react";

const AISignals = () => {

  const signals = [

    {
      pair: "BTC/USDT",
      action: "BUY",
      entry: "$81,240",
      target: "$84,900",
      confidence: "94%",
    },

    {
      pair: "ETH/USDT",
      action: "BUY",
      entry: "$4,120",
      target: "$4,480",
      confidence: "91%",
    },

    {
      pair: "SOL/USDT",
      action: "SELL",
      entry: "$188",
      target: "$172",
      confidence: "87%",
    },

    {
      pair: "AVAX/USDT",
      action: "BUY",
      entry: "$54",
      target: "$63",
      confidence: "89%",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            AI Trading Signals
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Institutional-grade AI market predictions and trade setups
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          AI POWERED
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Artificial Intelligence Trading Engine
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            SMART MARKET SIGNALS
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Advanced machine learning algorithms analyze
            market trends, liquidity and momentum in real-time.
          </p>

        </div>

      </div>

      {/* SIGNALS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {signals.map(
          (
            signal,
            index
          ) => (

            <div
              key={index}
              className="relative overflow-hidden bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <h2 className="text-3xl font-black">
                    {signal.pair}
                  </h2>

                  <span
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${
                      signal.action === "BUY"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >

                    {signal.action}

                  </span>

                </div>

                <div className="space-y-6 mt-10">

                  <div>

                    <p className="text-gray-400">
                      Entry
                    </p>

                    <h3 className="text-3xl font-black mt-2">
                      {signal.entry}
                    </h3>

                  </div>

                  <div>

                    <p className="text-gray-400">
                      Target
                    </p>

                    <h3 className="text-3xl font-black mt-2 text-yellow-400">
                      {signal.target}
                    </h3>

                  </div>

                  <div>

                    <p className="text-gray-400">
                      Confidence
                    </p>

                    <h3 className="text-5xl font-black mt-2">
                      {signal.confidence}
                    </h3>

                  </div>

                </div>

                <button className="w-full mt-10 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

                  Execute Signal

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default AISignals;