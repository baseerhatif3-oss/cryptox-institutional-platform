import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import toast from "react-hot-toast";

const Dashboard =
  () => {
    const [user,
      setUser] =
      useState(null);

    const [coin,
      setCoin] =
      useState("BTC");

    const [type,
      setType] =
      useState("BUY");

    const [amount,
      setAmount] =
      useState(0.01);

    const [price,
      setPrice] =
      useState(65000);

    const [loading,
      setLoading] =
      useState(false);

    const [trades,
      setTrades] =
      useState([]);

    useEffect(() => {
      fetchProfile();

      fetchTrades();
    }, []);

    const token =
      localStorage.getItem(
        "token"
      );

    const fetchProfile =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/user/profile",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setUser(
            res.data
          );
        } catch (error) {
          console.log(error);
        }
      };

    const fetchTrades =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/trades",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setTrades(
            res.data
          );
        } catch (error) {
          console.log(error);
        }
      };

    const executeTrade =
      async () => {
        try {
          setLoading(true);

          await axios.post(
            "https://crypto-backend-dojp.onrender.com/api/trade",
            {
              type,
              coin,
              amount:
                Number(
                  amount
                ),
              price:
                Number(
                  price
                ),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            `${type} order executed`
          );

          fetchProfile();

          fetchTrades();
        } catch (error) {
          console.log(error);

          toast.error(
            error.response
              ?.data
              ?.message ||
              "Trade failed"
          );
        } finally {
          setLoading(false);
        }
      };

    const total =
      amount * price;

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Trading Terminal
            </h1>

            <p className="text-slate-400 mt-3">
              Professional crypto exchange engine
            </p>
          </div>

          {/* BALANCES */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {user &&
              Object.entries(
                user.balances
              ).map(
                (
                  [
                    asset,
                    balance,
                  ]
                ) => (
                  <div
                    key={asset}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
                  >
                    <p className="text-slate-400 mb-2">
                      {asset}
                    </p>

                    <h2 className="text-3xl font-bold">
                      {balance}
                    </h2>
                  </div>
                )
              )}
          </div>

          {/* TRADING PANEL */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TRADE BOX */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-8">
                Execute Trade
              </h2>

              {/* TYPE */}

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() =>
                    setType(
                      "BUY"
                    )
                  }
                  className={`py-4 rounded-2xl font-bold text-xl ${
                    type ===
                    "BUY"
                      ? "bg-green-600"
                      : "bg-slate-800"
                  }`}
                >
                  BUY
                </button>

                <button
                  onClick={() =>
                    setType(
                      "SELL"
                    )
                  }
                  className={`py-4 rounded-2xl font-bold text-xl ${
                    type ===
                    "SELL"
                      ? "bg-red-600"
                      : "bg-slate-800"
                  }`}
                >
                  SELL
                </button>
              </div>

              {/* COIN */}

              <div className="mb-6">
                <label className="block mb-3 text-slate-300">
                  Coin
                </label>

                <select
                  value={
                    coin
                  }
                  onChange={(e) =>
                    setCoin(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                >
                  <option>
                    BTC
                  </option>

                  <option>
                    ETH
                  </option>

                  <option>
                    SOL
                  </option>
                </select>
              </div>

              {/* AMOUNT */}

              <div className="mb-6">
                <label className="block mb-3 text-slate-300">
                  Amount
                </label>

                <input
                  type="number"
                  value={
                    amount
                  }
                  onChange={(e) =>
                    setAmount(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                />
              </div>

              {/* PRICE */}

              <div className="mb-6">
                <label className="block mb-3 text-slate-300">
                  Price
                </label>

                <input
                  type="number"
                  value={
                    price
                  }
                  onChange={(e) =>
                    setPrice(
                      e.target
                        .value
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
                />
              </div>

              {/* TOTAL */}

              <div className="bg-slate-800 rounded-2xl p-5 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    Total
                  </span>

                  <span className="text-2xl font-bold">
                    $
                    {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* BUTTON */}

              <button
                onClick={
                  executeTrade
                }
                disabled={
                  loading
                }
                className={`w-full py-5 rounded-2xl font-bold text-2xl ${
                  type ===
                  "BUY"
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-red-600 hover:bg-red-500"
                }`}
              >
                {loading
                  ? "Processing..."
                  : `${type} ${coin}`}
              </button>
            </div>

            {/* TRADE HISTORY */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-800">
                <h2 className="text-3xl font-bold">
                  Trade History
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-800">
                    <tr>
                      <th className="text-left p-5">
                        Type
                      </th>

                      <th className="text-left p-5">
                        Coin
                      </th>

                      <th className="text-left p-5">
                        Amount
                      </th>

                      <th className="text-left p-5">
                        Price
                      </th>

                      <th className="text-left p-5">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {trades.length ===
                    0 ? (
                      <tr>
                        <td
                          colSpan="5"
                          className="p-10 text-center text-slate-400"
                        >
                          No trades yet
                        </td>
                      </tr>
                    ) : (
                      trades.map(
                        (
                          trade
                        ) => (
                          <tr
                            key={
                              trade._id
                            }
                            className="border-t border-slate-800"
                          >
                            <td className="p-5">
                              <span
                                className={`px-4 py-2 rounded-xl text-sm font-bold ${
                                  trade.type ===
                                  "BUY"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {
                                  trade.type
                                }
                              </span>
                            </td>

                            <td className="p-5">
                              {
                                trade.coin
                              }
                            </td>

                            <td className="p-5">
                              {
                                trade.amount
                              }
                            </td>

                            <td className="p-5">
                              $
                              {
                                trade.price
                              }
                            </td>

                            <td className="p-5">
                              $
                              {Number(
                                trade.total
                              ).toLocaleString()}
                            </td>
                          </tr>
                        )
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;