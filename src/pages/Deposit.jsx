import MainLayout from "../components/layout/MainLayout";

const Deposit = () => {

  const methods = [

    "Stripe",

    "Binance Pay",

    "Coinbase Commerce",

    "USDT TRC20",

    "BTC Wallet",
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Deposit Funds
        </h1>

        <p className="text-zinc-500 mt-2">
          Secure instant funding methods
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {
          methods.map(
            (
              method,
              index
            ) => (

              <div
                key={index}
                className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8 hover:border-yellow-400/30 transition-all cursor-pointer"
              >

                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6">

                  <span className="text-3xl">
                    💳
                  </span>

                </div>

                <h2 className="text-3xl font-black mb-3">

                  {method}

                </h2>

                <p className="text-zinc-500 mb-6">

                  Secure and instant payment integration ready.

                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-4 rounded-2xl text-black font-black">

                  Continue

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