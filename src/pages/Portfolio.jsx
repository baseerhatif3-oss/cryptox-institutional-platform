import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const Profile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await API.get("/profile");
      setProfile(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load profile");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Profile Settings
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold mb-4">
                {profile?.name?.charAt(0)?.toUpperCase()}
              </div>

              <h2 className="text-2xl font-bold">
                {profile?.name}
              </h2>

              <p className="text-slate-400 mt-2">
                {profile?.email}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6">
                Account Information
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 mb-2">
                    Full Name
                  </p>

                  <div className="bg-slate-800 p-4 rounded-xl">
                    {profile?.name}
                  </div>
                </div>

                <div>
                  <p className="text-slate-400 mb-2">
                    Email Address
                  </p>

                  <div className="bg-slate-800 p-4 rounded-xl">
                    {profile?.email}
                  </div>
                </div>

                <div>
                  <p className="text-slate-400 mb-2">
                    Wallet Balance
                  </p>

                  <div className="bg-slate-800 p-4 rounded-xl text-green-400 font-bold">
                    ${profile?.balance?.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6">
                Security
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-5 rounded-xl">
                  <h4 className="font-semibold mb-2">
                    Two Factor Authentication
                  </h4>

                  <p className="text-slate-400 text-sm mb-4">
                    Coming Soon
                  </p>

                  <button className="bg-yellow-600 px-4 py-2 rounded-lg">
                    Enable
                  </button>
                </div>

                <div className="bg-slate-800 p-5 rounded-xl">
                  <h4 className="font-semibold mb-2">
                    KYC Verification
                  </h4>

                  <p className="text-slate-400 text-sm mb-4">
                    Verify your account
                  </p>

                  <button className="bg-blue-600 px-4 py-2 rounded-lg">
                    Start
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
              >
                Logout Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;