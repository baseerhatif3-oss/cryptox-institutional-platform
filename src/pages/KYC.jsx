import MainLayout from "../components/layout/MainLayout";

const KYC = () => {

  const steps = [

    "Upload Government ID",

    "Face Verification",

    "Address Verification",

    "Security Screening",
  ];

  return (

    <MainLayout>

      <div className="glass rounded-[40px] p-10 md:p-16 overflow-hidden relative">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-3 rounded-full mb-8">

            <span className="text-blue-400 font-bold">

              KYC VERIFICATION

            </span>

          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8">

            Identity
            <span className="text-yellow-400">
              {" "}Verification
            </span>

          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed mb-12">

            Complete enterprise-grade identity verification to unlock advanced exchange features and higher trading limits.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            {
              steps.map(
                (
                  step,
                  index
                ) => (

                  <div
                    key={index}
                    className="glass rounded-3xl p-8 flex items-center gap-6"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl font-black">

                      {
                        index + 1
                      }

                    </div>

                    <div>

                      <h2 className="text-2xl font-black">

                        {step}

                      </h2>

                      <p className="text-zinc-500 mt-2">

                        Verification required

                      </p>

                    </div>

                  </div>
                )
              )
            }

          </div>

          <button className="bg-yellow-400 hover:bg-yellow-300 transition-all px-10 py-5 rounded-2xl text-black font-black text-xl">

            Start Verification

          </button>

        </div>

      </div>

    </MainLayout>
  );
};

export default KYC;