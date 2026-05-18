import { useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

import TradingChart from "../components/TradingChart";

import OrderBook from "../components/OrderBook";

import MarketTrades from "../components/MarketTrades";

import OpenPositions from "../components/OpenPositions";

const coins = [
  {
    coin: "Bitcoin",
    symbol: "BTC",
    price: 105000,
  },

  {
    coin: "Ethereum",
    symbol: "ETH",
    price: 6200,
  },

  {
    coin: "Solana",
    symbol: "SOL",
    price: 210,
  },
];

const leverageOptions = [
  1, 2, 5, 10, 20, 50,
];

const Futures = () => {
  const [selectedCoin, setSelectedCoin] =
    useState(coins[0]);

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [leverage, setLeverage] =
    useState(10);

  const handleSpotTrade =
    async (side) => {
      try {
        if (
          !amount ||
          Number(amount) <= 0
        ) {
          return toast.error(
            "Enter valid amount"
          );
        }

        setLoading(true);

        const res =
          await API.post(
            "/trade",
            {
              coin:
                selectedCoin.coin,

              symbol:
                selectedCoin.symbol,

              side,

              amount:
                Number(amount),

              price:
                selectedCoin.price,
            }
          );

        toast.success(
          `${side} order executed`
        );

        console.log(
          res.data
        );

        setAmount("");
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Trade failed"
        );
      } finally {
        setLoading(false);
      }
    };

  const handleFuturesPosition =
    async (side) => {
      try {
        if (
          !amount ||
          Number(amount) <= 0
        ) {
          return toast.error(
            "Enter valid amount"
          );
        }

        setLoading(true);

        const res =
          await API.post(
            "/futures/open",
            {
              coin:
                selectedCoin.coin,

              symbol:
                selectedCoin.symbol,

              side,

              amount:
                Number(amount),

              leverage,

              price:
                selectedCoin.price,
            }
          );

        toast.success(
          `${side} position opened`
        );

        console.log(
          res.data
        );

        setAmount("");
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Failed to open position"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-[1700px] mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Futures Trading
          </h1>

          <p className="text-slate-400 mt-2 text-lg">
            Professional derivatives
            trading terminal
          </p>
        </div>

        {/* COIN SELECTOR */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {coins.map((coin) => (
            <button
              key={coin.symbol}
              onClick={() =>
                setSelectedCoin(
                  coin
                )
              }
              className={`p-6 rounded-3xl border transition text-left ${
                selectedCoin.symbol ===
                coin.symbol
                  ? "bg-blue-600 border-blue-500"
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              <h2 className="text-2xl font-bold">
                {coin.coin}
              </h2>

              <p className="text-slate-300 mt-2">
                {coin.symbol}
              </p>

              <h3 className="text-3xl font-bold mt-4">
                $
                {coin.price.toLocaleString()}
              </h3>
            </button>
          ))}
        </div>

        {/* TERMINAL */}

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* LEFT */}

          <div className="xl:col-span-3 space-y-8">
            {/* CHART */}

            <TradingChart
              symbol={`BINANCE:${selectedCoin.symbol}USDT`}
            />

            {/* ORDERBOOK + MARKET TRADES */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <OrderBook
                symbol={`${selectedCoin.symbol.toLowerCase()}usdt`}
              />

              <MarketTrades
                symbol={`${selectedCoin.symbol.toLowerCase()}usdt`}
              />
            </div>

            {/* OPEN POSITIONS */}

            <OpenPositions />
          </div>

          {/* RIGHT PANEL */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-fit sticky top-6">
            <h2 className="text-3xl font-bold mb-8">
              Trade{" "}
              {
                selectedCoin.symbol
              }
            </h2>

            <div className="space-y-6">
              {/* MARKET PRICE */}

              <div className="bg-slate-800 rounded-2xl p-5">
                <p className="text-slate-400 mb-2">
                  Market Price
                </p>

                <h2 className="text-4xl font-bold">
                  $
                  {selectedCoin.price.toLocaleString()}
                </h2>
              </div>

              {/* LEVERAGE */}

              <div>
                <label className="block mb-3 text-slate-400">
                  Leverage
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {leverageOptions.map(
                    (lev) => (
                      <button
                        key={lev}
                        onClick={() =>
                          setLeverage(
                            lev
                          )
                        }
                        className={`py-3 rounded-xl font-bold transition ${
                          leverage ===
                          lev
                            ? "bg-blue-600"
                            : "bg-slate-800"
                        }`}
                      >
                        {lev}x
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* AMOUNT */}

              <div>
                <label className="block mb-3 text-slate-400">
                  Amount
                </label>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) =>
                    setAmount(
                      e.target.value
                    )
                  }
                  placeholder="Enter amount"
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none"
                />
              </div>

              {/* TOTAL */}

              <div className="bg-slate-800 rounded-2xl p-5">
                <div className="flex justify-between mb-3">
                  <span className="text-slate-400">
                    Position Size
                  </span>

                  <span className="font-bold">
                    $
                    {(
                      Number(
                        amount || 0
                      ) *
                      selectedCoin.price
                    ).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Required Margin
                  </span>

                  <span className="font-bold text-yellow-400">
                    $
                    {(
                      (Number(
                        amount || 0
                      ) *
                        selectedCoin.price) /
                      leverage
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* SPOT */}

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() =>
                    handleSpotTrade(
                      "BUY"
                    )
                  }
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 py-4 rounded-2xl font-bold transition"
                >
                  Spot Buy
                </button>

                <button
                  onClick={() =>
                    handleSpotTrade(
                      "SELL"
                    )
                  }
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold transition"
                >
                  Spot Sell
                </button>
              </div>

              {/* FUTURES */}

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() =>
                    handleFuturesPosition(
                      "LONG"
                    )
                  }
                  disabled={loading}
                  className="bg-emerald-600 hover:bg-emerald-700 py-5 rounded-2xl font-bold text-lg transition"
                >
                  Open LONG
                </button>

                <button
                  onClick={() =>
                    handleFuturesPosition(
                      "SHORT"
                    )
                  }
                  disabled={loading}
                  className="bg-orange-600 hover:bg-orange-700 py-5 rounded-2xl font-bold text-lg transition"
                >
                  Open SHORT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futures;