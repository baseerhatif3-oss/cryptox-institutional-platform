import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import API from "../services/api";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#eab308",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data } = await API.get("/portfolio");
      setPortfolio(data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalValue = portfolio.reduce(
    (acc, coin) => acc + coin.value,
    0
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Portfolio
          </h1>

          <p className="text-slate-400 mt-2">
            Track your crypto holdings and allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Total Portfolio Value
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              ${totalValue.toFixed(2)}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Total Assets
            </p>

            <h2 className="text-4xl font-bold">
              {portfolio.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Exchange Status
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              Online
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6">
              Asset Allocation
            </h3>

            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolio}
                    dataKey="value"
                    nameKey="coinName"
                    outerRadius={120}
                    label
                  >
                    {portfolio.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[index % COLORS.length]
                        }
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {portfolio.map((coin) => (
              <div
                key={coin.coinId}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={coin.image}
                    alt={coin.coinName}
                    className="w-12 h-12"
                  />

                  <div>
                    <h3 className="font-bold text-lg">
                      {coin.coinName}
                    </h3>

                    <p className="text-slate-400 uppercase text-sm">
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    {coin.quantity.toFixed(6)}
                  </p>

                  <p className="text-green-400 font-bold text-lg">
                    ${coin.value.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;