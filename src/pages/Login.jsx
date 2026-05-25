import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import { useAuth } from "../context/AuthContext";

export default function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

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

    try {

      setLoading(true);

      const res =
        await API.post(
          "/auth/login",
          formData
        );

      login(res.data);

      navigate("/dashboard");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Login failed"
      );
    }

    setLoading(false);
  };


  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-[#111] border border-gray-800 rounded-3xl p-10 w-full max-w-md"
      >

        <h1 className="text-5xl font-bold mb-8 text-center">

          Login

        </h1>


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 mb-5 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 mb-6 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300"
        >

          {
            loading
              ? "Logging in..."
              : "Login"
          }

        </button>

      </form>

    </div>
  );
}