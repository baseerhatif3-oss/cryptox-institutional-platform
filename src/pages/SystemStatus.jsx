import MainLayout from "../components/layout/MainLayout";

const services = [

  {
    name:
      "Trading Engine",

    status:
      "Operational",
  },

  {
    name:
      "Wallet Infrastructure",

    status:
      "Operational",
  },

  {
    name:
      "Market APIs",

    status:
      "Operational",
  },

  {
    name:
      "Portfolio Analytics",

    status:
      "Operational",
  },

  {
    name:
      "Authentication System",

    status:
      "Operational",
  },
];

const SystemStatus = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black mb-4">

          System
          <span className="text-yellow-400">
            {" "}Status
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Institutional infrastructure monitoring center.

        </p>

      </div>

      <div className="space-y-6">

        {
          services.map(
            (
              service,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 flex items-center justify-between"
              >

                <div>

                  <h2 className="text-3xl font-black mb-2">

                    {
                      service.name
                    }

                  </h2>

                  <p className="text-zinc-500">

                    Exchange infrastructure monitoring active.

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                  <span className="text-green-400 font-black text-xl">

                    {
                      service.status
                    }

                  </span>

                </div>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default SystemStatus;