import {
  useEffect,
  useState,
} from "react";

const OrderBook = ({
  symbol,
}) => {
  const [bids, setBids] =
    useState([]);

  const [asks, setAsks] =
    useState([]);

  const fetchOrderBook =
    async () => {
      try {
        const cleanSymbol =
          symbol
            .replace(
              "BINANCE:",
              ""
            )
            .replace(
              "/",
              ""
            );

        const res =
          await fetch(
            `https://api.binance.com/api/v3/depth?symbol=${cleanSymbol}&limit=15`
          );

        const data =
          await res.json();

        setBids(
          data.bids || []
        );

        setAsks(
          data.asks || []
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchOrderBook();

    const interval =
      setInterval(() => {
        fetchOrderBook();
      }, 2000);

    return () =>
      clearInterval(
        interval
      );
  }, [symbol]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-full">
      <h2 className="text-3xl font-bold mb-6">
        Order Book
      </h2>

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
                  className="bg-green-500/10 rounded-xl p-3 flex justify-between text-sm"
                >
                  <span className="text-green-400 font-bold">
                    $
                    {Number(
                      bid[0]
                    ).toLocaleString()}
                  </span>

                  <span>
                    {Number(
                      bid[1]
                    ).toFixed(4)}
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
                  className="bg-red-500/10 rounded-xl p-3 flex justify-between text-sm"
                >
                  <span className="text-red-400 font-bold">
                    $
                    {Number(
                      ask[0]
                    ).toLocaleString()}
                  </span>

                  <span>
                    {Number(
                      ask[1]
                    ).toFixed(4)}
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