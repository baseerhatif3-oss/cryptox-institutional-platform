import {
  Rocket,
  Clock,
  Coins,
} from "lucide-react";

import toast from "react-hot-toast";

const projects = [
  {
    id: 1,
    name: "MetaChain",
    symbol: "MTC",
    price: "$0.08",
    raised: "$4.2M",
    progress: 82,
    ends: "3 Days Left",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "AIVerse",
    symbol: "AIV",
    price: "$0.12",
    raised: "$7.8M",
    progress: 64,
    ends: "6 Days Left",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "GameFi Pro",
    symbol: "GFP",
    price: "$0.04",
    raised: "$2.1M",
    progress: 45,
    ends: "9 Days Left",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "DeFi Nova",
    symbol: "DNV",
    price: "$0.15",
    raised: "$9.4M",
    progress: 91,
    ends: "1 Day Left",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop",
  },
];

const Launchpad = () => {
  const handleInvest = (
    project
  ) => {
    toast.success(
      `Investment request submitted for ${project}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-600 p-4 rounded-3xl">
              <Rocket size={36} />
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                Crypto Launchpad
              </h1>

              <p className="text-slate-400 mt-2 text-lg">
                Discover and invest in
                the next generation of
                crypto projects.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Rocket
              size={38}
              className="text-orange-400 mb-4"
            />

            <p className="text-slate-400">
              Projects Launched
            </p>

            <h2 className="text-4xl font-bold mt-2">
              124
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Coins
              size={38}
              className="text-yellow-400 mb-4"
            />

            <p className="text-slate-400">
              Total Raised
            </p>

            <h2 className="text-4xl font-bold mt-2 text-yellow-400">
              $82M
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Clock
              size={38}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              Active Sales
            </p>

            <h2 className="text-4xl font-bold mt-2">
              18
            </h2>
          </div>
        </div>

        {/* PROJECTS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                {/* TOP */}

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold">
                      {project.name}
                    </h2>

                    <p className="text-slate-400 mt-1">
                      {project.symbol}
                    </p>
                  </div>

                  <div className="bg-orange-600/20 text-orange-400 px-4 py-2 rounded-xl">
                    {project.ends}
                  </div>
                </div>

                {/* DETAILS */}

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-slate-400">
                      Token Price
                    </p>

                    <h3 className="text-2xl font-bold text-green-400">
                      {project.price}
                    </h3>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Raised
                    </p>

                    <h3 className="text-2xl font-bold">
                      {project.raised}
                    </h3>
                  </div>
                </div>

                {/* PROGRESS */}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400">
                      Sale Progress
                    </span>

                    <span className="font-bold">
                      {
                        project.progress
                      }
                      %
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500"
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>
                </div>

                {/* BUTTON */}

                <button
                  onClick={() =>
                    handleInvest(
                      project.name
                    )
                  }
                  className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-2xl font-bold transition"
                >
                  Invest Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Launchpad;