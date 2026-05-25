import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

import { useAuth } from "../context/AuthContext";

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
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

      const res = await API.post("/auth/login", form);

      login(res.data.token, res.data.user);

      navigate("/dashboard");

    } catch (err) {

      alert(
        err?.response?.data?.message || "Login failed"
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
          Login
        </h1>

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
          Login
        </button>

        <p className="text-gray-400 mt-6 text-center">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-yellow-400"
          >
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}