import React, {
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Register = () => {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  /*
  ==========================================
  REGISTER
  ==========================================
  */

  const register =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const res =
          await axios.post(
            `${API}/auth/register`,
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

        localStorage.setItem(
          "user",
          JSON.stringify(
            res.data.user
          )
        );

        alert(
          "Account created successfully"
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        console.log(error);

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

    <div className="min-h-screen flex items-center justify-center py-10">

      <div className="grid lg:grid-cols-2 w-full max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-[#111]">

        {/* LEFT SIDE */}

        <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-gradient-to-br from-blue-500/10 to-transparent">

          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#2563eb,transparent_40%)]" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-full font-semibold mb-10">

              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

              White Label Exchange Infrastructure

            </div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              className="text-6xl font-black leading-tight"
            >

              Build Your
              <br />

              Future In
              <br />

              Crypto

            </motion.h1>

            <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-xl">

              Join a professional-grade crypto exchange platform with
              realtime trading, advanced futures markets,
              institutional security and powerful trading tools.

            </p>

          </div>

          {/* STATS */}

          <div className="relative z-10 grid grid-cols-2 gap-5">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <p className="text-gray-400">
                Realtime Markets
              </p>

              <h2 className="text-3xl font-black mt-3">
                24/7
              </h2>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <p className="text-gray-400">
                Security Layer
              </p>

              <h2 className="text-3xl font-black mt-3">
                OTP + KYC
              </h2>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-8 lg:p-14 flex items-center">

          <div className="w-full max-w-md mx-auto">

            {/* HEADER */}

            <div className="mb-10">

              <h1 className="text-5xl font-black">
                Create Account
              </h1>

              <p className="text-gray-400 mt-4 text-lg">
                Start trading on a professional exchange
              </p>

            </div>

            {/* FORM */}

            <form
              onSubmit={register}
              className="space-y-6"
            >

              {/* NAME */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-blue-500 transition"
                  required
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-blue-500 transition"
                  required
                />

              </div>

              {/* PASSWORD */}

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-blue-500 transition"
                  required
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 transition py-5 rounded-2xl font-black text-white text-lg shadow-lg shadow-blue-500/20"
              >

                {loading
                  ? "Creating Account..."
                  : "Create Account"}

              </button>

            </form>

            {/* FOOTER */}

            <p className="text-center text-gray-500 mt-8">

              Already have an account?
              {" "}

              <Link
                to="/login"
                className="text-blue-400 font-bold hover:underline"
              >

                Login

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;