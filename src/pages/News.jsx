import {
  Newspaper,
  TrendingUp,
  Globe,
} from "lucide-react";

const news = [
  {
    id: 1,
    title:
      "Bitcoin Surges Above $105K Amid ETF Demand",
    source: "CryptoX News",
    time: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title:
      "Ethereum Layer-2 Volume Hits Record High",
    source: "CoinDesk",
    time: "4 hours ago",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title:
      "Solana DeFi Ecosystem Expands Rapidly",
    source: "CoinTelegraph",
    time: "6 hours ago",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title:
      "Crypto Market Cap Crosses $4 Trillion",
    source: "Bloomberg Crypto",
    time: "9 hours ago",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title:
      "AI Tokens Continue Massive Rally",
    source: "Decrypt",
    time: "12 hours ago",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title:
      "Institutional Investors Increase BTC Holdings",
    source: "CryptoSlate",
    time: "15 hours ago",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1200&auto=format&fit=crop",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-600 p-4 rounded-3xl">
              <Newspaper size={36} />
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                Crypto News
              </h1>

              <p className="text-slate-400 mt-2 text-lg">
                Latest updates from the
                crypto market.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Newspaper
              size={38}
              className="text-orange-400 mb-4"
            />

            <p className="text-slate-400">
              Daily Articles
            </p>

            <h2 className="text-4xl font-bold mt-2">
              1,280
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <TrendingUp
              size={38}
              className="text-green-400 mb-4"
            />

            <p className="text-slate-400">
              Trending Markets
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              BTC • ETH • SOL
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Globe
              size={38}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              Global Coverage
            </p>

            <h2 className="text-4xl font-bold mt-2">
              24/7
            </h2>
          </div>
        </div>

        {/* NEWS GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {news.map((article) => (
            <div
              key={article.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-xl text-sm">
                    {article.source}
                  </span>

                  <span className="text-slate-400 text-sm">
                    {article.time}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-6 leading-snug">
                  {article.title}
                </h2>

                <button className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-2xl font-bold transition">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;