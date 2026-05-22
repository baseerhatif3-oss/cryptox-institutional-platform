function DashboardCards() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6">
      <div className="bg-slate-800 p-5 rounded-2xl">
        <h2 className="text-gray-400">
          Total Balance
        </h2>

        <h1 className="text-3xl font-bold mt-3 text-green-400">
          $24,500
        </h1>
      </div>

      <div className="bg-slate-800 p-5 rounded-2xl">
        <h2 className="text-gray-400">
          Profit
        </h2>

        <h1 className="text-3xl font-bold mt-3 text-yellow-400">
          +12.4%
        </h1>
      </div>

      <div className="bg-slate-800 p-5 rounded-2xl">
        <h2 className="text-gray-400">
          Active Coins
        </h2>

        <h1 className="text-3xl font-bold mt-3 text-blue-400">
          12
        </h1>
      </div>
    </div>
  );
}

export default DashboardCards;