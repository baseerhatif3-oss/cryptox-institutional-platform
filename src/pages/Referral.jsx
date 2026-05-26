import MainLayout from "../components/layout/MainLayout";

const Referral = () => {

  return (

    <MainLayout>

      <div className="glass rounded-[40px] p-10 md:p-16 overflow-hidden relative">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-8">

            <span className="text-yellow-400 font-bold">

              REFERRAL PROGRAM

            </span>

          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8">

            Invite &
            <span className="text-yellow-400">
              {" "}Earn
            </span>

          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed mb-10">

            Earn commission rewards by inviting traders to the CryptoX exchange ecosystem.

          </p>

          <div className="glass rounded-3xl p-6 mb-10">

            <p className="text-zinc-500 mb-3">

              Your Referral Link

            </p>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                value="https://cryptox.exchange/ref/baseer"
                readOnly
                className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <button className="bg-yellow-400 hover:bg-yellow-300 transition-all px-8 py-4 rounded-2xl text-black font-black">

                Copy Link

              </button>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="glass rounded-3xl p-8">

              <p className="text-zinc-500 mb-4">

                Referrals

              </p>

              <h2 className="text-5xl font-black text-yellow-400">

                128

              </h2>

            </div>

            <div className="glass rounded-3xl p-8">

              <p className="text-zinc-500 mb-4">

                Earned

              </p>

              <h2 className="text-5xl font-black text-green-400">

                $8,420

              </h2>

            </div>

            <div className="glass rounded-3xl p-8">

              <p className="text-zinc-500 mb-4">

                Conversion

              </p>

              <h2 className="text-5xl font-black text-blue-400">

                74%

              </h2>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Referral;