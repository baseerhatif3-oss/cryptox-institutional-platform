import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import TradingViewWidget from "react-tradingview-widget";

import OrderBook from "../components/OrderBook";

import RecentTrades from "../components/RecentTrades";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const SpotTrading = () => {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [side, setSide] =
    useState("BUY");

  const [price, setPrice] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  /*
  ==========================================
  FETCH ORDERS
  ==========================================
  */

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
    async () => {

      try {

        const res =
          await axios.get(
            `${API}/orders/${user.id}`
          );

        setOrders(
          res.data.orders || []
        );

      } catch (error) {

        console.log(error);
      }
    };

  /*
  ==========================================
  PLACE ORDER
  ==========================================
  */

  const placeOrder =
    async () => {

      try {

        setLoading(true);

        const res =
          await axios.post(
            `${API}/orders/create`,
            {
              userId:
                user.id,

              symbol,

              side,

              price,

              quantity,
            }
          );

        alert(
          res.data.message
        );

        setPrice("");

        setQuantity("");

        fetchOrders();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Order failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Spot Trading
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Professional realtime trading terminal
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
            LIVE MARKET
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
            LOW LATENCY
          </div>

        </div>

      </div>

      {/* CHART */}

      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111] p-2">

        <div className="rounded-[28px] overflow-hidden">

          <TradingViewWidget
            symbol={symbol}
            theme="dark"
            locale="en"
            autosize
          />

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}

        <div className="xl:col-span-2 space-y-8">

          {/* ORDER FORM */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-black">
                  Place Order
                </h2>

                <p className="text-gray-400 mt-2">
                  Execute market trades instantly
                </p>

              </div>

              <div
                className={`px-5 py-3 rounded-2xl font-bold ${
                  side === "BUY"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >

                {side}

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* SYMBOL */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Trading Pair
                </label>

                <select
                  value={symbol}
                  onChange={(e) =>
                    setSymbol(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
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

              {/* SIDE */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Order Side
                </label>

                <select
                  value={side}
                  onChange={(e) =>
                    setSide(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                >

                  <option>
                    BUY
                  </option>

                  <option>
                    SELL
                  </option>

                </select>

              </div>

              {/* PRICE */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Price
                </label>

                <input
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) =>
                    setPrice(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                />

              </div>

              {/* QUANTITY */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Quantity
                </label>

                <input
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                />

              </div>

            </div>

            {/* BUTTON */}

            <button
              onClick={
                placeOrder
              }
              disabled={loading}
              className={`w-full mt-8 py-5 rounded-2xl font-black text-lg transition ${
                side === "BUY"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >

              {loading
                ? "Processing..."
                : `${side} ${symbol}`}

            </button>

          </div>

          {/* OPEN ORDERS */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-black">
                  Open Orders
                </h2>

                <p className="text-gray-400 mt-2">
                  Active trading positions
                </p>

              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-bold">
                LIVE
              </div>

            </div>

            <div className="space-y-4">

              {orders.length === 0 && (

                <div className="text-gray-500">
                  No active orders
                </div>

              )}

              {orders.map(
                (order) => (

                  <div
                    key={order._id}
                    className="bg-black border border-white/5 rounded-2xl px-6 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
                  >

                    <div>

                      <h3 className="text-xl font-black">
                        {
                          order.symbol
                        }
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Qty:
                        {" "}
                        {
                          order.quantity
                        }
                      </p>

                    </div>

                    <div>

                      <h3 className="text-xl font-black">
                        $
                        {Number(
                          order.price
                        ).toLocaleString()}
                      </h3>

                    </div>

                    <div>

                      <span
                        className={`px-5 py-3 rounded-2xl text-sm font-black ${
                          order.side ===
                          "BUY"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >

                        {
                          order.side
                        }

                      </span>

                    </div>

                    <div>

                      <span
                        className={`px-5 py-3 rounded-2xl text-sm font-black ${
                          order.status ===
                          "FILLED"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >

                        {
                          order.status
                        }

                      </span>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-8">

          <OrderBook />

          <RecentTrades />

        </div>

      </div>

    </div>
  );
};

export default SpotTrading;