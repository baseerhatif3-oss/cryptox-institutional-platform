const Testimonials = () => {

  const reviews = [

    {
      name:
        "Michael Carter",

      role:
        "Crypto Fund Manager",

      review:
        "CryptoX provides institutional-grade infrastructure with an incredibly polished trading experience.",
    },

    {
      name:
        "Sophia Williams",

      role:
        "Blockchain Investor",

      review:
        "The platform architecture and real-time systems feel comparable to top-tier exchanges.",
    },

    {
      name:
        "Daniel Lee",

      role:
        "Web3 Founder",

      review:
        "Professional UI, advanced trading systems, and impressive scalability potential.",
    },
  ];

  return (

    <div className="mb-24">

      <div className="text-center mb-16">

        <h1 className="text-6xl font-black mb-6">

          Trusted by
          <span className="text-yellow-400">
            {" "}Professionals
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Built for modern traders, funds, and digital asset institutions.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {
          reviews.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 border border-white/5"
              >

                <div className="flex items-center gap-2 mb-6">

                  <span className="text-yellow-400 text-2xl">

                    ★★★★★

                  </span>

                </div>

                <p className="text-zinc-300 leading-relaxed text-lg mb-8">

                  "
                  {
                    item.review
                  }
                  "

                </p>

                <div>

                  <h2 className="text-2xl font-black">

                    {
                      item.name
                    }

                  </h2>

                  <p className="text-zinc-500 mt-2">

                    {
                      item.role
                    }

                  </p>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default Testimonials;