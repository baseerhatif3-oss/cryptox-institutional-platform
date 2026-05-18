import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import axios from "axios";

const VerifyOTP = () => {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const verifyOTP =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        await axios.post(
          "https://crypto-backend-dojp.onrender.com/api/verify-otp",
          {
            email,
            otp,
          }
        );

        alert(
          "Account verified successfully!"
        );

        navigate(
          "/login"
        );
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Verification failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8">
        {/* HEADER */}

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Verify Account
          </h1>

          <p className="text-slate-400 mt-3">
            Enter your OTP verification code
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={
            verifyOTP
          }
          className="space-y-5"
        >
          {/* EMAIL */}

          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none"
              placeholder="Enter email"
            />
          </div>

          {/* OTP */}

          <div>
            <label className="block text-slate-300 mb-2">
              OTP Code
            </label>

            <input
              type="text"
              required
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none"
              placeholder="Enter OTP"
            />
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl text-white font-bold text-xl"
          >
            {loading
              ? "Verifying..."
              : "Verify Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;