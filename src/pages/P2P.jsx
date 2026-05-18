const ads = [
  {
    id: 1,
    user: "CryptoKing",
    completion: "98.7%",
    trades: 1824,
    price: "104,200",
    limits: "$100 - $10,000",
    payment: "Bank Transfer",
  },

  {
    id: 2,
    user: "BTCDealer",
    completion: "99.2%",
    trades: 2941,
    price: "104,350",
    limits: "$50 - $5,000",
    payment: "JazzCash",
  },

  {
    id: 3,
    user: "FastTrader",
    completion: "97.4%",
    trades: 821,
    price: "104,180",
    limits: "$200 - $20,000",
    payment: "EasyPaisa",
  },

  {
    id: 4,
    user: "AlphaP2P",
    completion: "96.9%",
    trades: 1432,
    price: "104,260",
    limits: "$500 - $50,000",
    payment: "Bank Transfer",
  },
];

const P2P = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            P2P Marketplace
          </h1>

          <p className="text-slate-400 mt-2">
            Buy and sell crypto directly with other users
          </p>
        </div>

        {/* OVERVIEW */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Daily Volume
            </p>

            <h2 className="text-4xl font-bold">
              $48M
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Active Traders
            </p>

            <h2 className="text-4xl font-bold text-blue-400">
              82K
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Avg Completion
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              98.4%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Supported Payments
            </p>

            <h2 className="text-4xl font-bold text-yellow-400">
              24+
            </h2>
          </div>
        </div>

        {/* ACTIONS */}

        <div className="flex flex-wrap gap-4 mb-10">
          <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold text-xl transition">
            Buy BTC
          </button>

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold text-xl transition">
            Sell BTC
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-xl transition">
            Create Ad
          </button>
        </div>

        {/* ADS */}

        <div className="space-y-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >
              <div className="grid grid-cols-1 xl:grid-cols-6 gap-6 items-center">
                {/* USER */}

                <div>
                  <h2 className="text-2xl font-bold">
                    {ad.user}
                  </h2>

                  <p className="text-green-400 mt-2">
                    {ad.completion}
                    completion
                  </p>
                </div>

                {/* TRADES */}

                <div>
                  <p className="text-slate-400 mb-2">
                    Trades
                  </p>

                  <h3 className="text-2xl font-bold">
                    {ad.trades}
                  </h3>
                </div>

                {/* PRICE */}

                <div>
                  <p className="text-slate-400 mb-2">
                    Price
                  </p>

                  <h3 className="text-2xl font-bold">
                    ${ad.price}
                  </h3>
                </div>

                {/* LIMITS */}

                <div>
                  <p className="text-slate-400 mb-2">
                    Limits
                  </p>

                  <h3 className="text-xl font-bold">
                    {ad.limits}
                  </h3>
                </div>

                {/* PAYMENT */}

                <div>
                  <p className="text-slate-400 mb-2">
                    Payment
                  </p>

                  <h3 className="text-xl font-bold">
                    {ad.payment}
                  </h3>
                </div>

                {/* ACTION */}

                <div>
                  <button className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-2xl font-bold text-xl transition">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INFO */}

        <div className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-700 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-4">
            Secure P2P Trading
          </h2>

          <p className="text-xl text-white/90 leading-8 max-w-4xl">
            Trade crypto securely with escrow protection and multiple payment methods.
            Fast peer-to-peer transactions with verified traders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default P2P;