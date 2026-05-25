import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-yellow-400 mb-4 font-semibold">
            GLOBAL DIGITAL EXCHANGE
          </p>

          <h1 className="text-6xl font-black leading-tight">
            TRADE THE
            <span className="text-yellow-400">
              {" "}
              FUTURE
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Professional cryptocurrency exchange with
            advanced trading tools, AI signals,
            futures trading and institutional grade
            security.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              to="/register"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold transition-all"
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-2xl font-bold transition-all"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="bg-[#111] border border-yellow-500/20 rounded-[40px] p-10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                BTC/USDT
              </p>

              <h2 className="text-5xl font-black mt-3">
                $84,520
              </h2>
            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold">
              +4.82%
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6">
            <div className="bg-black rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                24H Volume
              </p>

              <h3 className="text-2xl font-bold mt-2">
                $38.2B
              </h3>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Market Cap
              </p>

              <h3 className="text-2xl font-bold mt-2">
                $1.68T
              </h3>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Traders
              </p>

              <h3 className="text-2xl font-bold mt-2">
                12M+
              </h3>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Security
              </p>

              <h3 className="text-2xl font-bold mt-2">
                99.99%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;