import MainLayout from "../components/layout/MainLayout";

const SystemStatus = () => {

  const systems = [

    {
      name:
        "Trading Engine",

      status:
        "Operational",

      uptime:
        "99.99%",
    },

    {
      name:
        "WebSocket Infrastructure",

      status:
        "Operational",

      uptime:
        "99.98%",
    },

    {
      name:
        "Wallet Services",

      status:
        "Operational",

      uptime:
        "99.97%",
    },

    {
      name:
        "AI Signal Engine",

      status:
        "Operational",

      uptime:
        "99.95%",
    },

    {
      name:
        "Database Cluster",

      status:
        "Operational",

      uptime:
        "99.99%",
    },

    {
      name:
        "Redis Cache",

      status:
        "Operational",

      uptime:
        "99.96%",
    },
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-6">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">

              ALL SYSTEMS ONLINE

            </span>

          </div>

          <h1 className="text-6xl font-black leading-tight">

            System
            <span className="text-yellow-400">
              {" "}Status
            </span>

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl leading-relaxed">

            Real-time infrastructure monitoring for CryptoX enterprise exchange systems.

          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">

        {
          systems.map(
            (
              system,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                  <span className="text-green-400 font-bold">

                    {
                      system.status
                    }

                  </span>

                </div>

                <h2 className="text-3xl font-black mb-4">

                  {
                    system.name
                  }

                </h2>

                <div className="flex items-center justify-between">

                  <span className="text-zinc-500">

                    Uptime

                  </span>

                  <span className="text-yellow-400 font-black text-xl">

                    {
                      system.uptime
                    }

                  </span>

                </div>

              </div>
            )
          )
        }

      </div>

      <div className="glass rounded-3xl p-10">

        <h2 className="text-4xl font-black mb-10">

          Infrastructure Metrics

        </h2>

        <div className="space-y-8">

          <div>

            <div className="flex items-center justify-between mb-3">

              <span className="text-zinc-400 text-lg">

                API Performance

              </span>

              <span className="text-green-400 font-black">

                97%
              </span>

            </div>

            <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

              <div className="h-full w-[97%] bg-green-400 rounded-full"></div>

            </div>

          </div>

          <div>

            <div className="flex items-center justify-between mb-3">

              <span className="text-zinc-400 text-lg">

                Security Protection

              </span>

              <span className="text-yellow-400 font-black">

                99%
              </span>

            </div>

            <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

              <div className="h-full w-[99%] bg-yellow-400 rounded-full"></div>

            </div>

          </div>

          <div>

            <div className="flex items-center justify-between mb-3">

              <span className="text-zinc-400 text-lg">

                Matching Engine Speed

              </span>

              <span className="text-blue-400 font-black">

                96%
              </span>

            </div>

            <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

              <div className="h-full w-[96%] bg-blue-400 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default SystemStatus;