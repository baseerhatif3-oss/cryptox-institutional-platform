import React from "react";

const Launchpad = () => {

  const projects = [

    {
      name: "MetaChain",
      price: "$0.08",
      raised: "$2.4M",
      progress: "82%",
    },

    {
      name: "AIVerse",
      price: "$0.12",
      raised: "$4.8M",
      progress: "67%",
    },

    {
      name: "FutureX",
      price: "$0.05",
      raised: "$1.9M",
      progress: "91%",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Launchpad
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Invest early in next-generation crypto projects
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          TOKEN SALES
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Web3 Startup Funding
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            CRYPTO LAUNCHPAD
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Discover high-potential blockchain startups
            and participate in early-stage token offerings.
          </p>

        </div>

      </div>

      {/* PROJECTS */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {projects.map(
          (
            project,
            index
          ) => (

            <div
              key={index}
              className="relative overflow-hidden bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <h2 className="text-3xl font-black">
                    {project.name}
                  </h2>

                  <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
                    ACTIVE
                  </span>

                </div>

                <div className="space-y-6 mt-10">

                  <div>

                    <p className="text-gray-400">
                      Token Price
                    </p>

                    <h3 className="text-5xl font-black text-yellow-400 mt-2">
                      {project.price}
                    </h3>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-400">
                      Raised
                    </span>

                    <span className="font-bold">
                      {project.raised}
                    </span>

                  </div>

                  <div>

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-gray-400">
                        Progress
                      </span>

                      <span className="font-bold">
                        {project.progress}
                      </span>

                    </div>

                    <div className="w-full h-3 bg-black rounded-full overflow-hidden">

                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{
                          width:
                            project.progress,
                        }}
                      />

                    </div>

                  </div>

                </div>

                <button className="w-full mt-10 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

                  Participate

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default Launchpad;