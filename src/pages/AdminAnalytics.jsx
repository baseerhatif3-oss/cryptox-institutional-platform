import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

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

            <h1 className="text-4xl font-black text-yellow-400 animate-pulse">

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

        color:
          "text-blue-400",
      },

      {
        title:
          "Total Orders",

        value:
          analytics.totalOrders,

        color:
          "text-yellow-400",
      },

      {
        title:
          "Open Orders",

        value:
          analytics.openOrders,

        color:
          "text-orange-400",
      },

      {
        title:
          "Filled Orders",

        value:
          analytics.filledOrders,

        color:
          "text-green-400",
      },

      {
        title:
          "Platform Liquidity",

        value:
          `$${analytics.totalBalance}`,

        color:
          "text-purple-400",
      },
    ];

    return (

      <MainLayout>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-black">
              Admin Analytics
            </h1>

            <p className="text-zinc-500 mt-2">
              Enterprise exchange monitoring dashboard
            </p>

          </div>

          <div className="flex items-center gap-3 bg-green-500/20 px-5 py-3 rounded-2xl w-fit">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">
              LIVE ANALYTICS
            </span>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {
            cards.map(
              (
                card,
                index
              ) => (

                <div
                  key={index}
                  className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8"
                >

                  <p className="text-zinc-500 mb-4">
                    {card.title}
                  </p>

                  <h2 className={`text-5xl font-black ${card.color}`}>

                    {card.value}

                  </h2>

                </div>
              )
            )
          }

        </div>

      </MainLayout>
    );
};

export default AdminAnalytics;