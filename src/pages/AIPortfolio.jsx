import React from "react";

const AIPortfolio = () => {

  const insights = [

    {
      title:
        "Risk Score",

      value:
        "Medium",

      color:
        "yellow",
    },

    {
      title:
        "Portfolio Health",

      value:
        "82/100",

      color:
        "green",
    },

    {
      title:
        "Diversification",

      value:
        "Strong",

      color:
        "green",
    },

    {
      title:
        "AI Confidence",

      value:
        "91%",

      color:
        "blue",
    },
  ];

  const recommendations = [

    {
      coin: "BTC",
      action: "Increase Allocation",
      reason:
        "Strong institutional momentum detected.",
    },

    {
      coin: "ETH",
      action: "Hold Position",
      reason:
        "Ethereum ecosystem remains dominant in DeFi.",
    },

    {
      coin: "SOL",
      action: "Moderate Risk",
      reason:
        "Volatility increasing due to market speculation.",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            AI Portfolio Assistant
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            AI-powered portfolio analysis and smart investment insights
          </p>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-2xl font-bold">
          AI ACTIVE
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#3b82f6,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Machine Learning Portfolio Intelligence
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            SMART INVESTING
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            AI continuously analyzes your holdings, risk exposure,
            market conditions and trading behavior in real time.
          </p>

        </div>

      </div>

      {/* AI STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {insights.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <p className="text-gray-400">
                {item.title}
              </p>

              <h2 className="text-5xl font-black mt-4">
                {item.value}
              </h2>

            </div>

          )
        )}

      </div>

      {/* RECOMMENDATIONS */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <h2 className="text-3xl font-black">
            AI Recommendations
          </h2>

        </div>

        <div className="divide-y divide-white/5">

          {recommendations.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              >

                <div>

                  <h3 className="text-2xl font-black">
                    {item.coin}
                  </h3>

                  <p className="text-gray-400 mt-2 max-w-2xl">
                    {item.reason}
                  </p>

                </div>

                <div className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-black">

                  {item.action}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
};

export default AIPortfolio;