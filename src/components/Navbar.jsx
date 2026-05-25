import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (

    <nav className="w-full border-b border-gray-800 bg-black text-white px-8 py-5 flex items-center justify-between">

      <Link
        to="/"
        className="text-2xl font-bold"
      >
        CryptoX
      </Link>

      <div className="flex items-center gap-4">

        {
          user ? (
            <>
              <Link
                to="/dashboard"
                className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="border border-gray-700 px-5 py-2 rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-gray-700 px-5 py-2 rounded-xl"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold"
              >
                Register
              </Link>
            </>
          )
        }

      </div>

    </nav>
  );
}