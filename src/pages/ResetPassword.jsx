import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import toast from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] =
    useState("");

  const { token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `https://crypto-backend-dojp.onrender.com/api/reset-password/${token}`,
        {
          password,
        }
      );

      toast.success(
        "Password reset successful"
      );

      navigate("/login");
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
          Reset Password
        </h1>

        <p className="text-slate-400 mb-8">
          Enter your new password.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="password"
            placeholder="New Password"
            required
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;