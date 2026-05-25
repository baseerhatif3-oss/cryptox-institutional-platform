import MainLayout from "../components/layout/MainLayout";

const OpenOrders = () => {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Open Orders
      </h1>

      <div className="bg-[#111] rounded-3xl border border-yellow-500/20 p-8">
        <div className="flex justify-between items-center border-b border-yellow-500/10 pb-4">
          <div>
            <h2 className="text-white font-bold">
              BTC/USDT
            </h2>

            <p className="text-gray-500 text-sm">
              Buy Order
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-yellow-400 font-bold">
              $84,520
            </h2>

            <p className="text-green-400 text-sm">
              Active
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpenOrders;