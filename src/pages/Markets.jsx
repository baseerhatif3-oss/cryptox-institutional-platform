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
        3000
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

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-5xl font-black">
            Live Markets
          </h1>

          <p className="text-zinc-500 mt-2">
            Real-time Binance market data
          </p>

        </div>

        <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full w-fit">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">
            LIVE MARKET DATA
          </span>

        </div>

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

            <div className="overflow-x-auto">

              <table className="w-full min-w-[900px]">

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

                    <th className="text-left p-5 text-yellow-400">
                      High
                    </th>

                    <th className="text-left p-5 text-yellow-400">
                      Low
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
                          className="border-t border-yellow-500/10 hover:bg-black/30 transition-all"
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

                          <td className="p-5 text-green-400 font-bold">

                            $
                            {
                              Number(
                                market.highPrice
                              ).toLocaleString()
                            }

                          </td>

                          <td className="p-5 text-red-400 font-bold">

                            $
                            {
                              Number(
                                market.lowPrice
                              ).toLocaleString()
                            }

                          </td>

                        </tr>
                      )
                    )
                  }

                </tbody>

              </table>

            </div>
          )
        }

      </div>

    </MainLayout>
  );
};

export default Markets;