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

import LiveTicker from "../components/LiveTicker";

import API from "../services/api";

import {
  getBTCPrice,
} from "../services/marketService";

import {
  connectBTCSocket,
  disconnectSocket,
} from "../services/socketService";

import {
  connectLiveSocket,
  disconnectLiveSocket,
} from "../services/liveSocket";

const Dashboard = () => {

  const [wallet, setWallet] =
    useState({});

  const [orders, setOrders] =
    useState([]);

  const [btcPrice, setBtcPrice] =
    useState(0);

  const [marketTrend, setMarketTrend] =
    useState("Bullish");

  const [priceChange, setPriceChange] =
    useState("+0.00%");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchData();

    connectBTCSocket(
      (data) => {

        const livePrice =
          Number(data.p);

        const openPrice =
          Number(data.o || livePrice);

        const change =
          (
            (
              (
                livePrice -
                openPrice
              ) /
              openPrice
            ) * 100
          ).toFixed(2);

        setBtcPrice(
          livePrice
        );

        setPriceChange(
          `${change}%`
        );

        if (
          livePrice > 85000
        ) {

          setMarketTrend(
            "Strong Bullish"
          );

        } else if (
          livePrice > 80000
        ) {

          setMarketTrend(
            "Bullish"
          );

        } else {

          setMarketTrend(
            "Neutral"
          );
        }
      }
    );

    connectLiveSocket(
      (data) => {

        setBtcPrice(
          Number(data.price)
        );
      }
    );

    return () => {

      disconnectSocket();

      disconnectLiveSocket();
    };

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

        const currentPrice =
          Number(
            btcRes?.price || 0
          );

        setWallet(
          walletRes.data || {}
        );

        setOrders(
          ordersRes.data || []
        );

        setBtcPrice(
          currentPrice
        );

        if (
          currentPrice > 85000
        ) {

          setMarketTrend(
            "Strong Bullish"
          );

        } else if (
          currentPrice > 80000
        ) {

          setMarketTrend(
            "Bullish"
          );

        } else {

          setMarketTrend(
            "Neutral"
          );
        }

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

      color:
        "text-yellow-400",
    },

    {
      title:
        "BTC Holdings",

      value:
        `${wallet?.btc || 0} BTC`,

      color:
        "text-orange-400",
    },

    {
      title:
        "Open Orders",

      value:
        orders.length || 0,

      color:
        "text-blue-400",
    },

    {
      title:
        "Live BTC Price",

      value:
        `$${btcPrice.toLocaleString()}`,

      color:
        "text-green-400",
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

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-5xl font-black text-white">
            Trading Dashboard
          </h1>

          <p className="text-zinc-500 mt-2">
            Monitor your portfolio and real-time trading activity
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <div className="flex items-center gap-3 bg-green-500/20 px-5 py-3 rounded-2xl">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">
              LIVE MARKET
            </span>

          </div>

          <button className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-black px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105">

            Deposit Funds

          </button>

        </div>

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

              <h2 className={`text-4xl font-black break-words ${stat.color}`}>

                {stat.value}

              </h2>

            </div>
          ))
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            Market Trend
          </p>

          <h2 className="text-4xl font-black text-green-400">
            {marketTrend}
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            BTC 24H Change
          </p>

          <h2 className={`text-4xl font-black ${
            priceChange.includes("-")
              ? "text-red-400"
              : "text-green-400"
          }`}>

            {priceChange}

          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-3">
            Exchange Status
          </p>

          <h2 className="text-4xl font-black text-blue-400">
            Operational
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-4 gap-8">

        <div className="2xl:col-span-3 space-y-8">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

              <div>

                <h2 className="text-4xl font-black text-white">
                  BTC/USDT
                </h2>

                <div className="flex items-center gap-3 mt-2">

                  <p className="text-zinc-500">
                    Real-Time Trading Chart
                  </p>

                  <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">

                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                    <span className="text-green-400 text-sm font-bold">
                      LIVE
                    </span>

                  </div>

                </div>

              </div>

              <div className="text-left md:text-right">

                <h2 className="text-4xl font-black text-white">

                  $
                  {
                    btcPrice.toLocaleString()
                  }

                </h2>

                <p className={`font-bold mt-1 ${
                  priceChange.includes("-")
                    ? "text-red-400"
                    : "text-green-400"
                }`}>

                  {priceChange}

                </p>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden">

              <TradingViewWidget />

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <LiveTicker
              symbol="BTCUSDT"
              price={btcPrice}
              change={priceChange}
            />

            <LiveTicker
              symbol="ETHUSDT"
              price="4280"
              change="+2.84%"
            />

            <LiveTicker
              symbol="SOLUSDT"
              price="182"
              change="+5.21%"
            />

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