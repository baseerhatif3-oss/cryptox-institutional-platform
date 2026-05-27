const features = [

  {
    title: "Institutional Security",
    text: "Multi-layer cold wallet custody and enterprise-grade infrastructure protection.",
  },

  {
    title: "Advanced Analytics",
    text: "Professional market intelligence and real-time trading performance systems.",
  },

  {
    title: "Global Liquidity",
    text: "Deep liquidity infrastructure and high-frequency trading execution engine.",
  },

  {
    title: "Multi-Asset Ecosystem",
    text: "Spot, futures, staking, NFTs, launchpad, and portfolio management.",
  },
];

const FeatureSection = () => {

  return (

    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="text-center mb-20">

        <h2 className="text-6xl font-black mb-6">

          Enterprise
          <span className="text-yellow-400">

            {" "}Infrastructure

          </span>

        </h2>

        <p className="text-zinc-500 text-2xl max-w-3xl mx-auto">

          Institutional-grade architecture designed for global digital asset markets.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          features.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-[32px] p-10"
              >

                <h3 className="text-4xl font-black mb-6">

                  {
                    item.title
                  }

                </h3>

                <p className="text-zinc-500 text-xl leading-relaxed">

                  {
                    item.text
                  }

                </p>

              </div>
            )
          )
        }

      </div>

    </section>
  );
};

export default FeatureSection;