import MainLayout from "../components/layout/MainLayout";

const KYC = () => {

  return (

    <MainLayout>

      <div className="max-w-3xl mx-auto">

        <div className="mb-10 text-center">

          <h1 className="text-5xl font-black">
            KYC Verification
          </h1>

          <p className="text-zinc-500 mt-2">
            Complete identity verification
          </p>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <div className="space-y-6">

            <input
              placeholder="Full Name"
              className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              placeholder="National ID Number"
              className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Country"
              className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
            />

            <div className="bg-black border border-dashed border-yellow-500/20 rounded-3xl p-10 text-center">

              <p className="text-zinc-500">
                Upload ID Document
              </p>

            </div>

            <button className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-black text-lg">

              Submit Verification

            </button>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default KYC;