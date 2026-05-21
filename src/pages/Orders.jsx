import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const Orders =
  () => {
    const [
      orders,
      setOrders,
    ] = useState([]);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      fetchOrders();
    }, []);

    const fetchOrders =
      async () => {
        try {
          const res =
            await API.get(
              "/orders"
            );

          setOrders(
            res.data
          );
        } catch (error) {
          console.log(
            error
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    const cancelOrder =
      async (
        id
      ) => {
        try {
          await API.delete(
            `/orders/${id}`
          );

          fetchOrders();
        } catch (error) {
          console.log(
            error
          );
        }
      };

    if (loading) {
      return (
        <div className="text-white">
          Loading orders...
        </div>
      );
    }

    return (
      <div>
        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Orders
          </h1>

          <p className="text-gray-400 mt-2">
            Live order management system
          </p>
        </div>

        {/* TABLE */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black">
                <tr>
                  <th className="text-left p-4">
                    Coin
                  </th>

                  <th className="text-left p-4">
                    Type
                  </th>

                  <th className="text-left p-4">
                    Amount
                  </th>

                  <th className="text-left p-4">
                    Price
                  </th>

                  <th className="text-left p-4">
                    Total
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.length >
                0 ? (
                  orders.map(
                    (
                      order
                    ) => (
                      <tr
                        key={
                          order._id
                        }
                        className="border-t border-gray-800"
                      >
                        <td className="p-4 font-bold">
                          {
                            order.coin
                          }
                        </td>

                        <td
                          className={`p-4 font-bold ${
                            order.type ===
                            "BUY"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {
                            order.type
                          }
                        </td>

                        <td className="p-4">
                          {
                            order.amount
                          }
                        </td>

                        <td className="p-4">
                          $
                          {
                            order.price
                          }
                        </td>

                        <td className="p-4">
                          $
                          {
                            order.total
                          }
                        </td>

                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              order.status ===
                              "OPEN"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : order.status ===
                                  "FILLED"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {
                              order.status
                            }
                          </span>
                        </td>

                        <td className="p-4">
                          {order.status ===
                            "OPEN" && (
                            <button
                              onClick={() =>
                                cancelOrder(
                                  order._id
                                )
                              }
                              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center p-8 text-gray-400"
                    >
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

export default Orders;