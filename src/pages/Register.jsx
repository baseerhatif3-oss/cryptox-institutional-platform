import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

export default function Register() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      name: "",
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

      await API.post(
        "/auth/register",
        formData
      );

      alert(
        "Registration successful"
      );

      navigate("/login");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Registration failed"
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

          Register

        </h1>


        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 mb-5 outline-none"
        />

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
              ? "Creating..."
              : "Create Account"
          }

        </button>

      </form>

    </div>
  );
}