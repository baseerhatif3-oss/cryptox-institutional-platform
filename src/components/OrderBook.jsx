import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const OrderBook = () => {

  const [bids, setBids] =
    useState([]);

  const [asks, setAsks] =
    useState([]);




  /*
  ==========================================
  SOCKET ORDERBOOK
  ==========================================
  */

  useEffect(() => {

    socket.on(
      "marketUpdate",
      (markets) => {

        const btc =
          markets.find(
            (m) =>
              m.symbol ===
              "BTCUSDT"
          );

        if (!btc) return;

        const price =
          btc.price;

        /*
        ==========================================
        GENERATE FAKE DEPTH
        ==========================================
        */

        const generatedBids =
          Array.from({
            length: 12,
          }).map(
            (_, index) => ({
              price:
                (
                  price -
                  index * 15
                ).toFixed(2),

              amount:
                (
                  Math.random() *
                  5
                ).toFixed(4),
            })
          );

        const generatedAsks =
          Array.from({
            length: 12,
          }).map(
            (_, index) => ({
              price:
                (
                  price +
                  index * 15
                ).toFixed(2),

              amount:
                (
                  Math.random() *
                  5
                ).toFixed(4),
            })
          );

        setBids(
          generatedBids
        );

        setAsks(
          generatedAsks
        );
      }
    );

    return () => {
      socket.off(
        "marketUpdate"
      );
    };

  }, []);




  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Order Book
          </h2>

          <p className="text-gray-400 mt-2">
            Live BTCUSDT market depth
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm">
          LIVE
        </div>

      </div>



      <div className="grid grid-cols-2 gap-6">

        {/* BIDS */}

        <div>

          <h3 className="text-green-400 font-bold mb-4">
            Bids
          </h3>

          <div className="space-y-2">

            {bids.map(
              (
                bid,
                index
              ) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-black border border-gray-900 rounded-xl px-4 py-3"
                >

                  <span className="text-green-400 font-semibold">
                    $
                    {
                      bid.price
                    }
                  </span>

                  <span className="text-gray-300">
                    {
                      bid.amount
                    }
                  </span>

                </div>

              )
            )}

          </div>

        </div>



        {/* ASKS */}

        <div>

          <h3 className="text-red-400 font-bold mb-4">
            Asks
          </h3>

          <div className="space-y-2">

            {asks.map(
              (
                ask,
                index
              ) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-black border border-gray-900 rounded-xl px-4 py-3"
                >

                  <span className="text-red-400 font-semibold">
                    $
                    {
                      ask.price
                    }
                  </span>

                  <span className="text-gray-300">
                    {
                      ask.amount
                    }
                  </span>

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