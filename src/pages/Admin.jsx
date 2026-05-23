import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Admin = () => {
  const [users, setUsers] =
    useState([]);

  const [stats, setStats] =
    useState({
      totalUsers: 0,
      totalTrades: 0,
      totalVolume: 0,
      totalRevenue: 0,
    });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =
    async () => {
      try {

        /*
        ==========================================
        FETCH USERS
        ==========================================
        */

        const usersRes =
          await axios.get(
            "https://crypto-backend-dojp.onrender.com/api/admin/users"
          );

        setUsers(
          usersRes.data.users ||
            []
        );



        /*
        ==========================================
        FETCH STATS
        ==========================================
        */

        const statsRes =
          await axios.get(
            "https://crypto-backend-dojp.onrender.com/api/admin/stats"
          );

        setStats(
          statsRes.data
            .stats || {}
        );

      } catch (error) {

        console.log(error);
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

        await axios.post(
          `https://crypto-backend-dojp.onrender.com/api/admin/freeze/${id}`
        );

        fetchData();

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

        await axios.post(
          `https://crypto-backend-dojp.onrender.com/api/admin/unfreeze/${id}`
        );

        fetchData();

      } catch (error) {

        console.log(error);
      }
    };



  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-bold">
          Admin Panel
        </h1>

        <p className="text-gray-400 mt-2">
          Exchange management dashboard
        </p>
      </div>



      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Users
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {
              stats.totalUsers || 0
            }
          </h2>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Trades
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {
              stats.totalTrades || 0
            }
          </h2>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Trading Volume
          </p>

          <h2 className="text-4xl font-bold mt-3">
            $
            {Number(
              stats.totalVolume || 0
            ).toFixed(2)}
          </h2>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Exchange Revenue
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-400">
            $
            {Number(
              stats.totalRevenue || 0
            ).toFixed(2)}
          </h2>
        </div>
      </div>



      {/* USERS TABLE */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Users
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-gray-800">

                <th className="text-left pb-4">
                  Name
                </th>

                <th className="text-left pb-4">
                  Email
                </th>

                <th className="text-left pb-4">
                  Status
                </th>

                <th className="text-left pb-4">
                  Joined
                </th>

                <th className="text-left pb-4">
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
                    className="border-b border-gray-900"
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

                      {user.isFrozen ? (
                        <span className="text-red-400">
                          Frozen
                        </span>
                      ) : (
                        <span className="text-green-400">
                          Active
                        </span>
                      )}

                    </td>

                    <td className="py-4">
                      {new Date(
                        user.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="py-4">

                      {user.isFrozen ? (

                        <button
                          onClick={() =>
                            unfreezeUser(
                              user._id
                            )
                          }
                          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
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
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                        >
                          Freeze
                        </button>

                      )}

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