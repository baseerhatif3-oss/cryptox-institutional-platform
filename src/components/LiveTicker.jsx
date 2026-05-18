import {
  useEffect,
  useState,
} from "react";

const LiveTicker = () => {
  const [prices, setPrices] =
    useState({
      BTCUSDT: 0,
      ETHUSDT: 0,
      SOLUSDT: 0,
      BNBUSDT: 0,
    });

  useEffect(() => {
    const socket =
      new WebSocket(
        "wss://stream.binance.com:9443/ws/!ticker@arr"
      );

    socket.onmessage = (
      event
    ) => {
      const data =
        JSON.parse(
          event.data
        );

      const updatedPrices =
        {};

      data.forEach((coin) => {
        if (
          [
            "BTCUSDT",
            "ETHUSDT",
            "SOLUSDT",
            "BNBUSDT",
          ].includes(
            coin.s
          )
        ) {
          updatedPrices[
            coin.s
          ] = parseFloat(
            coin.c
          ).toFixed(2);
        }
      });

      setPrices(
        updatedPrices
      );
    };

    return () =>
      socket.close();
  }, []);

  return (
    <div className="bg-slate-900 border-b border-slate-800 overflow-hidden">
      <div className="flex animate-pulse whitespace-nowrap gap-10 px-8 py-3">
        <div className="text-yellow-400 font-bold">
          BTC:
          $
          {prices.BTCUSDT}
        </div>

        <div className="text-blue-400 font-bold">
          ETH:
          $
          {prices.ETHUSDT}
        </div>

        <div className="text-purple-400 font-bold">
          SOL:
          $
          {prices.SOLUSDT}
        </div>

        <div className="text-green-400 font-bold">
          BNB:
          $
          {prices.BNBUSDT}
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;