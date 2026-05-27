const trades = [

  {
    pair: "BTC/USDT",
    amount: "$84,200",
  },

  {
    pair: "ETH/USDT",
    amount: "$4,180",
  },

  {
    pair: "SOL/USDT",
    amount: "$182",
  },

  {
    pair: "BNB/USDT",
    amount: "$702",
  },
];

const LiveActivity = () => {

  return (

    <section className="max-w-7xl mx-auto px-6 pb-28">

      <div className="mb-14">

        <h2 className="text-5xl md:text-6xl font-black mb-6">

          Live Market
          <span className="text-yellow-400">

            {" "}Activity

          </span>

        </h2>

        <p className="text-zinc-500 text-xl">

          Real-time institutional trading activity feed.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {
          trades.map(
            (
              trade,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-[32px] p-8 card-hover"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                  <span className="text-green-400 font-bold">

                    LIVE

                  </span>

                </div>

                <h3 className="text-4xl font-black mb-4">

                  {
                    trade.pair
                  }

                </h3>

                <p className="text-yellow-400 text-3xl font-black">

                  {
                    trade.amount
                  }

                </p>

              </div>
            )
          )
        }

      </div>

    </section>
  );
};

export default LiveActivity;