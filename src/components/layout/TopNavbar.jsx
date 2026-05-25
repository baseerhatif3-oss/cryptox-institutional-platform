import LivePriceTicker from "../LivePriceTicker";

import {
  getUser,
  logout,
} from "../../services/authService";

const TopNavbar = () => {

  const user =
    getUser();

  return (

    <div className="h-[90px] border-b border-yellow-500/10 bg-[#0b0b0b] flex items-center justify-between px-8 sticky top-0 z-40">

      <div>

        <h2 className="text-3xl font-black">
          CryptoX Exchange
        </h2>

        <p className="text-zinc-500">
          Institutional Grade Trading Platform
        </p>

      </div>

      <div className="flex items-center gap-5">

        <LivePriceTicker />

        <div className="bg-[#111] border border-yellow-500/10 px-5 py-3 rounded-2xl">

          <h3 className="font-black">
            {
              user?.name ||
              "Trader"
            }
          </h3>

          <p className="text-zinc-500 text-sm">
            Verified User
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-400 transition-all text-white px-5 py-3 rounded-2xl font-bold"
        >

          Logout

        </button>

      </div>

    </div>
  );
};

export default TopNavbar;