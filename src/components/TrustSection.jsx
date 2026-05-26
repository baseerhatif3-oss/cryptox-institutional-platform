const TrustSection = () => {

  const items = [

    "Enterprise Security",

    "AI Infrastructure",

    "Real-Time Trading",

    "Cloud Scalability",

    "Advanced Analytics",

    "Professional Exchange UI",
  ];

  return (

    <section className="relative z-10 px-6 lg:px-16 pb-24">

      <div className="glass rounded-[40px] p-10 md:p-16">

        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-6xl font-black mb-6">

            Trusted Infrastructure

          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">

            Built using scalable enterprise-grade technologies for modern crypto exchange operations.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {
            items.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="bg-black/30 border border-white/5 rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
                >

                  <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6">

                    <span className="text-3xl">
                      🚀
                    </span>

                  </div>

                  <h3 className="text-2xl font-black">

                    {item}

                  </h3>

                </div>
              )
            )
          }

        </div>

      </div>

    </section>
  );
};

export default TrustSection;