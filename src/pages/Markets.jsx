import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import {
  getMarketPrices,
} from "../services/marketService";

const Markets = () => {

  const [markets, setMarkets] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchMarkets();

    const interval =
      setInterval(
        fetchMarkets,
        10000
      );

    return () =>
      clearInterval(interval);

  }, []);

  const fetchMarkets =
    async () => {

      try {

        const data =
          await getMarketPrices();

        const filtered =
          data
            .filter(
              (coin) =>
                coin.symbol.endsWith(
                  "USDT"
                )
            )
            .slice(0, 20);

        setMarkets(filtered);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Live Markets
        </h1>

        <p className="text-zinc-500 mt-2">
          Real-time Binance market data
        </p>

      </div>

      <div className="bg-[#111] border border-yellow-500/10 rounded-3xl overflow-hidden">

        {
          loading ? (

            <div className="p-10 text-center">

              <h2 className="text-3xl font-black text-yellow-400">

                Loading Markets...

              </h2>

            </div>

          ) : (

            <table className="w-full">

              <thead className="bg-black">

                <tr>

                  <th className="text-left p-5 text-yellow-400">
                    Symbol
                  </th>

                  <th className="text-left p-5 text-yellow-400">
                    Price
                  </th>

                  <th className="text-left p-5 text-yellow-400">
                    24H Change
                  </th>

                  <th className="text-left p-5 text-yellow-400">
                    Volume
                  </th>

                </tr>

              </thead>

              <tbody>

                {
                  markets.map(
                    (
                      market,
                      index
                    ) => (

                      <tr
                        key={index}
                        className="border-t border-yellow-500/10"
                      >

                        <td className="p-5 font-black">

                          {
                            market.symbol
                          }

                        </td>

                        <td className="p-5 font-bold">

                          $
                          {
                            Number(
                              market.lastPrice
                            ).toLocaleString()
                          }

                        </td>

                        <td className={`p-5 font-bold ${
                          Number(
                            market.priceChangePercent
                          ) >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}>

                          {
                            Number(
                              market.priceChangePercent
                            ).toFixed(2)
                          }%

                        </td>

                        <td className="p-5 text-zinc-400">

                          {
                            Number(
                              market.volume
                            ).toLocaleString()
                          }

                        </td>

                      </tr>
                    )
                  )
                }

              </tbody>

            </table>
          )
        }

      </div>

    </MainLayout>
  );
};

export default Markets;