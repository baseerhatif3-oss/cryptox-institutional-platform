import MainLayout from "../components/layout/MainLayout";

const SystemStatus = () => {

  const services = [

    {
      name: "API Server",
      status: "Operational",
    },

    {
      name: "WebSocket Engine",
      status: "Operational",
    },

    {
      name: "AI Signal Engine",
      status: "Operational",
    },

    {
      name: "Redis Cache",
      status: "Operational",
    },

    {
      name: "Matching Engine",
      status: "Operational",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          System Status
        </h1>

        <p className="text-zinc-500 mt-2">
          Enterprise infrastructure monitoring
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {
          services.map(
            (
              service,
              index
            ) => (

              <div
                key={index}
                className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-2xl font-black">

                    {service.name}

                  </h2>

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                </div>

                <p className="text-green-400 font-bold text-xl">

                  {service.status}

                </p>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default SystemStatus;