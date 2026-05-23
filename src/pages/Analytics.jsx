import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Analytics = () => {

  /*
  ==========================================
  PORTFOLIO DATA
  ==========================================
  */

  const portfolioData = [

    {
      month: "Jan",
      value: 12000,
    },

    {
      month: "Feb",
      value: 14800,
    },

    {
      month: "Mar",
      value: 17200,
    },

    {
      month: "Apr",
      value: 16800,
    },

    {
      month: "May",
      value: 21900,
    },

    {
      month: "Jun",
      value: 24820,
    },
  ];

  /*
  ==========================================
  PNL DATA
  ==========================================
  */

  const pnlData = [

    {
      day: "Mon",
      pnl: 420,
    },

    {
      day: "Tue",
      pnl: 280,
    },

    {
      day: "Wed",
      pnl: 690,
    },

    {
      day: "Thu",
      pnl: 510,
    },

    {
      day: "Fri",
      pnl: 920,
    },

    {
      day: "Sat",
      pnl: 740,
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Analytics
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Portfolio performance and trading statistics
          </p>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-2xl font-bold">
          LIVE ANALYTICS
        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Portfolio Value
          </p>

          <h2 className="text-5xl font-black mt-4">
            $24.8K
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Monthly Profit
          </p>

          <h2 className="text-5xl font-black mt-4 text-green-400">
            +18.4%
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Win Rate
          </p>

          <h2 className="text-5xl font-black mt-4">
            72%
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Total Trades
          </p>

          <h2 className="text-5xl font-black mt-4">
            842
          </h2>

        </div>

      </div>

      {/* CHARTS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* PORTFOLIO */}

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-black">
              Portfolio Growth
            </h2>

            <p className="text-gray-400 mt-2">
              6 month account performance
            </p>

          </div>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={portfolioData}
              >

                <defs>

                  <linearGradient
                    id="colorValue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#facc15"
                      stopOpacity={0.8}
                    />

                    <stop
                      offset="100%"
                      stopColor="#facc15"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <XAxis
                  dataKey="month"
                  stroke="#666"
                />

                <YAxis
                  stroke="#666"
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#facc15"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* PNL */}

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-black">
              Weekly PNL
            </h2>

            <p className="text-gray-400 mt-2">
              Trading performance overview
            </p>

          </div>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart
                data={pnlData}
              >

                <XAxis
                  dataKey="day"
                  stroke="#666"
                />

                <YAxis
                  stroke="#666"
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="pnl"
                  stroke="#22c55e"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Analytics;