import {
  useEffect,
  useState,
} from "react";

const OrderBook = ({
  symbol = "btcusdt",
}) => {
  const [bids, setBids] =
    useState([]);

  const [asks, setAsks] =
    useState([]);

  useEffect(() => {
    const ws =
      new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol}@depth20@100ms`
      );

    ws.onmessage = (event) => {
      const data =
        JSON.parse(
          event.data
        );

      setBids(
        data.bids?.slice(
          0,
          10
        ) || []
      );

      setAsks(
        data.asks?.slice(
          0,
          10
        ) || []
      );
    };

    return () => ws.close();
  }, [symbol]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-3xl font-bold mb-8 text-white">
        Live Order Book
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* BIDS */}

        <div>
          <h3 className="text-green-400 font-bold text-xl mb-4">
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

                  <span className="text-white">
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
          <h3 className="text-red-400 font-bold text-xl mb-4">
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

                  <span className="text-white">
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