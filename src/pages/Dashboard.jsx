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

import PremiumCard from "../components/PremiumCard";

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

      subtitle:
        "Total portfolio value",

      color:
        "text-yellow-400",
    },

    {
      title:
        "BTC Holdings",

      value:
        `${wallet?.btc || 0} BTC`,

      subtitle:
        "Bitcoin assets",

      color:
        "text-orange-400",
    },

    {
      title:
        "Open Orders",

      value:
        orders.length || 0,

      subtitle:
        "Active exchange orders",

      color:
        "text-blue-400",
    },

    {
      title:
        "Live BTC Price",

      value:
        `$${btcPrice.toLocaleString()}`,

      subtitle:
        "Real-time market value",

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

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-6">

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-green-400 font-bold">

                LIVE MARKET ACTIVE

              </span>

            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">

              Welcome to
              <span className="text-yellow-400">
                {" "}CryptoX
              </span>

            </h1>

            <p className="text-zinc-400 text-xl mt-6 max-w-3xl leading-relaxed">

              Enterprise-grade cryptocurrency trading platform with AI-powered analytics, real-time execution, and advanced exchange infrastructure.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="glass rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">
                BTC Price
              </p>

              <h2 className="text-4xl font-black text-green-400">

                $
                {
                  btcPrice.toLocaleString()
                }

              </h2>

            </div>

            <div className="glass rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">
                24H Change
              </p>

              <h2 className={`text-4xl font-black ${
                priceChange.includes("-")
                  ? "text-red-400"
                  : "text-green-400"
              }`}>

                {priceChange}

              </h2>

            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 mb-10">

        {
          stats.map(
            (
              stat,
              index
            ) => (

              <PremiumCard
                key={index}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
                color={stat.color}
              />
            )
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">
            Market Trend
          </p>

          <h2 className="text-5xl font-black text-green-400">

            {marketTrend}

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">
            Exchange Status
          </p>

          <h2 className="text-5xl font-black text-blue-400">

            Operational

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">
            Trading Volume
          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            $48M+

          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-4 gap-8">

        <div className="2xl:col-span-3 space-y-8">

          <div className="glass rounded-3xl p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

              <div>

                <h2 className="text-5xl font-black">
                  BTC/USDT
                </h2>

                <div className="flex items-center gap-3 mt-3">

                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                  <span className="text-green-400 font-bold">

                    LIVE CHART

                  </span>

                </div>

              </div>

              <div className="text-left md:text-right">

                <h2 className="text-5xl font-black text-white">

                  $
                  {
                    btcPrice.toLocaleString()
                  }

                </h2>

                <p className={`font-bold text-xl mt-2 ${
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