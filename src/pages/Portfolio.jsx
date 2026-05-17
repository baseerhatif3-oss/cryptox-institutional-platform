import { useEffect, useState } from "react";
import API from "../services/api";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data } = await API.get("/portfolio");
        setPortfolio(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPortfolio();
  }, []);

  const totalValue = portfolio.reduce(
    (acc, coin) => acc + coin.value,
    0
  );

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">
        Portfolio
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Total Portfolio Value
        </h2>

        <p className="text-4xl font-bold text-green-400">
          ${totalValue.toFixed(2)}
        </p>
      </div>

      <div className="space-y-4">
        {portfolio.map((coin) => (
          <div
            key={coin.coinId}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={coin.image}
                alt={coin.coinName}
                className="w-10 h-10"
              />

              <div>
                <p className="font-semibold">
                  {coin.coinName}
                </p>

                <p className="text-slate-400 uppercase text-sm">
                  {coin.symbol}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">
                {coin.quantity.toFixed(6)}
              </p>

              <p className="text-green-400 font-bold">
                ${coin.value.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;