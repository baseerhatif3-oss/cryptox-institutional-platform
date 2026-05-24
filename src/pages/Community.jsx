import React from "react";

const Community = () => {

  const posts = [

    {
      user: "AlexTrader",
      role: "Top Trader",
      content:
        "BTC breakout looks extremely bullish above $82k. Watching volume closely.",
      likes: 128,
      comments: 34,
    },

    {
      user: "CryptoQueen",
      role: "Analyst",
      content:
        "Ethereum ecosystem continues dominating DeFi activity. Strong long-term outlook.",
      likes: 214,
      comments: 51,
    },

    {
      user: "Web3Hunter",
      role: "Investor",
      content:
        "AI narratives are becoming the strongest sector in crypto markets right now.",
      likes: 98,
      comments: 22,
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Community Feed
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Explore market sentiment and connect with traders
          </p>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-2xl font-bold">
          LIVE COMMUNITY
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#3b82f6,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Social Trading Network
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            CRYPTO COMMUNITY
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Follow traders, discuss market trends and
            discover real-time crypto sentiment.
          </p>

        </div>

      </div>

      {/* CREATE POST */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

        <h2 className="text-3xl font-black">
          Share Your Thoughts
        </h2>

        <textarea
          placeholder="What’s happening in crypto today?"
          className="w-full mt-6 bg-black border border-white/10 rounded-3xl p-6 h-40 resize-none outline-none focus:border-yellow-500"
        />

        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl font-black text-black">

          Publish Post

        </button>

      </div>

      {/* POSTS */}

      <div className="space-y-8">

        {posts.map(
          (
            post,
            index
          ) => (

            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-black">
                    {post.user}
                  </h3>

                  <p className="text-blue-400 mt-1">
                    {post.role}
                  </p>

                </div>

                <div className="bg-white/5 px-4 py-2 rounded-xl text-sm">
                  Trending
                </div>

              </div>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                {post.content}
              </p>

              <div className="flex items-center gap-8 mt-8 text-gray-400">

                <div>
                  ❤️ {post.likes}
                </div>

                <div>
                  💬 {post.comments}
                </div>

                <div>
                  🔁 Share
                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default Community;