import { useEffect, useState } from "react";

const Watchlist = () => {
  const [coins, setCoins] = useState([]);

  const [watchlist, setWatchlist] =
    useState(
      JSON.parse(
        localStorage.getItem("watchlist")
      ) || []
    );

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );

      const data = await response.json();

      setCoins(data.slice(0, 30));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const toggleWatchlist = (coin) => {
    let updated = [];

    const exists = watchlist.find(
      (item) => item.id === coin.id
    );

    if (exists) {
      updated = watchlist.filter(
        (item) => item.id !== coin.id
      );
    } else {
      updated = [...watchlist, coin];
    }

    setWatchlist(updated);

    localStorage.setItem(
      "watchlist",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Watchlist
          </h1>

          <p className="text-slate-400 mt-2">
            Track your favorite crypto
            assets.
          </p>
        </div>

        <div className="space-y-4">
          {coins.map((coin) => {
            const isSaved =
              watchlist.find(
                (item) =>
                  item.id === coin.id
              );

            return (
              <div
                key={coin.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-12 h-12"
                  />

                  <div>
                    <h3 className="font-bold text-lg">
                      {coin.name}
                    </h3>

                    <p className="text-slate-400 uppercase text-sm">
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
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

                <button
                  onClick={() =>
                    toggleWatchlist(coin)
                  }
                  className={`px-5 py-2 rounded-xl font-semibold ${
                    isSaved
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSaved
                    ? "Remove"
                    : "Watch"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;