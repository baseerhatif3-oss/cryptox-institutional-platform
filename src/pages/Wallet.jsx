import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Wallet = () => {

  const [wallet, setWallet] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [asset, setAsset] =
    useState("USDT");

  const [amount, setAmount] =
    useState("");

  const [processing, setProcessing] =
    useState(false);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );



  /*
  ==========================================
  FETCH WALLET
  ==========================================
  */

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet =
    async () => {
      try {

        const res =
          await axios.get(
            `${API}/user/wallet/${user.id}`
          );

        setWallet(
          res.data.wallet
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };



  /*
  ==========================================
  DEPOSIT
  ==========================================
  */

  const handleDeposit =
    async () => {
      try {

        setProcessing(true);

        const res =
          await axios.post(
            `${API}/transactions/deposit`,
            {
              userId:
                user.id,

              asset,

              amount,
            }
          );

        alert(
          res.data.message
        );

        setAmount("");

        fetchWallet();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Deposit failed"
        );

      } finally {

        setProcessing(false);
      }
    };



  /*
  ==========================================
  WITHDRAW
  ==========================================
  */

  const handleWithdraw =
    async () => {
      try {

        setProcessing(true);

        const res =
          await axios.post(
            `${API}/transactions/withdraw`,
            {
              userId:
                user.id,

              asset,

              amount,
            }
          );

        alert(
          res.data.message
        );

        setAmount("");

        fetchWallet();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Withdraw failed"
        );

      } finally {

        setProcessing(false);
      }
    };



  /*
  ==========================================
  LOADING
  ==========================================
  */

  if (loading) {
    return (
      <div className="text-2xl font-bold">
        Loading Wallet...
      </div>
    );
  }



  /*
  ==========================================
  NO WALLET
  ==========================================
  */

  if (!wallet) {
    return (
      <div className="text-2xl font-bold text-red-400">
        Wallet not found
      </div>
    );
  }



  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-4xl font-bold">
          Wallet
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your exchange assets
        </p>

      </div>



      {/* BALANCES */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        {Object.entries(
          wallet.balances
        ).map(
          ([coin, amount]) => (

            <div
              key={coin}
              className="bg-[#111] border border-gray-800 rounded-2xl p-5"
            >

              <p className="text-gray-400">
                {coin}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {Number(
                  amount
                ).toLocaleString()}
              </h2>

            </div>

          )
        )}

      </div>



      {/* DEPOSIT / WITHDRAW */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Deposit & Withdraw
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ASSET */}

          <div>

            <label className="block mb-2 text-gray-400">
              Asset
            </label>

            <select
              value={asset}
              onChange={(e) =>
                setAsset(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            >

              <option>
                USDT
              </option>

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
                XRP
              </option>

            </select>

          </div>



          {/* AMOUNT */}

          <div>

            <label className="block mb-2 text-gray-400">
              Amount
            </label>

            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) =>
                setAmount(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

          </div>

        </div>



        {/* BUTTONS */}

        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            onClick={
              handleDeposit
            }
            disabled={processing}
            className="bg-green-500 hover:bg-green-600 transition rounded-xl py-4 font-bold"
          >

            {processing
              ? "Processing..."
              : "Deposit"}

          </button>



          <button
            onClick={
              handleWithdraw
            }
            disabled={processing}
            className="bg-red-500 hover:bg-red-600 transition rounded-xl py-4 font-bold"
          >

            {processing
              ? "Processing..."
              : "Withdraw"}

          </button>

        </div>

      </div>



      {/* WALLET ADDRESSES */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Deposit Addresses
        </h2>

        <div className="space-y-4">

          {Object.entries(
            wallet.wallets
          ).map(
            ([coin, address]) => (

              <div
                key={coin}
                className="bg-black border border-gray-800 rounded-xl p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-gray-400">
                      {coin}
                    </p>

                    <p className="font-mono mt-2 break-all">
                      {address}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        address
                      )
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 transition px-4 py-2 rounded-xl text-black font-semibold"
                  >
                    Copy
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Wallet;