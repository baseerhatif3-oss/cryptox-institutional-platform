import Navbar from "../components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-8">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <div>

            <p className="text-gray-400 mb-4">
              Welcome Back
            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">
              GLOBAL CRYPTO
              <br />
              EXCHANGE
            </h1>

            <p className="text-gray-400 max-w-xl mb-8">
              Trade crypto assets, manage portfolios, monitor AI signals and explore the next generation financial ecosystem.
            </p>

            <div className="flex gap-4">

              <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold">
                Start Trading
              </button>

              <button className="border border-gray-700 px-8 py-4 rounded-2xl font-bold">
                View Portfolio
              </button>

            </div>

          </div>

          <div className="bg-[#0b0b0b] border border-yellow-500/20 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                BTC/USDT
              </h2>

              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
                +4.82%
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-8">
              $84,520
            </h1>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-400">24H Volume</span>
                <span>$38.2B</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Market Cap</span>
                <span>$1.68T</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Dominance</span>
                <span>52.8%</span>
              </div>

            </div>

          </div>

        </div>

        <div className="grid lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">Portfolio Balance</p>
            <h1 className="text-4xl font-bold">$248,540</h1>
          </div>

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">24H Profit</p>
            <h1 className="text-4xl font-bold text-green-400">
              +$12,845
            </h1>
          </div>

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">Assets Owned</p>
            <h1 className="text-4xl font-bold">24</h1>
          </div>

          <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">
            <p className="text-gray-400 mb-2">Global Rank</p>
            <h1 className="text-4xl font-bold">#428</h1>
          </div>

        </div>

      </div>
    </>
  );
}