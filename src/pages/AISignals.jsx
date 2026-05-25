import MainLayout from "../components/layout/MainLayout";

const AISignals = () => {

  const signals = [

    {
      coin: "BTCUSDT",
      action: "BUY",
      confidence: "92%",
      risk: "Low",
      entry: "$84,200",
      target: "$88,500",
      positive: true,
    },

    {
      coin: "ETHUSDT",
      action: "SELL",
      confidence: "81%",
      risk: "Medium",
      entry: "$4,280",
      target: "$3,980",
      positive: false,
    },

    {
      coin: "SOLUSDT",
      action: "BUY",
      confidence: "88%",
      risk: "Low",
      entry: "$182",
      target: "$210",
      positive: true,
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          AI Trading Signals
        </h1>

        <p className="text-zinc-500 mt-2">
          AI-powered market intelligence and smart trading recommendations
        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            Active Signals
          </p>

          <h2 className="text-5xl font-black text-yellow-400">
            24
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            AI Accuracy
          </p>

          <h2 className="text-5xl font-black text-green-400">
            91%
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            Market Sentiment
          </p>

          <h2 className="text-5xl font-black text-blue-400">
            Bullish
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {
          signals.map(
            (signal, index) => (

              <div
                key={index}
                className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8"
              >

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-4xl font-black">
                      {signal.coin}
                    </h2>

                    <p className="text-zinc-500 mt-1">
                      AI Market Analysis
                    </p>

                  </div>

                  <span className={`px-6 py-3 rounded-2xl font-black text-lg ${
                    signal.positive
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white"
                  }`}>

                    {signal.action}

                  </span>

                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">

                  <div className="bg-black rounded-2xl p-5">

                    <p className="text-zinc-500 mb-2">
                      Confidence
                    </p>

                    <h3 className="text-3xl font-black text-yellow-400">
                      {signal.confidence}
                    </h3>

                  </div>

                  <div className="bg-black rounded-2xl p-5">

                    <p className="text-zinc-500 mb-2">
                      Risk Level
                    </p>

                    <h3 className="text-3xl font-black">
                      {signal.risk}
                    </h3>

                  </div>

                </div>

                <div className="space-y-4 mb-8">

                  <div className="flex justify-between">

                    <span className="text-zinc-500">
                      Entry Price
                    </span>

                    <span className="font-bold">
                      {signal.entry}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-zinc-500">
                      AI Target
                    </span>

                    <span className="font-bold text-green-400">
                      {signal.target}
                    </span>

                  </div>

                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                  signal.positive
                    ? "bg-green-500 hover:bg-green-400 text-black"
                    : "bg-red-500 hover:bg-red-400 text-white"
                }`}>

                  Execute Signal

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default AISignals;