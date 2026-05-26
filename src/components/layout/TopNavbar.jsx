import {
  Bell,
  Search,
  User,
} from "lucide-react";

import {
  useState,
} from "react";

import NotificationDropdown from "../NotificationDropdown";

const TopNavbar = () => {

  const [
    showNotifications,
    setShowNotifications,
  ] = useState(false);

  return (

    <div className="sticky top-0 z-40 mb-8">

      <div className="glass rounded-3xl px-6 py-5 flex items-center justify-between gap-5">

        <div className="flex items-center gap-4 flex-1">

          <div className="hidden md:flex items-center gap-3 bg-black/30 border border-white/10 rounded-2xl px-5 py-3 w-full max-w-xl">

            <Search
              size={20}
              className="text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search markets..."
              className="bg-transparent outline-none w-full text-white placeholder:text-zinc-500"
            />

          </div>

        </div>

        <div className="flex items-center gap-4 relative">

          <button
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
            className="relative w-14 h-14 glass rounded-2xl flex items-center justify-center hover:border-yellow-400/30 transition-all"
          >

            <Bell
              size={22}
            />

            <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

          </button>

          {
            showNotifications && (
              <NotificationDropdown />
            )
          }

          <div className="flex items-center gap-4 glass rounded-2xl px-5 py-3">

            <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">

              <User
                size={20}
                className="text-black"
              />

            </div>

            <div className="hidden md:block">

              <h3 className="font-black">

                Baseer

              </h3>

              <p className="text-zinc-500 text-sm">

                Pro Trader

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TopNavbar;