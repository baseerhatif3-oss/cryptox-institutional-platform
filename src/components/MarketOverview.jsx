const coins = [

  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$84,520",
    change: "+4.82%",
  },

  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$4,280",
    change: "+2.18%",
  },

  {
    symbol: "SOL",
    name: "Solana",
    price: "$182",
    change: "-1.34%",
  },

  {
    symbol: "BNB",
    name: "BNB",
    price: "$712",
    change: "+1.88%",
  },
];

const MarketOverview = () => {

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-black text-white">
            Markets
          </h2>

          <p className="text-gray-500">
            Top crypto assets
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {
          coins.map((coin) => (

            <div
              key={coin.symbol}
              className="flex items-center justify-between bg-black rounded-2xl p-4"
            >

              <div>

                <h3 className="text-white font-bold">
                  {coin.symbol}
                </h3>

                <p className="text-gray-500 text-sm">
                  {coin.name}
                </p>

              </div>

              <div className="text-right">

                <h3 className="text-white font-bold">
                  {coin.price}
                </h3>

                <p className={`text-sm font-bold ${
                  coin.change.includes("-")
                    ? "text-red-400"
                    : "text-green-400"
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