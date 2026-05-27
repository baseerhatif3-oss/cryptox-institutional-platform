import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  ShieldCheck,
} from "lucide-react";

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

      setLoading(true);

      setTimeout(() => {

        localStorage.setItem(
          "cryptox_user",
          JSON.stringify({
            email:
              formData.email,
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

      <div className="glass rounded-[40px] p-10 xl:p-14 border border-white/10 w-full max-w-2xl relative z-10">

        <div className="flex items-center gap-4 mb-10">

          <div className="bg-yellow-400/10 p-4 rounded-2xl">

            <ShieldCheck
              size={36}
              className="text-yellow-400"
            />

          </div>

          <div>

            <h1 className="text-5xl font-black">

              Create Account

            </h1>

            <p className="text-zinc-500 text-lg mt-2">

              Join the CryptoX exchange ecosystem.

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

              Full Name

            </label>

            <div className="relative">

              <User
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

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
                className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-5 py-5 outline-none focus:border-yellow-400 transition-all"
              />

            </div>

          </div>

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
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                required
                className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-5 py-5 outline-none focus:border-yellow-400 transition-all"
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
                name="password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                required
                className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-5 py-5 outline-none focus:border-yellow-400 transition-all"
              />

            </div>

          </div>

          <button
            type="submit"
            disabled={
              loading
            }
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all py-5 rounded-2xl text-black font-black text-xl shadow-2xl shadow-yellow-400/20"
          >

            {
              loading
                ? "Creating Account..."
                : "Create Exchange Account"
            }

          </button>

        </form>

        <p className="text-zinc-500 text-center mt-10">

          Already have an account?
          {" "}

          <Link
            to="/login"
            className="text-yellow-400 font-black"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;