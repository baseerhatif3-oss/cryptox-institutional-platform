import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Admin = () => {

  const [users, setUsers] =
    useState([]);

  const [stats, setStats] =
    useState({

      users: 12842,

      volume: "2.8B",

      futures: "940M",

      revenue: "182K",
    });

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

        const res =
          await axios.get(
            `${API}/admin/users`
          );

        setUsers(
          res.data.users || []
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

        const res =
          await axios.put(
            `${API}/admin/freeze/${id}`
          );

        alert(
          res.data.message
        );

        fetchUsers();

      } catch (error) {

        console.log(error);

        alert(
          "Action failed"
        );
      }
    };

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Admin Control Center
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Institutional exchange management infrastructure
          </p>

        </div>

        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-3 rounded-2xl font-bold">
          ADMIN ACCESS
        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Total Users
          </p>

          <h2 className="text-5xl font-black mt-4">
            {stats.users}
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            24H Volume
          </p>

          <h2 className="text-5xl font-black mt-4">
            ${stats.volume}
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Futures OI
          </p>

          <h2 className="text-5xl font-black mt-4">
            ${stats.futures}
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Revenue
          </p>

          <h2 className="text-5xl font-black mt-4 text-green-400">
            ${stats.revenue}
          </h2>

        </div>

      </div>

      {/* USERS TABLE */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        {/* HEADER */}

        <div className="p-8 border-b border-white/10">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div>

              <h2 className="text-3xl font-black">
                User Management
              </h2>

              <p className="text-gray-400 mt-2">
                Monitor and manage exchange users
              </p>

            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-bold">
              LIVE ADMIN DATA
            </div>

          </div>

        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-black/40">

              <tr className="text-left">

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  User
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Email
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Role
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Verification
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Status
                </th>

                <th className="px-8 py-5 text-gray-400 font-semibold">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {users.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="px-8 py-12 text-center text-gray-500"
                  >

                    No users found

                  </td>

                </tr>

              )}

              {users.map(
                (user) => (

                  <tr
                    key={user._id}
                    className="border-t border-white/5 hover:bg-white/[0.02] transition"
                  >

                    {/* USER */}

                    <td className="px-8 py-6">

                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black">
                          {user.name?.charAt(0)}
                        </div>

                        <div>

                          <h3 className="font-black">
                            {user.name}
                          </h3>

                        </div>

                      </div>

                    </td>

                    {/* EMAIL */}

                    <td className="px-8 py-6 text-gray-300">

                      {user.email}

                    </td>

                    {/* ROLE */}

                    <td className="px-8 py-6">

                      <span
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${
                          user.role ===
                          "admin"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >

                        {user.role}

                      </span>

                    </td>

                    {/* VERIFIED */}

                    <td className="px-8 py-6">

                      <span
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${
                          user.isVerified
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >

                        {user.isVerified
                          ? "VERIFIED"
                          : "PENDING"}

                      </span>

                    </td>

                    {/* STATUS */}

                    <td className="px-8 py-6">

                      <span
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${
                          user.isFrozen
                            ? "bg-red-500/10 text-red-400"
                            : "bg-green-500/10 text-green-400"
                        }`}
                      >

                        {user.isFrozen
                          ? "FROZEN"
                          : "ACTIVE"}

                      </span>

                    </td>

                    {/* ACTIONS */}

                    <td className="px-8 py-6">

                      <button
                        onClick={() =>
                          freezeUser(
                            user._id
                          )
                        }
                        className={`px-5 py-3 rounded-2xl font-bold transition ${
                          user.isFrozen
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >

                        {user.isFrozen
                          ? "Unfreeze"
                          : "Freeze"}

                      </button>

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