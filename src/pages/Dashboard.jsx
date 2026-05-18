import {
  useEffect,
  useState,
} from "react";

import {
  Wallet,
  TrendingUp,
  Activity,
  Bitcoin,
} from "lucide-react";

import API from "../api/axios";

import LivePrices from "../components/LivePrices";

const Dashboard = () => {
  const [user, setUser] =
    useState(null);

  const [trades, setTrades] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchData =
    async () => {
      try {
        const [
          profileRes,
          tradesRes,
        ] = await Promise.all([
          API.get(
            "/user/profile"
          ),

          API.get("/trades"),
        ]);

        setUser(
          profileRes.data
        );

        setTrades(
          tradesRes.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading dashboard...
      </div>
    );
  }

  const balances =
    user?.balances || {};

  const totalValue =
    (balances.USD || 0) +
    (balances.BTC || 0) *
      105000 +
    (balances.ETH || 0) *
      6200 +
    (balances.SOL || 0) *
      210;

  const marketData = [
    {
      coin: "Bitcoin",
      symbol: "BTC",
      price: 105000,
      change: "+4.8%",
    },

    {
      coin: "Ethereum",
      symbol: "ETH",
      price: 6200,
      change: "+3.2%",
    },

    {
      coin: "Solana",
      symbol: "SOL",
      price: 210,
      change: "+8.4%",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-2 text-lg">
            Professional crypto
            exchange dashboard
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Wallet
              size={38}
              className="text-green-400 mb-4"
            />

            <p className="text-slate-400">
              Portfolio Value
            </p>

            <h2 className="text-5xl font-bold mt-4">
              $
              {totalValue.toLocaleString()}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Bitcoin
              size={38}
              className="text-orange-400 mb-4"
            />

            <p className="text-slate-400">
              BTC Holdings
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {balances.BTC || 0}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <TrendingUp
              size={38}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              Total Trades
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {trades.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Activity
              size={38}
              className="text-purple-400 mb-4"
            />

            <p className="text-slate-400">
              Exchange Status
            </p>

            <h2 className="text-5xl font-bold mt-4 text-green-400">
              Online
            </h2>
          </div>
        </div>

        {/* LIVE PRICES */}

        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Live Market Prices
          </h2>

          <LivePrices />
        </div>

        {/* MARKET + RECENT TRADES */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* MARKET */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Market Overview
            </h2>

            <div className="space-y-5">
              {marketData.map(
                (market) => (
                  <div
                    key={
                      market.symbol
                    }
                    className="bg-slate-800 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-bold">
                        {
                          market.coin
                        }
                      </h3>

                      <p className="text-slate-400">
                        {
                          market.symbol
                        }
                      </p>
                    </div>

                    <div className="text-right">
                      <h2 className="text-3xl font-bold">
                        $
                        {market.price.toLocaleString()}
                      </h2>

                      <p className="text-green-400 font-bold">
                        {
                          market.change
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* RECENT TRADES */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Recent Trades
            </h2>

            <div className="space-y-5">
              {trades.length ===
              0 ? (
                <div className="text-slate-400">
                  No trades yet
                </div>
              ) : (
                trades
                  .slice(0, 5)
                  .map(
                    (trade) => (
                      <div
                        key={
                          trade._id
                        }
                        className="bg-slate-800 rounded-2xl p-5 flex items-center justify-between"
                      >
                        <div>
                          <h3 className="text-2xl font-bold">
                            {
                              trade.coin
                            }
                          </h3>

                          <p className="text-slate-400">
                            {
                              trade.symbol
                            }
                          </p>
                        </div>

                        <div className="text-right">
                          <div
                            className={`font-bold text-xl ${
                              trade.side ===
                              "BUY"
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {
                              trade.side
                            }
                          </div>

                          <p className="text-slate-400">
                            $
                            {trade.total.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;