import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import PremiumCard from "../components/PremiumCard";

import API from "../services/api";

const AdminAnalytics =
  () => {

    const [
      analytics,
      setAnalytics,
    ] = useState(null);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {

      fetchAnalytics();

      const interval =
        setInterval(
          fetchAnalytics,
          5000
        );

      return () =>
        clearInterval(
          interval
        );

    }, []);

    const fetchAnalytics =
      async () => {

        try {

          const response =
            await API.get(
              "/admin/analytics"
            );

          setAnalytics(
            response.data
              .analytics
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    if (loading) {

      return (

        <MainLayout>

          <div className="flex items-center justify-center h-[70vh]">

            <h1 className="text-5xl font-black text-yellow-400 animate-pulse">

              Loading Analytics...

            </h1>

          </div>

        </MainLayout>
      );
    }

    const cards = [

      {
        title:
          "Total Users",

        value:
          analytics.totalUsers,

        subtitle:
          "Registered exchange users",

        color:
          "text-blue-400",
      },

      {
        title:
          "Total Orders",

        value:
          analytics.totalOrders,

        subtitle:
          "Platform-wide orders",

        color:
          "text-yellow-400",
      },

      {
        title:
          "Open Orders",

        value:
          analytics.openOrders,

        subtitle:
          "Currently active trades",

        color:
          "text-orange-400",
      },

      {
        title:
          "Filled Orders",

        value:
          analytics.filledOrders,

        subtitle:
          "Successfully executed trades",

        color:
          "text-green-400",
      },

      {
        title:
          "Liquidity",

        value:
          `$${analytics.totalBalance}`,

        subtitle:
          "Exchange total balance",

        color:
          "text-purple-400",
      },

      {
        title:
          "Exchange Status",

        value:
          "LIVE",

        subtitle:
          "All systems operational",

        color:
          "text-green-400",
      },
    ];

    return (

      <MainLayout>

        <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"></div>

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            <div>

              <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-6">

                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                <span className="text-green-400 font-bold">

                  ADMIN LIVE MONITORING

                </span>

              </div>

              <h1 className="text-6xl font-black leading-tight">

                Exchange
                <span className="text-yellow-400">
                  {" "}Analytics
                </span>

              </h1>

              <p className="text-zinc-400 text-xl mt-6 max-w-3xl leading-relaxed">

                Enterprise-grade monitoring and analytics infrastructure for CryptoX exchange platform.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="glass rounded-3xl p-6">

                <p className="text-zinc-500 mb-3">
                  Total Users
                </p>

                <h2 className="text-4xl font-black text-blue-400">

                  {
                    analytics.totalUsers
                  }

                </h2>

              </div>

              <div className="glass rounded-3xl p-6">

                <p className="text-zinc-500 mb-3">
                  Orders
                </p>

                <h2 className="text-4xl font-black text-yellow-400">

                  {
                    analytics.totalOrders
                  }

                </h2>

              </div>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">

          {
            cards.map(
              (
                card,
                index
              ) => (

                <PremiumCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  subtitle={card.subtitle}
                  color={card.color}
                />
              )
            )
          }

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <div className="glass rounded-3xl p-8">

            <h2 className="text-4xl font-black mb-8">

              Platform Overview

            </h2>

            <div className="space-y-6">

              <div className="flex items-center justify-between">

                <span className="text-zinc-400">
                  WebSocket Engine
                </span>

                <span className="text-green-400 font-bold">
                  Operational
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-400">
                  Matching Engine
                </span>

                <span className="text-green-400 font-bold">
                  Active
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-400">
                  Redis Cache
                </span>

                <span className="text-green-400 font-bold">
                  Running
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-zinc-400">
                  AI Signals
                </span>

                <span className="text-green-400 font-bold">
                  Live
                </span>

              </div>

            </div>

          </div>

          <div className="glass rounded-3xl p-8">

            <h2 className="text-4xl font-black mb-8">

              Exchange Metrics

            </h2>

            <div className="space-y-6">

              <div>

                <div className="flex items-center justify-between mb-3">

                  <span className="text-zinc-400">
                    Security Score
                  </span>

                  <span className="text-yellow-400 font-bold">
                    99%
                  </span>

                </div>

                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">

                  <div className="h-full w-[99%] bg-yellow-400 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex items-center justify-between mb-3">

                  <span className="text-zinc-400">
                    System Performance
                  </span>

                  <span className="text-green-400 font-bold">
                    96%
                  </span>

                </div>

                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">

                  <div className="h-full w-[96%] bg-green-400 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex items-center justify-between mb-3">

                  <span className="text-zinc-400">
                    Scalability
                  </span>

                  <span className="text-blue-400 font-bold">
                    94%
                  </span>

                </div>

                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">

                  <div className="h-full w-[94%] bg-blue-400 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </MainLayout>
    );
};

export default AdminAnalytics;