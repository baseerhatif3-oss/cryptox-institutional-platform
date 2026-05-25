import { useEffect, useState } from "react";

const LivePriceTicker = () => {

  const [price, setPrice] =
    useState("0");

  const [change, setChange] =
    useState("0");

  useEffect(() => {

    const socket =
      new WebSocket(
        "wss://stream.binance.com:9443/ws/btcusdt@ticker"
      );

    socket.onmessage =
      (event) => {

        const data =
          JSON.parse(
            event.data
          );

        setPrice(
          Number(
            data.c
          ).toLocaleString()
        );

        setChange(
          Number(
            data.P
          ).toFixed(2)
        );
      };

    return () =>
      socket.close();

  }, []);

  return (

    <div className="bg-black border border-yellow-500/10 rounded-2xl px-6 py-4 flex items-center gap-6">

      <div>

        <p className="text-zinc-500 text-sm">
          BTC/USDT
        </p>

        <h2 className="text-2xl font-black text-white">
          ${price}
        </h2>

      </div>

      <div className={`font-bold text-lg ${
        Number(change) >= 0
          ? "text-green-400"
          : "text-red-400"
      }`}>

        {change}%

      </div>

    </div>
  );
};

export default LivePriceTicker;