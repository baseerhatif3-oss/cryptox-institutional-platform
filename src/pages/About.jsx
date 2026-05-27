const About = () => {

  return (

    <div className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <div className="mb-16">

          <h1 className="text-6xl md:text-8xl font-black mb-8">

            About

            <span className="text-yellow-400">

              {" "}CryptoX

            </span>

          </h1>

          <p className="text-zinc-500 text-2xl leading-relaxed max-w-4xl">

            CryptoX is an institutional-grade digital asset infrastructure platform
            focused on enterprise trading systems, portfolio intelligence,
            global liquidity access, and scalable Web3 financial technologies.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {
            [
              {
                title: "Global Infrastructure",
                desc: "Enterprise-grade systems engineered for worldwide capital markets.",
              },

              {
                title: "Institutional Security",
                desc: "Multi-layer digital asset protection and infrastructure security.",
              },

              {
                title: "Advanced Analytics",
                desc: "AI-powered trading intelligence and portfolio monitoring systems.",
              },
            ].map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="glass rounded-3xl p-8"
                >

                  <h2 className="text-4xl font-black mb-6 text-yellow-400">

                    {
                      item.title
                    }

                  </h2>

                  <p className="text-zinc-500 text-lg leading-relaxed">

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

    </div>

  );
};

export default About;