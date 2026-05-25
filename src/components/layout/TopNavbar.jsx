import LivePriceTicker from "../LivePriceTicker";

const TopNavbar = () => {

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

        <div className="bg-[#111] border border-yellow-500/10 px-6 py-4 rounded-2xl">

          <h3 className="font-bold">
            Baseer
          </h3>

          <p className="text-zinc-500 text-sm">
            Verified Trader
          </p>

        </div>

      </div>

    </div>
  );
};

export default TopNavbar;