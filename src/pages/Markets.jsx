import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import {
  fetchMarkets,
} from "../services/marketApi";

const Markets = () => {

  const [
    markets,
    setMarkets,
  ] = useState([]);

  useEffect(
    () => {

      const loadMarkets =
        async () => {

          try {

            const data =
              await fetchMarkets();

            setMarkets(
              data
            );

          } catch (
            error
          ) {

            console.log(
              error
            );
          }
        };

      loadMarkets();

      const interval =
        setInterval(
          loadMarkets,
          4000
        );

      return () =>
        clearInterval(
          interval
        );

    },
    []
  );

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            LIVE MARKET ENGINE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Live
          <span className="text-yellow-400">
            {" "}Markets
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {
          markets.map(
            (
              market,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-3xl font-black">

                    {
                      market.pair
                    }

                  </h2>

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                </div>

                <h3 className="text-5xl font-black text-yellow-400 mb-4">

                  $
                  {
                    market.price
                  }

                </h3>

                <p className="text-green-400 text-xl font-black">

                  Live Updating

                </p>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Markets;