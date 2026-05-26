import {
  Search,
  LogOut,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const TopNavbar = () => {

  const navigate =
    useNavigate();

  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      navigate(
        "/login"
      );
    };

  return (

    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

      <div>

        <h1 className="text-4xl font-black text-white">

          CryptoX Exchange

        </h1>

        <p className="text-zinc-500 text-lg mt-2">

          Enterprise cryptocurrency trading platform

        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search markets..."
            className="bg-black/30 border border-white/10 rounded-2xl pl-12 pr-5 py-4 outline-none w-[280px]"
          />

        </div>

        <button
          onClick={
            handleLogout
          }
          className="bg-red-500 hover:bg-red-400 transition-all px-6 py-4 rounded-2xl text-white font-black flex items-center gap-3"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </div>
  );
};

export default TopNavbar;