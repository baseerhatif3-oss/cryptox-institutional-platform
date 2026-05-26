import MainLayout from "../components/layout/MainLayout";

const Settings = () => {

  const settings = [

    "Two-Factor Authentication",

    "Email Notifications",

    "Trading Alerts",

    "KYC Verification",

    "Dark Theme Enabled",

    "Security Monitoring",
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">

          Settings

        </h1>

        <p className="text-zinc-500 mt-2">

          Manage your exchange preferences and security options

        </p>

      </div>

      <div className="glass rounded-3xl p-8">

        <div className="space-y-5">

          {
            settings.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-black/30 border border-white/5 rounded-2xl p-5"
                >

                  <div>

                    <h3 className="text-xl font-bold">

                      {item}

                    </h3>

                    <p className="text-zinc-500 mt-1">

                      Enabled and operational

                    </p>

                  </div>

                  <div className="w-14 h-8 bg-yellow-400 rounded-full relative">

                    <div className="absolute right-1 top-1 w-6 h-6 bg-black rounded-full"></div>

                  </div>

                </div>
              )
            )
          }

        </div>

      </div>

    </MainLayout>
  );
};

export default Settings;