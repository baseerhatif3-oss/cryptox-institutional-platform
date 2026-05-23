import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import ExchangeAnalytics from "../components/ExchangeAnalytics";

import KYCReviewPanel from "../components/KYCReviewPanel";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Admin = () => {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /*
  ==========================================
  FETCH USERS
  ==========================================
  */

  useEffect(() => {

    fetchUsers();

  }, []);

  const fetchUsers =
    async () => {
      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.get(
            `${API}/admin/users`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setUsers(
          res.data || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  /*
  ==========================================
  FREEZE USER
  ==========================================
  */

  const freezeUser =
    async (id) => {
      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(
          `${API}/admin/freeze/${id}`,
          {},
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        fetchUsers();

      } catch (error) {

        console.log(error);
      }
    };

  /*
  ==========================================
  UNFREEZE USER
  ==========================================
  */

  const unfreezeUser =
    async (id) => {
      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(
          `${API}/admin/unfreeze/${id}`,
          {},
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        fetchUsers();

      } catch (error) {

        console.log(error);
      }
    };

  /*
  ==========================================
  UPDATE BALANCE
  ==========================================
  */

  const updateBalance =
    async (id) => {

      const coin =
        prompt(
          "Enter coin (BTC, ETH, SOL, USDT)"
        );

      if (!coin) return;

      const amount =
        prompt(
          "Enter amount"
        );

      if (!amount) return;

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(
          `${API}/admin/balance/${id}`,
          {
            coin,
            amount,
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        alert(
          "Balance updated"
        );

      } catch (error) {

        console.log(error);
      }
    };

  if (loading) {

    return (
      <div className="text-white">
        Loading admin panel...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div>

        <h1 className="text-4xl font-bold">
          Admin Panel
        </h1>

        <p className="text-gray-400 mt-2">
          Professional exchange management dashboard
        </p>

      </div>



      {/* EXCHANGE ANALYTICS */}

      <ExchangeAnalytics />



      {/* KYC REVIEW PANEL */}

      <KYCReviewPanel />



      {/* USERS */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              User Management
            </h2>

            <p className="text-gray-400 mt-2">
              Manage exchange users and balances
            </p>

          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm">
            ADMIN
          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-gray-800">

                <th className="text-left py-4">
                  Name
                </th>

                <th className="text-left py-4">
                  Email
                </th>

                <th className="text-left py-4">
                  Role
                </th>

                <th className="text-left py-4">
                  Status
                </th>

                <th className="text-left py-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {users.map(
                (user) => (

                  <tr
                    key={user._id}
                    className="border-b border-gray-900"
                  >

                    <td className="py-4 font-semibold">
                      {user.name}
                    </td>

                    <td className="py-4">
                      {user.email}
                    </td>

                    <td className="py-4">

                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                          user.role ===
                          "admin"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-gray-800 text-gray-300"
                        }`}
                      >
                        {user.role}
                      </span>

                    </td>

                    <td className="py-4">

                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                          user.isFrozen
                            ? "bg-red-500/20 text-red-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {user.isFrozen
                          ? "Frozen"
                          : "Active"}
                      </span>

                    </td>

                    <td className="py-4">

                      <div className="flex flex-wrap gap-3">

                        {!user.isFrozen ? (

                          <button
                            onClick={() =>
                              freezeUser(
                                user._id
                              )
                            }
                            className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl font-semibold"
                          >
                            Freeze
                          </button>

                        ) : (

                          <button
                            onClick={() =>
                              unfreezeUser(
                                user._id
                              )
                            }
                            className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-xl font-semibold"
                          >
                            Unfreeze
                          </button>

                        )}

                        <button
                          onClick={() =>
                            updateBalance(
                              user._id
                            )
                          }
                          className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-xl font-semibold"
                        >
                          Update Balance
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
  );
};

export default Admin;