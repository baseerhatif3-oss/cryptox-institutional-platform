const CTASection = () => {

  return (

    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="glass rounded-[40px] p-16 text-center relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          <h2 className="text-7xl font-black mb-8 leading-tight">

            Build The Future
            <br />

            <span className="text-yellow-400">

              Of Finance

            </span>

          </h2>

          <p className="text-zinc-500 text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">

            Join the next generation institutional cryptocurrency ecosystem built for scale, liquidity, and performance.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">

            <a
              href="/register"
              className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-10 py-5 rounded-3xl font-black text-xl"
            >

              Launch Platform

            </a>

            <a
              href="/login"
              className="border border-white/10 hover:border-yellow-400 transition-all px-10 py-5 rounded-3xl font-black text-xl"
            >

              Access Demo

            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;