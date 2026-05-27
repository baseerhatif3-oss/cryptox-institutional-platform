const TrustSection = () => {

  return (

    <section className="max-w-7xl mx-auto px-6 pb-32">

      <div className="glass rounded-[40px] p-10 md:p-16">

        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-7xl font-black mb-6">

            Trusted By
            <span className="text-yellow-400">

              {" "}Global Capital

            </span>

          </h2>

          <p className="text-zinc-500 text-xl max-w-3xl mx-auto">

            Enterprise-grade infrastructure powering institutional
            digital asset ecosystems worldwide.

          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {
            [
              "BlackRock Capital",
              "Galaxy Digital",
              "Coin Ventures",
              "Nova Hedge",
            ].map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="bg-black/30 border border-white/5 rounded-3xl p-8 flex items-center justify-center text-center"
                >

                  <h2 className="text-2xl font-black text-zinc-300">

                    {
                      item
                    }

                  </h2>

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