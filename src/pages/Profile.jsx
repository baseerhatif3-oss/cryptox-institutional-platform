import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const Profile =
  () => {
    const [
      user,
      setUser,
    ] = useState(null);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      fetchProfile();
    }, []);

    const fetchProfile =
      async () => {
        try {
          const response =
            await API.get(
              "/user/profile"
            );

          setUser(
            response.data
          );
        } catch (error) {
          console.log(
            error
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    if (loading) {
      return (
        <div className="text-white text-xl">
          Loading profile...
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            User Profile
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your account
          </p>
        </div>

        {/* PROFILE CARD */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center text-4xl font-bold text-black">
              {user?.name?.charAt(
                0
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {user?.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {user?.email}
              </p>

              <div className="mt-4 inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full">
                Verified User
              </div>
            </div>
          </div>
        </div>

        {/* ACCOUNT STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Spot Balance
            </p>

            <h2 className="text-3xl font-bold mt-3 text-yellow-400">
              $12,450
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Futures Balance
            </p>

            <h2 className="text-3xl font-bold mt-3 text-blue-400">
              $8,920
            </h2>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-400">
              Account Status
            </p>

            <h2 className="text-3xl font-bold mt-3 text-green-400">
              Active
            </h2>
          </div>
        </div>

        {/* SECURITY */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Security
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-black border border-gray-800 rounded-xl p-4">
              <div>
                <p className="font-semibold">
                  Email Verification
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Your email is verified
                </p>
              </div>

              <div className="text-green-400 font-bold">
                Verified
              </div>
            </div>

            <div className="flex items-center justify-between bg-black border border-gray-800 rounded-xl p-4">
              <div>
                <p className="font-semibold">
                  Two-Factor Authentication
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Protect your account with 2FA
                </p>
              </div>

              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-xl transition">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Profile;