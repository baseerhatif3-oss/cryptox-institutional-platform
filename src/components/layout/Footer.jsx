const Footer = () => {

  return (

    <footer className="border-t border-white/5 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col xl:flex-row items-center justify-between gap-6">

        <div>

          <h2 className="text-3xl font-black text-yellow-400 mb-2">

            CryptoX

          </h2>

          <p className="text-zinc-500">

            Institutional cryptocurrency trading infrastructure.

          </p>

        </div>

        <div className="flex items-center gap-8 text-zinc-500 font-bold">

          <span>
            Security
          </span>

          <span>
            Trading
          </span>

          <span>
            Portfolio
          </span>

          <span>
            Analytics
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;