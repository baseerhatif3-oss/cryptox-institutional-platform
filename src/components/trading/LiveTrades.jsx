const LiveTrades = () => {

  const trades = [

    {
      pair: "BTC/USDT",
      type: "BUY",
      price: 84320,
    },

    {
      pair: "ETH/USDT",
      type: "SELL",
      price: 4280,
    },

    {
      pair: "SOL/USDT",
      type: "BUY",
      price: 182,
    },

    {
      pair: "BNB/USDT",
      type: "SELL",
      price: 690,
    },
  ];

  return (

    <div className="glass rounded-3xl p-6">

      <h2 className="text-3xl font-black mb-6">

        Live Trades

      </h2>

      <div className="space-y-4">

        {
          trades.map(
            (
              trade,
              index
            ) => (

              <div
                key={index}
                className="flex items-center justify-between bg-black/30 rounded-2xl p-4"
              >

                <div>

                  <h3 className="font-black text-xl">

                    {
                      trade.pair
                    }

                  </h3>

                  <p
                    className={
                      trade.type ===
                      "BUY"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >

                    {
                      trade.type
                    }

                  </p>

                </div>

                <h2 className="text-2xl font-black text-yellow-400">

                  $
                  {
                    trade.price
                  }

                </h2>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default LiveTrades;