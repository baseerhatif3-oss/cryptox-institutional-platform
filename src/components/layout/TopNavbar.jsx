import {
  Bell,
  Search,
  LogOut,
  Crown,
} from "lucide-react";

const TopNavbar = () => {

  return (

    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

      <div className="relative w-full lg:w-[420px]">

        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600"
          size={20}
        />

        <input
          type="text"
          placeholder="Search markets, assets, analytics..."
          className="w-full bg-black border border-white/10 rounded-2xl pl-14 pr-5 py-4 outline-none text-white placeholder:text-zinc-600 focus:border-yellow-400/40 transition-all"
        />

      </div>

      <div className="flex items-center justify-between lg:justify-end gap-4">

        <button className="relative w-14 h-14 rounded-2xl border border-white/10 bg-black flex items-center justify-center">

          <Bell
            className="text-zinc-300"
            size={20}
          />

          <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-400 rounded-full"></div>

        </button>

        <div className="hidden md:flex items-center gap-4 bg-black border border-white/10 rounded-2xl px-5 py-3">

          <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center font-black text-xl">

            C

          </div>

          <div>

            <h3 className="font-bold text-lg">

              Crypto Trader

            </h3>

            <div className="flex items-center gap-2 text-zinc-500 text-sm">

              <Crown
                size={14}
                className="text-yellow-400"
              />

              Institutional Account

            </div>

          </div>

        </div>

        <button className="w-14 h-14 rounded-2xl bg-red-500 hover:bg-red-400 transition-all flex items-center justify-center">

          <LogOut
            size={20}
          />

        </button>

      </div>

    </div>
  );
};

export default TopNavbar;