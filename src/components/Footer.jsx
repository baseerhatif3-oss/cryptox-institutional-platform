const Footer = () => {

  return (

    <footer className="mt-20 border-t border-yellow-500/10 pt-10 pb-16">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>

          <h2 className="text-3xl font-black text-yellow-400 mb-4">

            CryptoX

          </h2>

          <p className="text-zinc-500 leading-relaxed">

            Enterprise-grade cryptocurrency exchange platform with advanced AI trading infrastructure.

          </p>

        </div>

        <div>

          <h3 className="text-xl font-black mb-5">

            Platform

          </h3>

          <div className="space-y-3 text-zinc-500">

            <p>Markets</p>

            <p>Trading</p>

            <p>Futures</p>

            <p>Wallet</p>

          </div>

        </div>

        <div>

          <h3 className="text-xl font-black mb-5">

            Company

          </h3>

          <div className="space-y-3 text-zinc-500">

            <p>About</p>

            <p>Security</p>

            <p>Privacy</p>

            <p>Support</p>

          </div>

        </div>

        <div>

          <h3 className="text-xl font-black mb-5">

            Performance

          </h3>

          <div className="space-y-3">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-green-400 font-bold">

                All Systems Operational

              </span>

            </div>

            <p className="text-zinc-500">

              99.99% uptime infrastructure

            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-zinc-500">

          © 2026 CryptoX Exchange. All rights reserved.

        </p>

        <p className="text-yellow-400 font-bold">

          NEXT GEN CRYPTO EXCHANGE

        </p>

      </div>

    </footer>
  );
};

export default Footer;