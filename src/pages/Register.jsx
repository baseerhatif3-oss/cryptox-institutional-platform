import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import toast from "react-hot-toast";

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

      setLoading(
        true
      );

      setTimeout(() => {

        localStorage.setItem(
          "token",
          "cryptox_demo_token"
        );

        localStorage.setItem(
          "user",
          JSON.stringify({
            name:
              formData.name,
            email:
              formData.email,
          })
        );

        toast.success(
          "Institutional account created"
        );

        navigate(
          "/dashboard"
        );

      }, 1200);
    };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full"></div>

      <div className="glass rounded-[40px] p-10 w-full max-w-xl relative z-10">

        <h1 className="text-6xl font-black mb-4 text-center">

          Create
          <span className="text-yellow-400">

            {" "}Account

          </span>

        </h1>

        <p className="text-zinc-500 text-lg text-center mb-10">

          Access institutional cryptocurrency infrastructure.

        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
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
            required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none"
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
            required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-5 rounded-2xl text-black font-black text-xl"
          >

            {
              loading
                ? "Creating Account..."
                : "Launch Account"
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