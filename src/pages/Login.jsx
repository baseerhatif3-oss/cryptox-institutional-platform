import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

import {
  saveToken,
} from "../utils/auth";

const Login = () => {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e
  ) => {

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

        const response =
          await API.post(
            "/auth/login",
            formData
          );

        saveToken(
          response.data.token
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Login failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-black text-yellow-400">
            CryptoX
          </h1>

          <p className="text-zinc-500 mt-3">
            Login to your exchange account
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black"
          >

            {
              loading
                ? "Logging in..."
                : "Login"
            }

          </button>

        </form>

        <p className="text-center text-zinc-500 mt-6">

          Don’t have an account?

          <Link
            to="/register"
            className="text-yellow-400 ml-2"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;