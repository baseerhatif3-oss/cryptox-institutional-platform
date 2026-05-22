import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Admin = () => {
  const [users, setUsers] =
    useState([]);

  const [
    transactions,
    setTransactions,
  ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =
    async () => {
      try {
        const usersRes =
          await axios.get(
            "https://crypto-backend-dojp.onrender.com/api/user/all"
          );

        setUsers(
          usersRes.data.users ||
            []
        );

        const txRes =
          await axios.get(
            "https://crypto-backend-dojp.onrender.com/api/transactions/admin/all"
          );

        setTransactions(
          txRes.data
            .transactions ||
            []
        );
      } catch (error) {
        console.log(error);
      }
    };

  const totalVolume =
    transactions.reduce(
      (
        total,
        tx
      ) =>
        total +
        Number(
          tx.amount || 0
        ),
      0
    );

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-bold">
          Admin Panel
        </h1>

        <p className="text-gray-400 mt-2">
          Exchange management
          dashboard
        </p>
      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Users
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {users.length}
          </h2>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Transactions
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {
              transactions.length
            }
          </h2>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Trading Volume
          </p>

          <h2 className="text-4xl font-bold mt-3">
            $
            {totalVolume.toFixed(
              2
            )}
          </h2>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Exchange Status
          </p>

          <h2 className="text-3xl font-bold text-green-400 mt-3">
            ONLINE
          </h2>
        </div>
      </div>

      {/* USERS */}

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
                  Joined
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
                      {new Date(
                        user.createdAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* TRANSACTIONS */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Recent Transactions
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left pb-4">
                  Type
                </th>

                <th className="text-left pb-4">
                  Asset
                </th>

                <th className="text-left pb-4">
                  Amount
                </th>

                <th className="text-left pb-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions
                .slice(0, 10)
                .map((tx) => (
                  <tr
                    key={
                      tx._id
                    }
                    className="border-b border-gray-900"
                  >
                    <td className="py-4">
                      {
                        tx.type
                      }
                    </td>

                    <td className="py-4">
                      {
                        tx.asset
                      }
                    </td>

                    <td className="py-4">
                      {
                        tx.amount
                      }
                    </td>

                    <td className="py-4 text-green-400">
                      {
                        tx.status
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;