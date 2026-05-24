import React from "react";

const RecentTrades = () => {

  const trades = [

    {
      price: "84,520",
      amount: "0.82 BTC",
      time: "23:41:02",
      positive: true,
    },

    {
      price: "84,480",
      amount: "1.24 BTC",
      time: "23:40:51",
      positive: false,
    },

    {
      price: "84,610",
      amount: "0.45 BTC",
      time: "23:40:44",
      positive: true,
    },

    {
      price: "84,430",
      amount: "0.91 BTC",
      time: "23:40:28",
      positive: false,
    },
  ];

  return (

    <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

      <div className="p-6 border-b border-white/10">

        <h2 className="text-2xl font-black">
          Recent Trades
        </h2>

      </div>

      <div className="divide-y divide-white/5">

        {trades.map(
          (
            trade,
            index
          ) => (

            <div
              key={index}
              className="p-5 flex items-center justify-between hover:bg-white/5 transition"
            >

              <div>

                <h3
                  className={`font-black ${
                    trade.positive
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >

                  {trade.price}

                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {trade.amount}
                </p>

              </div>

              <div className="text-gray-500 text-sm">

                {trade.time}

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default RecentTrades;