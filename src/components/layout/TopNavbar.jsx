import {
  Bell,
  Search,
  Settings,
} from "lucide-react";

const TopNavbar = () => {

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

          <Bell
            size={22}
          />

          <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

        </button>

        <button className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center">

          <Settings
            size={22}
          />

        </button>

        <div className="flex items-center gap-4 bg-yellow-400 text-black px-5 py-3 rounded-2xl">

          <div className="w-12 h-12 rounded-xl bg-black text-yellow-400 flex items-center justify-center font-black text-xl">

            B

          </div>

          <div>

            <h2 className="font-black text-lg">

              Baseer

            </h2>

            <p className="text-sm font-semibold">

              Enterprise Account

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TopNavbar;