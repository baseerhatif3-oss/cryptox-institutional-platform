import React, {
  useEffect,
  useState,
} from "react";

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
     LOAD HISTORY
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
     BUY
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
          "Buy Order Executed"
        );

        fetchHistory();
      } catch (error) {
        console.log(error);

        alert(
          "Buy Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  /* =========================
     SELL
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
          "Sell Order Executed"
        );

        fetchHistory();
      } catch (error) {
        console.log(error);

        alert(
          "Sell Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div>
        <h1 className="text-3xl font-bold">
          Spot Trading
        </h1>

        <p className="text-gray-400 mt-2">
          Professional crypto
          trading terminal
        </p>
      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}

        <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Trading Panel
            </h2>

            <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl border border-green-500/20">
              LIVE
            </div>
          </div>

          {/* SYMBOL */}

          <div className="space-y-5">
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
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white"
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
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white"
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
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white"
              />
            </div>

            {/* TOTAL */}

            <div className="bg-black border border-gray-800 rounded-xl p-4">
              <p className="text-gray-400">
                Order Total
              </p>

              <h2 className="text-3xl font-bold mt-2 text-yellow-400">
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

        {/* RIGHT */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Market Stats
          </h2>

          <div className="space-y-4">
            <div className="bg-black border border-gray-800 rounded-xl p-4">
              <p className="text-gray-400">
                24h Volume
              </p>

              <h2 className="text-2xl font-bold mt-2">
                $4.2B
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-4">
              <p className="text-gray-400">
                Market Trend
              </p>

              <h2 className="text-2xl font-bold mt-2 text-green-400">
                Bullish
              </h2>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-4">
              <p className="text-gray-400">
                Active Traders
              </p>

              <h2 className="text-2xl font-bold mt-2">
                182,491
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ORDER HISTORY */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Order History
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-800">
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