import MainLayout from "../components/layout/MainLayout";

const SystemStatus = () => {

  const systems = [

    "Trading Engine",

    "Wallet Infrastructure",

    "API Cluster",

    "WebSocket Gateway",

    "Security Layer",

    "AI Signal Engine",
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            ALL SYSTEMS OPERATIONAL

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Exchange
          <span className="text-yellow-400">
            {" "}System Status
          </span>

        </h1>

      </div>

      <div className="space-y-6">

        {
          systems.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 flex items-center justify-between"
              >

                <div className="flex items-center gap-5">

                  <div className="w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>

                  <h2 className="text-3xl font-black">

                    {item}

                  </h2>

                </div>

                <span className="text-green-400 text-2xl font-black">

                  Operational

                </span>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default SystemStatus;