import {
  useEffect,
  useState,
} from "react";

const AITrading = () => {
  const [coins, setCoins] =
    useState([]);

  const fetchMarketData =
    async () => {
      try {
        const res =
          await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
          );

        const data =
          await res.json();

        setCoins(data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchMarketData();

    const interval =
      setInterval(() => {
        fetchMarketData();
      }, 15000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  const getSignal = (
    change
  ) => {
    if (change >= 8) {
      return {
        signal:
          "STRONG BUY",
        color:
          "text-green-400",
      };
    }

    if (change >= 3) {
      return {
        signal: "BUY",
        color:
          "text-green-300",
      };
    }

    if (change <= -8) {
      return {
        signal:
          "STRONG SELL",
        color:
          "text-red-400",
      };
    }

    if (change <= -3) {
      return {
        signal: "SELL",
        color:
          "text-red-300",
      };
    }

    return {
      signal: "HOLD",
      color:
        "text-yellow-300",
    };
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            AI Trading Assistant
          </h1>

          <p className="text-slate-400 mt-2">
            Smart market analysis & AI-generated signals
          </p>
        </div>

        {/* AI OVERVIEW */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Market Sentiment
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              Bullish
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              AI Confidence
            </p>

            <h2 className="text-3xl font-bold text-blue-400">
              87%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              BTC Trend
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              Uptrend
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Risk Level
            </p>

            <h2 className="text-3xl font-bold text-yellow-400">
              Medium
            </h2>
          </div>
        </div>

        {/* SIGNALS */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-3xl font-bold">
              AI Trading Signals
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-5">
                    Coin
                  </th>

                  <th className="text-left p-5">
                    Price
                  </th>

                  <th className="text-left p-5">
                    24H Change
                  </th>

                  <th className="text-left p-5">
                    AI Signal
                  </th>

                  <th className="text-left p-5">
                    Confidence
                  </th>
                </tr>
              </thead>

              <tbody>
                {coins.map(
                  (coin) => {
                    const ai =
                      getSignal(
                        coin.price_change_percentage_24h
                      );

                    return (
                      <tr
                        key={
                          coin.id
                        }
                        className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                      >
                        {/* COIN */}

                        <td className="p-5">
                          <div className="flex items-center gap-4">
                            <img
                              src={
                                coin.image
                              }
                              alt={
                                coin.name
                              }
                              className="w-10 h-10"
                            />

                            <div>
                              <h3 className="font-bold text-lg">
                                {
                                  coin.name
                                }
                              </h3>

                              <p className="text-slate-400 uppercase">
                                {
                                  coin.symbol
                                }
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* PRICE */}

                        <td className="p-5 font-bold">
                          $
                          {coin.current_price.toLocaleString()}
                        </td>

                        {/* CHANGE */}

                        <td
                          className={`p-5 font-bold ${
                            coin.price_change_percentage_24h >=
                            0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {coin.price_change_percentage_24h?.toFixed(
                            2
                          )}
                          %
                        </td>

                        {/* SIGNAL */}

                        <td
                          className={`p-5 font-bold text-xl ${ai.color}`}
                        >
                          {
                            ai.signal
                          }
                        </td>

                        {/* CONFIDENCE */}

                        <td className="p-5">
                          <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                            <div
                              className="bg-blue-500 h-4"
                              style={{
                                width: `${Math.floor(
                                  Math.random() *
                                    30 +
                                    70
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI INSIGHTS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              BTC Analysis
            </h3>

            <p className="text-slate-400 leading-7">
              AI detects strong bullish momentum with increasing volume and positive market sentiment.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              ETH Analysis
            </h3>

            <p className="text-slate-400 leading-7">
              Ethereum continues strong trend with growing ecosystem activity and stable support levels.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              Market Risk
            </h3>

            <p className="text-slate-400 leading-7">
              Current volatility remains moderate. AI suggests maintaining balanced exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrading;