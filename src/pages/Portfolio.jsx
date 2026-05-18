import {
  useEffect,
  useState,
} from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import API from "../api/axios";

const Portfolio = () => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchProfile =
    async () => {
      try {
        const res =
          await API.get(
            "/user/profile"
          );

        setUser(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-3xl font-bold">
        Loading Portfolio...
      </div>
    );
  }

  const portfolioData = [
    {
      name: "USD",
      value:
        user?.balances?.USD ||
        0,
    },

    {
      name: "BTC",
      value:
        user?.balances?.BTC ||
        0,
    },

    {
      name: "ETH",
      value:
        user?.balances?.ETH ||
        0,
    },

    {
      name: "SOL",
      value:
        user?.balances?.SOL ||
        0,
    },
  ];

  const totalBalance =
    portfolioData.reduce(
      (acc, item) =>
        acc + item.value,
      0
    );

  const COLORS = [
    "#3b82f6",
    "#22c55e",
    "#a855f7",
    "#f97316",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Portfolio
          </h1>

          <p className="text-slate-400 mt-2">
            Wallet analytics & asset allocation
          </p>
        </div>

        {/* OVERVIEW */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Balance
            </p>

            <h2 className="text-4xl font-bold">
              $
              {totalBalance.toLocaleString()}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Assets
            </p>

            <h2 className="text-4xl font-bold">
              {
                portfolioData.length
              }
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              24H PNL
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              +12.8%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Account Status
            </p>

            <h2 className="text-4xl font-bold text-blue-400">
              Active
            </h2>
          </div>
        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* CHART */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Asset Allocation
            </h2>

            <div className="h-[450px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={
                      portfolioData
                    }
                    cx="50%"
                    cy="50%"
                    outerRadius={
                      150
                    }
                    dataKey="value"
                    label
                  >
                    {portfolioData.map(
                      (
                        entry,
                        index
                      ) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            COLORS[
                              index %
                                COLORS.length
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ASSETS */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Wallet Balances
            </h2>

            <div className="space-y-5">
              {portfolioData.map(
                (
                  asset,
                  index
                ) => (
                  <div
                    key={index}
                    className="bg-slate-800 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-bold">
                        {
                          asset.name
                        }
                      </h3>

                      <p className="text-slate-400 mt-1">
                        Asset Balance
                      </p>
                    </div>

                    <div className="text-right">
                      <h3 className="text-2xl font-bold">
                        {asset.value.toLocaleString()}
                      </h3>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* EXTRA STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Lifetime Profit
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              +$24,500
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Trades
            </p>

            <h2 className="text-3xl font-bold">
              1,284
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Win Rate
            </p>

            <h2 className="text-3xl font-bold text-blue-400">
              68%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;