import {
  useEffect,
  useState,
} from "react";

const AITrading =
  () => {
    const [signals,
      setSignals] =
      useState([]);

    useEffect(() => {
      generateSignals();

      const interval =
        setInterval(
          generateSignals,
          5000
        );

      return () =>
        clearInterval(
          interval
        );
    }, []);

    const generateSignals =
      () => {
        const coins = [
          "BTC",
          "ETH",
          "SOL",
          "XRP",
          "BNB",
        ];

        const generated =
          coins.map(
            (coin) => {
              const bullish =
                Math.random() >
                0.5;

              return {
                coin,

                signal:
                  bullish
                    ? "BUY"
                    : "SELL",

                confidence:
                  (
                    70 +
                    Math.random() *
                      29
                  ).toFixed(
                    1
                  ),

                sentiment:
                  bullish
                    ? "BULLISH"
                    : "BEARISH",

                prediction:
                  bullish
                    ? "+8.4%"
                    : "-5.2%",
              };
            }
          );

        setSignals(
          generated
        );
      };

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              AI Trading
            </h1>

            <p className="text-slate-400 mt-3">
              Advanced AI market intelligence engine
            </p>
          </div>

          {/* AI STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                AI Accuracy
              </p>

              <h2 className="text-5xl font-bold text-green-400">
                92.4%
              </h2>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                Active Signals
              </p>

              <h2 className="text-5xl font-bold">
                {
                  signals.length
                }
              </h2>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                Market Sentiment
              </p>

              <h2 className="text-4xl font-bold text-blue-400">
                BULLISH
              </h2>
            </div>
          </div>

          {/* SIGNALS */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {signals.map(
              (
                signal,
                index
              ) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
                >
                  {/* TOP */}

                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-4xl font-bold">
                        {
                          signal.coin
                        }
                      </h2>

                      <p className="text-slate-400 mt-2">
                        AI Trading Signal
                      </p>
                    </div>

                    <div
                      className={`px-6 py-3 rounded-2xl font-bold text-xl ${
                        signal.signal ===
                        "BUY"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {
                        signal.signal
                      }
                    </div>
                  </div>

                  {/* DETAILS */}

                  <div className="space-y-5">
                    <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-5">
                      <span className="text-slate-400">
                        Confidence
                      </span>

                      <span className="text-2xl font-bold">
                        {
                          signal.confidence
                        }
                        %
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-5">
                      <span className="text-slate-400">
                        Sentiment
                      </span>

                      <span
                        className={`text-2xl font-bold ${
                          signal.sentiment ===
                          "BULLISH"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {
                          signal.sentiment
                        }
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-5">
                      <span className="text-slate-400">
                        Prediction
                      </span>

                      <span
                        className={`text-2xl font-bold ${
                          signal.signal ===
                          "BUY"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {
                          signal.prediction
                        }
                      </span>
                    </div>
                  </div>

                  {/* ACTION */}

                  <button
                    className={`w-full mt-8 py-5 rounded-2xl font-bold text-2xl ${
                      signal.signal ===
                      "BUY"
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-red-600 hover:bg-red-500"
                    }`}
                  >
                    Execute
                    {" "}
                    {
                      signal.signal
                    }
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

export default AITrading;