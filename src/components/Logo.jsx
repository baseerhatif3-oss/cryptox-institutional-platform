const Logo = () => {

  return (

    <div className="flex items-center gap-4">

      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center">

        <span className="text-black text-3xl font-black">

          X

        </span>

      </div>

      <div>

        <h1 className="text-3xl font-black text-yellow-400">

          CryptoX

        </h1>

        <p className="text-zinc-500 text-sm">

          Enterprise Exchange

        </p>

      </div>

    </div>
  );
};

export default Logo;