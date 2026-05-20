const Dashboard =
  () => {
    const cards = [
      {
        title:
          "Portfolio Balance",

        value:
          "$124,520",
      },

      {
        title:
          "24h Profit",

        value:
          "+$5,420",
      },

      {
        title:
          "Open Trades",

        value:
          "12",
      },

      {
        title:
          "Win Rate",

        value:
          "78%",
      },
    ];

    return (
      <div>
        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome to CryptoX Professional Exchange
          </p>
        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map(
            (
              card,
              index
            ) => (
              <div
                key={
                  index
                }
                className="bg-[#111] border border-gray-800 rounded-2xl p-6"
              >
                <p className="text-gray-400">
                  {
                    card.title
                  }
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {
                    card.value
                  }
                </h2>
              </div>
            )
          )}
        </div>

        {/* MARKET */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">
              Live Markets
            </h2>

            <div className="space-y-4">
              {[
                "BTC/USDT",
                "ETH/USDT",
                "SOL/USDT",
                "XRP/USDT",
              ].map(
                (
                  market
                ) => (
                  <div
                    key={
                      market
                    }
                    className="flex justify-between items-center border-b border-gray-800 pb-3"
                  >
                    <span>
                      {
                        market
                      }
                    </span>

                    <span className="text-green-400">
                      +2.45%
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">
              AI Signals
            </h2>

            <div className="space-y-4">
              {[
                "BTC → BUY",
                "ETH → BUY",
                "SOL → SELL",
                "XRP → HOLD",
              ].map(
                (
                  signal
                ) => (
                  <div
                    key={
                      signal
                    }
                    className="flex justify-between items-center border-b border-gray-800 pb-3"
                  >
                    <span>
                      {
                        signal
                      }
                    </span>

                    <span className="text-yellow-400">
                      AI
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;