import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  ShieldCheck,
} from "lucide-react";

import {
  useAuth,
} from "../context/AuthContext";

const Login = () => {

  const navigate =
    useNavigate();

  const {
    login,
  } = useAuth();

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

      setTimeout(
        () => {

          login(
            {
              email,
            }
          );

          navigate(
            "/dashboard"
          );

          setLoading(
            false
          );

        },
        1500
      );
    };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_45%)]"></div>

      <div className="relative z-10 w-full max-w-md glass rounded-3xl p-10">

        <div className="text-center mb-10">

          <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-6">

            <ShieldCheck
              size={40}
              className="text-black"
            />

          </div>

          <h1 className="text-5xl font-black text-yellow-400 mb-4">

            CryptoX

          </h1>

          <p className="text-zinc-500 text-lg">

            Secure Exchange Login

          </p>

        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          <div>

            <label className="block text-zinc-400 mb-3 font-bold">

              Email

            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(
                e
              ) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Enter your email"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition-all"
            />

          </div>

          <div>

            <label className="block text-zinc-400 mb-3 font-bold">

              Password

            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(
                e
              ) =>
                setPassword(
                  e.target.value
                )
              }
              placeholder="Enter your password"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition-all"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black text-xl"
          >

            {
              loading
                ? "Authenticating..."
                : "Login"
            }

          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-zinc-500">

            Don't have an account?

            <Link
              to="/register"
              className="text-yellow-400 font-bold ml-2"
            >

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;