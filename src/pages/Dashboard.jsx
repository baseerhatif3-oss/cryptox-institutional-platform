import { useEffect, useState } from "react";

import {
  TrendingUp,
  TrendingDown,
  Wifi,
} from "lucide-react";

import AIAssistant from "../components/AIAssistant";

const Dashboard = () => {
  const [coins, setCoins] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [livePrices, setLivePrices] =
    useState({});

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );

      const data =
        await response.json();

      setCoins(data.slice(0, 12));

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  /* =========================
     FAKE LIVE PRICE MOVEMENT
  ========================= */

  useEffect(() => {
    const interval =
      setInterval(() => {
        setLivePrices((prev) => {
          const updated = {
            ...prev,
          };

          coins.forEach((coin) => {
            const current =
              updated[coin.id] ||
              coin.current_price;

            const randomMove =
              (Math.random() - 0.5) *
              current *
              0.003;

            updated[coin.id] =
              current +
              randomMove;
          });

          return updated;
        });
      }, 1500);

    return () =>
      clearInterval(interval);
  }, [coins]);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Market Overview
            </h1>

            <p className="text-slate-400 mt-2">
              Real-time cryptocurrency
              market prices.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-xl">
            <Wifi size={18} />

            <span className="font-semibold">
              LIVE
            </span>
          </div>
        </div>

        {/* TOP STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-2">
              BTC Price
            </p>

            <h2 className="text-4xl font-bold text-yellow-400">
              $
              {livePrices[
                coins[0]?.id
              ]?.toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 2,
                }
              ) || "0"}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-2">
              ETH Price
            </p>

            <h2 className="text-4xl font-bold text-blue-400">
              $
              {livePrices[
                coins[1]?.id
              ]?.toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 2,
                }
              ) || "0"}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-2">
              SOL Price
            </p>

            <h2 className="text-4xl font-bold text-purple-400">
              $
              {livePrices[
                coins[4]?.id
              ]?.toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 2,
                }
              ) || "0"}
            </h2>
          </div>
        </div>

        {/* MARKET TABLE */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-2xl font-bold">
              Live Markets
            </h2>
          </div>

          {loading ? (
            <div className="p-10 text-center text-slate-400">
              Loading market data...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="text-left p-5">
                      Asset
                    </th>

                    <th className="text-left p-5">
                      Live Price
                    </th>

                    <th className="text-left p-5">
                      24H Change
                    </th>

                    <th className="text-left p-5">
                      Market Cap
                    </th>

                    <th className="text-left p-5">
                      Volume
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {coins.map((coin) => {
                    const livePrice =
                      livePrices[
                        coin.id
                      ] ||
                      coin.current_price;

                    return (
                      <tr
                        key={coin.id}
                        className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                      >
                        <td className="p-5">
                          <div className="flex items-center gap-4">
                            <img
                              src={coin.image}
                              alt={coin.name}
                              className="w-10 h-10"
                            />

                            <div>
                              <h3 className="font-bold">
                                {coin.symbol.toUpperCase()}
                              </h3>

                              <p className="text-slate-400 text-sm">
                                {coin.name}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-5 font-bold">
                          $
                          {livePrice.toLocaleString(
                            undefined,
                            {
                              maximumFractionDigits: 2,
                            }
                          )}
                        </td>

                        <td className="p-5">
                          <div
                            className={`flex items-center gap-2 font-semibold ${
                              coin.price_change_percentage_24h >
                              0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {coin.price_change_percentage_24h >
                            0 ? (
                              <TrendingUp size={18} />
                            ) : (
                              <TrendingDown size={18} />
                            )}

                            {coin.price_change_percentage_24h?.toFixed(
                              2
                            )}
                            %
                          </div>
                        </td>

                        <td className="p-5">
                          $
                          {coin.market_cap.toLocaleString()}
                        </td>

                        <td className="p-5">
                          $
                          {coin.total_volume.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* AI ASSISTANT */}

        <div className="mt-8">
          <AIAssistant />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;