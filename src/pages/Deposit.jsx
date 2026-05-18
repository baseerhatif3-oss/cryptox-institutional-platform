import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const Deposit = () => {
  const [amount, setAmount] =
    useState("");

  const [method, setMethod] =
    useState("Binance");

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [deposits, setDeposits] =
    useState([]);

  const fetchDeposits =
    async () => {
      try {
        const res =
          await API.get(
            "/deposits"
          );

        setDeposits(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchDeposits();
  }, []);

  const handleDeposit =
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

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "amount",
          amount
        );

        formData.append(
          "method",
          method
        );

        if (file) {
          formData.append(
            "screenshot",
            file
          );
        }

        await API.post(
          "/deposit",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        toast.success(
          "Deposit submitted"
        );

        setAmount("");

        setFile(null);

        fetchDeposits();
      } catch (error) {
        toast.error(
          "Deposit failed"
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
            Deposit Funds
          </h1>

          <p className="text-slate-400 mt-2">
            Submit funding proof
          </p>
        </div>

        {/* DEPOSIT FORM */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
          <form
            onSubmit={
              handleDeposit
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
                Payment Method
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
                  Binance
                </option>

                <option>
                  Bank Transfer
                </option>

                <option>
                  Easypaisa
                </option>

                <option>
                  JazzCash
                </option>

                <option>
                  USDT TRC20
                </option>
              </select>
            </div>

            {/* SCREENSHOT */}

            <div>
              <label className="block mb-3 text-slate-400">
                Upload Screenshot
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setFile(
                    e.target.files[0]
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              />
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl font-bold text-xl transition"
            >
              {loading
                ? "Submitting..."
                : "Submit Deposit"}
            </button>
          </form>
        </div>

        {/* DEPOSIT HISTORY */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            Deposit History
          </h2>

          {deposits.length ===
          0 ? (
            <p className="text-slate-400">
              No deposits yet
            </p>
          ) : (
            <div className="space-y-5">
              {deposits.map(
                (deposit) => (
                  <div
                    key={
                      deposit._id
                    }
                    className="bg-slate-800 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-bold">
                        $
                        {deposit.amount}
                      </h3>

                      <p className="text-slate-400 mt-1">
                        {
                          deposit.method
                        }
                      </p>
                    </div>

                    <div
                      className={`px-4 py-2 rounded-xl font-bold ${
                        deposit.status ===
                        "APPROVED"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {
                        deposit.status
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

export default Deposit;