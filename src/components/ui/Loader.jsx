const Loader = () => {

  return (

    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">

      <div className="text-center">

        <div className="w-24 h-24 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>

        <h1 className="text-5xl font-black text-yellow-400 mb-4">

          CryptoX

        </h1>

        <p className="text-zinc-500 text-xl">

          Institutional Infrastructure Loading...

        </p>

      </div>

    </div>
  );
};

export default Loader;