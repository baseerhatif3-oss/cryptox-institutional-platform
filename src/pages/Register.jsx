import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", form);

      alert("Registration successful");

      navigate("/login");

    } catch (err) {

      alert(
        err?.response?.data?.message || "Registration failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white p-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#0b0b0b] border border-gray-800 rounded-3xl p-8"
      >

        <h1 className="text-5xl font-bold mb-8">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 bg-black border border-gray-700 rounded-2xl px-5 py-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 bg-black border border-gray-700 rounded-2xl px-5 py-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 bg-black border border-gray-700 rounded-2xl px-5 py-4"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold"
        >
          Create Account
        </button>

        <p className="text-gray-400 mt-6 text-center">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-yellow-400"
          >
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}