import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const ExchangeAnalytics =
  () => {

    const [stats, setStats] =
      useState(null);

    const [loading, setLoading] =
      useState(true);

    /*
    ==========================================
    FETCH ANALYTICS
    ==========================================
    */

    useEffect(() => {

      fetchStats();

      /*
      ==========================================
      AUTO REFRESH
      ==========================================
      */

      const interval =
        setInterval(() => {
          fetchStats();
        }, 5000);

      return () =>
        clearInterval(
          interval
        );

    }, []);

    const fetchStats =
      async () => {
        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await axios.get(
              `${API}/admin/stats`,
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
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

    /*
    ==========================================
    LOADING
    ==========================================
    */

    if (loading) {
      return (
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          Loading analytics...
        </div>
      );
    }

    /*
    ==========================================
    NO DATA
    ==========================================
    */

    if (!stats) {
      return (
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-red-400">
          Failed to load analytics
        </div>
      );
    }

    return (
      <div className="space-y-6">

        {/* HEADER */}

        <div>

          <h2 className="text-3xl font-bold">
            Exchange Analytics
          </h2>

          <p className="text-gray-400 mt-2">
            Live exchange performance metrics
          </p>

        </div>

        {/* STATS GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* USERS */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Total Users
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {
                stats.totalUsers
              }
            </h2>

            <p className="text-green-400 mt-3">
              Active Accounts
            </p>

          </div>

          {/* TRADES */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Total Trades
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {
                stats.totalTrades
              }
            </h2>

            <p className="text-blue-400 mt-3">
              Exchange Executions
            </p>

          </div>

          {/* ORDERS */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Total Orders
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {
                stats.totalOrders
              }
            </h2>

            <p className="text-yellow-400 mt-3">
              Trading Activity
            </p>

          </div>

          {/* OPEN FUTURES */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Open Futures
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {
                stats.openFutures
              }
            </h2>

            <p className="text-purple-400 mt-3">
              Leveraged Positions
            </p>

          </div>

          {/* VOLUME */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Exchange Volume
            </p>

            <h2 className="text-4xl font-bold mt-4">
              $
              {Number(
                stats.totalVolume || 0
              ).toLocaleString()}
            </h2>

            <p className="text-green-400 mt-3">
              Total Volume
            </p>

          </div>

          {/* REVENUE */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

            <p className="text-gray-400">
              Exchange Revenue
            </p>

            <h2 className="text-4xl font-bold mt-4">
              $
              {Number(
                stats.totalRevenue || 0
              ).toLocaleString()}
            </h2>

            <p className="text-orange-400 mt-3">
              Trading Fees
            </p>

          </div>

        </div>

      </div>
    );
  };

export default
  ExchangeAnalytics;