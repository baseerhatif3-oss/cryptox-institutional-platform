import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const OrderBook = () => {

  const [buyOrders, setBuyOrders] =
    useState([]);

  const [
    sellOrders,
    setSellOrders,
  ] = useState([]);

  /*
  ==========================================
  SOCKET LISTENERS
  ==========================================
  */

  useEffect(() => {

    socket.on(
      "orderBookUpdate",

      (data) => {

        setBuyOrders(
          data.buyOrders || []
        );

        setSellOrders(
          data.sellOrders || []
        );
      }
    );

    return () => {

      socket.off(
        "orderBookUpdate"
      );
    };

  }, []);

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Live Order Book
          </h2>

          <p className="text-gray-400 mt-1">
            Realtime market depth
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">
          LIVE
        </div>

      </div>

      {/* TABLE */}

      <div className="grid grid-cols-2 gap-6">

        {/* BUY ORDERS */}

        <div>

          <h3 className="text-green-400 font-bold mb-4">
            BUY ORDERS
          </h3>

          <div className="space-y-3">

            {buyOrders.length === 0 && (

              <div className="text-gray-500">
                No buy orders
              </div>

            )}

            {buyOrders.map(
              (
                order,
                index
              ) => (

                <div
                  key={index}
                  className="bg-black border border-gray-800 rounded-xl px-4 py-3 flex items-center justify-between"
                >

                  <div>

                    <p className="font-bold">
                      $
                      {Number(
                        order.price
                      ).toLocaleString()}
                    </p>

                    <p className="text-gray-500 text-sm">
                      Qty:
                      {" "}
                      {
                        order.quantity
                      }
                    </p>

                  </div>

                  <div className="text-green-400 font-bold">
                    BUY
                  </div>

                </div>

              )
            )}

          </div>

        </div>

        {/* SELL ORDERS */}

        <div>

          <h3 className="text-red-400 font-bold mb-4">
            SELL ORDERS
          </h3>

          <div className="space-y-3">

            {sellOrders.length === 0 && (

              <div className="text-gray-500">
                No sell orders
              </div>

            )}

            {sellOrders.map(
              (
                order,
                index
              ) => (

                <div
                  key={index}
                  className="bg-black border border-gray-800 rounded-xl px-4 py-3 flex items-center justify-between"
                >

                  <div>

                    <p className="font-bold">
                      $
                      {Number(
                        order.price
                      ).toLocaleString()}
                    </p>

                    <p className="text-gray-500 text-sm">
                      Qty:
                      {" "}
                      {
                        order.quantity
                      }
                    </p>

                  </div>

                  <div className="text-red-400 font-bold">
                    SELL
                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderBook;