import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const Withdraw = () => {
  const [amount, setAmount] =
    useState("");

  const [method, setMethod] =
    useState("USDT TRC20");

  const [address, setAddress] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [withdraws, setWithdraws] =
    useState([]);

  const fetchWithdraws =
    async () => {
      try {
        const res =
          await API.get(
            "/withdraws"
          );

        setWithdraws(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchWithdraws();
  }, []);

  const handleWithdraw =
    async (e) => {
      e.preventDefault();

      try {
        if (
          !amount ||
          Number(amount) <= 0
        ) {
          return toast.error(
            "Enter amount"
          );
        }

        if (!address) {
          return toast.error(
            "Enter wallet address"
          );
        }

        setLoading(true);

        await API.post(
          "/withdraw",
          {
            amount,
            method,
            address,
          }
        );

        toast.success(
          "Withdraw request submitted"
        );

        setAmount("");

        setAddress("");

        fetchWithdraws();
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Withdraw failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Withdraw Funds
          </h1>

          <p className="text-slate-400 mt-2">
            Request balance withdrawal
          </p>
        </div>

        {/* FORM */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
          <form
            onSubmit={
              handleWithdraw
            }
            className="space-y-6"
          >
            {/* AMOUNT */}

            <div>
              <label className="block mb-3 text-slate-400">
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
                placeholder="Enter amount"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              />
            </div>

            {/* METHOD */}

            <div>
              <label className="block mb-3 text-slate-400">
                Withdrawal Method
              </label>

              <select
                value={method}
                onChange={(e) =>
                  setMethod(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              >
                <option>
                  USDT TRC20
                </option>

                <option>
                  Binance
                </option>

                <option>
                  Easypaisa
                </option>

                <option>
                  JazzCash
                </option>

                <option>
                  Bank Transfer
                </option>
              </select>
            </div>

            {/* ADDRESS */}

            <div>
              <label className="block mb-3 text-slate-400">
                Wallet Address /
                Account Info
              </label>

              <input
                type="text"
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
                placeholder="Enter wallet address"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 py-5 rounded-2xl font-bold text-xl transition"
            >
              {loading
                ? "Submitting..."
                : "Request Withdraw"}
            </button>
          </form>
        </div>

        {/* HISTORY */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            Withdraw History
          </h2>

          {withdraws.length ===
          0 ? (
            <p className="text-slate-400">
              No withdraws yet
            </p>
          ) : (
            <div className="space-y-5">
              {withdraws.map(
                (withdraw) => (
                  <div
                    key={
                      withdraw._id
                    }
                    className="bg-slate-800 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-bold">
                        $
                        {
                          withdraw.amount
                        }
                      </h3>

                      <p className="text-slate-400 mt-1">
                        {
                          withdraw.method
                        }
                      </p>
                    </div>

                    <div
                      className={`px-4 py-2 rounded-xl font-bold ${
                        withdraw.status ===
                        "APPROVED"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {
                        withdraw.status
                      }
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Withdraw;