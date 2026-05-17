import { useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://crypto-backend-dojp.onrender.com/api/request-reset",
        {
          email,
        }
      );

      toast.success(
        "Password reset email sent"
      );

      setEmail("");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-2">
          Forgot Password
        </h1>

        <p className="text-slate-400 mb-8">
          Enter your email to receive a
          reset link.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;