import {
  useState,
} from "react";

import axios from "axios";

const ForgotPassword =
  () => {
    const [email,
      setEmail] =
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
            "https://crypto-backend-dojp.onrender.com/api/forgot-password",
            {
              email,
            }
          );

          alert(
            "Password reset email sent!"
          );
        } catch (error) {
          console.log(error);

          alert(
            error.response?.data
              ?.message ||
              "Something went wrong"
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
              Forgot Password
            </h1>

            <p className="text-slate-400 mt-3">
              Reset your account password
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

            <button
              type="submit"
              disabled={
                loading
              }
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl text-white font-bold text-xl"
            >
              {loading
                ? "Sending..."
                : "Send Reset Email"}
            </button>
          </form>
        </div>
      </div>
    );
  };

export default ForgotPassword;