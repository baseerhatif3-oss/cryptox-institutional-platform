const LoadingSpinner = () => {

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="text-center">

        <div className="w-24 h-24 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>

        <h1 className="text-4xl font-black text-white mb-4">

          CryptoX

        </h1>

        <p className="text-zinc-500 text-xl">

          Loading Exchange...

        </p>

      </div>

    </div>
  );
};

export default LoadingSpinner;