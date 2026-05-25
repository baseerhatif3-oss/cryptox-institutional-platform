const MarketOverview = () => {

  const marketData = [

    {
      name: "BTC",
      price: "$84,520",
      change: "+4.82%",
      positive: true,
    },

    {
      name: "ETH",
      price: "$4,280",
      change: "+2.18%",
      positive: true,
    },

    {
      name: "SOL",
      price: "$182",
      change: "-1.34%",
      positive: false,
    },

    {
      name: "BNB",
      price: "$712",
      change: "+1.42%",
      positive: true,
    },
  ];

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-black">
            Market Overview
          </h2>

          <p className="text-zinc-500">
            Live crypto market stats
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {
          marketData.map((coin, index) => (

            <div
              key={index}
              className="flex items-center justify-between bg-black rounded-2xl p-5"
            >

              <div>

                <h3 className="text-xl font-black">
                  {coin.name}
                </h3>

                <p className="text-zinc-500">
                  Spot Market
                </p>

              </div>

              <div className="text-right">

                <h3 className="text-xl font-black">
                  {coin.price}
                </h3>

                <p className={`font-bold ${
                  coin.positive
                    ? "text-green-400"
                    : "text-red-400"
                }`}>

                  {coin.change}

                </p>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
};

export default MarketOverview;