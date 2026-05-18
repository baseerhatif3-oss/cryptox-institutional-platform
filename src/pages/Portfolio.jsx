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

import {
  PieChart as PieChartIcon,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import API from "../api/axios";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
];

const Portfolio = () => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchPortfolio =
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
    fetchPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading portfolio...
      </div>
    );
  }

  const balances =
    user?.balances || {};

  const btcValue =
    (balances.BTC || 0) *
    105000;

  const ethValue =
    (balances.ETH || 0) *
    6200;

  const solValue =
    (balances.SOL || 0) *
    210;

  const usdValue =
    balances.USD || 0;

  const totalValue =
    btcValue +
    ethValue +
    solValue +
    usdValue;

  const chartData = [
    {
      name: "USD",
      value: usdValue,
    },

    {
      name: "BTC",
      value: btcValue,
    },

    {
      name: "ETH",
      value: ethValue,
    },

    {
      name: "SOL",
      value: solValue,
    },
  ].filter(
    (item) => item.value > 0
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-600 p-4 rounded-3xl">
            <PieChartIcon size={38} />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              Portfolio
            </h1>

            <p className="text-slate-400 mt-2 text-lg">
              Real-time portfolio
              analytics
            </p>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <DollarSign
              size={38}
              className="text-green-400 mb-4"
            />

            <p className="text-slate-400">
              Total Value
            </p>

            <h2 className="text-5xl font-bold mt-4">
              $
              {totalValue.toLocaleString()}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <TrendingUp
              size={38}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              BTC Holdings
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {balances.BTC || 0}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <TrendingUp
              size={38}
              className="text-purple-400 mb-4"
            />

            <p className="text-slate-400">
              ETH Holdings
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {balances.ETH || 0}
            </h2>
          </div>
        </div>

        {/* CHART + ASSETS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PIE CHART */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Asset Allocation
            </h2>

            <div className="h-[400px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    dataKey="value"
                    label
                  >
                    {chartData.map(
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
              Assets
            </h2>

            <div className="space-y-6">
              {chartData.map(
                (
                  asset,
                  index
                ) => (
                  <div
                    key={
                      asset.name
                    }
                    className="bg-slate-800 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-5 h-5 rounded-full"
                        style={{
                          backgroundColor:
                            COLORS[
                              index %
                                COLORS.length
                            ],
                        }}
                      />

                      <div>
                        <h3 className="text-2xl font-bold">
                          {
                            asset.name
                          }
                        </h3>

                        <p className="text-slate-400">
                          Portfolio Asset
                        </p>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold">
                      $
                      {asset.value.toLocaleString()}
                    </h2>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;