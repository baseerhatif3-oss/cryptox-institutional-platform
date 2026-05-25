import { useState } from "react";

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

  const handleSubmit =
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

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Registration failed"
        );
      }
    };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111] border border-yellow-500/20 rounded-[40px] p-10">

        <h1 className="text-5xl font-black text-white">
          Register
        </h1>

        <p className="text-gray-500 mt-3">
          Create professional trading account
        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="mt-10 space-y-5"
        >

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) =>
              setFormData({

                ...formData,

                name:
                  e.target.value,
              })
            }
            className="w-full bg-black border border-yellow-500/20 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) =>
              setFormData({

                ...formData,

                email:
                  e.target.value,
              })
            }
            className="w-full bg-black border border-yellow-500/20 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({

                ...formData,

                password:
                  e.target.value,
              })
            }
            className="w-full bg-black border border-yellow-500/20 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-2xl font-bold transition-all">

            Create Account

          </button>

        </form>

        <p className="text-gray-500 mt-6 text-center">

          Already have account?{" "}

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