import React, {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

import toast from "react-hot-toast";

const Login = () => {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async (e) => {
      e.preventDefault();

      try {
        const { data } =
          await API.post(
            "/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user
          )
        );

        toast.success(
          "Login successful"
        );

        navigate(
          "/dashboard"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          error?.response?.data
            ?.message ||
            "Login failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-5">
      <form
        onSubmit={
          handleLogin
        }
        className="bg-[#0f172a] p-10 rounded-3xl border border-slate-800 w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Login
        </h1>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full p-4 rounded-2xl bg-[#020617] border border-slate-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full p-4 rounded-2xl bg-[#020617] border border-slate-700 text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-4 rounded-2xl font-bold text-white"
          >
            Login
          </button>

          <p className="text-slate-400 text-center">
            No account?{" "}

            <Link
              to="/register"
              className="text-blue-500"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;