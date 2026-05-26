import MainLayout from "../components/layout/MainLayout";

const Deposit = () => {

  const methods = [

    {
      name:
        "USDT TRC20",

      fee:
        "0%",
    },

    {
      name:
        "Bitcoin Network",

      fee:
        "0.1%",
    },

    {
      name:
        "Ethereum ERC20",

      fee:
        "0.2%",
    },

    {
      name:
        "Binance Pay",

      fee:
        "0%",
    },
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-green-500/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-6">

            <span className="text-green-400 font-bold">

              SECURE DEPOSITS

            </span>

          </div>

          <h1 className="text-6xl font-black">

            Deposit
            <span className="text-yellow-400">
              {" "}Assets
            </span>

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl">

            Enterprise-grade crypto deposit infrastructure with real-time blockchain verification.

          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          methods.map(
            (
              method,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-4xl font-black">

                    {
                      method.name
                    }

                  </h2>

                  <div className="w-16 h-16 rounded-3xl bg-green-500/10 flex items-center justify-center">

                    <span className="text-3xl">
                      💳
                    </span>

                  </div>

                </div>

                <div className="flex items-center justify-between mb-8">

                  <span className="text-zinc-500 text-lg">

                    Processing Fee

                  </span>

                  <span className="text-green-400 text-3xl font-black">

                    {
                      method.fee
                    }

                  </span>

                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-4 rounded-2xl text-black font-black text-lg">

                  Deposit Now

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Deposit;