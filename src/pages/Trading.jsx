import React, {
  useEffect,
  useState,
} from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

import MarketTicker from "../components/MarketTicker";

import OrderBook from "../components/OrderBook";

import LiveTrades from "../components/LiveTrades";

import {
  buyCoin,
  sellCoin,
  getHistory,
} from "../services/tradingApi";

const Trading = () => {
  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [price, setPrice] =
    useState(104250);

  const [
    quantity,
    setQuantity,
  ] = useState(0.01);

  const [loading, setLoading] =
    useState(false);

  const [orders, setOrders] =
    useState([]);

  /* =========================
     LOAD ORDER HISTORY
  ========================= */

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory =
    async () => {
      try {
        const data =
          await getHistory();

        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

  /* =========================
     BUY ORDER
  ========================= */

  const handleBuy =
    async () => {
      try {
        setLoading(true);

        await buyCoin(
          symbol,
          price,
          quantity
        );

        alert(
          "Buy Order Executed Successfully"
        );

        fetchHistory();
      } catch (error) {
        console.log(error);

        alert(
          "Buy Order Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  /* =========================
     SELL ORDER
  ========================= */

  const handleSell =
    async () => {
      try {
        setLoading(true);

        await sellCoin(
          symbol,
          price,
          quantity
        );

        alert(
          "Sell Order Executed Successfully"
        );

        fetchHistory();
      } catch (error) {
        console.log(error);

        alert(
          "Sell Order Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-bold">
          Spot Trading
        </h1>

        <p className="text-gray-400 mt-2">
          Institutional-grade crypto
          trading terminal
        </p>
      </div>

      {/* MARKET TICKER */}

      <MarketTicker />

      {/* LIVE CHART */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-4">
        <AdvancedRealTimeChart
          theme="dark"
          symbol={`BINANCE:${symbol}`}
          height={500}
          width="100%"
        />
      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* TRADING PANEL */}

        <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                Trading Panel
              </h2>

              <p className="text-gray-400 mt-1">
                Execute spot market
                trades instantly
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl">
              LIVE MARKET
            </div>
          </div>

          <div className="space-y-5">
            {/* PAIR */}

            <div>
              <label className="text-gray-400 block mb-2">
                Trading Pair
              </label>

              <select
                value={symbol}
                onChange={(e) =>
                  setSymbol(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none"
              >
                <option>
                  BTCUSDT
                </option>

                <option>
                  ETHUSDT
                </option>

                <option>
                  SOLUSDT
                </option>

                <option>
                  XRPUSDT
                </option>
              </select>
            </div>

            {/* PRICE */}

            <div>
              <label className="text-gray-400 block mb-2">
                Market Price
              </label>

              <input
                type="number"
                value={price}
                onChange={(e) =>
                  setPrice(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none"
              />
            </div>

            {/* QUANTITY */}

            <div>
              <label className="text-gray-400 block mb-2">
                Quantity
              </label>

              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none"
              />
            </div>

            {/* TOTAL */}

            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Total Order Value
              </p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-3">
                $
                {(
                  Number(price) *
                  Number(quantity)
                ).toLocaleString()}
              </h2>
            </div>

            {/* BUTTONS */}

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={
                  handleBuy
                }
                disabled={
                  loading
                }
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition"
              >
                {loading
                  ? "Processing..."
                  : "BUY"}
              </button>

              <button
                onClick={
                  handleSell
                }
                disabled={
                  loading
                }
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition"
              >
                {loading
                  ? "Processing..."
                  : "SELL"}
              </button>
            </div>
          </div>
        </div>

        {/* MARKET OVERVIEW */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Market Overview
          </h2>

          <div className="space-y-4">
            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                24h Volume
              </p>

              <h2 className="text-3xl font-bold mt-3">
                $4.2B
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Market Sentiment
              </p>

              <h2 className="text-3xl font-bold text-green-400 mt-3">
                Bullish
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Active Traders
              </p>

              <h2 className="text-3xl font-bold mt-3">
                182,491
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400">
                Open Interest
              </p>

              <h2 className="text-3xl font-bold mt-3 text-blue-400">
                $892M
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ORDERBOOK + LIVE TRADES */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrderBook />

        <LiveTrades />
      </div>

      {/* ORDER HISTORY */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Order History
          </h2>

          <button
            onClick={
              fetchHistory
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-xl transition"
          >
            Refresh
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="pb-4">
                  Pair
                </th>

                <th className="pb-4">
                  Side
                </th>

                <th className="pb-4">
                  Price
                </th>

                <th className="pb-4">
                  Quantity
                </th>

                <th className="pb-4">
                  Total
                </th>

                <th className="pb-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map(
                (order) => (
                  <tr
                    key={
                      order._id
                    }
                    className="border-b border-gray-900"
                  >
                    <td className="py-4">
                      {
                        order.symbol
                      }
                    </td>

                    <td
                      className={`py-4 font-bold ${
                        order.side ===
                        "BUY"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {
                        order.side
                      }
                    </td>

                    <td className="py-4">
                      $
                      {order.price}
                    </td>

                    <td className="py-4">
                      {
                        order.quantity
                      }
                    </td>

                    <td className="py-4">
                      $
                      {order.total}
                    </td>

                    <td className="py-4 text-green-400">
                      FILLED
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trading;