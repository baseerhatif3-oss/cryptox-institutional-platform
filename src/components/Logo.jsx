const Logo = () => {

  return (

    <div className="flex items-center gap-3">

      <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30">

        <span className="text-black text-2xl font-black">
          ₿
        </span>

      </div>

      <div>

        <h1 className="text-2xl font-black text-white tracking-wide">

          CryptoX

        </h1>

        <p className="text-xs text-zinc-500 -mt-1">

          NEXT GEN EXCHANGE

        </p>

      </div>

    </div>
  );
};

export default Logo;