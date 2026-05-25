import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("token", "cryptox_token");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#111] border border-yellow-500/20 rounded-[40px] p-10">
        <h1 className="text-5xl font-black text-white">
          Login
        </h1>

        <p className="text-gray-500 mt-3">
          Welcome back trader
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full bg-black border border-yellow-500/20 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="w-full bg-black border border-yellow-500/20 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-2xl font-bold transition-all">
            Login
          </button>
        </form>

        <p className="text-gray-500 mt-6 text-center">
          Don’t have account?{" "}
          <Link
            to="/register"
            className="text-yellow-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;