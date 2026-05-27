import {
  Bell,
  Search,
  LogOut,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const TopNavbar = () => {

  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      ) ||
      localStorage.getItem(
        "cryptox_user"
      ) ||
      "{}"
    );

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "cryptox_user"
    );

    navigate(
      "/login"
    );
  };

  return (

    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-10">

      <div className="relative w-full xl:w-[420px]">

        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          size={20}
        />

        <input
          type="text"
          placeholder="Search markets, assets, analytics..."
          className="w-full bg-black/40 border border-white/10 rounded-2xl pl-14 pr-5 py-4 outline-none"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="relative w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center">

          <Bell size={22} />

          <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-400 rounded-full"></div>

        </button>

        <div className="glass rounded-2xl px-6 py-4 flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center font-black text-xl">

            {
              user?.name
                ? user.name[0]
                : "C"
            }

          </div>

          <div>

            <h2 className="font-black">

              {
                user?.name ||
                "Crypto Trader"
              }

            </h2>

            <p className="text-zinc-500 text-sm">

              Institutional Account

            </p>

          </div>

        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-400 transition-all w-14 h-14 rounded-2xl flex items-center justify-center"
        >

          <LogOut size={22} />

        </button>

      </div>

    </div>
  );
};

export default TopNavbar;