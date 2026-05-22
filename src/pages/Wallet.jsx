import React, {
  useEffect,
  useState,
} from "react";

import {
  getWallet,
  depositFunds,
  withdrawFunds,
} from "../services/walletApi";

const Wallet = () => {
  const [wallet, setWallet] =
    useState(null);

  const [asset, setAsset] =
    useState("USDT");

  const [amount, setAmount] =
    useState("");

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet =
    async () => {
      try {
        const data =
          await getWallet(
            user._id
          );

        setWallet(
          data.wallet
        );
      } catch (error) {
        console.log(error);
      }
    };

  /* DEPOSIT */

  const handleDeposit =
    async () => {
      try {
        await depositFunds(
          user._id,
          asset,
          amount
        );

        alert(
          "Deposit Successful"
        );

        fetchWallet();
      } catch (error) {
        console.log(error);

        alert(
          "Deposit Failed"
        );
      }
    };

  /* WITHDRAW */

  const handleWithdraw =
    async () => {
      try {
        await withdrawFunds(
          user._id,
          asset,
          amount
        );

        alert(
          "Withdrawal Successful"
        );

        fetchWallet();
      } catch (error) {
        console.log(error);

        alert(
          "Withdrawal Failed"
        );
      }
    };

  if (!wallet) {
    return (
      <div>
        Loading wallet...
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
          Manage your assets and
          balances
        </p>
      </div>

      {/* BALANCES */}

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(
          wallet.balances
        ).map(
          ([coin, value]) => (
            <div
              key={coin}
              className="bg-[#111] border border-gray-800 rounded-2xl p-5"
            >
              <p className="text-gray-400">
                {coin}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {Number(
                  value
                ).toFixed(4)}
              </h2>
            </div>
          )
        )}
      </div>

      {/* ACTION PANEL */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Deposit / Withdraw
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ASSET */}

          <select
            value={asset}
            onChange={(e) =>
              setAsset(
                e.target.value
              )
            }
            className="bg-black border border-gray-700 rounded-xl px-4 py-3"
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

          {/* AMOUNT */}

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
            className="bg-black border border-gray-700 rounded-xl px-4 py-3"
          />

          {/* BUTTONS */}

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={
                handleDeposit
              }
              className="bg-green-500 hover:bg-green-600 py-3 rounded-xl font-bold"
            >
              Deposit
            </button>

            <button
              onClick={
                handleWithdraw
              }
              className="bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;