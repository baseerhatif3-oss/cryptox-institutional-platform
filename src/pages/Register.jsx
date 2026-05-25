import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

const Register = () => {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      name: "",

      email: "",

      password: "",
    });

  const [loading,
    setLoading] =
    useState(false);

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

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

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
          "Registration failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#111] border border-white/10 rounded-[36px] p-10"
      >

        <h1 className="text-5xl font-black mb-8 text-center">

          Register

        </h1>

        <div className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition rounded-2xl py-4 text-black font-black"
          >

            {loading
              ? "Creating..."
              : "Create Account"}

          </button>

        </div>

      </form>

    </div>
  );
};

export default Register;