import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import AnimatedCard from "../components/ui/AnimatedCard";

import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const Markets = () => {

  const [coins, setCoins] =
    useState([]);

  useEffect(() => {

    const fetchCoins =
      async () => {

        const response =
          await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
          );

        const data =
          await response.json();

        setCoins(data);
      };

    fetchCoins();

  }, []);

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black mb-4">

          Live
          <span className="text-yellow-400">
            {" "}Markets
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Real-time institutional crypto market monitoring.

        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {
          coins.map(
            (
              coin,
              index
            ) => {

              const positive =
                coin.price_change_percentage_24h >= 0;

              return (

                <AnimatedCard
                  key={coin.id}
                  delay={index * 0.05}
                  className="glass rounded-3xl p-8"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-5">

                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-16 h-16"
                      />

                      <div>

                        <h2 className="text-3xl font-black mb-2">

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

                    <div className="text-right">

                      <h2 className="text-3xl font-black mb-3">

                        $
                        {
                          coin.current_price.toLocaleString()
                        }

                      </h2>

                      <div className="flex items-center justify-end gap-2">

                        {
                          positive
                            ? (
                              <TrendingUp
                                className="text-green-400"
                              />
                            )
                            : (
                              <TrendingDown
                                className="text-red-400"
                              />
                            )
                        }

                        <span
                          className={`font-black ${
                            positive
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >

                          {
                            coin.price_change_percentage_24h.toFixed(2)
                          }%

                        </span>

                      </div>

                    </div>

                  </div>

                </AnimatedCard>
              );
            }
          )
        }

      </div>

    </MainLayout>
  );
};

export default Markets;