import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const Admin = () => {
  const [users, setUsers] =
    useState([]);

  const [trades, setTrades] =
    useState([]);

  const [positions, setPositions] =
    useState([]);

  const fetchData =
    async () => {
      try {
        const usersRes =
          await API.get(
            "/admin/users"
          );

        const tradesRes =
          await API.get(
            "/admin/trades"
          );

        const positionsRes =
          await API.get(
            "/admin/positions"
          );

        setUsers(
          usersRes.data
        );

        setTrades(
          tradesRes.data
        );

        setPositions(
          positionsRes.data
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Admin access denied"
        );
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  const approveKYC =
    async (id) => {
      try {
        await API.put(
          `/admin/kyc/${id}`
        );

        toast.success(
          "KYC Approved"
        );

        fetchData();
      } catch (error) {
        toast.error(
          "Failed to approve KYC"
        );
      }
    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Exchange control center
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Users
            </p>

            <h2 className="text-5xl font-bold">
              {users.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Trades
            </p>

            <h2 className="text-5xl font-bold">
              {trades.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Open Positions
            </p>

            <h2 className="text-5xl font-bold">
              {
                positions.length
              }
            </h2>
          </div>
        </div>

        {/* USERS */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-10 overflow-x-auto">
          <h2 className="text-3xl font-bold mb-8">
            Users
          </h2>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-800">
                <th className="pb-4">
                  Name
                </th>

                <th className="pb-4">
                  Email
                </th>

                <th className="pb-4">
                  KYC
                </th>

                <th className="pb-4">
                  Admin
                </th>

                <th className="pb-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map(
                (user) => (
                  <tr
                    key={
                      user._id
                    }
                    className="border-b border-slate-800"
                  >
                    <td className="py-4">
                      {
                        user.name
                      }
                    </td>

                    <td className="py-4">
                      {
                        user.email
                      }
                    </td>

                    <td className="py-4">
                      {
                        user.kycStatus
                      }
                    </td>

                    <td className="py-4">
                      {user.isAdmin
                        ? "YES"
                        : "NO"}
                    </td>

                    <td className="py-4">
                      {user.kycStatus ===
                        "PENDING" && (
                        <button
                          onClick={() =>
                            approveKYC(
                              user._id
                            )
                          }
                          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl font-bold"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* TRADES */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-10 overflow-x-auto">
          <h2 className="text-3xl font-bold mb-8">
            Recent Trades
          </h2>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-800">
                <th className="pb-4">
                  Coin
                </th>

                <th className="pb-4">
                  Side
                </th>

                <th className="pb-4">
                  Amount
                </th>

                <th className="pb-4">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              {trades.map(
                (trade) => (
                  <tr
                    key={
                      trade._id
                    }
                    className="border-b border-slate-800"
                  >
                    <td className="py-4">
                      {
                        trade.coin
                      }
                    </td>

                    <td
                      className={`py-4 font-bold ${
                        trade.side ===
                        "BUY"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {
                        trade.side
                      }
                    </td>

                    <td className="py-4">
                      {
                        trade.amount
                      }
                    </td>

                    <td className="py-4">
                      $
                      {trade.price.toLocaleString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* POSITIONS */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 overflow-x-auto">
          <h2 className="text-3xl font-bold mb-8">
            Open Positions
          </h2>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-800">
                <th className="pb-4">
                  Coin
                </th>

                <th className="pb-4">
                  Side
                </th>

                <th className="pb-4">
                  Leverage
                </th>

                <th className="pb-4">
                  Margin
                </th>
              </tr>
            </thead>

            <tbody>
              {positions.map(
                (
                  position
                ) => (
                  <tr
                    key={
                      position._id
                    }
                    className="border-b border-slate-800"
                  >
                    <td className="py-4">
                      {
                        position.coin
                      }
                    </td>

                    <td
                      className={`py-4 font-bold ${
                        position.side ===
                        "LONG"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {
                        position.side
                      }
                    </td>

                    <td className="py-4">
                      {
                        position.leverage
                      }
                      x
                    </td>

                    <td className="py-4">
                      $
                      {position.margin.toLocaleString()}
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