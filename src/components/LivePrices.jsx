import {
  useEffect,
  useState,
} from "react";

const LivePrices = () => {
  const [prices, setPrices] =
    useState({
      BTCUSDT: 0,
      ETHUSDT: 0,
      SOLUSDT: 0,
    });

  useEffect(() => {
    const ws =
      new WebSocket(
        "wss://stream.binance.com:9443/ws/!ticker@arr"
      );

    ws.onmessage = (event) => {
      const data =
        JSON.parse(
          event.data
        );

      const btc =
        data.find(
          (coin) =>
            coin.s ===
            "BTCUSDT"
        );

      const eth =
        data.find(
          (coin) =>
            coin.s ===
            "ETHUSDT"
        );

      const sol =
        data.find(
          (coin) =>
            coin.s ===
            "SOLUSDT"
        );

      setPrices({
        BTCUSDT: btc
          ? Number(
              btc.c
            ).toFixed(2)
          : 0,

        ETHUSDT: eth
          ? Number(
              eth.c
            ).toFixed(2)
          : 0,

        SOLUSDT: sol
          ? Number(
              sol.c
            ).toFixed(2)
          : 0,
      });
    };

    return () => ws.close();
  }, []);

  const markets = [
    {
      symbol: "BTCUSDT",
      name: "Bitcoin",
      price:
        prices.BTCUSDT,
    },

    {
      symbol: "ETHUSDT",
      name: "Ethereum",
      price:
        prices.ETHUSDT,
    },

    {
      symbol: "SOLUSDT",
      name: "Solana",
      price:
        prices.SOLUSDT,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {markets.map((market) => (
        <div
          key={market.symbol}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {market.name}
              </h2>

              <p className="text-slate-400">
                {market.symbol}
              </p>
            </div>

            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>

          <h3 className="text-4xl font-bold text-green-400">
            $
            {Number(
              market.price || 0
            ).toLocaleString()}
          </h3>

          <p className="text-slate-400 mt-3">
            Live Binance Price
          </p>
        </div>
      ))}
    </div>
  );
};

export default LivePrices;