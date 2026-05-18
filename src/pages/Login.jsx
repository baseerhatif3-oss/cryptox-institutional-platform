import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../api/axios";

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

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res =
        await API.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      toast.success(
        "Login successful"
      );

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 mb-8">
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-4 py-4 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-4 py-4 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-bold text-white transition"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <div className="mt-6 flex justify-between text-sm">
          <Link
            to="/register"
            className="text-blue-400"
          >
            Create Account
          </Link>

          <Link
            to="/forgot-password"
            className="text-blue-400"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;