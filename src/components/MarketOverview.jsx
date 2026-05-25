import {
  useEffect,
  useState,
} from "react";

import {
  get24hrTicker,
} from "../services/marketService";

const symbols = [

  {
    symbol: "BTCUSDT",
    name: "Bitcoin",
  },

  {
    symbol: "ETHUSDT",
    name: "Ethereum",
  },

  {
    symbol: "SOLUSDT",
    name: "Solana",
  },

  {
    symbol: "BNBUSDT",
    name: "BNB",
  },
];

const MarketOverview = () => {

  const [markets, setMarkets] =
    useState([]);

  useEffect(() => {

    fetchMarkets();

    const interval =
      setInterval(
        fetchMarkets,
        5000
      );

    return () =>
      clearInterval(
        interval
      );

  }, []);

  const fetchMarkets =
    async () => {

      try {

        const data =
          await Promise.all(

            symbols.map(
              async (coin) => {

                const ticker =
                  await get24hrTicker(
                    coin.symbol
                  );

                return {

                  symbol:
                    coin.symbol.replace(
                      "USDT",
                      ""
                    ),

                  name:
                    coin.name,

                  price:
                    Number(
                      ticker.lastPrice
                    ).toFixed(2),

                  change:
                    Number(
                      ticker.priceChangePercent
                    ).toFixed(2),
                };
              }
            )
          );

        setMarkets(data);

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-black text-white">
            Live Markets
          </h2>

          <p className="text-gray-500">
            Real Binance market data
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {
          markets.map(
            (coin) => (

              <div
                key={coin.symbol}
                className="flex items-center justify-between bg-black rounded-2xl p-4"
              >

                <div>

                  <h3 className="text-white font-bold">
                    {coin.symbol}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {coin.name}
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-white font-bold">

                    $
                    {coin.price}

                  </h3>

                  <p className={`text-sm font-bold ${
                    Number(
                      coin.change
                    ) >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}>

                    {
                      coin.change
                    }%

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

export default MarketOverview;