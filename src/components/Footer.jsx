const Footer = () => {

  return (

    <footer className="border-t border-white/5 mt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-black text-yellow-400 mb-4">

              CryptoX

            </h2>

            <p className="text-zinc-500 leading-relaxed">

              Enterprise-grade cryptocurrency exchange ecosystem with advanced trading infrastructure.

            </p>

          </div>

          <div>

            <h3 className="text-xl font-black mb-5">

              Platform

            </h3>

            <div className="space-y-3 text-zinc-500">

              <p>Spot Trading</p>

              <p>Futures</p>

              <p>Staking</p>

              <p>NFT Marketplace</p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-black mb-5">

              Services

            </h3>

            <div className="space-y-3 text-zinc-500">

              <p>Launchpad</p>

              <p>Crypto Card</p>

              <p>Institutional APIs</p>

              <p>Security Center</p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-black mb-5">

              Status

            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                <span className="text-green-400 font-bold">

                  All Systems Operational

                </span>

              </div>

              <p className="text-zinc-500">

                Exchange Uptime: 99.99%

              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500">

            © 2026 CryptoX Exchange. All rights reserved.

          </p>

          <p className="text-zinc-600">

            Enterprise Crypto Infrastructure

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;