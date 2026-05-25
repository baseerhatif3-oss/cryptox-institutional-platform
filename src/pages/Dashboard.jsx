import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import TradingViewWidget from "../components/TradingViewWidget";

import TradingPanel from "../components/TradingPanel";

import MarketOverview from "../components/MarketOverview";

import RecentActivity from "../components/RecentActivity";

import RecentTransactions from "../components/RecentTransactions";

import API from "../services/api";

import {
  getBTCPrice,
} from "../services/marketService";

const Dashboard = () => {

  const [wallet, setWallet] =
    useState({});

  const [orders, setOrders] =
    useState([]);

  const [btcPrice, setBtcPrice] =
    useState("0");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchData();

    const interval =
      setInterval(
        fetchData,
        10000
      );

    return () =>
      clearInterval(interval);

  }, []);

  const fetchData =
    async () => {

      try {

        const walletRes =
          await API.get(
            "/wallet"
          );

        const ordersRes =
          await API.get(
            "/orders/my-orders"
          );

        const btcRes =
          await getBTCPrice();

        setWallet(
          walletRes.data || {}
        );

        setOrders(
          ordersRes.data || []
        );

        setBtcPrice(
          btcRes?.price || "0"
        );

      } catch (error) {

        console.log(
          "Dashboard Error:",
          error
        );

      } finally {

        setLoading(false);
      }
    };

  const stats = [

    {
      title:
        "Portfolio Balance",

      value:
        `$${wallet?.usdBalance || 0}`,
    },

    {
      title:
        "BTC Holdings",

      value:
        `${wallet?.btc || 0} BTC`,
    },

    {
      title:
        "Open Orders",

      value:
        orders.length || 0,
    },

    {
      title:
        "Live BTC Price",

      value:
        `$${Number(btcPrice).toLocaleString()}`,
    },
  ];

  if (loading) {

    return (

      <MainLayout>

        <div className="flex items-center justify-center h-[70vh]">

          <h1 className="text-4xl font-black text-yellow-400 animate-pulse">

            Loading Dashboard...

          </h1>

        </div>

      </MainLayout>
    );
  }

  return (

    <MainLayout>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-5xl font-black text-white">
            Trading Dashboard
          </h1>

          <p className="text-zinc-500 mt-2">
            Monitor your portfolio and trading activity
          </p>

        </div>

        <button className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-black px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105">

          Deposit Funds

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 mb-8">

        {
          stats.map((stat, index) => (

            <div
              key={index}
              className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6 hover:border-yellow-400/30 transition-all duration-300"
            >

              <p className="text-zinc-500 mb-3 text-sm">
                {stat.title}
              </p>

              <h2 className="text-4xl font-black text-white break-words">

                {stat.value}

              </h2>

            </div>
          ))
        }

      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-4 gap-8">

        <div className="2xl:col-span-3 space-y-8">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

              <div>

                <h2 className="text-4xl font-black text-white">
                  BTC/USDT
                </h2>

                <p className="text-zinc-500 mt-1">
                  Live Trading Chart
                </p>

              </div>

              <div className="text-left md:text-right">

                <h2 className="text-3xl font-black text-white">

                  $
                  {
                    Number(
                      btcPrice
                    ).toLocaleString()
                  }

                </h2>

                <p className="text-green-400 font-bold">
                  Live Binance Price
                </p>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden">

              <TradingViewWidget />

            </div>

          </div>

          <RecentTransactions />

        </div>

        <div className="space-y-8">

          <TradingPanel />

          <MarketOverview />

          <RecentActivity />

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;