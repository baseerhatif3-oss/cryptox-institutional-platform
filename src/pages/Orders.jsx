import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import {
  getOrders,
} from "../services/orderService";

const Orders = () => {

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

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Orders
        </h1>

        <p className="text-zinc-500 mt-2">
          Live order management system
        </p>

      </div>

      <div className="bg-[#111] border border-yellow-500/10 rounded-3xl overflow-hidden">

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
                Amount
              </th>

              <th className="text-left p-5 text-yellow-400">
                Price
              </th>

              <th className="text-left p-5 text-yellow-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {
              orders.length > 0 ? (

                orders.map(
                  (order) => (

                    <tr
                      key={order._id}
                      className="border-t border-yellow-500/10"
                    >

                      <td className="p-5">
                        {order.pair}
                      </td>

                      <td className={`p-5 font-bold ${
                        order.side === "buy"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}>

                        {
                          order.side.toUpperCase()
                        }

                      </td>

                      <td className="p-5">
                        {order.amount}
                      </td>

                      <td className="p-5">
                        $
                        {order.price}
                      </td>

                      <td className="p-5">

                        <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">

                          {
                            order.status
                          }

                        </span>

                      </td>

                    </tr>
                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center p-10 text-zinc-500"
                  >
                    No orders found
                  </td>

                </tr>
              )
            }

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default Orders;