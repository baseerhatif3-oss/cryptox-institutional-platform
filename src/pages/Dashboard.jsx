import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
  io,
} from "socket.io-client";

const socket =
  io(
    "https://crypto-backend-dojp.onrender.com"
  );

const Dashboard =
  () => {
    const [user,
      setUser] =
      useState(null);

    const [coin,
      setCoin] =
      useState("BTC");

    const [type,
      setType] =
      useState("BUY");

    const [amount,
      setAmount] =
      useState(0.01);

    const [price,
      setPrice] =
      useState(65000);

    const [loading,
      setLoading] =
      useState(false);

    const [trades,
      setTrades] =
      useState([]);

    const [orders,
      setOrders] =
      useState([]);

    const [orderType,
      setOrderType] =
      useState("MARKET");

    const [livePrices,
      setLivePrices] =
      useState({
        BTC:
          "65000",

        ETH:
          "3000",

        SOL:
          "150",

        XRP:
          "0.50",
      });

    const [orderBook,
      setOrderBook] =
      useState({
        buys: [],

        sells: [],
      });

    const token =
      localStorage.getItem(
        "token"
      );

    /* =========================
       REALTIME SOCKETS
    ========================= */

    useEffect(() => {
      socket.on(
        "market_update",
        (
          data
        ) => {
          setLivePrices(
            data
          );
        }
      );

      socket.on(
        "new_trade",
        (
          trade
        ) => {
          setTrades(
            (
              prev
            ) => [
              trade,
              ...prev,
            ]
          );
        }
      );

      socket.on(
        "new_order",
        (
          order
        ) => {
          setOrders(
            (
              prev
            ) => [
              order,
              ...prev,
            ]
          );
        }
      );

      socket.on(
        "order_cancelled",
        (
          id
        ) => {
          setOrders(
            (
              prev
            ) =>
              prev.map(
                (
                  order
                ) =>
                  order._id ===
                  id
                    ? {
                        ...order,

                        status:
                          "CANCELLED",
                      }
                    : order
              )
          );
        }
      );

      socket.on(
        "order_filled",
        (
          filled
        ) => {
          setOrders(
            (
              prev
            ) =>
              prev.map(
                (
                  order
                ) =>
                  order._id ===
                  filled._id
                    ? filled
                    : order
              )
          );
        }
      );

      return () => {
        socket.off(
          "market_update"
        );

        socket.off(
          "new_trade"
        );

        socket.off(
          "new_order"
        );

        socket.off(
          "order_cancelled"
        );

        socket.off(
          "order_filled"
        );
      };
    }, []);

    /* =========================
       FETCH DATA
    ========================= */

    useEffect(() => {
      fetchProfile();

      fetchTrades();

      fetchOrders();
    }, []);

    const fetchProfile =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/user/profile",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setUser(
            res.data
          );
        } catch (error) {
          console.log(error);
        }
      };

    const fetchOrders =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/orders",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setOrders(
            res.data
          );
        } catch (error) {
          console.log(error);
        }
      };

    const fetchTrades =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/trades",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setTrades(
            res.data
          );
        } catch (error) {
          console.log(error);
        }
      };

    /* =========================
       ORDERBOOK DEPTH
    ========================= */

    useEffect(() => {
      const generateDepth =
        () => {
          const current =
            Number(
              livePrices[
                coin
              ]
            );

          const buys =
            [];

          const sells =
            [];

          for (
            let i = 0;
            i < 10;
            i++
          ) {
            buys.push({
              price: (
                current -
                Math.random() *
                  500
              ).toFixed(
                2
              ),

              amount:
                (
                  Math.random() *
                  5
                ).toFixed(
                  4
                ),
            });

            sells.push({
              price: (
                current +
                Math.random() *
                  500
              ).toFixed(
                2
              ),

              amount:
                (
                  Math.random() *
                  5
                ).toFixed(
                  4
                ),
            });
          }

          setOrderBook({
            buys:
              buys.sort(
                (
                  a,
                  b
                ) =>
                  b.price -
                  a.price
              ),

            sells:
              sells.sort(
                (
                  a,
                  b
                ) =>
                  a.price -
                  b.price
              ),
          });
        };

      generateDepth();

      const interval =
        setInterval(
          generateDepth,
          2000
        );

      return () =>
        clearInterval(
          interval
        );
    }, [
      coin,
      livePrices,
    ]);

    /* =========================
       AUTO UPDATE PRICE
    ========================= */

    useEffect(() => {
      if (
        livePrices[
          coin
        ]
      ) {
        setPrice(
          Number(
            livePrices[
              coin
            ]
          )
        );
      }
    }, [
      coin,
      livePrices,
    ]);

    /* =========================
       LIMIT ORDER
    ========================= */

    const placeLimitOrder =
      async () => {
        try {
          setLoading(true);

          await axios.post(
            "https://crypto-backend-dojp.onrender.com/api/orders",
            {
              type,
              coin,
              amount:
                Number(
                  amount
                ),
              price:
                Number(
                  price
                ),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Limit order created"
          );

          fetchOrders();
        } catch (error) {
          console.log(error);

          toast.error(
            "Failed to place order"
          );
        } finally {
          setLoading(false);
        }
      };

    /* =========================
       CANCEL ORDER
    ========================= */

    const cancelOrder =
      async (id) => {
        try {
          await axios.delete(
            `https://crypto-backend-dojp.onrender.com/api/orders/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Order cancelled"
          );

          fetchOrders();
        } catch (error) {
          console.log(error);

          toast.error(
            "Cancel failed"
          );
        }
      };

    /* =========================
       MARKET TRADE
    ========================= */

    const executeTrade =
      async () => {
        try {
          setLoading(true);

          await axios.post(
            "https://crypto-backend-dojp.onrender.com/api/trade",
            {
              type,
              coin,
              amount:
                Number(
                  amount
                ),
              price:
                Number(
                  price
                ),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            `${type} order executed`
          );

          fetchProfile();

          fetchTrades();
        } catch (error) {
          console.log(error);

          toast.error(
            error.response
              ?.data
              ?.message ||
              "Trade failed"
          );
        } finally {
          setLoading(false);
        }
      };

    const total =
      amount * price;

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Trading Terminal
            </h1>

            <p className="text-slate-400 mt-3">
              Professional realtime crypto exchange
            </p>
          </div>

          {/* LIVE MARKET */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {Object.entries(
              livePrices
            ).map(
              (
                [
                  symbol,
                  value,
                ]
              ) => (
                <div
                  key={symbol}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
                >
                  <p className="text-slate-400 mb-2">
                    {symbol}
                  </p>

                  <h2 className="text-3xl font-bold text-green-400">
                    $
                    {value}
                  </h2>

                  <p className="text-green-400 mt-2">
                    LIVE
                  </p>
                </div>
              )
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDE */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-8">
                Execute Trade
              </h2>

              {/* BUY SELL */}

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() =>
                    setType(
                      "BUY"
                    )
                  }
                  className={`py-4 rounded-2xl font-bold text-xl ${
                    type ===
                    "BUY"
                      ? "bg-green-600"
                      : "bg-slate-800"
                  }`}
                >
                  BUY
                </button>

                <button
                  onClick={() =>
                    setType(
                      "SELL"
                    )
                  }
                  className={`py-4 rounded-2xl font-bold text-xl ${
                    type ===
                    "SELL"
                      ? "bg-red-600"
                      : "bg-slate-800"
                  }`}
                >
                  SELL
                </button>
              </div>

              {/* ORDER TYPE */}

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() =>
                    setOrderType(
                      "MARKET"
                    )
                  }
                  className={`py-4 rounded-2xl font-bold ${
                    orderType ===
                    "MARKET"
                      ? "bg-blue-600"
                      : "bg-slate-800"
                  }`}
                >
                  MARKET
                </button>

                <button
                  onClick={() =>
                    setOrderType(
                      "LIMIT"
                    )
                  }
                  className={`py-4 rounded-2xl font-bold ${
                    orderType ===
                    "LIMIT"
                      ? "bg-yellow-600"
                      : "bg-slate-800"
                  }`}
                >
                  LIMIT
                </button>
              </div>

              {/* COIN */}

              <div className="mb-6">
                <label className="block mb-3 text-slate-300">
                  Coin
                </label>

                <select
                  value={
                    coin
                  }
                  onChange={(e) =>
                    setCoin(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                >
                  <option>
                    BTC
                  </option>

                  <option>
                    ETH
                  </option>

                  <option>
                    SOL
                  </option>

                  <option>
                    XRP
                  </option>
                </select>
              </div>

              {/* AMOUNT */}

              <div className="mb-6">
                <label className="block mb-3 text-slate-300">
                  Amount
                </label>

                <input
                  type="number"
                  value={
                    amount
                  }
                  onChange={(e) =>
                    setAmount(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                />
              </div>

              {/* PRICE */}

              <div className="mb-6">
                <label className="block mb-3 text-slate-300">
                  Price
                </label>

                <input
                  type="number"
                  value={
                    price
                  }
                  onChange={(e) =>
                    setPrice(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                />
              </div>

              {/* TOTAL */}

              <div className="bg-slate-800 rounded-2xl p-5 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    Total
                  </span>

                  <span className="text-2xl font-bold">
                    $
                    {Number(
                      total
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* BUTTON */}

              <button
                onClick={
                  orderType ===
                  "MARKET"
                    ? executeTrade
                    : placeLimitOrder
                }
                disabled={
                  loading
                }
                className={`w-full py-5 rounded-2xl font-bold text-2xl ${
                  type ===
                  "BUY"
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-red-600 hover:bg-red-500"
                }`}
              >
                {loading
                  ? "Processing..."
                  : orderType ===
                    "MARKET"
                  ? `${type} ${coin}`
                  : `Place ${type} Order`}
              </button>
            </div>

            {/* ORDERBOOK */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-800">
                <h2 className="text-3xl font-bold">
                  Market Depth
                </h2>
              </div>

              <div className="grid grid-cols-2">
                {/* BUY WALL */}

                <div className="border-r border-slate-800">
                  <div className="bg-green-500/10 text-green-400 font-bold px-6 py-4">
                    BUY ORDERS
                  </div>

                  <div className="max-h-[500px] overflow-y-auto">
                    {orderBook.buys.map(
                      (
                        order,
                        index
                      ) => (
                        <div
                          key={index}
                          className="flex justify-between px-6 py-3 border-b border-slate-800"
                        >
                          <span className="text-green-400 font-bold">
                            $
                            {
                              order.price
                            }
                          </span>

                          <span className="text-white">
                            {
                              order.amount
                            }
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* SELL WALL */}

                <div>
                  <div className="bg-red-500/10 text-red-400 font-bold px-6 py-4">
                    SELL ORDERS
                  </div>

                  <div className="max-h-[500px] overflow-y-auto">
                    {orderBook.sells.map(
                      (
                        order,
                        index
                      ) => (
                        <div
                          key={index}
                          className="flex justify-between px-6 py-3 border-b border-slate-800"
                        >
                          <span className="text-red-400 font-bold">
                            $
                            {
                              order.price
                            }
                          </span>

                          <span className="text-white">
                            {
                              order.amount
                            }
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-8">
              {/* OPEN ORDERS */}

              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-800">
                  <h2 className="text-3xl font-bold">
                    Open Orders
                  </h2>
                </div>

                <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
                  <table className="w-full">
                    <thead className="bg-slate-800 sticky top-0">
                      <tr>
                        <th className="text-left p-5">
                          Type
                        </th>

                        <th className="text-left p-5">
                          Coin
                        </th>

                        <th className="text-left p-5">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.map(
                        (
                          order
                        ) => (
                          <tr
                            key={
                              order._id
                            }
                            className="border-t border-slate-800"
                          >
                            <td className="p-5">
                              <span
                                className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                  order.type ===
                                  "BUY"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {
                                  order.type
                                }
                              </span>
                            </td>

                            <td className="p-5">
                              {
                                order.coin
                              }
                            </td>

                            <td className="p-5">
                              <span
                                className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                  order.status ===
                                  "FILLED"
                                    ? "bg-green-500/20 text-green-400"
                                    : order.status ===
                                      "CANCELLED"
                                    ? "bg-red-500/20 text-red-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                                }`}
                              >
                                {
                                  order.status
                                }
                              </span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* LIVE TRADES */}

              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-800">
                  <h2 className="text-3xl font-bold">
                    Live Trades
                  </h2>
                </div>

                <div className="overflow-x-auto max-h-[350px] overflow-y-auto">
                  <table className="w-full">
                    <thead className="bg-slate-800 sticky top-0">
                      <tr>
                        <th className="text-left p-5">
                          Type
                        </th>

                        <th className="text-left p-5">
                          Coin
                        </th>

                        <th className="text-left p-5">
                          Price
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {trades.map(
                        (
                          trade
                        ) => (
                          <tr
                            key={
                              trade._id
                            }
                            className="border-t border-slate-800"
                          >
                            <td className="p-5">
                              <span
                                className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                  trade.type ===
                                  "BUY"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {
                                  trade.type
                                }
                              </span>
                            </td>

                            <td className="p-5">
                              {
                                trade.coin
                              }
                            </td>

                            <td className="p-5 font-bold">
                              $
                              {Number(
                                trade.price
                              ).toLocaleString()}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;