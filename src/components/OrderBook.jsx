import { useEffect, useState } from "react";

const OrderBook = () => {
  const [bids, setBids] =
    useState([]);

  const [asks, setAsks] =
    useState([]);

  const [trades, setTrades] =
    useState([]);

  const generateOrders = () => {
    const basePrice = 105000;

    const generatedBids = Array.from(
      { length: 12 },
      (_, i) => ({
        price: (
          basePrice -
          i * 12 -
          Math.random() * 10
        ).toFixed(2),

        amount: (
          Math.random() * 3
        ).toFixed(4),
      })
    );

    const generatedAsks = Array.from(
      { length: 12 },
      (_, i) => ({
        price: (
          basePrice +
          i * 12 +
          Math.random() * 10
        ).toFixed(2),

        amount: (
          Math.random() * 3
        ).toFixed(4),
      })
    );

    const generatedTrades =
      Array.from(
        { length: 15 },
        (_, i) => ({
          id: i,

          price: (
            basePrice +
            (Math.random() - 0.5) *
              100
          ).toFixed(2),

          amount: (
            Math.random() * 2
          ).toFixed(4),

          side:
            Math.random() > 0.5
              ? "BUY"
              : "SELL",
        })
      );

    setBids(generatedBids);

    setAsks(generatedAsks);

    setTrades(generatedTrades);
  };

  useEffect(() => {
    generateOrders();

    const interval =
      setInterval(() => {
        generateOrders();
      }, 2500);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* ORDER BOOK */}

      <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Order Book
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* BIDS */}

          <div>
            <div className="flex justify-between text-slate-400 mb-3 text-sm">
              <span>Bid Price</span>

              <span>Amount</span>
            </div>

            <div className="space-y-2">
              {bids.map(
                (bid, index) => (
                  <div
                    key={index}
                    className="flex justify-between bg-green-500/10 rounded-lg px-3 py-2"
                  >
                    <span className="text-green-400 font-semibold">
                      ${bid.price}
                    </span>

                    <span>
                      {bid.amount}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ASKS */}

          <div>
            <div className="flex justify-between text-slate-400 mb-3 text-sm">
              <span>Ask Price</span>

              <span>Amount</span>
            </div>

            <div className="space-y-2">
              {asks.map(
                (ask, index) => (
                  <div
                    key={index}
                    className="flex justify-between bg-red-500/10 rounded-lg px-3 py-2"
                  >
                    <span className="text-red-400 font-semibold">
                      ${ask.price}
                    </span>

                    <span>
                      {ask.amount}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* RECENT TRADES */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Recent Trades
        </h2>

        <div className="space-y-3">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="bg-slate-800 rounded-xl p-3 flex items-center justify-between"
            >
              <div>
                <p
                  className={`font-bold ${
                    trade.side ===
                    "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {trade.side}
                </p>

                <p className="text-slate-400 text-sm">
                  {trade.amount} BTC
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ${trade.price}
                </p>

                <p className="text-slate-400 text-sm">
                  Just now
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;