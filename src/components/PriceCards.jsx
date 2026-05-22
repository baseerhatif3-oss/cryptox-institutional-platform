function PriceCards() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6">
      <div className="bg-slate-800 p-5 rounded-2xl">
        <h2 className="text-yellow-400">
          BTC
        </h2>

        <h1 className="text-2xl font-bold">
          $62,000
        </h1>
      </div>

      <div className="bg-slate-800 p-5 rounded-2xl">
        <h2 className="text-blue-400">
          ETH
        </h2>

        <h1 className="text-2xl font-bold">
          $3,100
        </h1>
      </div>

      <div className="bg-slate-800 p-5 rounded-2xl">
        <h2 className="text-green-400">
          SOL
        </h2>

        <h1 className="text-2xl font-bold">
          $145
        </h1>
      </div>
    </div>
  );
}

export default PriceCards;