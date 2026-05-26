import MainLayout from "../components/layout/MainLayout";

const TrustCenter = () => {

  const security = [

    "Cold Wallet Infrastructure",

    "Multi-Signature Protection",

    "Advanced Risk Monitoring",

    "Institutional Custody",

    "AI Fraud Detection",

    "Enterprise Compliance",
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            ENTERPRISE SECURITY ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Trust
          <span className="text-yellow-400">
            {" "}Center
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          security.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <h2 className="text-3xl font-black text-yellow-400">

                  {item}

                </h2>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default TrustCenter;