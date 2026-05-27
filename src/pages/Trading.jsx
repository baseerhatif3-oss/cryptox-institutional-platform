import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import OrderBook from "../components/trading/OrderBook";

import LiveTrades from "../components/trading/LiveTrades";

import {
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  BarChart3,
} from "lucide-react";

const Trading = () => {

  const [marketData, setMarketData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchMarketData =
      async () => {

        try {

          const response =
            await fetch(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple&order=market_cap_desc&per_page=4&page=1&sparkline=false"
            );

          const data =
            await response.json();

          setMarketData(data);

        } catch (error) {

          console.error(
            "Market API Error:",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchMarketData();

  }, []);

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            LIVE TRADING TERMINAL

          </span>

        </div>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

          <div>

            <h1 className="text-6xl font-black mb-4">

              Professional
              <span className="text-yellow-400">
                {" "}Trading
              </span>

            </h1>

            <p className="text-zinc-500 text-xl">

              Institutional-grade cryptocurrency trading infrastructure.

            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="glass rounded-2xl px-6 py-4">

              <p className="text-zinc-500 mb-2">

                24H Volume

              </p>

              <h3 className="text-2xl font-black text-green-400">

                $12.4B

              </h3>

            </div>

            <div className="glass rounded-2xl px-6 py-4">

              <p className="text-zinc-500 mb-2">

                Active Traders

              </p>

              <h3 className="text-2xl font-black text-yellow-400">

                182K

              </h3>

            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {
          loading
            ? (
              [...Array(4)].map(
                (_, index) => (

                  <div
                    key={index}
                    className="glass rounded-3xl p-6 animate-pulse h-[140px]"
                  />
                )
              )
            )
            : (
              marketData.map(
                (
                  coin
                ) => {

                  const positive =
                    coin.price_change_percentage_24h >= 0;

                  return (

                    <div
                      key={coin.id}
                      className="glass rounded-3xl p-6"
                    >

                      <div className="flex items-center justify-between mb-6">

                        <div className="flex items-center gap-4">

                          <img
                            src={coin.image}
                            alt={coin.name}
                            className="w-12 h-12"
                          />

                          <div>

                            <h2 className="text-2xl font-black">

                              {
                                coin.symbol.toUpperCase()
                              }

                            </h2>

                            <p className="text-zinc-500">

                              {
                                coin.name
                              }

                            </p>

                          </div>

                        </div>

                        {
                          positive
                            ? (
                              <TrendingUp
                                className="text-green-400"
                                size={28}
                              />
                            )
                            : (
                              <TrendingDown
                                className="text-red-400"
                                size={28}
                              />
                            )
                        }

                      </div>

                      <h3 className="text-3xl font-black mb-3">

                        $
                        {
                          coin.current_price.toLocaleString()
                        }

                      </h3>

                      <p
                        className={`font-black text-lg ${
                          positive
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >

                        {
                          coin.price_change_percentage_24h.toFixed(2)
                        }%

                      </p>

                    </div>
                  );
                }
              )
            )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2">

          <div className="glass rounded-3xl p-8 h-[650px] relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 to-transparent pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative z-10">

              <div className="flex items-center gap-4">

                <BarChart3
                  size={36}
                  className="text-yellow-400"
                />

                <div>

                  <h2 className="text-4xl font-black">

                    BTC / USDT

                  </h2>

                  <p className="text-zinc-500">

                    Real-time Trading Terminal

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">

                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                <span className="text-green-400 font-bold">

                  LIVE

                </span>

              </div>

            </div>

            <div className="h-[500px] flex items-center justify-center relative z-10">

              <div className="text-center">

                <Activity
                  size={80}
                  className="text-yellow-400 mx-auto mb-8"
                />

                <h2 className="text-5xl font-black text-yellow-400 mb-6">

                  Advanced Trading Terminal

                </h2>

                <p className="text-zinc-500 text-2xl max-w-2xl leading-relaxed">

                  Professional multi-asset trading infrastructure with institutional-grade liquidity systems.

                </p>

                <div className="flex items-center justify-center gap-8 mt-10">

                  <div className="glass rounded-2xl px-6 py-4">

                    <p className="text-zinc-500 mb-2">

                      Spread

                    </p>

                    <h3 className="text-2xl font-black text-green-400">

                      0.01%

                    </h3>

                  </div>

                  <div className="glass rounded-2xl px-6 py-4">

                    <p className="text-zinc-500 mb-2">

                      Liquidity

                    </p>

                    <h3 className="text-2xl font-black text-yellow-400">

                      High

                    </h3>

                  </div>

                  <div className="glass rounded-2xl px-6 py-4">

                    <p className="text-zinc-500 mb-2">

                      Fees

                    </p>

                    <h3 className="text-2xl font-black text-blue-400">

                      0.1%

                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="space-y-8">

          <OrderBook />

          <LiveTrades />

          <div className="glass rounded-3xl p-6">

            <div className="flex items-center gap-4 mb-6">

              <DollarSign
                size={32}
                className="text-yellow-400"
              />

              <h2 className="text-3xl font-black">

                Market Stats

              </h2>

            </div>

            <div className="space-y-5">

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  BTC Dominance

                </span>

                <span className="font-black text-yellow-400">

                  52.4%

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  Fear & Greed

                </span>

                <span className="font-black text-green-400">

                  Greed 74

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  Open Interest

                </span>

                <span className="font-black text-blue-400">

                  $18.2B

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-500">

                  Funding Rate

                </span>

                <span className="font-black text-green-400">

                  +0.012%

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;