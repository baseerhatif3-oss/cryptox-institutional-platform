import React from "react";

const Admin =
  () => {
    const stats = [
      {
        title:
          "Total Users",

        value:
          "12,540",
      },

      {
        title:
          "24h Volume",

        value:
          "$24.8M",
      },

      {
        title:
          "Exchange Revenue",

        value:
          "$482,000",
      },

      {
        title:
          "Pending KYC",

        value:
          "128",
      },
    ];

    const users = [
      {
        name:
          "Ahmed Khan",

        email:
          "ahmed@example.com",

        status:
          "Active",

        kyc:
          "Verified",
      },

      {
        name:
          "Ali Raza",

        email:
          "ali@example.com",

        status:
          "Frozen",

        kyc:
          "Pending",
      },

      {
        name:
          "Sara Noor",

        email:
          "sara@example.com",

        status:
          "Active",

        kyc:
          "Verified",
      },
    ];

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Professional exchange management system
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map(
            (
              stat,
              index
            ) => (
              <div
                key={
                  index
                }
                className="bg-[#111] border border-gray-800 rounded-2xl p-6"
              >
                <p className="text-gray-400">
                  {
                    stat.title
                  }
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {
                    stat.value
                  }
                </h2>
              </div>
            )
          )}
        </div>

        {/* USER TABLE */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold">
              User Management
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black">
                <tr>
                  <th className="text-left p-4">
                    Name
                  </th>

                  <th className="text-left p-4">
                    Email
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    KYC
                  </th>

                  <th className="text-left p-4">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map(
                  (
                    user,
                    index
                  ) => (
                    <tr
                      key={
                        index
                      }
                      className="border-t border-gray-800"
                    >
                      <td className="p-4 font-semibold">
                        {
                          user.name
                        }
                      </td>

                      <td className="p-4 text-gray-400">
                        {
                          user.email
                        }
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            user.status ===
                            "Active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {
                            user.status
                          }
                        </span>
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            user.kyc ===
                            "Verified"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {
                            user.kyc
                          }
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-bold">
                            Approve
                          </button>

                          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                            Freeze
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

        {/* KYC PANEL */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Pending KYC Requests
          </h2>

          <div className="space-y-4">
            {[
              "User #2481",
              "User #2482",
              "User #2483",
            ].map(
              (
                item
              ) => (
                <div
                  key={
                    item
                  }
                  className="flex items-center justify-between border-b border-gray-800 pb-4"
                >
                  <div>
                    <p className="font-semibold">
                      {item}
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                      Submitted passport verification
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-xl font-bold">
                      Approve
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-bold">
                      Reject
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

export default Admin;