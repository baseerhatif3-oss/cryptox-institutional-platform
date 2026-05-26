import MainLayout from "../components/layout/MainLayout";

const AboutExchange = () => {

  const features = [

    "AI-Powered Trading Infrastructure",

    "Enterprise Exchange Architecture",

    "Advanced Real-Time Market Systems",

    "Professional Futures Trading",

    "Copy Trading Infrastructure",

    "Secure Wallet Management",

    "Enterprise Security Layer",

    "Scalable Cloud Infrastructure",
  ];

  return (

    <MainLayout>

      <div className="glass rounded-[40px] p-10 md:p-16">

        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-8">

            <span className="text-yellow-400 font-bold">

              ENTERPRISE EXCHANGE

            </span>

          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            Next Generation
            <span className="text-yellow-400">
              {" "}Crypto Exchange
            </span>

          </h1>

          <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-4xl">

            CryptoX is a professional cryptocurrency exchange MVP built using scalable enterprise-grade technologies including real-time trading infrastructure, AI-powered analytics, websocket systems, advanced UI architecture, and institutional-grade exchange workflows.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {
            features.map(
              (
                feature,
                index
              ) => (

                <div
                  key={index}
                  className="glass rounded-3xl p-8"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">

                      <span className="text-2xl">
                        🚀
                      </span>

                    </div>

                    <h2 className="text-2xl font-black">

                      {feature}

                    </h2>

                  </div>

                </div>
              )
            )
          }

        </div>

      </div>

    </MainLayout>
  );
};

export default AboutExchange;