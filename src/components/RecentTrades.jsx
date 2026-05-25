const trades = [

  {
    price: "84,520",
    amount: "0.42",
    side: "buy",
  },

  {
    price: "84,480",
    amount: "0.28",
    side: "sell",
  },

  {
    price: "84,550",
    amount: "0.91",
    side: "buy",
  },

  {
    price: "84,500",
    amount: "0.14",
    side: "sell",
  },
];

const RecentTrades = () => {

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <h2 className="text-3xl font-black text-white mb-8">
        Recent Trades
      </h2>

      <div className="space-y-3">

        {
          trades.map(
            (trade, index) => (

              <div
                key={index}
                className="flex justify-between bg-black rounded-xl px-4 py-3"
              >

                <span className={`font-bold ${
                  trade.side === "buy"
                    ? "text-green-400"
                    : "text-red-400"
                }`}>
                  {trade.price}
                </span>

                <span className="text-white">
                  {trade.amount}
                </span>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default RecentTrades;