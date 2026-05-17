import { useEffect, useState } from "react";

import {
  Bot,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";

const AIAssistant = () => {
  const [coins, setCoins] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );

      const data =
        await response.json();

      setCoins(data.slice(0, 5));

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const generateSignal = (
    coin
  ) => {
    if (
      coin.price_change_percentage_24h >
      5
    ) {
      return {
        signal: "STRONG BUY",
        color:
          "text-green-400",
      };
    }

    if (
      coin.price_change_percentage_24h >
      0
    ) {
      return {
        signal: "BUY",
        color:
          "text-green-300",
      };
    }

    if (
      coin.price_change_percentage_24h <
      -5
    ) {
      return {
        signal: "SELL",
        color: "text-red-400",
      };
    }

    return {
      signal: "HOLD",
      color:
        "text-yellow-400",
    };
  };

  const marketSentiment =
    Math.random() > 0.5
      ? "Bullish"
      : "Bearish";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-600 p-3 rounded-2xl">
          <Bot size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Trading Assistant
          </h2>

          <p className="text-slate-400">
            AI-powered market insights
          </p>
        </div>
      </div>

      {/* SENTIMENT */}

      <div className="bg-slate-800 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400">
              Market Sentiment
            </p>

            <h3
              className={`text-3xl font-bold mt-2 ${
                marketSentiment ===
                "Bullish"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {marketSentiment}
            </h3>
          </div>

          <Brain
            size={60}
            className="text-blue-500"
          />
        </div>
      </div>

      {/* SIGNALS */}

      <div>
        <h3 className="text-xl font-bold mb-4">
          AI Signals
        </h3>

        {loading ? (
          <div className="text-slate-400">
            Loading AI analysis...
          </div>
        ) : (
          <div className="space-y-4">
            {coins.map((coin) => {
              const signal =
                generateSignal(
                  coin
                );

              return (
                <div
                  key={coin.id}
                  className="bg-slate-800 rounded-2xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-10 h-10"
                      />

                      <div>
                        <h4 className="font-bold">
                          {coin.symbol.toUpperCase()}
                        </h4>

                        <p className="text-slate-400 text-sm">
                          {coin.name}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p
                        className={`font-bold ${signal.color}`}
                      >
                        {
                          signal.signal
                        }
                      </p>

                      <div
                        className={`flex items-center gap-1 text-sm ${
                          coin.price_change_percentage_24h >
                          0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_24h >
                        0 ? (
                          <TrendingUp size={16} />
                        ) : (
                          <TrendingDown size={16} />
                        )}

                        {coin.price_change_percentage_24h?.toFixed(
                          2
                        )}
                        %
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-slate-300">
                    AI Analysis:{" "}
                    {signal.signal ===
                    "STRONG BUY"
                      ? "Strong upward momentum detected with bullish market structure."
                      : signal.signal ===
                        "BUY"
                      ? "Positive momentum forming with increasing demand."
                      : signal.signal ===
                        "SELL"
                      ? "Weak market structure detected with bearish pressure."
                      : "Market consolidating with neutral momentum."}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;