import { useState } from "react";

import {
  Bell,
  Search,
  Settings,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

const TopNavbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-10">

      <div>
        <h1 className="text-4xl font-black mb-3">
          Institutional Trading Infrastructure
        </h1>

        <p className="text-zinc-500 text-lg">
          Enterprise-grade digital asset ecosystem.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center gap-4 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 min-w-[320px]">

          <Search
            className="text-zinc-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search markets, assets, analytics..."
            className="bg-transparent outline-none w-full"
          />

        </div>

        <button className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center relative">

          <Bell size={22} />

          <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

        </button>

        <button className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center">

          <Settings size={22} />

        </button>

        <div className="relative">

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-4 bg-yellow-400 text-black px-5 py-3 rounded-2xl hover:scale-105 transition-all"
          >

            <div className="w-12 h-12 rounded-xl bg-black text-yellow-400 flex items-center justify-center font-black text-xl">

              B

            </div>

            <div className="text-left">

              <h2 className="font-black text-lg">
                Baseer
              </h2>

              <p className="text-sm font-semibold">
                Enterprise Account
              </p>

            </div>

            <ChevronDown size={18} />

          </button>

          {open && (

            <div className="absolute right-0 mt-4 w-64 bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">

              <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-white/5 transition-all text-white">

                <User size={18} />

                Profile

              </button>

              <button
                onClick={() => window.location.href = "/"}
                className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-500/10 transition-all text-red-400"
              >

                <LogOut size={18} />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default TopNavbar;