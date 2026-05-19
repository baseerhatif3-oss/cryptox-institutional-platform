import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#a855f7",
];

const Portfolio =
  () => {
    const [user,
      setUser] =
      useState(null);

    const [loading,
      setLoading] =
      useState(true);

    useEffect(() => {
      fetchProfile();
    }, []);

    const fetchProfile =
      async () => {
        try {
          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/user/profile",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setUser(
            res.data
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    if (loading) {
      return (
        <div className="text-white p-10">
          Loading...
        </div>
      );
    }

    const balances =
      user?.balances ||
      {};

    const portfolioData =
      [
        {
          name: "BTC",
          value:
            balances.BTC,
        },

        {
          name: "ETH",
          value:
            balances.ETH,
        },

        {
          name: "SOL",
          value:
            balances.SOL,
        },

        {
          name: "USD",
          value:
            balances.USD,
        },
      ];

    const totalAssets =
      balances.USD +
      balances.BTC *
        65000 +
      balances.ETH *
        3000 +
      balances.SOL *
        150;

    const estimatedPNL =
      totalAssets *
      0.12;

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Portfolio
            </h1>

            <p className="text-slate-400 mt-3">
              Advanced asset analytics dashboard
            </p>
          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* TOTAL */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                Total Balance
              </p>

              <h2 className="text-4xl font-bold">
                $
                {totalAssets.toLocaleString()}
              </h2>
            </div>

            {/* PNL */}

            <div className="bg-green-900/20 border border-green-700 rounded-3xl p-8">
              <p className="text-green-400 mb-3">
                Estimated Profit
              </p>

              <h2 className="text-4xl font-bold text-green-400">
                +$
                {estimatedPNL.toLocaleString()}
              </h2>
            </div>

            {/* USER */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">
                Account Status
              </p>

              <h2 className="text-3xl font-bold">
                VERIFIED
              </h2>
            </div>
          </div>

          {/* CHARTS */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PIE */}

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
                      data={
                        portfolioData
                      }
                      cx="50%"
                      cy="50%"
                      outerRadius={
                        140
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

            {/* BALANCES */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-8">
                Asset Balances
              </h2>

              <div className="space-y-5">
                {Object.entries(
                  balances
                ).map(
                  (
                    [
                      coin,
                      amount,
                    ]
                  ) => (
                    <div
                      key={coin}
                      className="flex items-center justify-between bg-slate-800 rounded-2xl p-5"
                    >
                      <div>
                        <h3 className="text-2xl font-bold">
                          {coin}
                        </h3>

                        <p className="text-slate-400">
                          Asset
                        </p>
                      </div>

                      <div className="text-right">
                        <h3 className="text-2xl font-bold">
                          {amount}
                        </h3>
                      </div>
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