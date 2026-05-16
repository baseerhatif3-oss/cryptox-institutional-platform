import React, {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

const Register = () => {
  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleRegister =
    async (e) => {
      e.preventDefault();

      try {
        const res =
          await API.post(
            "/auth/register",
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

        navigate(
          "/dashboard"
        );
      } catch (err) {
        alert(
          err.response?.data
            ?.message ||
            "Register failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <div className="bg-[#0f172a] p-10 rounded-3xl w-full max-w-md border border-slate-800">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Join CryptoX
        </p>

        <form
          onSubmit={
            handleRegister
          }
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
            required
          />

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
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
            required
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
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-4 rounded-xl font-bold"
          >
            Register
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have account?{" "}
          <Link
            to="/"
            className="text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;