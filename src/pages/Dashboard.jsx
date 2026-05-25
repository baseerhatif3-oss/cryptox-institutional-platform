import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import TradingViewWidget from "../components/TradingViewWidget";

import TradingPanel from "../components/TradingPanel";

import API from "../services/api";

const Dashboard = () => {

  const [wallet, setWallet] =
    useState(null);

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData =
    async () => {

      try {

        const walletRes =
          await API.get(
            "/wallet/my-wallet"
          );

        const ordersRes =
          await API.get(
            "/orders/my-orders"
          );

        setWallet(
          walletRes.data
        );

        setOrders(
          ordersRes.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  const stats = [

    {
      title:
        "Portfolio Balance",

      value:
        `$${wallet?.balance?.toLocaleString() || 0}`,
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
        orders.length,
    },

    {
      title:
        "Trading Volume",

      value:
        "$2.8M",
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

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black">

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

              <h2 className="text-4xl font-black text-white">

                {stat.value}

              </h2>

            </div>
          ))
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        <div className="xl:col-span-3">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-4xl font-black">
                  BTC/USDT
                </h2>

                <p className="text-zinc-500">
                  Live Trading Chart
                </p>

              </div>

            </div>

            <TradingViewWidget />

          </div>

        </div>

        <div>

          <TradingPanel />

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;