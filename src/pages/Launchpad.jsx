import MainLayout from "../components/layout/MainLayout";

const Launchpad = () => {

  const projects = [

    {
      name:
        "MetaChain",

      raise:
        "$4.2M",

      participants:
        "12K",

      status:
        "LIVE",
    },

    {
      name:
        "Quantum AI",

      raise:
        "$8.8M",

      participants:
        "24K",

      status:
        "UPCOMING",
    },

    {
      name:
        "DeFi Nexus",

      raise:
        "$2.1M",

      participants:
        "8K",

      status:
        "COMPLETED",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>

          <span className="text-cyan-400 font-bold">

            WEB3 FUNDRAISING ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Crypto
          <span className="text-yellow-400">
            {" "}Launchpad
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Total Raised

          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            $84M

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Investors

          </p>

          <h2 className="text-5xl font-black text-green-400">

            120K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Projects Funded

          </p>

          <h2 className="text-5xl font-black text-blue-400">

            42

          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {
          projects.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-4xl font-black">

                    {
                      item.name
                    }

                  </h2>

                  <div
                    className={`px-4 py-2 rounded-xl font-black ${
                      item.status === "LIVE"
                        ? "bg-green-500 text-white"
                        : item.status === "UPCOMING"
                        ? "bg-yellow-400 text-black"
                        : "bg-zinc-700 text-white"
                    }`}
                  >

                    {
                      item.status
                    }

                  </div>

                </div>

                <div className="space-y-5 mb-8">

                  <div className="flex items-center justify-between">

                    <span className="text-zinc-500">

                      Raised

                    </span>

                    <span className="text-green-400 font-black">

                      {
                        item.raise
                      }

                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-zinc-500">

                      Participants

                    </span>

                    <span className="text-yellow-400 font-black">

                      {
                        item.participants
                      }

                    </span>

                  </div>

                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black text-xl">

                  View Project

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Launchpad;