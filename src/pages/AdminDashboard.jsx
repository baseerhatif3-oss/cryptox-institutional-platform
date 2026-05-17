import { useEffect, useState } from "react";

import {
  Users,
  Wallet,
  ArrowUpRight,
  Activity,
} from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] =
    useState({
      users: 0,
      volume: 0,
      trades: 0,
      active: 0,
    });

  const fetchStats = async () => {
    try {
      const users = JSON.parse(
        localStorage.getItem("allUsers")
      ) || [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ];

      setStats({
        users: users.length,

        volume: 2450000,

        trades: 1280,

        active: 342,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Users",
      value: stats.users,
      icon: <Users size={28} />,
      color: "bg-blue-600",
    },

    {
      title: "24H Volume",
      value: `$${stats.volume.toLocaleString()}`,
      icon: <Wallet size={28} />,
      color: "bg-green-600",
    },

    {
      title: "Total Trades",
      value: stats.trades,
      icon: (
        <ArrowUpRight size={28} />
      ),
      color: "bg-yellow-600",
    },

    {
      title: "Active Traders",
      value: stats.active,
      icon: <Activity size={28} />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Exchange analytics and
            platform monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {statCards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`${card.color} w-14 h-14 rounded-2xl flex items-center justify-center`}
                >
                  {card.icon}
                </div>
              </div>

              <h3 className="text-slate-400 mb-2">
                {card.title}
              </h3>

              <h2 className="text-3xl font-bold">
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Recent Exchange Activity
            </h2>

            <div className="space-y-4">
              {[
                "BTC Buy Order Executed",
                "ETH Limit Order Created",
                "New User Registered",
                "SOL Position Opened",
                "Portfolio Updated",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-4 flex items-center justify-between"
                >
                  <p>{activity}</p>

                  <span className="text-slate-400 text-sm">
                    Just now
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Top Trading Assets
            </h2>

            <div className="space-y-4">
              {[
                {
                  name: "Bitcoin",
                  symbol: "BTC",
                  volume: "$1.2M",
                },

                {
                  name: "Ethereum",
                  symbol: "ETH",
                  volume: "$980K",
                },

                {
                  name: "Solana",
                  symbol: "SOL",
                  volume: "$450K",
                },

                {
                  name: "BNB",
                  symbol: "BNB",
                  volume: "$310K",
                },
              ].map((coin) => (
                <div
                  key={coin.symbol}
                  className="bg-slate-800 rounded-xl p-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-bold">
                      {coin.name}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      {coin.symbol}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-green-400">
                      {coin.volume}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;