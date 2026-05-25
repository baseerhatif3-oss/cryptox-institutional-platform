import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold text-yellow-400">
          CryptoX
        </h1>

        <div className="flex gap-4">

          <Link to="/login">
            <button className="px-5 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
              Register
            </button>
          </Link>

        </div>
      </nav>


      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <p className="text-yellow-400 mb-4">
              Welcome Back
            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">

              GLOBAL CRYPTO
              <br />
              EXCHANGE

            </h1>

            <p className="text-gray-400 text-lg mb-8">

              Trade crypto assets, manage portfolios,
              monitor AI signals and explore the next
              generation financial ecosystem.

            </p>

            <div className="flex gap-4">

              <Link to="/register">

                <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition">

                  Start Trading

                </button>

              </Link>

              <Link to="/dashboard">

                <button className="bg-gray-900 border border-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition">

                  View Portfolio

                </button>

              </Link>

            </div>

          </div>


          {/* MARKET CARD */}

          <div className="bg-[#111] border border-yellow-500/20 rounded-3xl p-8">

            <div className="flex justify-between mb-6">

              <div>
                <p className="text-gray-400">
                  BTC/USDT
                </p>

                <h2 className="text-5xl font-bold mt-2">
                  $84,520
                </h2>
              </div>

              <div className="text-green-400 font-bold text-xl">
                +4.82%
              </div>

            </div>

            <div className="space-y-4 text-gray-300">

              <div className="flex justify-between">
                <span>24H Volume</span>
                <span>$38.2B</span>
              </div>

              <div className="flex justify-between">
                <span>Market Cap</span>
                <span>$1.68T</span>
              </div>

              <div className="flex justify-between">
                <span>Dominance</span>
                <span>52.8%</span>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}