import React, {
  useEffect,
  useState,
} from "react";

const LiveTrades = () => {
  const [trades, setTrades] =
    useState([]);

  useEffect(() => {
    generateTrades();

    const interval =
      setInterval(() => {
        generateTrades();
      }, 1500);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  const generateTrades =
    () => {
      const fakeTrades =
        Array.from({
          length: 12,
        }).map(() => ({
          side:
            Math.random() >
            0.5
              ? "BUY"
              : "SELL",

          price: (
            104000 +
            Math.random() *
              1000
          ).toFixed(2),

          amount: (
            Math.random() *
            3
          ).toFixed(4),
        }));

      setTrades(
        fakeTrades
      );
    };

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Live Trades
      </h2>

      <div className="space-y-2">
        {trades.map(
          (
            trade,
            index
          ) => (
            <div
              key={index}
              className="flex justify-between bg-black border border-gray-800 rounded-lg px-3 py-2"
            >
              <span
                className={
                  trade.side ===
                  "BUY"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {
                  trade.side
                }
              </span>

              <span>
                $
                {
                  trade.price
                }
              </span>

              <span>
                {
                  trade.amount
                }
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LiveTrades;