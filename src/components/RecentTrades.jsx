import {
  useEffect,
  useState,
} from "react";

const RecentTrades = () => {

  const [trades, setTrades] =
    useState([]);

  useEffect(() => {

    fetchTrades();

    const interval =
      setInterval(
        fetchTrades,
        4000
      );

    return () =>
      clearInterval(
        interval
      );

  }, []);

  const fetchTrades =
    async () => {

      try {

        const res =
          await fetch(
            "https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=8"
          );

        const data =
          await res.json();

        setTrades(data);

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <h2 className="text-3xl font-black text-white mb-8">
        Live Trades
      </h2>

      <div className="space-y-3">

        {
          trades.map(
            (trade) => (

              <div
                key={trade.id}
                className="flex justify-between bg-black rounded-xl px-4 py-3"
              >

                <span className={`font-bold ${
                  trade.isBuyerMaker
                    ? "text-red-400"
                    : "text-green-400"
                }`}>

                  $
                  {Number(
                    trade.price
                  ).toFixed(2)}

                </span>

                <span className="text-white">

                  {
                    Number(
                      trade.qty
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

export default RecentTrades;