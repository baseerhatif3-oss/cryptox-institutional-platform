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

      <h1 className="text-4xl font-bold text-white mb-8">
        Wallet
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#111] rounded-3xl p-6 border border-yellow-500/20">

          <p className="text-gray-500">
            USD Balance
          </p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-4">

            $
            {
              wallet?.balance?.toLocaleString() ||
              0
            }

          </h2>

        </div>

        <div className="bg-[#111] rounded-3xl p-6 border border-yellow-500/20">

          <p className="text-gray-500">
            BTC
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">

            {
              wallet?.btc || 0
            }

          </h2>

        </div>

        <div className="bg-[#111] rounded-3xl p-6 border border-yellow-500/20">

          <p className="text-gray-500">
            ETH
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">

            {
              wallet?.eth || 0
            }

          </h2>

        </div>

        <div className="bg-[#111] rounded-3xl p-6 border border-yellow-500/20">

          <p className="text-gray-500">
            SOL
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">

            {
              wallet?.sol || 0
            }

          </h2>

        </div>

      </div>

    </MainLayout>
  );
};

export default Wallet;