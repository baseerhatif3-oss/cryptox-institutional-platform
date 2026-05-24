import React from "react";

const MarketHeatmap = () => {

  const coins = [

    {
      symbol: "BTC",
      change: "+4.82%",
      size: "large",
      color: "green",
    },

    {
      symbol: "ETH",
      change: "+2.18%",
      size: "medium",
      color: "green",
    },

    {
      symbol: "SOL",
      change: "-1.34%",
      size: "small",
      color: "red",
    },

    {
      symbol: "XRP",
      change: "+5.11%",
      size: "small",
      color: "green",
    },

    {
      symbol: "DOGE",
      change: "+8.44%",
      size: "medium",
      color: "green",
    },

    {
      symbol: "ADA",
      change: "-2.12%",
      size: "small",
      color: "red",
    },
  ];

  const getSize = (
    size
  ) => {

    switch (size) {

      case "large":
        return "col-span-2 row-span-2 h-64";

      case "medium":
        return "h-32";

      default:
        return "h-28";
    }
  };

  const getColor = (
    color
  ) => {

    return color === "green"
      ? "bg-green-500/20 border-green-500/30 hover:bg-green-500/30"
      : "bg-red-500/20 border-red-500/30 hover:bg-red-500/30";
  };

  return (

    <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

      <div className="p-8 border-b border-white/10">

        <h2 className="text-3xl font-black">
          Market Heatmap
        </h2>

        <p className="text-gray-400 mt-2">
          Live crypto market performance
        </p>

      </div>

      <div className="p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">

        {coins.map(
          (
            coin,
            index
          ) => (

            <div
              key={index}
              className={`${getSize(
                coin.size
              )} ${getColor(
                coin.color
              )} border rounded-[28px] p-6 flex flex-col justify-between transition`}
            >

              <div>

                <h3 className="text-3xl font-black">
                  {coin.symbol}
                </h3>

              </div>

              <div>

                <p
                  className={`text-2xl font-black ${
                    coin.color ===
                    "green"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >

                  {coin.change}

                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default MarketHeatmap;