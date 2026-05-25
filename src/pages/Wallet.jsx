import MainLayout from "../components/layout/MainLayout";

const Wallet = () => {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Wallet
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111] rounded-3xl p-6 border border-yellow-500/20">
          <p className="text-gray-500">Total Balance</p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-4">
            $248,540
          </h2>
        </div>

        <div className="bg-[#111] rounded-3xl p-6 border border-yellow-500/20">
          <p className="text-gray-500">Available Balance</p>

          <h2 className="text-5xl font-bold text-white mt-4">
            $190,120
          </h2>
        </div>

        <div className="bg-[#111] rounded-3xl p-6 border border-yellow-500/20">
          <p className="text-gray-500">Locked Balance</p>

          <h2 className="text-5xl font-bold text-red-400 mt-4">
            $58,420
          </h2>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wallet;