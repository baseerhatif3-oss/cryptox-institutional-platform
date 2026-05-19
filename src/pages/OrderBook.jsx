import {
  useEffect,
  useState,
} from "react";

const OrderBook =
  () => {
    const [buyOrders,
      setBuyOrders] =
      useState([]);

    const [sellOrders,
      setSellOrders] =
      useState([]);

    useEffect(() => {
      generateOrders();

      const interval =
        setInterval(
          generateOrders,
          3000
        );

      return () =>
        clearInterval(
          interval
        );
    }, []);

    const randomPrice =
      (
        base
      ) => {
        return (
          base +
          (
            Math.random() *
            2000
          ).toFixed(2)
        );
      };

    const randomAmount =
      () => {
        return (
          Math.random() *
          5
        ).toFixed(4);
      };

    const generateOrders =
      () => {
        const buys =
          Array.from({
            length: 12,
          }).map(
            () => ({
              price:
                randomPrice(
                  65000
                ),

              amount:
                randomAmount(),
            })
          );

        const sells =
          Array.from({
            length: 12,
          }).map(
            () => ({
              price:
                randomPrice(
                  66000
                ),

              amount:
                randomAmount(),
            })
          );

        setBuyOrders(
          buys
        );

        setSellOrders(
          sells
        );
      };

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Live Order Book
            </h1>

            <p className="text-slate-400 mt-3">
              Real-time market depth simulation
            </p>
          </div>

          {/* ORDERBOOK */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BUY ORDERS */}

            <div className="bg-slate-900 border border-green-700 rounded-3xl overflow-hidden">
              <div className="bg-green-700 px-6 py-5">
                <h2 className="text-3xl font-bold">
                  Buy Orders
                </h2>
              </div>

              <div>
                {buyOrders.map(
                  (
                    order,
                    index
                  ) => (
                    <div
                      key={
                        index
                      }
                      className="flex items-center justify-between px-6 py-4 border-b border-slate-800 hover:bg-green-500/10"
                    >
                      <span className="text-green-400 font-bold">
                        $
                        {
                          order.price
                        }
                      </span>

                      <span>
                        {
                          order.amount
                        }{" "}
                        BTC
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* SELL ORDERS */}

            <div className="bg-slate-900 border border-red-700 rounded-3xl overflow-hidden">
              <div className="bg-red-700 px-6 py-5">
                <h2 className="text-3xl font-bold">
                  Sell Orders
                </h2>
              </div>

              <div>
                {sellOrders.map(
                  (
                    order,
                    index
                  ) => (
                    <div
                      key={
                        index
                      }
                      className="flex items-center justify-between px-6 py-4 border-b border-slate-800 hover:bg-red-500/10"
                    >
                      <span className="text-red-400 font-bold">
                        $
                        {
                          order.price
                        }
                      </span>

                      <span>
                        {
                          order.amount
                        }{" "}
                        BTC
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default OrderBook;