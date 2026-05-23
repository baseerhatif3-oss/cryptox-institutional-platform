import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const TradingTerminal = () => {

  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [side, setSide] =
    useState("BUY");

  const [type, setType] =
    useState("LIMIT");

  const [price, setPrice] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );



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
  CREATE ORDER
  ==========================================
  */

  const createOrder =
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

              type,

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



  /*
  ==========================================
  CANCEL ORDER
  ==========================================
  */

  const cancelOrder =
    async (id) => {
      try {

        await axios.post(
          `${API}/orders/cancel/${id}`
        );

        fetchOrders();

      } catch (error) {

        console.log(error);
      }
    };



  return (
    <div className="space-y-6">

      {/* TERMINAL */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Trading Terminal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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



          {/* ORDER TYPE */}

          <div>

            <label className="block mb-2 text-gray-400">
              Order Type
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            >

              <option>
                LIMIT
              </option>

              <option>
                MARKET
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
              placeholder="65000"
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
              placeholder="0.01"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

          </div>

        </div>



        {/* BUTTON */}

        <button
          onClick={createOrder}
          disabled={loading}
          className={`w-full mt-8 py-4 rounded-xl font-bold transition ${
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

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Open Orders
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-gray-800">

                <th className="text-left py-4">
                  Pair
                </th>

                <th className="text-left py-4">
                  Side
                </th>

                <th className="text-left py-4">
                  Type
                </th>

                <th className="text-left py-4">
                  Price
                </th>

                <th className="text-left py-4">
                  Quantity
                </th>

                <th className="text-left py-4">
                  Status
                </th>

                <th className="text-left py-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map(
                (order) => (

                  <tr
                    key={order._id}
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
                      {
                        order.type
                      }
                    </td>

                    <td className="py-4">
                      $
                      {
                        order.price
                      }
                    </td>

                    <td className="py-4">
                      {
                        order.quantity
                      }
                    </td>

                    <td className="py-4 text-yellow-400">
                      {
                        order.status
                      }
                    </td>

                    <td className="py-4">

                      {order.status ===
                        "OPEN" && (

                        <button
                          onClick={() =>
                            cancelOrder(
                              order._id
                            )
                          }
                          className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl font-semibold"
                        >
                          Cancel
                        </button>

                      )}

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

export default TradingTerminal;