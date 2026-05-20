import React from "react";

const Wallets =
  () => {
    const assets = [
      {
        coin: "BTC",

        balance:
          "1.245",

        value:
          "$81,000",
      },

      {
        coin: "ETH",

        balance:
          "12.52",

        value:
          "$37,000",
      },

      {
        coin: "SOL",

        balance:
          "240",

        value:
          "$36,000",
      },

      {
        coin: "USDT",

        balance:
          "18,520",

        value:
          "$18,520",
      },
    ];

    const transactions = [
      {
        type:
          "Deposit",

        coin: "BTC",

        amount:
          "+0.42",

        status:
          "Completed",
      },

      {
        type:
          "Withdraw",

        coin: "ETH",

        amount:
          "-1.20",

        status:
          "Pending",
      },

      {
        type:
          "Trade",

        coin: "SOL",

        amount:
          "+12",

        status:
          "Completed",
      },

      {
        type:
          "Deposit",

        coin: "USDT",

        amount:
          "+5000",

        status:
          "Completed",
      },
    ];

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Wallets
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your crypto assets and balances
          </p>
        </div>

        {/* TOTAL BALANCE */}

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl p-8 text-black">
          <h2 className="text-lg font-semibold">
            Total Portfolio Value
          </h2>

          <p className="text-5xl font-bold mt-4">
            $172,520
          </p>

          <div className="mt-4 text-lg">
            +12.8% this month
          </div>
        </div>

        {/* ASSETS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {assets.map(
            (
              asset,
              index
            ) => (
              <div
                key={
                  index
                }
                className="bg-[#111] border border-gray-800 rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold">
                  {
                    asset.coin
                  }
                </h2>

                <p className="text-gray-400 mt-3">
                  Balance
                </p>

                <p className="text-2xl mt-1 font-semibold">
                  {
                    asset.balance
                  }
                </p>

                <p className="text-green-400 mt-4 text-lg">
                  {
                    asset.value
                  }
                </p>
              </div>
            )
          )}
        </div>

        {/* ACTIONS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DEPOSIT */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Deposit
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Select Coin"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Amount"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />

              <button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-xl">
                Deposit Funds
              </button>
            </div>
          </div>

          {/* WITHDRAW */}

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Withdraw
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Wallet Address"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Amount"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl">
                Withdraw Funds
              </button>
            </div>
          </div>
        </div>

        {/* HISTORY */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Transaction History
          </h2>

          <div className="space-y-4">
            {transactions.map(
              (
                tx,
                index
              ) => (
                <div
                  key={
                    index
                  }
                  className="flex justify-between items-center border-b border-gray-800 pb-4"
                >
                  <div>
                    <p className="font-semibold">
                      {
                        tx.type
                      }{" "}
                      {
                        tx.coin
                      }
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      {
                        tx.status
                      }
                    </p>
                  </div>

                  <div
                    className={
                      tx.amount.startsWith(
                        "+"
                      )
                        ? "text-green-400 font-bold"
                        : "text-red-400 font-bold"
                    }
                  >
                    {
                      tx.amount
                    }
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

export default Wallets;