const plans = [

  {
    name: "Starter",
    price: "$49",
    features: [
      "Portfolio Analytics",
      "Market Tracking",
      "Basic Trading",
    ],
  },

  {
    name: "Professional",
    price: "$199",
    features: [
      "Advanced Trading",
      "AI Analytics",
      "Institutional Dashboard",
    ],
  },

  {
    name: "Enterprise",
    price: "$999",
    features: [
      "Unlimited Access",
      "API Infrastructure",
      "Dedicated Support",
    ],
  },
];

const PricingSection = () => {

  return (

    <section className="max-w-7xl mx-auto px-6 pb-32">

      <div className="text-center mb-20">

        <h2 className="text-6xl font-black mb-6">

          Institutional
          <span className="text-yellow-400">

            {" "}Plans

          </span>

        </h2>

        <p className="text-zinc-500 text-xl">

          Enterprise-grade access tiers for digital asset infrastructure.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {
          plans.map(
            (
              plan,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-[36px] p-10 card-hover"
              >

                <h3 className="text-4xl font-black mb-4">

                  {
                    plan.name
                  }

                </h3>

                <h2 className="text-6xl font-black text-yellow-400 mb-8">

                  {
                    plan.price
                  }

                  <span className="text-xl text-zinc-500">

                    /mo

                  </span>

                </h2>

                <div className="space-y-4 mb-10">

                  {
                    plan.features.map(
                      (
                        item,
                        i
                      ) => (

                        <div
                          key={i}
                          className="flex items-center gap-3 text-zinc-300"
                        >

                          <div className="w-2 h-2 rounded-full bg-green-400"></div>

                          {
                            item
                          }

                        </div>
                      )
                    )
                  }

                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black">

                  Upgrade Plan

                </button>

              </div>
            )
          )
        }

      </div>

    </section>
  );
};

export default PricingSection;