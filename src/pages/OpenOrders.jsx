import {
  useEffect,
  useState,
} from "react";

import {
  ClipboardList,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import API from "../api/axios";

const OpenOrders = () => {
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchOrders =
    async () => {
      try {
        const res =
          await API.get(
            "/orders"
          );

        setOrders(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-600 p-4 rounded-3xl">
            <ClipboardList size={38} />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              Order History
            </h1>

            <p className="text-slate-400 mt-2 text-lg">
              Real backend-powered
              orders
            </p>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Total Orders
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {orders.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Buy Orders
            </p>

            <h2 className="text-5xl font-bold mt-4 text-green-400">
              {
                orders.filter(
                  (o) =>
                    o.side ===
                    "BUY"
                ).length
              }
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400">
              Sell Orders
            </p>

            <h2 className="text-5xl font-bold mt-4 text-red-400">
              {
                orders.filter(
                  (o) =>
                    o.side ===
                    "SELL"
                ).length
              }
            </h2>
          </div>
        </div>

        {/* TABLE */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-5">
                    Coin
                  </th>

                  <th className="text-left p-5">
                    Side
                  </th>

                  <th className="text-left p-5">
                    Amount
                  </th>

                  <th className="text-left p-5">
                    Price
                  </th>

                  <th className="text-left p-5">
                    Total
                  </th>

                  <th className="text-left p-5">
                    Status
                  </th>

                  <th className="text-left p-5">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.length ===
                0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center p-10 text-slate-400"
                    >
                      No orders yet
                    </td>
                  </tr>
                ) : (
                  orders.map(
                    (order) => (
                      <tr
                        key={
                          order._id
                        }
                        className="border-t border-slate-800"
                      >
                        <td className="p-5">
                          <div>
                            <h3 className="font-bold text-lg">
                              {
                                order.coin
                              }
                            </h3>

                            <p className="text-slate-400 text-sm">
                              {
                                order.symbol
                              }
                            </p>
                          </div>
                        </td>

                        <td className="p-5">
                          <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${
                              order.side ===
                              "BUY"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {order.side ===
                            "BUY" ? (
                              <TrendingUp size={18} />
                            ) : (
                              <TrendingDown size={18} />
                            )}

                            {
                              order.side
                            }
                          </div>
                        </td>

                        <td className="p-5 font-bold">
                          {
                            order.amount
                          }
                        </td>

                        <td className="p-5">
                          $
                          {order.price.toLocaleString()}
                        </td>

                        <td className="p-5 font-bold">
                          $
                          {order.total.toLocaleString()}
                        </td>

                        <td className="p-5">
                          <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl">
                            {
                              order.status
                            }
                          </span>
                        </td>

                        <td className="p-5 text-slate-400">
                          {new Date(
                            order.createdAt
                          ).toLocaleString()}
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

export default OpenOrders;