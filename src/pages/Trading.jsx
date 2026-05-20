import React from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const Trading =
  () => {
    const bids = [
      {
        price:
          "65120",
        amount:
          "0.42",
      },

      {
        price:
          "65110",
        amount:
          "0.31",
      },

      {
        price:
          "65100",
        amount:
          "0.95",
      },

      {
        price:
          "65090",
        amount:
          "1.24",
      },
    ];

    const asks = [
      {
        price:
          "65130",
        amount:
          "0.27",
      },

      {
        price:
          "65140",
        amount:
          "0.55",
      },

      {
        price:
          "65150",
        amount:
          "0.81",
      },

      {
        price:
          "65160",
        amount:
          "1.12",
      },
    ];

    const trades = [
      {
        pair:
          "BTC/USDT",
        side:
          "BUY",
        amount:
          "0.25",
      },

      {
        pair:
          "ETH/USDT",
        side:
          "SELL",
        amount:
          "2.10",
      },

      {
        pair:
          "SOL/USDT",
        side:
          "BUY",
        amount:
          "12.5",
      },

      {
        pair:
          "XRP/USDT",
        side:
          "BUY",
        amount:
          "420",
      },
    ];

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Trading Terminal
          </h1>

          <p className="text-gray-400 mt-2">
            Professional live trading interface
          </p>
        </div>

        {/* CHART */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
          <AdvancedRealTimeChart
            theme="dark"
            symbol="BINANCE:BTCUSDT"
            width="100%"
            height={600}
            timezone="Etc/UTC"
            locale="en"
            hide_top_toolbar={false}
            hide_legend={false}
            save_image={true}
            interval="15"
            range="12M"
            allow_symbol_change={true}
          />
        </div>

        {/* ORDERBOOK + TRADES */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* BIDS */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-green-400">
              Buy Orders
            </h2>

            <div className="space-y-3">
              {bids.map(
                (
                  bid,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="flex justify-between text-sm border-b border-gray-800 pb-2"
                  >
                    <span className="text-green-400">
                      {
                        bid.price
                      }
                    </span>

                    <span>
                      {
                        bid.amount
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ASKS */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-red-400">
              Sell Orders
            </h2>

            <div className="space-y-3">
              {asks.map(
                (
                  ask,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="flex justify-between text-sm border-b border-gray-800 pb-2"
                  >
                    <span className="text-red-400">
                      {
                        ask.price
                      }
                    </span>

                    <span>
                      {
                        ask.amount
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* RECENT TRADES */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-yellow-400">
              Recent Trades
            </h2>

            <div className="space-y-3">
              {trades.map(
                (
                  trade,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="border-b border-gray-800 pb-2"
                  >
                    <div className="flex justify-between">
                      <span>
                        {
                          trade.pair
                        }
                      </span>

                      <span
                        className={
                          trade.side ===
                          "BUY"
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {
                          trade.side
                        }
                      </span>
                    </div>

                    <div className="text-gray-400 text-sm mt-1">
                      Amount:{" "}
                      {
                        trade.amount
                      }
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* QUICK TRADE */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Quick Trade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Coin"
              className="bg-black border border-gray-700 rounded-xl px-4 py-3"
            />

            <input
              type="number"
              placeholder="Amount"
              className="bg-black border border-gray-700 rounded-xl px-4 py-3"
            />

            <input
              type="number"
              placeholder="Price"
              className="bg-black border border-gray-700 rounded-xl px-4 py-3"
            />

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl px-4 py-3">
              Execute Trade
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Trading;