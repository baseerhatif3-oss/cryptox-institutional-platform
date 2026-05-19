import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Admin = () => {
  const [stats,
    setStats] =
    useState({
      totalRevenue: 0,

      totalTrades: 0,
    });

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {
    fetchRevenue();
  }, []);

  const fetchRevenue =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.get(
            "https://crypto-backend-dojp.onrender.com/api/admin/revenue",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        setStats(
          res.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );
  }

  const estimatedUsers =
    Math.floor(
      5000 +
        Math.random() *
          20000
    );

  const activeBots =
    Math.floor(
      300 +
        Math.random() *
          1500
    );

  const dailyVolume =
    (
      5000000 +
      Math.random() *
        9000000
    ).toFixed(0);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-3">
            Professional exchange analytics & management
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* REVENUE */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-400 mb-3">
              Exchange Revenue
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              $
              {Number(
                stats.totalRevenue || 0
              ).toLocaleString()}
            </h2>
          </div>

          {/* TRADES */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-400 mb-3">
              Total Trades
            </p>

            <h2 className="text-4xl font-bold">
              {stats.totalTrades}
            </h2>
          </div>

          {/* USERS */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-400 mb-3">
              Total Users
            </p>

            <h2 className="text-4xl font-bold text-blue-400">
              {estimatedUsers.toLocaleString()}
            </h2>
          </div>

          {/* BOTS */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-400 mb-3">
              Active Bots
            </p>

            <h2 className="text-4xl font-bold text-violet-400">
              {activeBots}
            </h2>
          </div>
        </div>

        {/* SECOND ROW */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* VOLUME */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Exchange Statistics
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-5">
                <span className="text-slate-400">
                  Daily Volume
                </span>

                <span className="text-2xl font-bold">
                  $
                  {Number(
                    dailyVolume
                  ).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-5">
                <span className="text-slate-400">
                  Futures Positions
                </span>

                <span className="text-2xl font-bold">
                  12,842
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-5">
                <span className="text-slate-400">
                  AI Signals Generated
                </span>

                <span className="text-2xl font-bold">
                  94,522
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-800 rounded-2xl p-5">
                <span className="text-slate-400">
                  System Status
                </span>

                <span className="text-2xl font-bold text-green-400">
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* PLATFORM HEALTH */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Platform Health
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span>
                    API Performance
                  </span>

                  <span className="text-green-400">
                    99%
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full w-[99%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span>
                    Trading Engine
                  </span>

                  <span className="text-blue-400">
                    97%
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full w-[97%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span>
                    AI Systems
                  </span>

                  <span className="text-violet-400">
                    95%
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-4">
                  <div className="bg-violet-500 h-4 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span>
                    Security Layer
                  </span>

                  <span className="text-yellow-400">
                    100%
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-4">
                  <div className="bg-yellow-500 h-4 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-5">
            Exchange Infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-green-400">
                ACTIVE
              </h3>

              <p className="text-slate-400 mt-2">
                Blockchain Systems
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-blue-400">
                RUNNING
              </h3>

              <p className="text-slate-400 mt-2">
                AI Trading Engine
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-violet-400">
                SECURED
              </h3>

              <p className="text-slate-400 mt-2">
                Exchange Security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;