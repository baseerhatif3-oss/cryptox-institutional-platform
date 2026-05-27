import MainLayout from "../components/layout/MainLayout";

import {
  Wallet as WalletIcon,
  ShieldCheck,
  ArrowUpRight,
  ArrowDownLeft,
  Bitcoin,
} from "lucide-react";

const assets = [
  {
    coin: "Bitcoin",
    symbol: "BTC",
    balance: "4.82 BTC",
    usd: "$406,000",
    growth: "+12.4%",
  },

  {
    coin: "Ethereum",
    symbol: "ETH",
    balance: "48.1 ETH",
    usd: "$182,000",
    growth: "+8.2%",
  },

  {
    coin: "Solana",
    symbol: "SOL",
    balance: "820 SOL",
    usd: "$94,000",
    growth: "+18.9%",
  },

  {
    coin: "Tether",
    symbol: "USDT",
    balance: "128,000 USDT",
    usd: "$128,000",
    growth: "+0.2%",
  },
];

const transactions = [
  {
    type: "Deposit",
    amount: "$24,000",
    asset: "BTC",
  },

  {
    type: "Withdrawal",
    amount: "$8,200",
    asset: "ETH",
  },

  {
    type: "Transfer",
    amount: "$12,400",
    asset: "SOL",
  },

  {
    type: "Deposit",
    amount: "$52,000",
    asset: "USDT",
  },
];

const Wallet = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

          <span className="text-yellow-400 font-bold">

            SECURE WALLET INFRASTRUCTURE

          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          Digital

          <span className="text-yellow-400">

            {" "}Wallet

          </span>

        </h1>

        <p className="text-zinc-500 text-xl max-w-3xl">

          Enterprise-grade multi-asset custody and transaction
          management system.

        </p>

      </div>

      <div className="glass rounded-3xl p-8 mb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>

            <p className="text-zinc-500 mb-4">

              Total Wallet Balance

            </p>

            <h2 className="text-6xl font-black text-yellow-400">

              $802K

            </h2>

          </div>

          <div>

            <p className="text-zinc-500 mb-4">

              Monthly Growth

            </p>

            <h2 className="text-5xl font-black text-green-400">

              +18.2%

            </h2>

          </div>

          <div>

            <p className="text-zinc-500 mb-4">

              Assets Managed

            </p>

            <h2 className="text-5xl font-black text-blue-400">

              24

            </h2>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="xl:col-span-2 space-y-6">

          {
            assets.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="glass rounded-3xl p-8 card-hover"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                    <div className="flex items-center gap-5">

                      <div className="w-20 h-20 rounded-3xl bg-yellow-400 flex items-center justify-center">

                        <Bitcoin
                          className="text-black"
                          size={38}
                        />

                      </div>

                      <div>

                        <h2 className="text-4xl font-black mb-2">

                          {
                            item.coin
                          }

                        </h2>

                        <p className="text-zinc-500 text-lg">

                          {
                            item.symbol
                          } Wallet

                        </p>

                      </div>

                    </div>

                    <div className="text-left lg:text-right">

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

                      <p className="text-green-400 font-black text-xl">

                        {
                          item.growth
                        }

                      </p>

                    </div>

                  </div>

                </div>

              )
            )
          }

        </div>

        <div className="space-y-8">

          <div className="glass rounded-3xl p-8">

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

          </div>

          <div className="glass rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-8">

              <ShieldCheck
                className="text-green-400"
                size={40}
              />

              <h2 className="text-4xl font-black">

                Security Status

              </h2>

            </div>

            <div className="space-y-5">

              {
                [
                  "2FA Protection Active",
                  "Cold Storage Enabled",
                  "Enterprise Encryption",
                  "Withdrawal Protection",
                ].map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      key={index}
                      className="flex items-center justify-between bg-black/30 rounded-2xl p-5"
                    >

                      <span className="font-semibold">

                        {
                          item
                        }

                      </span>

                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                    </div>

                  )
                )
              }

            </div>

          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-8">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl font-black mb-3">

              Transaction Activity

            </h2>

            <p className="text-zinc-500">

              Institutional wallet transaction monitoring.

            </p>

          </div>

          <div className="bg-green-500/10 text-green-400 px-5 py-3 rounded-2xl font-black">

            LIVE

          </div>

        </div>

        <div className="space-y-5">

          {
            transactions.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 bg-black/30 border border-white/5 rounded-3xl p-6"
                >

                  <div className="flex items-center gap-5">

                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${
                      item.type === "Withdrawal"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-green-500/10 text-green-400"
                    }`}>

                      {
                        item.type === "Withdrawal"
                          ? (
                            <ArrowDownLeft
                              size={30}
                            />
                          )
                          : (
                            <ArrowUpRight
                              size={30}
                            />
                          )
                      }

                    </div>

                    <div>

                      <h2 className="text-3xl font-black mb-2">

                        {
                          item.type
                        }

                      </h2>

                      <p className="text-zinc-500">

                        {
                          item.asset
                        } Transaction

                      </p>

                    </div>

                  </div>

                  <div className="text-left lg:text-right">

                    <h2 className="text-4xl font-black text-yellow-400 mb-2">

                      {
                        item.amount
                      }

                    </h2>

                    <p className="text-green-400 font-bold">

                      Confirmed

                    </p>

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