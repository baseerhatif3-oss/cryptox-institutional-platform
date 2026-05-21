import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Analytics =
  () => {
    const performanceData = [
      {
        day: "Mon",
        equity: 12000,
      },

      {
        day: "Tue",
        equity: 12800,
      },

      {
        day: "Wed",
        equity: 12400,
      },

      {
        day: "Thu",
        equity: 13800,
      },

      {
        day: "Fri",
        equity: 14900,
      },

      {
        day: "Sat",
        equity: 15400,
      },

      {
        day: "Sun",
        equity: 17200,
      },
    ];

    const allocationData = [
      {
        name: "BTC",
        value: 45,
      },

      {
        name: "ETH",
        value: 25,
      },

      {
        name: "SOL",
        value: 15,
      },

      {
        name: "USDT",
        value: 15,
      },
    ];

    const COLORS = [
      "#facc15",
      "#22c55e",
      "#3b82f6",
      "#ef4444",
    ];

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Portfolio Analytics
          </h1>

          <p className="text-gray-400 mt-2">
            Professional trader performance dashboard
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Total PnL
            </p>

            <h2 className="text-3xl font-bold text-green-400 mt-3">
              +$5,420
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Win Rate
            </p>

            <h2 className="text-3xl font-bold text-yellow-400 mt-3">
              78%
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Total Trades
            </p>

            <h2 className="text-3xl font-bold mt-3">
              248
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Best Trade
            </p>

            <h2 className="text-3xl font-bold text-green-400 mt-3">
              +$2,140
            </h2>
          </div>
        </div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* EQUITY CURVE */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Equity Curve
            </h2>

            <div className="h-[350px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart
                  data={
                    performanceData
                  }
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#333"
                  />

                  <XAxis
                    dataKey="day"
                    stroke="#999"
                  />

                  <YAxis
                    stroke="#999"
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="equity"
                    stroke="#facc15"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ALLOCATION */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Portfolio Allocation
            </h2>

            <div className="h-[350px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={
                      allocationData
                    }
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label
                  >
                    {allocationData.map(
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
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* TRADE ANALYTICS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Trading Statistics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black rounded-xl p-5 border border-gray-800">
              <p className="text-gray-400">
                Average Profit
              </p>

              <h3 className="text-2xl font-bold text-green-400 mt-3">
                +$182
              </h3>
            </div>

            <div className="bg-black rounded-xl p-5 border border-gray-800">
              <p className="text-gray-400">
                Average Loss
              </p>

              <h3 className="text-2xl font-bold text-red-400 mt-3">
                -$64
              </h3>
            </div>

            <div className="bg-black rounded-xl p-5 border border-gray-800">
              <p className="text-gray-400">
                Profit Factor
              </p>

              <h3 className="text-2xl font-bold text-yellow-400 mt-3">
                2.84
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Analytics;