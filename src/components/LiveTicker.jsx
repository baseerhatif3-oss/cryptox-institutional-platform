import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const LiveTicker =
  () => {
    const [prices,
      setPrices] =
      useState([]);

    useEffect(() => {
      fetchPrices();

      const interval =
        setInterval(
          fetchPrices,
          5000
        );

      return () =>
        clearInterval(
          interval
        );
    }, []);

    const fetchPrices =
      async () => {
        try {
          const symbols =
            [
              "BTCUSDT",
              "ETHUSDT",
              "SOLUSDT",
              "BNBUSDT",
              "XRPUSDT",
            ];

          const requests =
            symbols.map(
              (
                symbol
              ) =>
                axios.get(
                  `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
                )
            );

          const responses =
            await Promise.all(
              requests
            );

          const formatted =
            responses.map(
              (
                res
              ) => ({
                symbol:
                  res.data.symbol.replace(
                    "USDT",
                    ""
                  ),

                price:
                  Number(
                    res.data
                      .price
                  ).toFixed(
                    2
                  ),
              })
            );

          setPrices(
            formatted
          );
        } catch (error) {
          console.log(error);
        }
      };

    return (
      <div className="bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="flex animate-pulse whitespace-nowrap">
          {prices.map(
            (
              coin
            ) => (
              <div
                key={
                  coin.symbol
                }
                className="px-8 py-4 border-r border-slate-800 flex items-center gap-3"
              >
                <span className="font-bold text-white">
                  {
                    coin.symbol
                  }
                </span>

                <span className="text-green-400 font-semibold">
                  $
                  {
                    coin.price
                  }
                </span>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

export default LiveTicker;