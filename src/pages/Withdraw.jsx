import MainLayout from "../components/layout/MainLayout";

const Withdraw = () => {

  const methods = [

    "USDT TRC20",

    "BTC Network",

    "ETH ERC20",

    "Binance Pay",
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-red-500/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-5 py-3 rounded-full mb-6">

            <span className="text-red-400 font-bold">

              SECURE WITHDRAWALS

            </span>

          </div>

          <h1 className="text-6xl font-black">

            Withdraw
            <span className="text-yellow-400">
              {" "}Assets
            </span>

          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl">

            Enterprise-grade withdrawal infrastructure with multi-layer security verification.

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

                    {method}

                  </h2>

                  <div className="w-16 h-16 rounded-3xl bg-red-500/10 flex items-center justify-center">

                    <span className="text-3xl">
                      💸
                    </span>

                  </div>

                </div>

                <p className="text-zinc-500 mb-8">

                  Fast and secure crypto asset withdrawal system.

                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-4 rounded-2xl text-black font-black text-lg">

                  Withdraw Now

                </button>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Withdraw;