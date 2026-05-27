import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import toast from "react-hot-toast";

const Login = () => {

  const navigate =
    useNavigate();

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
          "cryptox_user",
          JSON.stringify({
            name:
              "Crypto Trader",
            email,
          })
        );

        toast.success(
          "Welcome back to CryptoX"
        );

        navigate(
          "/dashboard"
        );

      }, 1200);
    };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="glass rounded-[40px] p-10 w-full max-w-md relative z-10">

        <h1 className="text-6xl font-black text-yellow-400 mb-4 text-center">

          CryptoX

        </h1>

        <p className="text-zinc-500 text-center text-lg mb-10">

          Institutional Trading Access

        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(
              e
            ) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(
              e
            ) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-5 rounded-2xl font-black text-xl"
          >

            {
              loading
                ? "Authenticating..."
                : "Access Platform"
            }

          </button>

        </form>

        <div className="mt-8 text-center">

          <Link
            to="/register"
            className="text-yellow-400 font-bold"
          >

            Create Institutional Account

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;