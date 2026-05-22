import React, {
  useEffect,
  useState,
} from "react";

const OrderBook = () => {
  const [bids, setBids] =
    useState([]);

  const [asks, setAsks] =
    useState([]);

  useEffect(() => {
    generateOrderBook();

    const interval =
      setInterval(() => {
        generateOrderBook();
      }, 2000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  const generateOrderBook =
    () => {
      const newBids = [];

      const newAsks = [];

      for (
        let i = 0;
        i < 10;
        i++
      ) {
        newBids.push({
          price:
            (
              104000 -
              Math.random() *
                1000
            ).toFixed(2),

          amount:
            (
              Math.random() *
              5
            ).toFixed(4),
        });

        newAsks.push({
          price:
            (
              104000 +
              Math.random() *
                1000
            ).toFixed(2),

          amount:
            (
              Math.random() *
              5
            ).toFixed(4),
        });
      }

      setBids(newBids);

      setAsks(newAsks);
    };

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Order Book
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* BIDS */}

        <div>
          <h3 className="text-green-400 font-bold mb-4">
            BIDS
          </h3>

          <div className="space-y-2">
            {bids.map(
              (
                bid,
                index
              ) => (
                <div
                  key={index}
                  className="flex justify-between bg-black border border-gray-800 rounded-lg px-3 py-2"
                >
                  <span className="text-green-400">
                    $
                    {
                      bid.price
                    }
                  </span>

                  <span>
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
            ASKS
          </h3>

          <div className="space-y-2">
            {asks.map(
              (
                ask,
                index
              ) => (
                <div
                  key={index}
                  className="flex justify-between bg-black border border-gray-800 rounded-lg px-3 py-2"
                >
                  <span className="text-red-400">
                    $
                    {
                      ask.price
                    }
                  </span>

                  <span>
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