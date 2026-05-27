import MainLayout from "../components/layout/MainLayout";

const Settings = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black mb-4">

          Account
          <span className="text-yellow-400">
            {" "}Settings
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Manage your institutional trading preferences.

        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">

            Profile Settings

          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none"
            />

            <button className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-8 py-4 rounded-2xl font-black">

              Save Changes

            </button>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">

            Security Preferences

          </h2>

          <div className="space-y-6">

            <div className="flex items-center justify-between">

              <span className="text-xl">

                Two-Factor Authentication

              </span>

              <div className="w-14 h-8 bg-green-400 rounded-full"></div>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-xl">

                Email Alerts

              </span>

              <div className="w-14 h-8 bg-green-400 rounded-full"></div>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-xl">

                Login Notifications

              </span>

              <div className="w-14 h-8 bg-green-400 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Settings;