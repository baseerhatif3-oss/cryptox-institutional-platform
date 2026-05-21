import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

const Register =
  () => {
    const navigate =
      useNavigate();

    const [
      formData,
      setFormData,
    ] = useState({
      name: "",

      email: "",

      password: "",
    });

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
          const response =
            await API.post(
              "/auth/register",
              formData
            );

          localStorage.setItem(
            "token",
            response.data
              .token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(
              response.data
                .user
            )
          );

          navigate(
            "/dashboard"
          );
        } catch (error) {
          console.log(
            error
          );

          alert(
            error.response
              ?.data
              ?.message ||
              "Register failed"
          );
        }
      };

    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#0b0e11] border border-gray-800 rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-yellow-400 text-center">
            CryptoX
          </h1>

          <p className="text-gray-400 text-center mt-3">
            Create your account
          </p>

          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-5 mt-8"
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
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none"
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
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none"
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
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl transition"
            >
              Register
            </button>
          </form>

          <p className="text-gray-500 text-center mt-6">
            Already have an
            account?{" "}
            <Link
              to="/login"
              className="text-yellow-400"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    );
  };

export default Register;