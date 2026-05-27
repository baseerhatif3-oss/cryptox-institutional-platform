const Footer = () => {

  return (

    <footer className="border-t border-white/5 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          <div>

            <h2 className="text-4xl font-black text-yellow-400 mb-4">

              CryptoX

            </h2>

            <p className="text-zinc-500 leading-relaxed text-lg max-w-md">

              Institutional-grade cryptocurrency trading ecosystem built for global digital asset markets.

            </p>

          </div>

          <div>

            <h3 className="text-2xl font-black mb-5">

              Platform

            </h3>

            <div className="space-y-3 text-zinc-500">

              <p>
                Trading
              </p>

              <p>
                Markets
              </p>

              <p>
                Portfolio
              </p>

              <p>
                Wallet
              </p>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-black mb-5">

              Infrastructure

            </h3>

            <div className="space-y-3 text-zinc-500">

              <p>
                Security
              </p>

              <p>
                Liquidity
              </p>

              <p>
                Analytics
              </p>

              <p>
                Institutional APIs
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col xl:flex-row items-center justify-between gap-5">

          <p className="text-zinc-500">

            © 2026 CryptoX. All rights reserved.

          </p>

          <div className="flex items-center gap-6 text-zinc-500">

            <span>
              Privacy
            </span>

            <span>
              Terms
            </span>

            <span>
              Security
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;