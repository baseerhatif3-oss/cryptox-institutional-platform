import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import AnimatedCard from "../components/ui/AnimatedCard";

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Wallet,
  ShieldCheck,
  Globe,
  BarChart3,
  PieChart,
} from "lucide-react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import ActivityFeed from "../components/ActivityFeed";

const Dashboard = () => {

  const [marketData, setMarketData] =
    useState([]);

  const [globalData, setGlobalData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const markets =
            await fetch(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple&order=market_cap_desc&per_page=4&page=1&sparkline=false"
            );

          const global =
            await fetch(
              "https://api.coingecko.com/api/v3/global"
            );

          const marketResult =
            await markets.json();

          const globalResult =
            await global.json();

          setMarketData(
            marketResult
          );

          setGlobalData(
            globalResult.data
          );

        } catch (error) {

          console.error(
            "Dashboard API Error:",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchData();

  }, []);

  const stats = [

    {
      title:
        "Portfolio Balance",

      value:
        "$842,420",

      icon:
        DollarSign,

      color:
        "text-yellow-400",

      bg:
        "bg-yellow-400/10",

      change:
        "+12.4%",
    },

    {
      title:
        "24H Profit",

      value:
        "+$24,820",

      icon:
        TrendingUp,

      color:
        "text-green-400",

      bg:
        "bg-green-400/10",

      change:
        "+8.2%",
    },

    {
      title:
        "Open Positions",

      value:
        "18",

      icon:
        Activity,

      color:
        "text-blue-400",

      bg:
        "bg-blue-400/10",

      change:
        "+4",
    },

    {
      title:
        "Wallet Assets",

      value:
        "24",

      icon:
        Wallet,

      color:
        "text-purple-400",

      bg:
        "bg-purple-400/10",

      change:
        "+2",
    },
  ];

  const portfolioData = [

    { name: "Jan", value: 120000 },

    { name: "Feb", value: 180000 },

    { name: "Mar", value: 240000 },

    { name: "Apr", value: 310000 },

    { name: "May", value: 420000 },

    { name: "Jun", value: 520000 },

    { name: "Jul", value: 610000 },

    { name: "Aug", value: 842420 },
  ];

  const allocationData = [

    {
      name: "BTC",
      value: 48,
    },

    {
      name: "ETH",
      value: 28,
    },

    {
      name: "SOL",
      value: 14,
    },

    {
      name: "XRP",
      value: 10,
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

            EXCHANGE SYSTEMS OPERATIONAL

          </span>

        </div>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

          <div>

            <h1 className="text-6xl font-black mb-4">

              Trading
              <span className="text-yellow-400">
                {" "}Dashboard
              </span>

            </h1>

            <p className="text-zinc-500 text-xl">

              Institutional-grade crypto trading infrastructure overview.

            </p>

          </div>

          {
            globalData && (

              <AnimatedCard
                delay={0.2}
                className="glass rounded-3xl px-8 py-6"
              >

                <div className="flex items-center gap-4 mb-4">

                  <Globe
                    size={32}
                    className="text-yellow-400"
                  />

                  <h2 className="text-3xl font-black">

                    Global Market

                  </h2>

                </div>

                <div className="grid grid-cols-2 gap-6">

                  <div>

                    <p className="text-zinc-500 mb-2">

                      Market Cap

                    </p>

                    <h3 className="text-2xl font-black text-green-400">

                      $
                      {
                        (
                          globalData.total_market_cap.usd /
                          1000000000000
                        ).toFixed(2)
                      }T

                    </h3>

                  </div>

                  <div>

                    <p className="text-zinc-500 mb-2">

                      BTC Dominance

                    </p>

                    <h3 className="text-2xl font-black text-yellow-400">

                      {
                        globalData.market_cap_percentage.btc.toFixed(1)
                      }%

                    </h3>

                  </div>

                </div>

              </AnimatedCard>
            )
          }

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

        {
          stats.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className="glass rounded-3xl p-8"
                >

                  <div className="flex items-center justify-between mb-8">

                    <div className={`${item.bg} p-4 rounded-2xl`}>

                      <Icon
                        size={32}
                        className={item.color}
                      />

                    </div>

                    <span className="text-green-400 font-black">

                      {
                        item.change
                      }

                    </span>

                  </div>

                  <h2 className="text-zinc-500 mb-3 text-lg">

                    {
                      item.title
                    }

                  </h2>

                  <h3 className="text-4xl font-black">

                    {
                      item.value
                    }

                  </h3>

                </AnimatedCard>
              );
            }
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-10">

        <AnimatedCard
          delay={0.2}
          className="xl:col-span-2 glass rounded-3xl p-8"
        >

          <div className="flex items-center gap-4 mb-10">

            <BarChart3
              size={40}
              className="text-yellow-400"
            />

            <div>

              <h2 className="text-4xl font-black">

                Portfolio Performance

              </h2>

              <p className="text-zinc-500">

                Real-time growth analytics

              </p>

            </div>

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
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  strokeWidth={4}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </AnimatedCard>

        <AnimatedCard
          delay={0.3}
          className="glass rounded-3xl p-8"
        >

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

        </AnimatedCard>

      </div>

      <div className="glass rounded-3xl p-8 mb-10">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-black">

            Live Market Overview

          </h2>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">

              LIVE DATA

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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-10">

        <AnimatedCard
          delay={0.2}
          className="glass rounded-3xl p-8"
        >

          <div className="flex items-center gap-4 mb-8">

            <ShieldCheck
              size={36}
              className="text-yellow-400"
            />

            <h2 className="text-4xl font-black">

              Security

            </h2>

          </div>

          <div className="space-y-8">

            <div className="border-b border-white/5 pb-6">

              <p className="text-zinc-500 mb-3">

                Infrastructure Status

              </p>

              <h3 className="text-2xl font-black text-green-400">

                Protected

              </h3>

            </div>

            <div className="border-b border-white/5 pb-6">

              <p className="text-zinc-500 mb-3">

                Active Sessions

              </p>

              <h3 className="text-2xl font-black">

                12 Devices

              </h3>

            </div>

            <div className="border-b border-white/5 pb-6">

              <p className="text-zinc-500 mb-3">

                24H Transactions

              </p>

              <h3 className="text-2xl font-black">

                1,284

              </h3>

            </div>

            <div>

              <p className="text-zinc-500 mb-3">

                Exchange Uptime

              </p>

              <h3 className="text-2xl font-black text-green-400">

                99.99%

              </h3>

            </div>

          </div>

        </AnimatedCard>

        <div className="xl:col-span-2">

          <ActivityFeed />

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;