import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

import socket from "../socket/socket";

const Dashboard =
  () => {
    const [
      portfolio,
      setPortfolio,
    ] = useState(null);

    const [
      prices,
      setPrices,
    ] = useState({});

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      fetchPortfolio();

      /* SOCKET */

      socket.on(
        "market_update",
        (
          data
        ) => {
          setPrices(data);
        }
      );

      return () => {
        socket.off(
          "market_update"
        );
      };
    }, []);

    const fetchPortfolio =
      async () => {
        try {
          const res =
            await API.get(
              "/analytics/portfolio"
            );

          setPortfolio(
            res.data
              .portfolio
          );
        } catch (error) {
          console.log(
            error
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    if (loading) {
      return (
        <div className="text-white">
          Loading dashboard...
        </div>
      );
    }

    return (
      <div>
        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Live exchange analytics
          </p>
        </div>

        {/* PORTFOLIO */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Total Balance
            </p>

            <h2 className="text-3xl font-bold mt-3">
              $
              {portfolio?.totalBalance?.toFixed(
                2
              )}
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Futures PnL
            </p>

            <h2 className="text-3xl font-bold mt-3 text-green-400">
              $
              {portfolio?.totalPnL?.toFixed(
                2
              )}
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Total Trades
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {
                portfolio?.totalTrades
              }
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Win Rate
            </p>

            <h2 className="text-3xl font-bold mt-3 text-yellow-400">
              {
                portfolio?.winRate
              }
              %
            </h2>
          </div>
        </div>

        {/* LIVE MARKETS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Live Markets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {Object.entries(
              prices
            ).map(
              (
                [
                  coin,
                  price,
                ]
              ) => (
                <div
                  key={coin}
                  className="bg-black border border-gray-800 rounded-xl p-5"
                >
                  <h3 className="text-xl font-bold">
                    {coin}
                    /USDT
                  </h3>

                  <p className="text-3xl font-bold text-green-400 mt-4">
                    $
                    {Number(
                      price
                    ).toLocaleString()}
                  </p>

                  <div className="text-sm text-gray-400 mt-2">
                    Live Binance Feed
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ASSETS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Portfolio Assets
          </h2>

          <div className="space-y-4">
            {Object.entries(
              portfolio?.assets ||
                {}
            ).map(
              (
                [
                  coin,
                  value,
                ]
              ) => (
                <div
                  key={coin}
                  className="flex justify-between border-b border-gray-800 pb-3"
                >
                  <span>
                    {coin}
                  </span>

                  <span className="font-bold">
                    $
                    {Number(
                      value
                    ).toFixed(
                      2
                    )}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;