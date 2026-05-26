import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

const Register = () => {

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

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleChange =
    (
      e
    ) => {

      setFormData({

        ...formData,

        [
          e.target.name
        ]:
          e.target.value,
      });
    };

  const handleSubmit =
    async (
      e
    ) => {

      e.preventDefault();

      try {

        setLoading(
          true
        );

        const response =
          await API.post(
            "/api/auth/register",
            formData
          );

        localStorage.setItem(
          "token",
          response.data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(
            response.data.user
          )
        );

        navigate(
          "/dashboard"
        );

      } catch (
        error
      ) {

        alert(
          error.response?.data?.message ||
          "Registration failed"
        );

      } finally {

        setLoading(
          false
        );
      }
    };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="glass rounded-[40px] p-10 w-full max-w-xl">

        <h1 className="text-5xl font-black mb-4">

          Create Account

        </h1>

        <p className="text-zinc-500 text-lg mb-10">

          Join the CryptoX exchange ecosystem.

        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          <div>

            <label className="block text-zinc-400 mb-3">

              Full Name

            </label>

            <input
              type="text"
              name="name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">

              Email

            </label>

            <input
              type="email"
              name="email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3">

              Password

            </label>

            <input
              type="password"
              name="password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <button
            type="submit"
            disabled={
              loading
            }
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-5 rounded-2xl text-black font-black text-xl"
          >

            {
              loading
                ? "Please wait..."
                : "Create Account"
            }

          </button>

        </form>

        <p className="text-zinc-500 text-center mt-8">

          Already have an account?
          {" "}

          <Link
            to="/login"
            className="text-yellow-400 font-bold"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;