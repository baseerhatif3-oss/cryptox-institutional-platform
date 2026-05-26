import MainLayout from "../components/layout/MainLayout";

const Security = () => {

  const securityItems = [

    {
      title:
        "Two-Factor Authentication",

      status:
        "Enabled",
    },

    {
      title:
        "Anti-Phishing Protection",

      status:
        "Active",
    },

    {
      title:
        "Device Monitoring",

      status:
        "Protected",
    },

    {
      title:
        "AI Fraud Detection",

      status:
        "Running",
    },

    {
      title:
        "Cold Wallet Storage",

      status:
        "Secured",
    },

    {
      title:
        "DDoS Protection",

      status:
        "Operational",
    },
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-6">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">

              SECURITY SYSTEM ACTIVE

            </span>

          </div>

          <h1 className="text-6xl font-black leading-tight">

            Security
            <span className="text-yellow-400">
              {" "}Center
            </span>

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl leading-relaxed">

            Enterprise-grade protection infrastructure for exchange security and asset safety.

          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {
          securityItems.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                  <span className="text-green-400 font-bold">

                    {
                      item.status
                    }

                  </span>

                </div>

                <h2 className="text-3xl font-black">

                  {
                    item.title
                  }

                </h2>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Security;