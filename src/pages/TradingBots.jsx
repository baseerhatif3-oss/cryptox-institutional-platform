import {
  useState,
} from "react";

const TradingBots =
  () => {
    const [bots,
      setBots] =
      useState([]);

    const createBot =
      (
        strategy
      ) => {
        const newBot =
          {
            id: Date.now(),

            name: `${strategy} Bot`,

            strategy,

            profit: (
              Math.random() *
              5000
            ).toFixed(
              2
            ),

            trades:
              Math.floor(
                Math.random() *
                  200
              ),

            winRate: (
              70 +
              Math.random() *
                25
            ).toFixed(
              1
            ),

            status:
              "RUNNING",

            risk:
              strategy ===
              "Scalping"
                ? "HIGH"
                : strategy ===
                  "Grid"
                ? "MEDIUM"
                : "LOW",
          };

        setBots([
          newBot,

          ...bots,
        ]);
      };

    const strategies =
      [
        "Scalping",

        "Grid",

        "DCA",

        "Momentum",

        "AI Trend",
      ];

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Trading Bots
            </h1>

            <p className="text-slate-400 mt-3">
              AI-powered automated trading engine
            </p>
          </div>

          {/* STRATEGIES */}

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
            {strategies.map(
              (
                strategy
              ) => (
                <button
                  key={
                    strategy
                  }
                  onClick={() =>
                    createBot(
                      strategy
                    )
                  }
                  className="bg-slate-900 border border-slate-800 hover:border-blue-500 transition rounded-3xl p-6"
                >
                  <h2 className="text-2xl font-bold">
                    {
                      strategy
                    }
                  </h2>

                  <p className="text-slate-400 mt-3">
                    Start Bot
                  </p>
                </button>
              )
            )}
          </div>

          {/* ACTIVE BOTS */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-800">
              <h2 className="text-3xl font-bold">
                Active Bots
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="text-left p-5">
                      Bot
                    </th>

                    <th className="text-left p-5">
                      Strategy
                    </th>

                    <th className="text-left p-5">
                      Profit
                    </th>

                    <th className="text-left p-5">
                      Trades
                    </th>

                    <th className="text-left p-5">
                      Win Rate
                    </th>

                    <th className="text-left p-5">
                      Risk
                    </th>

                    <th className="text-left p-5">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {bots.length ===
                  0 ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="p-10 text-center text-slate-400"
                      >
                        No active bots
                      </td>
                    </tr>
                  ) : (
                    bots.map(
                      (
                        bot
                      ) => (
                        <tr
                          key={
                            bot.id
                          }
                          className="border-t border-slate-800"
                        >
                          <td className="p-5 font-bold">
                            {
                              bot.name
                            }
                          </td>

                          <td className="p-5">
                            {
                              bot.strategy
                            }
                          </td>

                          <td className="p-5 text-green-400 font-bold">
                            +$
                            {
                              bot.profit
                            }
                          </td>

                          <td className="p-5">
                            {
                              bot.trades
                            }
                          </td>

                          <td className="p-5">
                            {
                              bot.winRate
                            }
                            %
                          </td>

                          <td className="p-5">
                            <span
                              className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                bot.risk ===
                                "HIGH"
                                  ? "bg-red-500/20 text-red-400"
                                  : bot.risk ===
                                    "MEDIUM"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-green-500/20 text-green-400"
                              }`}
                            >
                              {
                                bot.risk
                              }
                            </span>
                          </td>

                          <td className="p-5">
                            <span className="px-4 py-2 rounded-xl text-sm font-bold bg-green-500/20 text-green-400">
                              {
                                bot.status
                              }
                            </span>
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default TradingBots;