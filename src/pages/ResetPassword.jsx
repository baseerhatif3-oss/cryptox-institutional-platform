import {
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import axios from "axios";

const ResetPassword =
  () => {
    const navigate =
      useNavigate();

    const { token } =
      useParams();

    const [password,
      setPassword] =
      useState("");

    const [loading,
      setLoading] =
      useState(false);

    const submitHandler =
      async (e) => {
        e.preventDefault();

        try {
          setLoading(true);

          await axios.post(
            `https://crypto-backend-dojp.onrender.com/api/reset-password/${token}`,
            {
              password,
            }
          );

          alert(
            "Password reset successful!"
          );

          navigate(
            "/login"
          );
        } catch (error) {
          console.log(error);

          alert(
            error.response?.data
              ?.message ||
              "Reset failed"
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
              Reset Password
            </h1>

            <p className="text-slate-400 mt-3">
              Enter your new password
            </p>
          </div>

          {/* FORM */}

          <form
            onSubmit={
              submitHandler
            }
            className="space-y-5"
          >
            <div>
              <label className="block text-slate-300 mb-2">
                New Password
              </label>

              <input
                type="password"
                required
                value={
                  password
                }
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none"
                placeholder="Enter new password"
              />
            </div>

            <button
              type="submit"
              disabled={
                loading
              }
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl text-white font-bold text-xl"
            >
              {loading
                ? "Resetting..."
                : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    );
  };

export default ResetPassword;