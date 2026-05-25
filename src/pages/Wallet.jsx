import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import {
  getWallet,
} from "../services/walletService";

const Wallet = () => {

  const [wallet, setWallet] =
    useState(null);

  useEffect(() => {

    fetchWallet();

  }, []);

  const fetchWallet =
    async () => {

      try {

        const data =
          await getWallet();

        setWallet(data);

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Wallet
        </h1>

        <p className="text-zinc-500 mt-2">
          Manage your crypto assets
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#111] rounded-3xl border border-yellow-500/10 p-6">

          <p className="text-zinc-500 mb-2">
            USD Balance
          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            $
            {
              wallet?.usdBalance?.toLocaleString()
              || "0"
            }

          </h2>

        </div>

        <div className="bg-[#111] rounded-3xl border border-yellow-500/10 p-6">

          <p className="text-zinc-500 mb-2">
            BTC Holdings
          </p>

          <h2 className="text-5xl font-black">

            {
              wallet?.btc || 0
            }

          </h2>

        </div>

        <div className="bg-[#111] rounded-3xl border border-yellow-500/10 p-6">

          <p className="text-zinc-500 mb-2">
            ETH Holdings
          </p>

          <h2 className="text-5xl font-black">

            {
              wallet?.eth || 0
            }

          </h2>

        </div>

        <div className="bg-[#111] rounded-3xl border border-yellow-500/10 p-6">

          <p className="text-zinc-500 mb-2">
            SOL Holdings
          </p>

          <h2 className="text-5xl font-black">

            {
              wallet?.sol || 0
            }

          </h2>

        </div>

      </div>

      <div className="bg-[#111] rounded-3xl border border-yellow-500/10 p-8">

        <h2 className="text-3xl font-black mb-6">
          Portfolio Overview
        </h2>

        <div className="space-y-5">

          <div className="bg-black rounded-2xl p-6 flex items-center justify-between">

            <div>

              <h3 className="text-2xl font-black">
                Bitcoin
              </h3>

              <p className="text-zinc-500">
                BTC Holdings
              </p>

            </div>

            <div className="text-right">

              <h2 className="text-3xl font-black text-yellow-400">

                {
                  wallet?.btc || 0
                } BTC

              </h2>

            </div>

          </div>

          <div className="bg-black rounded-2xl p-6 flex items-center justify-between">

            <div>

              <h3 className="text-2xl font-black">
                Ethereum
              </h3>

              <p className="text-zinc-500">
                ETH Holdings
              </p>

            </div>

            <div className="text-right">

              <h2 className="text-3xl font-black text-blue-400">

                {
                  wallet?.eth || 0
                } ETH

              </h2>

            </div>

          </div>

          <div className="bg-black rounded-2xl p-6 flex items-center justify-between">

            <div>

              <h3 className="text-2xl font-black">
                Solana
              </h3>

              <p className="text-zinc-500">
                SOL Holdings
              </p>

            </div>

            <div className="text-right">

              <h2 className="text-3xl font-black text-purple-400">

                {
                  wallet?.sol || 0
                } SOL

              </h2>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Wallet;