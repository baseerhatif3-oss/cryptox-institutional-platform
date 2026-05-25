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

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-black">
            Wallet
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage your crypto assets
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-400 mb-2">
            USD Balance
          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            $
            {
              wallet?.balance?.toLocaleString() ||
              0
            }

          </h2>

        </div>

        <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-400 mb-2">
            BTC Holdings
          </p>

          <h2 className="text-5xl font-black">

            {
              wallet?.btc || 0
            }

          </h2>

        </div>

        <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-400 mb-2">
            ETH Holdings
          </p>

          <h2 className="text-5xl font-black">

            {
              wallet?.eth || 0
            }

          </h2>

        </div>

        <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-400 mb-2">
            SOL Holdings
          </p>

          <h2 className="text-5xl font-black">

            {
              wallet?.sol || 0
            }

          </h2>

        </div>

      </div>

      <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

        <h2 className="text-3xl font-black mb-6">
          Portfolio Overview
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between items-center bg-black rounded-2xl p-5">

            <div>

              <h3 className="text-xl font-bold">
                Bitcoin
              </h3>

              <p className="text-zinc-500">
                BTC Holdings
              </p>

            </div>

            <div className="text-right">

              <h3 className="text-xl font-bold text-yellow-400">

                {
                  wallet?.btc || 0
                } BTC

              </h3>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Wallet;