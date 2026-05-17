import { useEffect, useState } from "react";

const LiveMarket = () => {
  const [coins, setCoins] = useState([]);

  const fetchMarket = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );

      const data = await response.json();

      setCoins(data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMarket();

    const interval = setInterval(() => {
      fetchMarket();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">
          Live Market
        </h3>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

          <span className="text-green-400 text-sm">
            Live
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-slate-800 hover:bg-slate-700 transition p-4 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-10 h-10"
              />

              <div>
                <p className="font-semibold">
                  {coin.name}
                </p>

                <p className="text-slate-400 text-sm uppercase">
                  {coin.symbol}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold">
                $
                {coin.current_price.toLocaleString()}
              </p>

              <p
                className={`text-sm ${
                  coin.price_change_percentage_24h >
                  0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.price_change_percentage_24h?.toFixed(
                  2
                )}
                %
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMarket;