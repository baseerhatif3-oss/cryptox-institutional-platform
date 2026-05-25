import {
  Bell,
  Search,
  User,
} from "lucide-react";

const TopNavbar = () => {

  return (

    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-yellow-500/10 px-4 md:px-8 py-4">

      <div className="flex items-center justify-between gap-5">

        <div className="hidden md:flex items-center bg-[#111] border border-yellow-500/10 rounded-2xl px-4 py-3 w-[350px]">

          <Search
            size={18}
            className="text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search markets..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />

        </div>

        <div className="flex items-center gap-4 ml-auto">

          <button className="relative bg-[#111] border border-yellow-500/10 p-3 rounded-2xl hover:border-yellow-400/30 transition-all">

            <Bell size={20} />

            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

          </button>

          <div className="flex items-center gap-3 bg-[#111] border border-yellow-500/10 px-4 py-2 rounded-2xl">

            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black">

              B

            </div>

            <div className="hidden md:block">

              <h3 className="font-bold">
                Baseer
              </h3>

              <p className="text-zinc-500 text-sm">
                Pro Trader
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default TopNavbar;