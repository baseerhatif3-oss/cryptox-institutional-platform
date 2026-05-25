import {
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import TradingViewWidget from "../components/TradingViewWidget";
import TradingPanel from "../components/TradingPanel";

const Dashboard = () => {

  const [stats] = useState([

    {
      title: "Portfolio Balance",
      value: "$100,000",
    },

    {
      title: "Today's Profit",
      value: "+$12,845",
    },

    {
      title: "Open Orders",
      value: "12",
    },

    {
      title: "Trading Volume",
      value: "$2.8M",
    },
  ]);

  const watchlist = [

    {
      coin: "BTC",
      name: "Bitcoin",
      price: "$84,520",
      change: "+4.82%",
      positive: true,
    },

    {
      coin: "ETH",
      name: "Ethereum",
      price: "$4,280",
      change: "+2.18%",
      positive: true,
    },

    {
      coin: "SOL",
      name: "Solana",
      price: "$182",
      change: "-1.34%",
      positive: false,
    },
  ];

  return (

    <MainLayout>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-black">
            Trading Dashboard
          </h1>

          <p className="text-zinc-500 mt-2">
            Monitor your portfolio and trading activity
          </p>

        </div>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all">

          Deposit Funds

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {
          stats.map((stat, index) => (

            <div
              key={index}
              className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6"
            >

              <p className="text-zinc-500 mb-3">
                {stat.title}
              </p>

              <h2 className={`text-5xl font-black ${
                stat.value.includes("+")
                  ? "text-green-400"
                  : "text-white"
              }`}>

                {stat.value}

              </h2>

            </div>
          ))
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        <div className="xl:col-span-3 space-y-8">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-4xl font-black">
                  BTC/USDT
                </h2>

                <p className="text-zinc-500">
                  Live TradingView Chart
                </p>

              </div>

              <div className="text-right">

                <h2 className="text-4xl font-black">
                  $84,520
                </h2>

                <p className="text-green-400 font-bold">
                  +4.82%
                </p>

              </div>

            </div>

            <TradingViewWidget />

          </div>

        </div>

        <div className="space-y-8">

          <TradingPanel />

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-4xl font-black">
                  Watchlist
                </h2>

                <p className="text-zinc-500">
                  Favorite assets overview
                </p>

              </div>

            </div>

            <div className="space-y-6">

              {
                watchlist.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >

                    <div>

                      <h3 className="font-black text-xl">
                        {item.coin}
                      </h3>

                      <p className="text-zinc-500">
                        {item.name}
                      </p>

                    </div>

                    <div className="text-right">

                      <h3 className="font-black text-xl">
                        {item.price}
                      </h3>

                      <p className={`font-bold ${
                        item.positive
                          ? "text-green-400"
                          : "text-red-400"
                      }`}>

                        {item.change}

                      </p>

                    </div>

                  </div>
                ))
              }

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;