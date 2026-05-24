import React from "react";

import {
  FaBitcoin,
  FaEthereum,
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaChartLine,
  FaCoins,
  FaGlobe,
} from "react-icons/fa";

import AdvancedTradingChart from "../components/AdvancedTradingChart";

import Watchlist from "../components/Watchlist";

import OrderBook from "../components/OrderBook";

import RecentTrades from "../components/RecentTrades";

import MarketHeatmap from "../components/MarketHeatmap";

import PortfolioPerformance from "../components/PortfolioPerformance";

const Dashboard = () => {

  const portfolioStats = [

    {
      title:
        "Portfolio Balance",

      value:
        "$248,540",

      icon:
        <FaWallet />,

      change:
        "+12.4%",
    },

    {
      title:
        "24H Profit",

      value:
        "+$12,845",

      icon:
        <FaChartLine />,

      change:
        "+8.2%",
    },

    {
      title:
        "Assets Owned",

      value:
        "24",

      icon:
        <FaCoins />,

      change:
        "+3",
    },

    {
      title:
        "Global Rank",

      value:
        "#428",

      icon:
        <FaGlobe />,

      change:
        "+14",
    },
  ];

  const marketData = [

    {
      name:
        "Bitcoin",

      symbol:
        "BTC",

      price:
        "$84,520",

      change:
        "+4.82%",

      positive:
        true,

      icon:
        <FaBitcoin className="text-yellow-500" />,
    },

    {
      name:
        "Ethereum",

      symbol:
        "ETH",

      price:
        "$4,280",

      change:
        "+2.18%",

      positive:
        true,

      icon:
        <FaEthereum className="text-blue-400" />,
    },

    {
      name:
        "Solana",

      symbol:
        "SOL",

      price:
        "$182",

      change:
        "-1.34%",

      positive:
        false,

      icon:
        <FaCoins className="text-purple-400" />,
    },

    {
      name:
        "XRP",

      symbol:
        "XRP",

      price:
        "$1.92",

      change:
        "+5.11%",

      positive:
        true,

      icon:
        <FaCoins className="text-cyan-400" />,
    },
  ];

  return (

    <div className="space-y-10">

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          <div>

            <p className="text-gray-400 text-lg">
              Welcome Back
            </p>

            <h1 className="text-6xl lg:text-7xl font-black mt-5 leading-tight">
              GLOBAL CRYPTO
              <br />
              EXCHANGE
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
              Trade crypto assets, manage portfolios,
              monitor AI signals and explore the next
              generation financial ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl font-black text-black">

                Start Trading

              </button>

              <button className="bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-black border border-white/10">

                View Portfolio

              </button>

            </div>

          </div>

          {/* LIVE PRICE */}

          <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 min-w-[320px]">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400">
                  BTC/USDT
                </p>

                <h2 className="text-5xl font-black mt-2">
                  $84,520
                </h2>

              </div>

              <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl font-bold">

                +4.82%

              </div>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  24H Volume
                </span>

                <span className="font-bold">
                  $38.2B
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Market Cap
                </span>

                <span className="font-bold">
                  $1.68T
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Dominance
                </span>

                <span className="font-bold">
                  52.8%
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {portfolioStats.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 text-2xl">

                  {item.icon}

                </div>

                <div className="text-green-400 font-bold flex items-center gap-2">

                  <FaArrowUp />

                  {item.change}

                </div>

              </div>

              <p className="text-gray-400 mt-8">
                {item.title}
              </p>

              <h2 className="text-5xl font-black mt-4">
                {item.value}
              </h2>

            </div>

          )
        )}

      </div>

      {/* CHART + WATCHLIST */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2">

          <AdvancedTradingChart />

        </div>

        <div>

          <Watchlist />

        </div>

      </div>

      {/* ORDER BOOK + RECENT TRADES */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <OrderBook />

        <RecentTrades />

      </div>

      {/* MARKET HEATMAP */}

      <MarketHeatmap />

      {/* PORTFOLIO PERFORMANCE */}

      <PortfolioPerformance />

      {/* MARKET OVERVIEW */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        <div className="p-8 border-b border-white/10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black">
              Market Overview
            </h2>

            <p className="text-gray-400 mt-2">
              Top crypto assets by performance
            </p>

          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-2xl font-black text-black">

            View Markets

          </button>

        </div>

        <div className="divide-y divide-white/5">

          {marketData.map(
            (
              coin,
              index
            ) => (

              <div
                key={index}
                className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:bg-white/5 transition"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-3xl bg-black flex items-center justify-center text-3xl border border-white/10">

                    {coin.icon}

                  </div>

                  <div>

                    <h3 className="text-2xl font-black">
                      {coin.name}
                    </h3>

                    <p className="text-gray-400 mt-1">
                      {coin.symbol}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <h3 className="text-3xl font-black">
                    {coin.price}
                  </h3>

                  <div
                    className={`mt-2 flex items-center justify-end gap-2 font-bold ${
                      coin.positive
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >

                    {coin.positive
                      ? <FaArrowUp />
                      : <FaArrowDown />}

                    {coin.change}

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;