import React, {
  useState,
} from "react";

const BuyCrypto = () => {

  const [amount, setAmount] =
    useState("1000");

  const [coin, setCoin] =
    useState("BTC");

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Buy Crypto
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Purchase crypto instantly using bank cards and fiat
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
          VISA / MASTERCARD
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#22c55e,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Fiat On-Ramp Infrastructure
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            BUY CRYPTO INSTANTLY
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Instantly purchase digital assets using debit cards,
            credit cards and global banking methods.
          </p>

        </div>

      </div>

      {/* BUY FORM */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <h2 className="text-3xl font-black">
            Purchase Crypto
          </h2>

          <div className="space-y-6 mt-8">

            <div>

              <label className="block text-gray-400 mb-3">
                Select Asset
              </label>

              <select
                value={coin}
                onChange={(e) =>
                  setCoin(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
              >

                <option>
                  BTC
                </option>

                <option>
                  ETH
                </option>

                <option>
                  SOL
                </option>

                <option>
                  USDT
                </option>

              </select>

            </div>

            <div>

              <label className="block text-gray-400 mb-3">
                Amount (USD)
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
              />

            </div>

            <div>

              <label className="block text-gray-400 mb-3">
                Payment Method
              </label>

              <div className="bg-black border border-white/10 rounded-2xl px-5 py-4">

                Visa / Mastercard

              </div>

            </div>

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition py-5 rounded-2xl font-black text-black text-lg">

              Buy {coin}

            </button>

          </div>

        </div>

        {/* SUMMARY */}

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <h2 className="text-3xl font-black">
            Transaction Summary
          </h2>

          <div className="space-y-6 mt-10">

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                Amount
              </span>

              <span className="font-bold">
                ${amount}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                Asset
              </span>

              <span className="font-bold">
                {coin}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                Processing Fee
              </span>

              <span className="font-bold">
                1.8%
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                Estimated Receive
              </span>

              <span className="text-yellow-400 font-black text-2xl">
                {(amount * 0.98).toFixed(2)} {coin}
              </span>

            </div>

          </div>

          <div className="mt-10 p-6 rounded-3xl bg-green-500/10 border border-green-500/20">

            <h3 className="text-2xl font-black text-green-400">
              Secure Payment
            </h3>

            <p className="text-gray-300 mt-3 leading-relaxed">
              All fiat transactions are encrypted and protected
              using enterprise-grade payment infrastructure.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BuyCrypto;