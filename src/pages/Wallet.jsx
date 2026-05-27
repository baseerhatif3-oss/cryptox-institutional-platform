import MainLayout from "../components/layout/MainLayout";

const wallets = [

  {
    coin: "Bitcoin",
    symbol: "BTC",
    balance: "4.82 BTC",
    usd: "$406,000",
    change: "+12.4%",
  },

  {
    coin: "Ethereum",
    symbol: "ETH",
    balance: "48.1 ETH",
    usd: "$182,000",
    change: "+8.2%",
  },

  {
    coin: "Solana",
    symbol: "SOL",
    balance: "820 SOL",
    usd: "$94,000",
    change: "+22.1%",
  },

  {
    coin: "Tether",
    symbol: "USDT",
    balance: "120,000 USDT",
    usd: "$120,000",
    change: "+0.1%",
  },
];

const transactions = [

  {
    type: "Deposit",
    asset: "BTC",
    amount: "+0.42 BTC",
    status: "Completed",
  },

  {
    type: "Withdraw",
    asset: "ETH",
    amount: "-4.2 ETH",
    status: "Pending",
  },

  {
    type: "Buy Order",
    asset: "SOL",
    amount: "+120 SOL",
    status: "Completed",
  },

  {
    type: "Sell Order",
    asset: "BNB",
    amount: "-12 BNB",
    status: "Completed",
  },
];

const Wallet = () => {

  return (

    <MainLayout>

      <div className="mb-12">

        <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

          <span className="text-yellow-400 font-bold">

            SECURE WALLET INFRASTRUCTURE

          </span>

        </div>

        <h1 className="text-7xl font-black mb-5">

          Digital
          <span className="text-yellow-400">

            {" "}Wallet

          </span>

        </h1>

        <p className="text-zinc-500 text-2xl max-w-3xl">

          Enterprise-grade multi-asset custody and transaction management system.

        </p>

      </div>

      <div className="glass rounded-3xl p-10 mb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>

            <p className="text-zinc-500 mb-4 text-lg">

              Total Wallet Balance

            </p>

            <h2 className="text-6xl font-black text-yellow-400">

              $802K

            </h2>

          </div>

          <div>

            <p className="text-zinc-500 mb-4 text-lg">

              Monthly Growth

            </p>

            <h2 className="text-5xl font-black text-green-400">

              +18.2%

            </h2>

          </div>

          <div>

            <p className="text-zinc-500 mb-4 text-lg">

              Assets Managed

            </p>

            <h2 className="text-5xl font-black text-blue-400">

              24

            </h2>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="xl:col-span-2 space-y-8">

          {
            wallets.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="glass rounded-3xl p-8"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                    <div>

                      <div className="flex items-center gap-4 mb-4">

                        <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center font-black text-2xl">

                          {
                            item.symbol
                          }

                        </div>

                        <div>

                          <h2 className="text-4xl font-black">

                            {
                              item.coin
                            }

                          </h2>

                          <p className="text-zinc-500">

                            {
                              item.symbol
                            } Wallet
                          </p>

                        </div>

                      </div>

                      <p className="text-zinc-500 text-lg">

                        Available Balance

                      </p>

                    </div>

                    <div className="text-right">

                      <h2 className="text-5xl font-black mb-3">

                        {
                          item.balance
                        }

                      </h2>

                      <p className="text-zinc-500 text-xl mb-2">

                        {
                          item.usd
                        }

                      </p>

                      <span className="text-green-400 font-black text-xl">

                        {
                          item.change
                        }

                      </span>

                    </div>

                  </div>

                </div>
              )
            )
          }

        </div>

        <div className="glass rounded-3xl p-8 h-fit">

          <h2 className="text-4xl font-black mb-8">

            Quick Actions

          </h2>

          <div className="space-y-5">

            <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-5 rounded-2xl font-black text-xl">

              Deposit Funds

            </button>

            <button className="w-full bg-green-500 hover:bg-green-400 transition-all text-black py-5 rounded-2xl font-black text-xl">

              Buy Crypto

            </button>

            <button className="w-full bg-blue-500 hover:bg-blue-400 transition-all text-black py-5 rounded-2xl font-black text-xl">

              Transfer Assets

            </button>

            <button className="w-full bg-red-500 hover:bg-red-400 transition-all text-white py-5 rounded-2xl font-black text-xl">

              Withdraw

            </button>

          </div>

          <div className="mt-10 p-6 rounded-3xl border border-green-500/20 bg-green-500/5">

            <h3 className="text-2xl font-black text-green-400 mb-4">

              Security Status

            </h3>

            <p className="text-zinc-400 leading-relaxed">

              Multi-signature cold wallet infrastructure active with real-time monitoring protection.

            </p>

          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-10">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-black">

            Transaction History

          </h2>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-black">

            Export Report

          </button>

        </div>

        <div className="space-y-6">

          {
            transactions.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border border-white/5 rounded-3xl p-6"
                >

                  <div>

                    <h3 className="text-2xl font-black mb-2">

                      {
                        item.type
                      }

                    </h3>

                    <p className="text-zinc-500">

                      Asset:
                      {" "}
                      {
                        item.asset
                      }

                    </p>

                  </div>

                  <div>

                    <h3 className="text-2xl font-black">

                      {
                        item.amount
                      }

                    </h3>

                  </div>

                  <div>

                    <span className="bg-green-500/10 text-green-400 px-5 py-3 rounded-2xl font-black">

                      {
                        item.status
                      }

                    </span>

                  </div>

                </div>
              )
            )
          }

        </div>

      </div>

    </MainLayout>
  );
};

export default Wallet;