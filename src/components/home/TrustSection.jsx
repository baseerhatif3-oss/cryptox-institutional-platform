const items = [

  {
    title: "Cold Wallet Security",
    value: "98%",
  },

  {
    title: "Institutional Liquidity",
    value: "$12B+",
  },

  {
    title: "Global Availability",
    value: "120+",
  },

  {
    title: "System Uptime",
    value: "99.99%",
  },
];

const TrustSection = () => {

  return (

    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="text-center mb-20">

        <h2 className="text-6xl font-black mb-6">

          Trusted By
          <span className="text-yellow-400">

            {" "}Global Traders

          </span>

        </h2>

        <p className="text-zinc-500 text-2xl max-w-3xl mx-auto">

          Enterprise infrastructure built for high-frequency digital asset markets.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {
          items.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-[32px] p-10 text-center"
              >

                <h2 className="text-6xl font-black text-yellow-400 mb-6">

                  {
                    item.value
                  }

                </h2>

                <p className="text-zinc-500 text-xl">

                  {
                    item.title
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

export default TrustSection;