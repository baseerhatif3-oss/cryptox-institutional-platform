import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-yellow-400">
          CryptoX
        </h1>

        <div className="flex gap-4">

          <Link to="/login">

            <button className="bg-gray-900 px-5 py-2 rounded-lg hover:bg-gray-800">

              Login

            </button>

          </Link>

          <Link to="/register">

            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">

              Register

            </button>

          </Link>

        </div>

      </nav>


      {/* HERO */}

      <div className="flex-1 flex items-center justify-center px-8">

        <div className="max-w-4xl text-center">

          <h1 className="text-7xl font-bold mb-8">

            GLOBAL CRYPTO
            <br />
            EXCHANGE

          </h1>

          <p className="text-gray-400 text-xl mb-10">

            Professional crypto trading platform with
            AI tools, futures trading, copy trading,
            staking and institutional-grade security.

          </p>

          <div className="flex justify-center gap-5">

            <Link to="/register">

              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300">

                Start Trading

              </button>

            </Link>

            <Link to="/dashboard">

              <button className="bg-gray-900 border border-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-800">

                Dashboard

              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}