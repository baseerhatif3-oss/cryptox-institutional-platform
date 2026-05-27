const insights = [

  {
    title:
      "BTC Momentum Increasing",

    desc:
      "Institutional accumulation detected across major liquidity pools.",
  },

  {
    title:
      "ETH Network Activity Surge",

    desc:
      "On-chain activity and staking participation continue expanding.",
  },

  {
    title:
      "SOL Volatility Spike",

    desc:
      "Short-term momentum traders entering high-volume positions.",
  },
];

const AIInsights = () => {

  return (

    <div className="glass rounded-[32px] p-8">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-black">

          AI Insights

        </h2>

        <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-sm">

          LIVE

        </div>

      </div>

      <div className="space-y-6">

        {
          insights.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="bg-black/30 border border-white/5 rounded-2xl p-6"
              >

                <h3 className="text-2xl font-black mb-3 text-yellow-400">

                  {
                    item.title
                  }

                </h3>

                <p className="text-zinc-500 leading-relaxed">

                  {
                    item.desc
                  }

                </p>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default AIInsights;