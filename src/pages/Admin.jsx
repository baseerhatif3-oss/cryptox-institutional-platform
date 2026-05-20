import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import toast from "react-hot-toast";

const Admin =
  () => {
    const [users,
      setUsers] =
      useState([]);

    const [stats,
      setStats] =
      useState({
        totalUsers: 0,

        totalTrades: 0,

        totalVolume: 0,

        totalFees: 0,
      });

    const [loading,
      setLoading] =
      useState(false);

    const token =
      localStorage.getItem(
        "token"
      );

    /* =========================
       FETCH USERS
    ========================= */

    useEffect(() => {
      fetchUsers();

      fetchStats();
    }, []);

    const fetchUsers =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/admin/users",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setUsers(
            res.data
          );
        } catch (error) {
          console.log(error);
        }
      };

    /* =========================
       FETCH STATS
    ========================= */

    const fetchStats =
      async () => {
        try {
          const res =
            await axios.get(
              "https://crypto-backend-dojp.onrender.com/api/admin/stats",
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
        }
      };

    /* =========================
       FREEZE ACCOUNT
    ========================= */

    const freezeUser =
      async (id) => {
        try {
          setLoading(true);

          await axios.post(
            `https://crypto-backend-dojp.onrender.com/api/admin/freeze/${id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Account frozen"
          );

          fetchUsers();
        } catch (error) {
          console.log(error);

          toast.error(
            "Freeze failed"
          );
        } finally {
          setLoading(false);
        }
      };

    /* =========================
       UNFREEZE ACCOUNT
    ========================= */

    const unfreezeUser =
      async (id) => {
        try {
          setLoading(true);

          await axios.post(
            `https://crypto-backend-dojp.onrender.com/api/admin/unfreeze/${id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Account unfrozen"
          );

          fetchUsers();
        } catch (error) {
          console.log(error);

          toast.error(
            "Unfreeze failed"
          );
        } finally {
          setLoading(false);
        }
      };

    /* =========================
       ADD BALANCE
    ========================= */

    const addBalance =
      async (
        id,
        asset
      ) => {
        const amount =
          prompt(
            `Enter ${asset} amount`
          );

        if (!amount)
          return;

        try {
          await axios.post(
            `https://crypto-backend-dojp.onrender.com/api/admin/balance/${id}`,
            {
              asset,
              amount:
                Number(
                  amount
                ),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Balance updated"
          );

          fetchUsers();
        } catch (error) {
          console.log(error);

          toast.error(
            "Balance update failed"
          );
        }
      };

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Admin Control Panel
            </h1>

            <p className="text-slate-400 mt-3">
              Professional exchange administration system
            </p>
          </div>

          {/* ANALYTICS */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* USERS */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                Total Users
              </p>

              <h2 className="text-4xl font-bold">
                {
                  stats.totalUsers
                }
              </h2>
            </div>

            {/* TRADES */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                Total Trades
              </p>

              <h2 className="text-4xl font-bold text-green-400">
                {
                  stats.totalTrades
                }
              </h2>
            </div>

            {/* VOLUME */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                Trading Volume
              </p>

              <h2 className="text-4xl font-bold text-yellow-400">
                $
                {Number(
                  stats.totalVolume
                ).toLocaleString()}
              </h2>
            </div>

            {/* FEES */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <p className="text-slate-400 mb-2">
                Revenue
              </p>

              <h2 className="text-4xl font-bold text-blue-400">
                $
                {Number(
                  stats.totalFees
                ).toFixed(
                  2
                )}
              </h2>
            </div>
          </div>

          {/* USERS TABLE */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-800">
              <h2 className="text-3xl font-bold">
                User Management
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="text-left p-5">
                      Name
                    </th>

                    <th className="text-left p-5">
                      Email
                    </th>

                    <th className="text-left p-5">
                      USD
                    </th>

                    <th className="text-left p-5">
                      BTC
                    </th>

                    <th className="text-left p-5">
                      ETH
                    </th>

                    <th className="text-left p-5">
                      Status
                    </th>

                    <th className="text-left p-5">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map(
                    (
                      user
                    ) => (
                      <tr
                        key={
                          user._id
                        }
                        className="border-t border-slate-800"
                      >
                        <td className="p-5 font-bold">
                          {
                            user.name
                          }
                        </td>

                        <td className="p-5 text-slate-300">
                          {
                            user.email
                          }
                        </td>

                        <td className="p-5">
                          $
                          {
                            user
                              .balances
                              .USD
                          }
                        </td>

                        <td className="p-5">
                          {
                            user
                              .balances
                              .BTC
                          }
                        </td>

                        <td className="p-5">
                          {
                            user
                              .balances
                              .ETH
                          }
                        </td>

                        <td className="p-5">
                          <span
                            className={`px-4 py-2 rounded-xl text-sm font-bold ${
                              user.isFrozen
                                ? "bg-red-500/20 text-red-400"
                                : "bg-green-500/20 text-green-400"
                            }`}
                          >
                            {user.isFrozen
                              ? "FROZEN"
                              : "ACTIVE"}
                          </span>
                        </td>

                        <td className="p-5">
                          <div className="flex flex-wrap gap-3">
                            {user.isFrozen ? (
                              <button
                                onClick={() =>
                                  unfreezeUser(
                                    user._id
                                  )
                                }
                                disabled={
                                  loading
                                }
                                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-xl text-sm font-bold"
                              >
                                Unfreeze
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  freezeUser(
                                    user._id
                                  )
                                }
                                disabled={
                                  loading
                                }
                                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl text-sm font-bold"
                              >
                                Freeze
                              </button>
                            )}

                            <button
                              onClick={() =>
                                addBalance(
                                  user._id,
                                  "USD"
                                )
                              }
                              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-sm font-bold"
                            >
                              Add USD
                            </button>

                            <button
                              onClick={() =>
                                addBalance(
                                  user._id,
                                  "BTC"
                                )
                              }
                              className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-xl text-sm font-bold"
                            >
                              Add BTC
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Admin;