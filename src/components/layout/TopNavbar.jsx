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

      <div className="flex items-center gap-6">

        <div className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-black">
          BTC $84,520
        </div>

        <div className="bg-[#111] border border-yellow-500/10 px-6 py-3 rounded-2xl">
          Baseer
        </div>

      </div>

    </div>
  );
};

export default TopNavbar;