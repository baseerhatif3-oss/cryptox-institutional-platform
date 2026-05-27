const testimonials = [

  {
    name:
      "Michael Chen",

    role:
      "Digital Asset Manager",

    text:
      "CryptoX provides institutional-grade infrastructure with exceptional trading performance.",
  },

  {
    name:
      "Sarah Williams",

    role:
      "Web3 Investor",

    text:
      "The UI, analytics, and trading execution quality are world-class.",
  },

  {
    name:
      "David Kim",

    role:
      "Quant Trader",

    text:
      "Professional-grade experience comparable to top centralized exchanges.",
  },
];

const Testimonials = () => {

  return (

    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

      {
        testimonials.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="glass rounded-3xl p-8"
            >

              <p className="text-zinc-300 text-lg leading-relaxed mb-8">

                "
                {
                  item.text
                }
                "

              </p>

              <div>

                <h2 className="text-2xl font-black mb-2">

                  {
                    item.name
                  }

                </h2>

                <p className="text-zinc-500">

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
  );
};

export default Testimonials;