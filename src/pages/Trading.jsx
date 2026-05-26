import MainLayout from "../components/layout/MainLayout";

const Trading = () => {

  return (

    <MainLayout>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2">

          <div className="glass rounded-[40px] p-10 mb-8">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

              <div>

                <h1 className="text-6xl font-black">

                  BTC/USDT

                </h1>

                <p className="text-zinc-500 text-xl mt-4">

                  Professional spot trading interface

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-green-400">

                  $84,320

                </h2>

                <p className="text-green-400 text-xl font-black mt-2">

                  +4.28%

                </p>

              </div>

            </div>

            <div className="h-[500px] glass rounded-3xl flex items-center justify-center">

              <div className="text-center">

                <div className="text-8xl mb-6">

                  📊

                </div>

                <h2 className="text-4xl font-black mb-4">

                  Advanced Trading Chart

                </h2>

                <p className="text-zinc-500 text-xl">

                  Real-time professional market visualization

                </p>

              </div>

            </div>

          </div>

        </div>

        <div>

          <div className="glass rounded-[40px] p-8">

            <h2 className="text-4xl font-black mb-8">

              Place Order

            </h2>

            <div className="flex gap-4 mb-8">

              <button className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-black text-lg">

                Buy

              </button>

              <button className="flex-1 bg-red-500 text-white py-4 rounded-2xl font-black text-lg">

                Sell

              </button>

            </div>

            <div className="space-y-6">

              <div>

                <label className="block text-zinc-500 mb-3">

                  Price

                </label>

                <input
                  type="text"
                  placeholder="84,320"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <div>

                <label className="block text-zinc-500 mb-3">

                  Amount

                </label>

                <input
                  type="text"
                  placeholder="0.00 BTC"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <div>

                <label className="block text-zinc-500 mb-3">

                  Total

                </label>

                <input
                  type="text"
                  placeholder="$0.00"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-5 rounded-2xl text-black font-black text-xl">

                Execute Trade

              </button>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;