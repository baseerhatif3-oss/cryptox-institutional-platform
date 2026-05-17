import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "https://crypto-backend-dojp.onrender.com/api/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
      );

      toast.success(
        "Login successful"
      );

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            CryptoX
          </h1>

          <p className="text-slate-400">
            Professional Crypto Exchange
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={
                formData.password
              }
              onChange={handleChange}
              className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>

        <div className="text-center mt-5">
          <Link
            to="/forgot-password"
            className="text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="text-center mt-6">
          <p className="text-slate-400">
            Don&apos;t have an account?
          </p>

          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;