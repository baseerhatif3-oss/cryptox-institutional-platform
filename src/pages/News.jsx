import React from "react";

const News = () => {

  const news = [

    {
      title:
        "Bitcoin Surges Above $80K Amid Institutional Demand",

      category:
        "Market",

      time:
        "2h ago",

      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    },

    {
      title:
        "Ethereum ETF Adoption Accelerates Across Global Markets",

      category:
        "Ethereum",

      time:
        "4h ago",

      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    },

    {
      title:
        "AI Tokens Continue Massive Growth In Web3 Sector",

      category:
        "AI Crypto",

      time:
        "6h ago",

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },

    {
      title:
        "Top Analysts Predict New Crypto Bull Cycle",

      category:
        "Analysis",

      time:
        "8h ago",

      image:
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Crypto News
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Latest crypto news, insights and market analysis
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          LIVE NEWS
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Real-Time Market Intelligence
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            MARKET INSIGHTS
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Stay informed with the latest cryptocurrency news,
            institutional trends and blockchain ecosystem updates.
          </p>

        </div>

      </div>

      {/* NEWS GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {news.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="overflow-hidden bg-[#111] border border-white/10 rounded-[36px]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-4">

                  <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm font-bold">
                    {item.category}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {item.time}
                  </span>

                </div>

                <h2 className="text-3xl font-black mt-6 leading-tight">
                  {item.title}
                </h2>

                <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 transition px-6 py-4 rounded-2xl font-black text-black">

                  Read More

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default News;