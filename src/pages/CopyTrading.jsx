import MainLayout from "../components/layout/MainLayout";

const CopyTrading = () => {

  const traders = [

    {
      name: "AlphaWolf",
      roi: "+284%",
      followers: "12.4K",
      trades: 482,
      winRate: "91%",
      positive: true,
    },

    {
      name: "CryptoTitan",
      roi: "+198%",
      followers: "8.1K",
      trades: 390,
      winRate: "87%",
      positive: true,
    },

    {
      name: "BearHunter",
      roi: "-12%",
      followers: "1.8K",
      trades: 221,
      winRate: "54%",
      positive: false,
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Copy Trading
        </h1>

        <p className="text-zinc-500 mt-2">
          Follow elite traders and automatically copy their trades
        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            Active Traders
          </p>

          <h2 className="text-5xl font-black text-yellow-400">
            1,240
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            Copied Volume
          </p>

          <h2 className="text-5xl font-black text-green-400">
            $84M
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            Average ROI
          </p>

          <h2 className="text-5xl font-black text-blue-400">
            118%
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {
          traders.map(
            (trader, index) => (

              <div
                key={index}
                className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8"
              >

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-4xl font-black">
                      {trader.name}
                    </h2>

                    <p className="text-zinc-500 mt-1">
                      Elite Trader
                    </p>

                  </div>

                  <div className={`text-3xl font-black ${
                    trader.positive
                      ? "text-green-400"
                      : "text-red-400"
                  }`}>

                    {trader.roi}

                  </div>

                </div>

                <div className="space-y-5 mb-8">

                  <div className="flex justify-between">

                    <span className="text-zinc-500">
                      Followers
                    </span>

                    <span className="font-bold">
                      {trader.followers}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-zinc-500">
                      Total Trades
                    </span>

                    <span className="font-bold">
                      {trader.trades}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-zinc-500">
                      Win Rate
                    </span>

                    <span className="font-bold text-yellow-400">
                      {trader.winRate}
                    </span>

                  </div>

                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                  trader.positive
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                    : "bg-zinc-700 hover:bg-zinc-600 text-white"
                }`}>

                  Copy Trader

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default CopyTrading;