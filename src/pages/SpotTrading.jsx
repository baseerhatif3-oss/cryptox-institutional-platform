import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import TradingViewWidget from "react-tradingview-widget";

import OrderBook from "../components/OrderBook";

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
    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Spot Trading
          </h1>

          <p className="text-gray-400 mt-2">
            Professional realtime trading terminal
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-semibold">
          LIVE MARKET
        </div>

      </div>

      {/* TRADING VIEW */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">

        <TradingViewWidget
          symbol={symbol}
          theme="dark"
          locale="en"
          autosize
        />

      </div>

      {/* TRADING PANEL */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ORDER FORM */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Place Order
          </h2>

          <div className="space-y-5">

            {/* SYMBOL */}

            <div>

              <label className="block mb-2 text-gray-400">
                Trading Pair
              </label>

              <select
                value={symbol}
                onChange={(e) =>
                  setSymbol(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
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

              <label className="block mb-2 text-gray-400">
                Side
              </label>

              <select
                value={side}
                onChange={(e) =>
                  setSide(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
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

              <label className="block mb-2 text-gray-400">
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
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
              />

            </div>

            {/* QUANTITY */}

            <div>

              <label className="block mb-2 text-gray-400">
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
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
              />

            </div>

            {/* BUTTON */}

            <button
              onClick={
                placeOrder
              }
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold transition ${
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

        </div>

        {/* USER ORDERS */}

        <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold">
                Open Orders
              </h2>

              <p className="text-gray-400 mt-1">
                Your active market orders
              </p>

            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm">
              LIVE
            </div>

          </div>

          <div className="space-y-4">

            {orders.length === 0 && (

              <div className="text-gray-500">
                No orders found
              </div>

            )}

            {orders.map(
              (order) => (

                <div
                  key={order._id}
                  className="bg-black border border-gray-800 rounded-xl px-5 py-4 flex items-center justify-between"
                >

                  <div>

                    <h3 className="font-bold text-lg">
                      {
                        order.symbol
                      }
                    </h3>

                    <p className="text-gray-400 mt-1">
                      Qty:
                      {" "}
                      {
                        order.quantity
                      }
                    </p>

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">
                      $
                      {Number(
                        order.price
                      ).toLocaleString()}
                    </h3>

                    <p
                      className={`mt-1 font-semibold ${
                        order.side ===
                        "BUY"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {
                        order.side
                      }
                    </p>

                  </div>

                  <div>

                    <span
                      className={`px-4 py-2 rounded-xl text-sm font-bold ${
                        order.status ===
                        "FILLED"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
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

      {/* LIVE ORDER BOOK */}

      <OrderBook />

    </div>
  );
};

export default SpotTrading;