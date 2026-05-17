import {
  Users,
  ShieldCheck,
  Banknote,
} from "lucide-react";

import toast from "react-hot-toast";

const offers = [
  {
    id: 1,
    trader: "CryptoMerchant",
    price: 104320,
    available: 25000,
    payment: "Bank Transfer",
    completion: "98%",
  },

  {
    id: 2,
    trader: "FastExchange",
    price: 104180,
    available: 18000,
    payment: "JazzCash",
    completion: "95%",
  },

  {
    id: 3,
    trader: "BinanceElite",
    price: 104500,
    available: 42000,
    payment: "EasyPaisa",
    completion: "99%",
  },

  {
    id: 4,
    trader: "P2PWhale",
    price: 104150,
    available: 15000,
    payment: "Bank Transfer",
    completion: "97%",
  },
];

const P2PTrading = () => {
  const handleTrade = (
    trader
  ) => {
    toast.success(
      `Trade request sent to ${trader}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-600 p-4 rounded-3xl">
              <Users size={36} />
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                P2P Trading
              </h1>

              <p className="text-slate-400 mt-2 text-lg">
                Buy and sell crypto
                directly with other
                users.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Users
              size={38}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              Active Merchants
            </p>

            <h2 className="text-4xl font-bold mt-2">
              4,820
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <ShieldCheck
              size={38}
              className="text-green-400 mb-4"
            />

            <p className="text-slate-400">
              Protected Trades
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              100%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Banknote
              size={38}
              className="text-yellow-400 mb-4"
            />

            <p className="text-slate-400">
              Daily Volume
            </p>

            <h2 className="text-4xl font-bold mt-2">
              $12.4M
            </h2>
          </div>
        </div>

        {/* OFFERS */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-3xl font-bold mb-8">
            BTC Offers
          </h2>

          <div className="space-y-5">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-slate-800 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              >
                {/* LEFT */}

                <div>
                  <h3 className="text-2xl font-bold">
                    {offer.trader}
                  </h3>

                  <p className="text-slate-400 mt-1">
                    Completion Rate:{" "}
                    {
                      offer.completion
                    }
                  </p>
                </div>

                {/* DETAILS */}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1">
                  <div>
                    <p className="text-slate-400">
                      Price
                    </p>

                    <p className="text-2xl font-bold text-green-400">
                      $
                      {offer.price.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Available
                    </p>

                    <p className="text-2xl font-bold">
                      $
                      {offer.available.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Payment
                    </p>

                    <p className="text-xl font-bold">
                      {
                        offer.payment
                      }
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <button
                  onClick={() =>
                    handleTrade(
                      offer.trader
                    )
                  }
                  className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold text-lg transition"
                >
                  Buy BTC
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2PTrading;