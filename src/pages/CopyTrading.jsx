import {
  TrendingUp,
  Users,
  Copy,
  Trophy,
} from "lucide-react";

const traders = [
  {
    id: 1,
    name: "Alex Trader",
    roi: "+342%",
    followers: 12450,
    winRate: "87%",
    pnl: "$92,440",
    avatar:
      "https://i.pravatar.cc/150?img=1",
  },

  {
    id: 2,
    name: "Crypto King",
    roi: "+280%",
    followers: 9800,
    winRate: "81%",
    pnl: "$74,100",
    avatar:
      "https://i.pravatar.cc/150?img=2",
  },

  {
    id: 3,
    name: "Whale Hunter",
    roi: "+198%",
    followers: 6200,
    winRate: "78%",
    pnl: "$48,800",
    avatar:
      "https://i.pravatar.cc/150?img=3",
  },

  {
    id: 4,
    name: "Futures Pro",
    roi: "+410%",
    followers: 18120,
    winRate: "92%",
    pnl: "$131,000",
    avatar:
      "https://i.pravatar.cc/150?img=4",
  },
];

const CopyTrading = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-600 p-4 rounded-3xl">
              <Copy size={36} />
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                Copy Trading
              </h1>

              <p className="text-slate-400 mt-2">
                Automatically copy top
                crypto traders.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Users
              size={34}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              Total Traders
            </p>

            <h2 className="text-4xl font-bold mt-2">
              1,240
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <TrendingUp
              size={34}
              className="text-green-400 mb-4"
            />

            <p className="text-slate-400">
              Avg ROI
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              +214%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Trophy
              size={34}
              className="text-yellow-400 mb-4"
            />

            <p className="text-slate-400">
              Top Trader ROI
            </p>

            <h2 className="text-4xl font-bold mt-2 text-yellow-400">
              +410%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Copy
              size={34}
              className="text-purple-400 mb-4"
            />

            <p className="text-slate-400">
              Active Copiers
            </p>

            <h2 className="text-4xl font-bold mt-2">
              28K
            </h2>
          </div>
        </div>

        {/* LEADERBOARD */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-3xl font-bold mb-8">
            Top Traders
          </h2>

          <div className="space-y-5">
            {traders.map((trader) => (
              <div
                key={trader.id}
                className="bg-slate-800 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              >
                {/* LEFT */}

                <div className="flex items-center gap-5">
                  <img
                    src={trader.avatar}
                    alt={trader.name}
                    className="w-20 h-20 rounded-full border-4 border-slate-700"
                  />

                  <div>
                    <h3 className="text-2xl font-bold">
                      {trader.name}
                    </h3>

                    <p className="text-slate-400 mt-1">
                      {trader.followers.toLocaleString()} followers
                    </p>
                  </div>
                </div>

                {/* STATS */}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1">
                  <div>
                    <p className="text-slate-400">
                      ROI
                    </p>

                    <p className="text-green-400 text-2xl font-bold">
                      {trader.roi}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Win Rate
                    </p>

                    <p className="text-2xl font-bold">
                      {trader.winRate}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      PNL
                    </p>

                    <p className="text-2xl font-bold">
                      {trader.pnl}
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-lg transition">
                  Copy Trader
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyTrading;