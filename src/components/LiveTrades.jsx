const LiveTrades = () => {

  const trades = [

    {
      price: "84,520",
      amount: "0.42",
      type: "buy",
      time: "12:42:01",
    },

    {
      price: "84,510",
      amount: "1.22",
      type: "sell",
      time: "12:42:03",
    },

    {
      price: "84,500",
      amount: "0.84",
      type: "buy",
      time: "12:42:05",
    },

    {
      price: "84,480",
      amount: "2.10",
      type: "sell",
      time: "12:42:08",
    },
  ];

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-black">
          Live Trades
        </h2>

        <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">

          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 text-xs font-bold">
            REAL-TIME
          </span>

        </div>

      </div>

      <div className="space-y-3">

        {
          trades.map(
            (trade, index) => (

              <div
                key={index}
                className="flex items-center justify-between bg-black rounded-xl px-4 py-3"
              >

                <div>

                  <h3 className={`font-bold ${
                    trade.type === "buy"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}>

                    ${trade.price}

                  </h3>

                  <p className="text-zinc-500 text-sm">

                    {trade.time}

                  </p>

                </div>

                <div className="text-right">

                  <p className="font-bold">
                    {trade.amount}
                  </p>

                  <p className="text-zinc-500 text-sm uppercase">

                    {trade.type}

                  </p>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default LiveTrades;