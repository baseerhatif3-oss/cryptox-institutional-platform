import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import socket from "../services/binanceSocket";

const Markets = () => {

  const [
    markets,
    setMarkets,
  ] = useState([]);

  useEffect(
    () => {

      socket.on(
        "market-update",
        (
          data
        ) => {

          setMarkets(
            data
          );
        }
      );

      return () => {

        socket.off(
          "market-update"
        );
      };

    },
    []
  );

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            BINANCE LIVE FEED

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Live
          <span className="text-yellow-400">
            {" "}Markets
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {
          markets.map(
            (
              market,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 border border-white/5"
              >

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-4xl font-black">

                    {
                      market.symbol ||
                      market.pair
                    }

                  </h2>

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                </div>

                <h3 className="text-5xl font-black text-yellow-400 mb-4">

                  $
                  {
                    Number(
                      market.price
                    ).toLocaleString()
                  }

                </h3>

                <p className="text-green-400 text-xl font-black">

                  Real-Time Binance Data

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