import MainLayout from "../components/layout/MainLayout";

const Admin = () => {

  const stats = [

    {
      title:
        "Active Users",

      value:
        "124,892",

      color:
        "text-blue-400",
    },

    {
      title:
        "24H Volume",

      value:
        "$48.2M",

      color:
        "text-green-400",
    },

    {
      title:
        "Open Orders",

      value:
        "18,420",

      color:
        "text-yellow-400",
    },

    {
      title:
        "Revenue",

      value:
        "$1.2M",

      color:
        "text-purple-400",
    },
  ];

  const systems = [

    "Matching Engine",

    "AI Signal Engine",

    "Wallet Infrastructure",

    "WebSocket Cluster",

    "Redis Cache",

    "Database Cluster",
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-6">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">

              ADMIN CONTROL CENTER

            </span>

          </div>

          <h1 className="text-6xl font-black">

            Exchange
            <span className="text-yellow-400">
              {" "}Administration
            </span>

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl">

            Enterprise-grade exchange monitoring and operational management infrastructure.

          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

        {
          stats.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <p className="text-zinc-500 mb-4">

                  {
                    item.title
                  }

                </p>

                <h2 className={`text-5xl font-black ${item.color}`}>

                  {
                    item.value
                  }

                </h2>

              </div>
            )
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Infrastructure Systems

          </h2>

          <div className="space-y-5">

            {
              systems.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="flex items-center justify-between bg-black/30 border border-white/5 rounded-2xl p-5"
                  >

                    <span className="text-xl font-bold">

                      {item}

                    </span>

                    <div className="flex items-center gap-3">

                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                      <span className="text-green-400 font-bold">

                        Operational

                      </span>

                    </div>

                  </div>
                )
              )
            }

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Exchange Metrics

          </h2>

          <div className="space-y-8">

            <div>

              <div className="flex items-center justify-between mb-3">

                <span className="text-zinc-400 text-lg">

                  Infrastructure Health

                </span>

                <span className="text-green-400 font-black">

                  99%
                </span>

              </div>

              <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                <div className="h-full w-[99%] bg-green-400 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-3">

                <span className="text-zinc-400 text-lg">

                  Exchange Performance

                </span>

                <span className="text-yellow-400 font-black">

                  97%
                </span>

              </div>

              <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                <div className="h-full w-[97%] bg-yellow-400 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-3">

                <span className="text-zinc-400 text-lg">

                  Security Protection

                </span>

                <span className="text-blue-400 font-black">

                  98%
                </span>

              </div>

              <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                <div className="h-full w-[98%] bg-blue-400 rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Admin;