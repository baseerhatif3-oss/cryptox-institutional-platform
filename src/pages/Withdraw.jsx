import MainLayout from "../components/layout/MainLayout";

const Withdraw = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Withdraw Funds
        </h1>

        <p className="text-zinc-500 mt-2">
          Send crypto to external wallet
        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">
            Withdraw Crypto
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

            <input
              placeholder="Wallet Address"
              className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Amount"
              className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button className="w-full bg-red-500 text-white py-5 rounded-2xl font-black text-lg">

              Withdraw Funds

            </button>

          </div>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <h2 className="text-3xl font-black mb-8">
            Withdraw History
          </h2>

          <div className="space-y-5">

            <div className="bg-black rounded-2xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-black">
                  BTC Withdrawal
                </h3>

                <p className="text-zinc-500">
                  0.10 BTC
                </p>

              </div>

              <span className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold">

                Completed

              </span>

            </div>

            <div className="bg-black rounded-2xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-black">
                  SOL Withdrawal
                </h3>

                <p className="text-zinc-500">
                  25 SOL
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

export default Withdraw;