import {
  Bell,
  Search,
  LogOut,
} from "lucide-react";

import toast from "react-hot-toast";

const TopNavbar = () => {

  const handleLogout =
    () => {

      localStorage.removeItem(
        "cryptox_user"
      );

      toast.success(
        "Logged out successfully"
      );

      window.location.href =
        "/login";
    };

  return (

    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

      <div>

        <h1 className="text-4xl font-black mb-2">

          Welcome Back

        </h1>

        <p className="text-zinc-500 text-lg">

          Monitor your trading ecosystem in real time.

        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search assets..."
            className="bg-black/30 border border-white/10 rounded-2xl pl-12 pr-5 py-4 outline-none w-[260px]"
          />

        </div>

        <button className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center hover:border-yellow-400 transition-all">

          <Bell size={22} />

        </button>

        <button
          onClick={
            handleLogout
          }
          className="bg-red-500 hover:bg-red-400 transition-all px-6 py-4 rounded-2xl font-black flex items-center gap-3"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </div>
  );
};

export default TopNavbar;