import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

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

  const handleSubmit =
    (
      e
    ) => {

      e.preventDefault();

      localStorage.setItem(
        "cryptox_user",
        JSON.stringify(
          {
            email,
          }
        )
      );

      navigate(
        "/dashboard"
      );
    };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h1 className="text-5xl font-black text-yellow-400 mb-4 text-center">

          CryptoX

        </h1>

        <p className="text-zinc-500 text-center mb-10">

          Secure Exchange Login

        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(
              e
            ) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none"
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
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black text-xl"
          >

            Login

          </button>

        </form>

        <div className="mt-8 text-center">

          <Link
            to="/register"
            className="text-yellow-400 font-bold"
          >

            Create Account

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;