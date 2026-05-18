import {
  useEffect,
  useState,
} from "react";

const MarketTrades = ({
  symbol = "btcusdt",
}) => {
  const [trades, setTrades] =
    useState([]);

  useEffect(() => {
    const ws =
      new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol}@trade`
      );

    ws.onmessage = (event) => {
      const data =
        JSON.parse(
          event.data
        );

      const trade = {
        price: Number(
          data.p
        ).toFixed(2),

        qty: Number(
          data.q
        ).toFixed(4),

        side: data.m
          ? "SELL"
          : "BUY",

        time:
          new Date().toLocaleTimeString(),
      };

      setTrades((prev) =>
        [trade, ...prev].slice(
          0,
          20
        )
      );
    };

    return () => ws.close();
  }, [symbol]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-3xl font-bold mb-8 text-white">
        Live Market Trades
      </h2>

      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {trades.map(
          (
            trade,
            index
          ) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-4 flex items-center justify-between"
            >
              <div>
                <div
                  className={`font-bold text-lg ${
                    trade.side ===
                    "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {
                    trade.side
                  }
                </div>

                <p className="text-slate-400 text-sm">
                  {trade.time}
                </p>
              </div>

              <div className="text-right">
                <div className="font-bold text-xl text-white">
                  $
                  {Number(
                    trade.price
                  ).toLocaleString()}
                </div>

                <p className="text-slate-400 text-sm">
                  {trade.qty}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MarketTrades;