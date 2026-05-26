import MainLayout from "../components/layout/MainLayout";

import useAuth from "../hooks/useAuth";

const Settings = () => {

  const {
    user,
  } = useAuth();

  return (

    <MainLayout>

      <div className="glass rounded-[40px] p-10 md:p-16">

        <div className="mb-12">

          <h1 className="text-6xl font-black">

            Account
            <span className="text-yellow-400">
              {" "}Settings
            </span>

          </h1>

          <p className="text-zinc-500 text-xl mt-4">

            Manage your CryptoX account preferences and security settings.

          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-black mb-8">

              Profile Information

            </h2>

            <div className="space-y-6">

              <div>

                <label className="block text-zinc-500 mb-3">

                  Full Name

                </label>

                <input
                  type="text"
                  value={
                    user?.name || ""
                  }
                  readOnly
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <div>

                <label className="block text-zinc-500 mb-3">

                  Email Address

                </label>

                <input
                  type="email"
                  value={
                    user?.email || ""
                  }
                  readOnly
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

            </div>

          </div>

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-black mb-8">

              Security Controls

            </h2>

            <div className="space-y-6">

              <div className="flex items-center justify-between bg-black/30 border border-white/5 rounded-2xl p-5">

                <span className="text-lg font-bold">

                  Two-Factor Authentication

                </span>

                <button className="bg-green-500 px-5 py-2 rounded-xl font-black">

                  Enabled

                </button>

              </div>

              <div className="flex items-center justify-between bg-black/30 border border-white/5 rounded-2xl p-5">

                <span className="text-lg font-bold">

                  Email Verification

                </span>

                <button className="bg-green-500 px-5 py-2 rounded-xl font-black">

                  Verified

                </button>

              </div>

              <div className="flex items-center justify-between bg-black/30 border border-white/5 rounded-2xl p-5">

                <span className="text-lg font-bold">

                  Anti-Phishing Protection

                </span>

                <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-black">

                  Active

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Settings;