import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Wallet = () => {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [wallet, setWallet] =
    useState(null);

  const [coin, setCoin] =
    useState("USDT");

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  /*
  ==========================================
  OTP STATES
  ==========================================
  */

  const [otp, setOtp] =
    useState("");

  const [
    showOTPModal,
    setShowOTPModal,
  ] = useState(false);

  const [
    pendingWithdrawal,
    setPendingWithdrawal,
  ] = useState(null);

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
            `${API}/wallet/${user.id}`
          );

        setWallet(
          res.data.wallet
        );

      } catch (error) {

        console.log(error);
      }
    };

  /*
  ==========================================
  DEPOSIT
  ==========================================
  */

  const deposit =
    async () => {

      try {

        setLoading(true);

        const res =
          await axios.post(
            `${API}/wallet/deposit`,
            {
              userId:
                user.id,

              coin,

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

        setLoading(false);
      }
    };

  /*
  ==========================================
  WITHDRAW
  ==========================================
  */

  const withdraw =
    async () => {

      try {

        setLoading(true);

        const res =
          await axios.post(
            `${API}/wallet/withdraw`,
            {
              userId:
                user.id,

              coin,

              amount,
            }
          );

        /*
        ==========================================
        OTP REQUIRED
        ==========================================
        */

        if (
          res.data
            .requiresOTP
        ) {

          setPendingWithdrawal({
            coin,
            amount,
          });

          setShowOTPModal(
            true
          );

          alert(
            "OTP sent to your email"
          );

          return;
        }

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Withdrawal failed"
        );

      } finally {

        setLoading(false);
      }
    };

  /*
  ==========================================
  VERIFY WITHDRAWAL
  ==========================================
  */

  const verifyWithdrawal =
    async () => {

      try {

        const res =
          await axios.post(
            `${API}/wallet/verify-withdrawal`,
            {
              userId:
                user.id,

              coin:
                pendingWithdrawal.coin,

              amount:
                pendingWithdrawal.amount,

              otp,
            }
          );

        alert(
          res.data.message
        );

        setShowOTPModal(
          false
        );

        setOtp("");

        setAmount("");

        fetchWallet();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "OTP verification failed"
        );
      }
    };

  /*
  ==========================================
  LOADING
  ==========================================
  */

  if (!wallet) {

    return (
      <div className="text-white">
        Loading wallet...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div>

        <h1 className="text-4xl font-bold">
          Wallet
        </h1>

        <p className="text-gray-400 mt-2">
          Secure crypto asset management
        </p>

      </div>

      {/* BALANCES */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

        {Object.entries(
          wallet.balances
        ).map(
          ([key, value]) => (

            <div
              key={key}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6"
            >

              <p className="text-gray-400">
                {key}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {Number(
                  value
                ).toLocaleString()}
              </h2>

            </div>

          )
        )}

      </div>

      {/* ACTION PANEL */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Wallet Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* COIN */}

          <div>

            <label className="block mb-2 text-gray-400">
              Coin
            </label>

            <select
              value={coin}
              onChange={(e) =>
                setCoin(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
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
                XRP
              </option>

              <option>
                USDT
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

          {/* ACTIONS */}

          <div className="flex items-end gap-4">

            <button
              onClick={deposit}
              disabled={loading}
              className="flex-1 bg-green-500 hover:bg-green-600 transition py-4 rounded-xl font-bold"
            >

              Deposit

            </button>

            <button
              onClick={withdraw}
              disabled={loading}
              className="flex-1 bg-red-500 hover:bg-red-600 transition py-4 rounded-xl font-bold"
            >

              Withdraw

            </button>

          </div>

        </div>

      </div>

      {/* OTP MODAL */}

      {showOTPModal && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 w-full max-w-md">

            <h2 className="text-3xl font-bold mb-3">
              Verify Withdrawal
            </h2>

            <p className="text-gray-400 mb-6">
              Enter the OTP sent to your email
            </p>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 mb-6"
            />

            <div className="flex gap-4">

              <button
                onClick={
                  verifyWithdrawal
                }
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-xl font-bold"
              >
                Verify OTP
              </button>

              <button
                onClick={() =>
                  setShowOTPModal(
                    false
                  )
                }
                className="flex-1 bg-gray-800 hover:bg-gray-700 transition py-4 rounded-xl font-bold"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Wallet;