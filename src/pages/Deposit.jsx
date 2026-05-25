import MainLayout from "../components/layout/MainLayout";

const Deposit = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Deposit Funds
        </h1>

        <p className="text-zinc-500 mt-2">
          Add crypto assets to your wallet
        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">
            Deposit Crypto
          </h2>

          <div className="space-y-5">

            <select className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none">

              <option>
                Bitcoin (BTC)
              </option>

              <option>
                Ethereum (ETH)
              </option>

              <option>
                Solana (SOL)
              </option>

            </select>

            <div className="bg-black rounded-3xl p-8 text-center border border-yellow-500/10">

              <div className="w-48 h-48 bg-white mx-auto rounded-2xl mb-6"></div>

              <h3 className="text-xl font-black mb-2">
                Wallet Address
              </h3>

              <p className="text-zinc-500 break-all">
                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
              </p>

            </div>

            <button className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-black text-lg">

              Copy Address

            </button>

          </div>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">
            Deposit History
          </h2>

          <div className="space-y-5">

            <div className="bg-black rounded-2xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-black">
                  BTC Deposit
                </h3>

                <p className="text-zinc-500">
                  0.25 BTC
                </p>

              </div>

              <span className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold">

                Completed

              </span>

            </div>

            <div className="bg-black rounded-2xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-black">
                  ETH Deposit
                </h3>

                <p className="text-zinc-500">
                  4.5 ETH
                </p>

              </div>

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold">

                Pending

              </span>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Deposit;