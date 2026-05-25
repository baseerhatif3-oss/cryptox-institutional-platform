import { useEffect, useState } from "react";

const LiveOrderBook = () => {

  const [bids, setBids] =
    useState([]);

  const [asks, setAsks] =
    useState([]);

  useEffect(() => {

    fetchOrderBook();

    const interval =
      setInterval(
        fetchOrderBook,
        3000
      );

    return () =>
      clearInterval(
        interval
      );

  }, []);

  const fetchOrderBook =
    async () => {

      try {

        const res =
          await fetch(
            "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=7"
          );

        const data =
          await res.json();

        setBids(
          data.bids
        );

        setAsks(
          data.asks
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <h2 className="text-3xl font-black mb-8">
        Live Order Book
      </h2>

      <div className="space-y-3 mb-6">

        {
          asks.map(
            (ask, index) => (

              <div
                key={index}
                className="flex justify-between bg-black rounded-xl p-3 text-red-400"
              >

                <span>
                  {
                    Number(
                      ask[0]
                    ).toFixed(2)
                  }
                </span>

                <span>
                  {
                    Number(
                      ask[1]
                    ).toFixed(4)
                  }
                </span>

              </div>
            )
          )
        }

      </div>

      <div className="text-center py-4">

        <h2 className="text-4xl font-black">
          BTC/USDT
        </h2>

      </div>

      <div className="space-y-3 mt-6">

        {
          bids.map(
            (bid, index) => (

              <div
                key={index}
                className="flex justify-between bg-black rounded-xl p-3 text-green-400"
              >

                <span>
                  {
                    Number(
                      bid[0]
                    ).toFixed(2)
                  }
                </span>

                <span>
                  {
                    Number(
                      bid[1]
                    ).toFixed(4)
                  }
                </span>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default LiveOrderBook;