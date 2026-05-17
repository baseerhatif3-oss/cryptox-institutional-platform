import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "../services/api";

const OpenOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelOrder = async (id) => {
    try {
      await API.delete(`/orders/${id}`);

      toast.success("Order cancelled");

      fetchOrders();
    } catch (error) {
      console.log(error);

      toast.error("Failed to cancel order");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Open Orders
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your active limit orders.
          </p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={order.image}
                  alt={order.coinName}
                  className="w-12 h-12"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {order.coinName}
                  </h3>

                  <p className="text-slate-400 uppercase text-sm">
                    {order.symbol}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p
                  className={`font-bold ${
                    order.type === "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {order.type}
                </p>

                <p className="text-slate-400 text-sm">
                  {order.orderType}
                </p>
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-sm">
                  Target Price
                </p>

                <p className="font-bold">
                  ${order.targetPrice}
                </p>
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-sm">
                  Amount
                </p>

                <p className="font-bold">
                  ${order.amount}
                </p>
              </div>

              <button
                onClick={() =>
                  cancelOrder(order._id)
                }
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl font-semibold"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenOrders;