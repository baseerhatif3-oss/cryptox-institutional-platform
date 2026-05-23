import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  FaBitcoin,
  FaEthereum,
} from "react-icons/fa";

import {
  SiSolana,
} from "react-icons/si";

import {
  RiRippleFill,
} from "react-icons/ri";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Wallet = () => {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [
    balances,
    setBalances,
  ] = useState({
    BTC: 0.52,
    ETH: 12.8,
    SOL: 84,
    XRP: 4200,
  });

  const [coin, setCoin] =
    useState("BTC");

  const [amount, setAmount] =
    useState("");

  const [
    withdrawAmount,
    setWithdrawAmount,
  ] = useState("");

  const [address, setAddress] =
    useState("");

  const [otp, setOtp] =
    useState("");

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

        if (
          res.data.wallet
        ) {

          setBalances(
            res.data.wallet
          );
        }

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

        fetchWallet();

      } catch (error) {

        console.log(error);

        alert(
          "Deposit failed"
        );
      }
    };

  /*
  ==========================================
  SEND OTP
  ==========================================
  */

  const sendOTP =
    async () => {

      try {

        const res =
          await axios.post(
            `${API}/wallet/send-withdraw-otp`,
            {
              userId:
                user.id,
            }
          );

        alert(
          res.data.message
        );

      } catch (error) {

        console.log(error);

        alert(
          "OTP failed"
        );
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

        const res =
          await axios.post(
            `${API}/wallet/withdraw`,
            {
              userId:
                user.id,

              coin,

              amount:
                withdrawAmount,

              address,

              otp,
            }
          );

        alert(
          res.data.message
        );

        fetchWallet();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Withdraw failed"
        );
      }
    };

  /*
  ==========================================
  TOTAL VALUE
  ==========================================
  */

  const totalBalance =
    24820;

  /*
  ==========================================
  ICONS
  ==========================================
  */

  const icons = {

    BTC:
      <FaBitcoin className="text-yellow-400 text-3xl" />,

    ETH:
      <FaEthereum className="text-blue-400 text-3xl" />,

    SOL:
      <SiSolana className="text-purple-400 text-3xl" />,

    XRP:
      <RiRippleFill className="text-cyan-400 text-3xl" />,
  };

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Wallet
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Secure multi-asset wallet infrastructure
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
          WALLET ACTIVE
        </div>

      </div>

      {/* BALANCE HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Total Portfolio Value
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            $
            {totalBalance.toLocaleString()}
          </h1>

          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
              +12.8%
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-2xl font-bold">
              SECURE STORAGE
            </div>

          </div>

        </div>

      </div>

      {/* COINS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {Object.entries(
          balances
        ).map(
          (
            [key, value]
          ) => (

            <div
              key={key}
              className="bg-[#111] border border-white/10 rounded-[32px] p-8"
            >

              <div className="flex items-center justify-between">

                {
                  icons[key]
                }

                <div className="bg-white/5 px-4 py-2 rounded-xl text-sm font-bold">
                  {key}
                </div>

              </div>

              <h2 className="text-4xl font-black mt-8">
                {value}
              </h2>

              <p className="text-gray-400 mt-3">
                Available Balance
              </p>

            </div>

          )
        )}

      </div>

      {/* ACTIONS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* DEPOSIT */}

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <h2 className="text-3xl font-black mb-8">
            Deposit Funds
          </h2>

          <div className="space-y-6">

            <div>

              <label className="block mb-3 text-gray-400 font-semibold">
                Asset
              </label>

              <select
                value={coin}
                onChange={(e) =>
                  setCoin(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
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

              </select>

            </div>

            <div>

              <label className="block mb-3 text-gray-400 font-semibold">
                Amount
              </label>

              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
              />

            </div>

            <button
              onClick={deposit}
              className="w-full bg-green-500 hover:bg-green-600 transition py-5 rounded-2xl font-black text-lg"
            >

              Deposit Funds

            </button>

          </div>

        </div>

        {/* WITHDRAW */}

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <h2 className="text-3xl font-black mb-8">
            Withdraw Funds
          </h2>

          <div className="space-y-6">

            <div>

              <label className="block mb-3 text-gray-400 font-semibold">
                Asset
              </label>

              <select
                value={coin}
                onChange={(e) =>
                  setCoin(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
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

              </select>

            </div>

            <div>

              <label className="block mb-3 text-gray-400 font-semibold">
                Amount
              </label>

              <input
                type="number"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) =>
                  setWithdrawAmount(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
              />

            </div>

            <div>

              <label className="block mb-3 text-gray-400 font-semibold">
                Wallet Address
              </label>

              <input
                type="text"
                placeholder="Destination address"
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
              />

            </div>

            <div>

              <label className="block mb-3 text-gray-400 font-semibold">
                OTP Code
              </label>

              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
              />

            </div>

            <div className="grid grid-cols-2 gap-5">

              <button
                onClick={sendOTP}
                className="bg-yellow-500 hover:bg-yellow-600 transition py-5 rounded-2xl font-black text-black"
              >

                Send OTP

              </button>

              <button
                onClick={withdraw}
                className="bg-red-500 hover:bg-red-600 transition py-5 rounded-2xl font-black"
              >

                Withdraw

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Wallet;