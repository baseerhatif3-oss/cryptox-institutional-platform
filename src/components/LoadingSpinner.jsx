const LoadingSpinner = () => {

  return (

    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">

      <div className="relative">

        <div className="absolute inset-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-[80px]"></div>

        <div className="relative flex flex-col items-center">

          <div className="w-24 h-24 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin"></div>

          <h1 className="mt-10 text-5xl font-black text-yellow-400">

            CryptoX

          </h1>

          <p className="text-zinc-500 mt-3 text-lg">

            Initializing Exchange...

          </p>

        </div>

      </div>

    </div>
  );
};

export default LoadingSpinner;