import MainLayout from "../components/layout/MainLayout";

const Markets = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$84,520",
      change: "+4.82%",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$4,280",
      change: "+2.18%",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "$182",
      change: "-1.34%",
    },
  ];

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Markets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <div
            key={coin.symbol}
            className="bg-[#111] border border-yellow-500/20 rounded-3xl p-6"
          >
            <h2 className="text-2xl font-bold text-white">
              {coin.symbol}
            </h2>

            <p className="text-gray-500 mt-1">
              {coin.name}
            </p>

            <h3 className="text-3xl font-bold text-yellow-400 mt-6">
              {coin.price}
            </h3>

            <p
              className={`mt-2 font-semibold ${
                coin.change.includes("+")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {coin.change}
            </p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Markets;