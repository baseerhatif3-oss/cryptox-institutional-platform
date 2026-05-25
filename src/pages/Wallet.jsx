import MainLayout from "../components/layout/MainLayout";

const Wallet = () => {

  return (

    <MainLayout>

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-black">
            Wallet
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage your crypto assets
          </p>

        </div>

        <div className="flex gap-4">

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
            Deposit
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            Withdraw
          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">
          <p className="text-zinc-400 mb-2">Total Balance</p>
          <h2 className="text-5xl font-black">$248,540</h2>
        </div>

        <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">
          <p className="text-zinc-400 mb-2">Available</p>
          <h2 className="text-5xl font-black">$180,200</h2>
        </div>

        <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">
          <p className="text-zinc-400 mb-2">In Orders</p>
          <h2 className="text-5xl font-black">$68,340</h2>
        </div>

      </div>

      <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

        <h2 className="text-3xl font-bold mb-6">
          Assets
        </h2>

        <div className="space-y-4">

          {[
            ["BTC", "1.84", "$84,520"],
            ["ETH", "14.2", "$4,280"],
            ["SOL", "522", "$182"],
          ].map((coin) => (

            <div
              key={coin[0]}
              className="flex justify-between items-center bg-black rounded-2xl p-5"
            >

              <div>

                <h3 className="text-xl font-bold">
                  {coin[0]}
                </h3>

                <p className="text-zinc-500">
                  {coin[1]} Holdings
                </p>

              </div>

              <div className="text-right">

                <h3 className="text-xl font-bold">
                  {coin[2]}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </MainLayout>
  );
};

export default Wallet;