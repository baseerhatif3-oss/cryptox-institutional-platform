import MainLayout from "../components/layout/MainLayout";

const projects = [
  {
    name: "NovaChain",
    raise: "$12M",
    status: "LIVE",
  },

  {
    name: "MetaDEX",
    raise: "$8M",
    status: "UPCOMING",
  },

  {
    name: "QuantumPay",
    raise: "$24M",
    status: "LIVE",
  },
];

const Launchpad = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          Startup

          <span className="text-yellow-400">

            {" "}Launchpad

          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Institutional-grade Web3 fundraising infrastructure.

        </p>

      </div>

      <div className="space-y-8">

        {
          projects.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 card-hover"
              >

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                  <div>

                    <h2 className="text-5xl font-black mb-3">

                      {
                        item.name
                      }

                    </h2>

                    <p className="text-zinc-500 text-xl">

                      Capital Raise:
                      {" "}

                      {
                        item.raise
                      }

                    </p>

                  </div>

                  <div className="flex items-center gap-5">

                    <div className={`px-6 py-3 rounded-2xl font-black ${
                      item.status === "LIVE"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-400/10 text-yellow-400"
                    }`}>

                      {
                        item.status
                      }

                    </div>

                    <button className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-7 py-4 rounded-2xl font-black">

                      View Project

                    </button>

                  </div>

                </div>

              </div>

            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Launchpad;