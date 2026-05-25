import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="h-[80px] border-b border-yellow-500/20 bg-black px-8 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Global Crypto Exchange
        </h2>

        <p className="text-gray-500 text-sm">
          Advanced Trading Platform
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-yellow-400">
          <FaBell size={22} />

          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle
            size={36}
            className="text-yellow-400"
          />

          <div>
            <p className="text-white font-semibold">
              Baseer
            </p>

            <p className="text-gray-500 text-sm">
              Verified Trader
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;