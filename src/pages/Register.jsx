import React, {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

import toast from "react-hot-toast";

const Register = () => {
  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async (e) => {
      e.preventDefault();

      try {
        await API.post(
          "/auth/register",
          {
            name,
            email,
            password,
          }
        );

        toast.success(
          "Registration successful"
        );

        navigate("/");
      } catch (error) {
        console.log(error);

        toast.error(
          error?.response?.data
            ?.message ||
            "Register failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-5">
      <form
        onSubmit={
          handleRegister
        }
        className="bg-[#0f172a] p-10 rounded-3xl border border-slate-800 w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Register
        </h1>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full p-4 rounded-2xl bg-[#020617] border border-slate-700 text-white"
          />

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
            Register
          </button>

          <p className="text-slate-400 text-center">
            Already have account?{" "}

            <Link
              to="/"
              className="text-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;