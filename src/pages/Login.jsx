import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  ShieldCheck,
  Lock,
  Mail,
  TrendingUp,
} from "lucide-react";

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

      setLoading(true);

      toast.loading(
        "Connecting to exchange..."
      );

      setTimeout(() => {

        toast.dismiss();

        toast.success(
          "Login successful"
        );

        localStorage.setItem(
          "cryptox_user",
          JSON.stringify({
            email,
          })
        );

        navigate(
          "/dashboard"
        );

      }, 1200);
    };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/10 via-transparent to-green-500/5"></div>

      <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 blur-[150px] rounded-full top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

        <div className="hidden xl:block">

          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">

              SECURE EXCHANGE ACCESS

            </span>

          </div>

          <h1 className="text-7xl font-black leading-tight mb-8">

            Institutional
            <span className="text-yellow-400">
              {" "}Crypto
            </span>
            <br />
            Trading Infrastructure

          </h1>

          <p className="text-zinc-500 text-2xl leading-relaxed mb-10">

            Multi-service digital asset ecosystem powering institutional-grade trading and portfolio management.

          </p>

          <div className="grid grid-cols-2 gap-6">

            <div className="glass rounded-3xl p-6">

              <TrendingUp
                size={40}
                className="text-yellow-400 mb-5"
              />

              <h3 className="text-4xl font-black mb-3">

                $12.4B

              </h3>

              <p className="text-zinc-500">

                24H Trading Volume

              </p>

            </div>

            <div className="glass rounded-3xl p-6">

              <ShieldCheck
                size={40}
                className="text-green-400 mb-5"
              />

              <h3 className="text-4xl font-black mb-3">

                99.99%

              </h3>

              <p className="text-zinc-500">

                Infrastructure Uptime

              </p>

            </div>

          </div>

        </div>

        <div className="glass rounded-[40px] p-10 xl:p-14 border border-white/10">

          <div className="flex items-center gap-4 mb-10">

            <div className="bg-yellow-400/10 p-4 rounded-2xl">

              <Lock
                size={36}
                className="text-yellow-400"
              />

            </div>

            <div>

              <h1 className="text-5xl font-black">

                CryptoX

              </h1>

              <p className="text-zinc-500 text-lg mt-2">

                Secure Exchange Login

              </p>

            </div>

          </div>

          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-6"
          >

            <div>

              <label className="block text-zinc-400 mb-3">

                Email Address

              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(
                    e
                  ) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-5 py-5 outline-none focus:border-yellow-400 transition-all"
                  required
                />

              </div>

            </div>

            <div>

              <label className="block text-zinc-400 mb-3">

                Password

              </label>

              <div className="relative">

                <Lock
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(
                    e
                  ) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-5 py-5 outline-none focus:border-yellow-400 transition-all"
                  required
                />

              </div>

            </div>

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-3 text-zinc-400">

                <input
                  type="checkbox"
                  className="accent-yellow-400"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-yellow-400 font-bold"
              >

                Forgot Password?

              </button>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-5 rounded-2xl text-black font-black text-xl shadow-2xl shadow-yellow-400/20"
            >

              {
                loading
                  ? "Accessing Exchange..."
                  : "Access Trading Platform"
              }

            </button>

          </form>

          <div className="mt-10">

            <div className="glass rounded-3xl p-6 border border-green-500/10">

              <div className="flex items-center gap-3 mb-4">

                <ShieldCheck
                  size={24}
                  className="text-green-400"
                />

                <h3 className="text-2xl font-black">

                  Demo Access

                </h3>

              </div>

              <div className="space-y-2 text-zinc-400">

                <p>

                  Email:
                  {" "}
                  demo@cryptox.com

                </p>

                <p>

                  Password:
                  {" "}
                  demo123

                </p>

              </div>

            </div>

          </div>

          <p className="text-zinc-500 text-center mt-10">

            Don’t have an account?
            {" "}

            <Link
              to="/register"
              className="text-yellow-400 font-black"
            >

              Create Account

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;