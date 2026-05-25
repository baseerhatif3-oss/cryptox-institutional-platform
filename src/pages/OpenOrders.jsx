import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import {
  getOrders,
} from "../services/orderService";

const OpenOrders = () => {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
    async () => {

      try {

        const data =
          await getOrders();

        setOrders(data);

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <MainLayout>

      <h1 className="text-4xl font-bold text-white mb-8">
        Open Orders
      </h1>

      <div className="bg-[#111] rounded-3xl border border-yellow-500/20 overflow-hidden">

        <table className="w-full">

          <thead className="bg-black">

            <tr>

              <th className="text-left p-5 text-yellow-400">
                Pair
              </th>

              <th className="text-left p-5 text-yellow-400">
                Side
              </th>

              <th className="text-left p-5 text-yellow-400">
                Type
              </th>

              <th className="text-left p-5 text-yellow-400">
                Amount
              </th>

              <th className="text-left p-5 text-yellow-400">
                Price
              </th>

            </tr>

          </thead>

          <tbody>

            {
              orders.map(
                (order) => (

                  <tr
                    key={order._id}
                    className="border-t border-yellow-500/10"
                  >

                    <td className="p-5 text-white">
                      {order.pair}
                    </td>

                    <td className={`p-5 ${
                      order.side === "buy"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}>
                      {order.side}
                    </td>

                    <td className="p-5 text-white">
                      {order.type}
                    </td>

                    <td className="p-5 text-white">
                      {order.amount}
                    </td>

                    <td className="p-5 text-white">
                      ${
                        order.price
                      }
                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default OpenOrders;