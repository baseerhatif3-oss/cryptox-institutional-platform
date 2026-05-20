import React, {
  useState,
} from "react";

import axios from "axios";

const Register =
  () => {
    const [
      name,
      setName,
    ] = useState("");

    const [
      email,
      setEmail,
    ] = useState("");

    const [
      password,
      setPassword,
    ] = useState("");

    const [
      loading,
      setLoading,
    ] = useState(false);

    const handleRegister =
      async (
        e
      ) => {
        e.preventDefault();

        try {
          setLoading(
            true
          );

          const res =
            await axios.post(
              "https://YOUR-BACKEND-URL/api/auth/register",
              {
                name,
                email,
                password,
              }
            );

          localStorage.setItem(
            "token",
            res.data.token
          );

          window.location.href =
            "/dashboard";
        } catch (error) {
          alert(
            error.response
              ?.data
              ?.message ||
              "Registration failed"
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    return (
      <div className="min-h-screen bg-[#0b0e11] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-400">
              CryptoX
            </h1>

            <p className="text-gray-400 mt-3">
              Create Your Exchange Account
            </p>
          </div>

          <form
            onSubmit={
              handleRegister
            }
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(
                e
              ) =>
                setName(
                  e.target
                    .value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(
                e
              ) =>
                setEmail(
                  e.target
                    .value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={
                password
              }
              onChange={(
                e
              ) =>
                setPassword(
                  e.target
                    .value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 text-white"
            />

            <button
              type="submit"
              disabled={
                loading
              }
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition"
            >
              {loading
                ? "Creating Account..."
                : "Register"}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-yellow-400"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    );
  };

export default Register;