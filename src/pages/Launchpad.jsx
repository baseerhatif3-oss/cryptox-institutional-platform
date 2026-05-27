import MainLayout from "../components/layout/MainLayout";

const projects = [

  {
    name:
      "MetaChain",

    raise:
      "$4.2M",
  },

  {
    name:
      "QuantumDEX",

    raise:
      "$8.7M",
  },

  {
    name:
      "NovaAI",

    raise:
      "$12.4M",
  },
];

const Launchpad = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black mb-4">

          Crypto
          <span className="text-yellow-400">
            {" "}Launchpad
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Early-stage token offerings and institutional fundraising ecosystem.

        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

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

                <h2 className="text-4xl font-black mb-6">

                  {
                    item.name
                  }

                </h2>

                <p className="text-zinc-500 mb-8">

                  Total Raise

                </p>

                <h3 className="text-5xl font-black text-yellow-400 mb-8">

                  {
                    item.raise
                  }

                </h3>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black">

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