import {
  useEffect,
  useState,
} from "react";

const Markets = () => {
  const [coins, setCoins] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const fetchMarkets =
    async () => {
      try {
        const res =
          await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          );

        const data =
          await res.json();

        setCoins(data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchMarkets();

    const interval =
      setInterval(() => {
        fetchMarkets();
      }, 15000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  const filteredCoins =
    coins.filter((coin) =>
      coin.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Markets
          </h1>

          <p className="text-slate-400 mt-2">
            Live cryptocurrency market overview
          </p>
        </div>

        {/* SEARCH */}

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search coin..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 outline-none"
          />
        </div>

        {/* MARKET TABLE */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-5">
                    Coin
                  </th>

                  <th className="text-left p-5">
                    Price
                  </th>

                  <th className="text-left p-5">
                    24h
                  </th>

                  <th className="text-left p-5">
                    Market Cap
                  </th>

                  <th className="text-left p-5">
                    Volume
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredCoins.map(
                  (coin) => (
                    <tr
                      key={coin.id}
                      className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                    >
                      {/* COIN */}

                      <td className="p-5">
                        <div className="flex items-center gap-4">
                          <img
                            src={
                              coin.image
                            }
                            alt={
                              coin.name
                            }
                            className="w-10 h-10"
                          />

                          <div>
                            <h3 className="font-bold text-lg">
                              {
                                coin.name
                              }
                            </h3>

                            <p className="text-slate-400 uppercase">
                              {
                                coin.symbol
                              }
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* PRICE */}

                      <td className="p-5 font-bold">
                        $
                        {coin.current_price.toLocaleString()}
                      </td>

                      {/* CHANGE */}

                      <td
                        className={`p-5 font-bold ${
                          coin.price_change_percentage_24h >=
                          0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_24h?.toFixed(
                          2
                        )}
                        %
                      </td>

                      {/* MARKET CAP */}

                      <td className="p-5">
                        $
                        {coin.market_cap.toLocaleString()}
                      </td>

                      {/* VOLUME */}

                      <td className="p-5">
                        $
                        {coin.total_volume.toLocaleString()}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;