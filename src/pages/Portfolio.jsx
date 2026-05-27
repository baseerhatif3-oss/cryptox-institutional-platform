import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import AnimatedCard from "../components/ui/AnimatedCard";

import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PieChart,
  DollarSign,
  BarChart3,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts";

const Portfolio = () => {

  const [marketData, setMarketData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const response =
            await fetch(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,tether&order=market_cap_desc&per_page=4&page=1&sparkline=false"
            );

          const data =
            await response.json();

          setMarketData(data);

        } catch (error) {

          console.error(
            "Portfolio API Error:",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchData();

  }, []);

  const growthData = [

    { month: "Jan", value: 120000 },

    { month: "Feb", value: 180000 },

    { month: "Mar", value: 240000 },

    { month: "Apr", value: 310000 },

    { month: "May", value: 420000 },

    { month: "Jun", value: 510000 },

    { month: "Jul", value: 590000 },

    { month: "Aug", value: 642000 },
  ];

  const allocationData = [

    {
      name: "BTC",
      value: 42,
    },

    {
      name: "ETH",
      value: 28,
    },

    {
      name: "SOL",
      value: 18,
    },

    {
      name: "USDT",
      value: 12,
    },
  ];

  const colors = [
    "#facc15",
    "#22c55e",
    "#3b82f6",
    "#a855f7",
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            PORTFOLIO SYSTEM ACTIVE

          </span>

        </div>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

          <div>

            <h1 className="text-6xl font-black">

              Portfolio
              <span className="text-yellow-400">
                {" "}Analytics
              </span>

            </h1>

            <p className="text-zinc-500 text-xl mt-4">

              Institutional-grade portfolio tracking and allocation management.

            </p>

          </div>

          <div className="glass rounded-3xl px-8 py-6">

            <div className="flex items-center gap-4 mb-4">

              <Wallet
                size={36}
                className="text-yellow-400"
              />

              <h2 className="text-3xl font-black">

                Net Worth

              </h2>

            </div>

            <h3 className="text-5xl font-black text-yellow-400 mb-3">

              $642,000

            </h3>

            <p className="text-green-400 font-bold text-xl">

              +18.4% Monthly Growth

            </p>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

        <AnimatedCard
          delay={0.1}
          className="glass rounded-3xl p-8"
        >

          <div className="flex items-center justify-between mb-6">

            <DollarSign
              size={36}
              className="text-yellow-400"
            />

            <span className="text-green-400 font-black">

              +12.8%

            </span>

          </div>

          <p className="text-zinc-500 mb-3">

            Total Profit

          </p>

          <h2 className="text-4xl font-black">

            $182,420

          </h2>

        </AnimatedCard>

        <AnimatedCard
          delay={0.2}
          className="glass rounded-3xl p-8"
        >

          <div className="flex items-center justify-between mb-6">

            <TrendingUp
              size={36}
              className="text-green-400"
            />

            <span className="text-green-400 font-black">

              +24.2%

            </span>

          </div>

          <p className="text-zinc-500 mb-3">

            Best Asset

          </p>

          <h2 className="text-4xl font-black">

            SOL

          </h2>

        </AnimatedCard>

        <AnimatedCard
          delay={0.3}
          className="glass rounded-3xl p-8"
        >

          <div className="flex items-center justify-between mb-6">

            <BarChart3
              size={36}
              className="text-blue-400"
            />

            <span className="text-blue-400 font-black">

              24 Assets

            </span>

          </div>

          <p className="text-zinc-500 mb-3">

            Diversification

          </p>

          <h2 className="text-4xl font-black">

            High

          </h2>

        </AnimatedCard>

        <AnimatedCard
          delay={0.4}
          className="glass rounded-3xl p-8"
        >

          <div className="flex items-center justify-between mb-6">

            <PieChart
              size={36}
              className="text-purple-400"
            />

            <span className="text-purple-400 font-black">

              Balanced

            </span>

          </div>

          <p className="text-zinc-500 mb-3">

            Risk Profile

          </p>

          <h2 className="text-4xl font-black">

            Medium

          </h2>

        </AnimatedCard>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-10">

        <div className="xl:col-span-2 glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-10">

            <TrendingUp
              size={40}
              className="text-yellow-400"
            />

            <div>

              <h2 className="text-4xl font-black">

                Portfolio Growth

              </h2>

              <p className="text-zinc-500">

                Performance analytics overview

              </p>

            </div>

          </div>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={growthData}
              >

                <defs>

                  <linearGradient
                    id="growth"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#facc15"
                      stopOpacity={0.8}
                    />

                    <stop
                      offset="95%"
                      stopColor="#facc15"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#facc15"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#growth)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-10">

            <PieChart
              size={40}
              className="text-yellow-400"
            />

            <div>

              <h2 className="text-4xl font-black">

                Allocation

              </h2>

              <p className="text-zinc-500">

                Asset distribution

              </p>

            </div>

          </div>

          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <RePieChart>

                <Pie
                  data={allocationData}
                  dataKey="value"
                  outerRadius={100}
                >

                  {
                    allocationData.map(
                      (
                        entry,
                        index
                      ) => (

                        <Cell
                          key={index}
                          fill={
                            colors[index]
                          }
                        />
                      )
                    )
                  }

                </Pie>

                <Tooltip />

              </RePieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-8">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-black">

            Live Holdings

          </h2>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">

              LIVE MARKET

            </span>

          </div>

        </div>

        <div className="space-y-6">

          {
            loading
              ? (
                [...Array(4)].map(
                  (
                    _,
                    index
                  ) => (

                    <div
                      key={index}
                      className="glass rounded-2xl p-8 animate-pulse h-[120px]"
                    />
                  )
                )
              )
              : (
                marketData.map(
                  (
                    coin
                  ) => {

                    const positive =
                      coin.price_change_percentage_24h >= 0;

                    return (

                      <AnimatedCard
                        key={coin.id}
                        delay={0.1}
                        className="flex items-center justify-between bg-black/20 border border-white/5 rounded-2xl px-6 py-5"
                      >

                        <div className="flex items-center gap-5">

                          <img
                            src={coin.image}
                            alt={coin.name}
                            className="w-14 h-14"
                          />

                          <div>

                            <h3 className="text-3xl font-black mb-2">

                              {
                                coin.symbol.toUpperCase()
                              }

                            </h3>

                            <p className="text-zinc-500">

                              {
                                coin.name
                              }

                            </p>

                          </div>

                        </div>

                        <div className="text-center">

                          <p className="text-zinc-500 mb-2">

                            Holdings

                          </p>

                          <h3 className="text-2xl font-black">

                            {
                              Math.floor(
                                Math.random() * 100
                              )
                            } coins

                          </h3>

                        </div>

                        <div className="text-right">

                          <h3 className="text-3xl font-black mb-2">

                            $
                            {
                              coin.current_price.toLocaleString()
                            }

                          </h3>

                          <div className="flex items-center justify-end gap-2">

                            {
                              positive
                                ? (
                                  <TrendingUp
                                    size={20}
                                    className="text-green-400"
                                  />
                                )
                                : (
                                  <TrendingDown
                                    size={20}
                                    className="text-red-400"
                                  />
                                )
                            }

                            <span
                              className={`font-black text-lg ${
                                positive
                                  ? "text-green-400"
                                  : "text-red-400"
                              }`}
                            >

                              {
                                coin.price_change_percentage_24h.toFixed(2)
                              }%

                            </span>

                          </div>

                        </div>

                      </AnimatedCard>
                    );
                  }
                )
              )
          }

        </div>

      </div>

    </MainLayout>
  );
};

export default Portfolio;