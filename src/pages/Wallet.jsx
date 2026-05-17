import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../services/api";

const Wallet = () => {
  const [balance, setBalance] =
    useState(0);

  const [depositAmount, setDepositAmount] =
    useState("");

  const [
    withdrawAmount,
    setWithdrawAmount,
  ] = useState("");

  const fetchBalance = async () => {
    try {
      const { data } = await API.get(
        "/balance"
      );

      setBalance(data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const handleDeposit = async () => {
    const amount =
      Number(depositAmount);

    if (!amount || amount <= 0) {
      return toast.error(
        "Enter valid amount"
      );
    }

    const updated =
      balance + amount;

    setBalance(updated);

    localStorage.setItem(
      "walletBalance",
      updated
    );

    toast.success(
      `Deposited $${amount}`
    );

    setDepositAmount("");
  };

  const handleWithdraw = async () => {
    const amount =
      Number(withdrawAmount);

    if (!amount || amount <= 0) {
      return toast.error(
        "Enter valid amount"
      );
    }

    if (amount > balance) {
      return toast.error(
        "Insufficient balance"
      );
    }

    const updated =
      balance - amount;

    setBalance(updated);

    localStorage.setItem(
      "walletBalance",
      updated
    );

    toast.success(
      `Withdrawn $${amount}`
    );

    setWithdrawAmount("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Wallet
          </h1>

          <p className="text-slate-400 mt-2">
            Deposit and withdraw funds.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8">
          <p className="text-slate-400 mb-3">
            Available Balance
          </p>

          <h2 className="text-5xl font-bold text-green-400">
            ${balance.toFixed(2)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DEPOSIT */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Deposit Funds
            </h2>

            <input
              type="number"
              placeholder="Enter amount"
              value={depositAmount}
              onChange={(e) =>
                setDepositAmount(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 p-4 rounded-xl outline-none mb-5"
            />

            <button
              onClick={handleDeposit}
              className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl font-semibold"
            >
              Deposit
            </button>
          </div>

          {/* WITHDRAW */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Withdraw Funds
            </h2>

            <input
              type="number"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) =>
                setWithdrawAmount(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 p-4 rounded-xl outline-none mb-5"
            />

            <button
              onClick={handleWithdraw}
              className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold"
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* HISTORY */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Wallet Information
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  USD Wallet
                </p>

                <p className="text-slate-400 text-sm">
                  Main exchange wallet
                </p>
              </div>

              <p className="text-green-400 font-bold text-xl">
                ${balance.toFixed(2)}
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-slate-400">
                Deposit and withdrawal
                system is currently running
                in simulation mode for demo
                trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;