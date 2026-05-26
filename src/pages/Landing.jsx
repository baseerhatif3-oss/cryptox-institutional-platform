import {
  Link,
} from "react-router-dom";

import Logo from "../components/Logo";

import Footer from "../components/Footer";

const Landing = () => {

  const stats = [

    {
      title: "Users",
      value: "120K+",
    },

    {
      title: "Daily Volume",
      value: "$48M+",
    },

    {
      title: "Countries",
      value: "90+",
    },
  ];

  const features = [

    "Advanced Trading Engine",

    "AI Trading Signals",

    "Enterprise Security",

    "Live Market Data",

    "Ultra Fast Execution",

    "Professional Analytics",
  ];

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_40%)]"></div>

      <header className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6 border-b border-yellow-500/10 backdrop-blur-xl">

        <Logo />

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="hidden md:block text-zinc-300 hover:text-white transition-all"
          >

            Login

          </Link>

          <Link
            to="/register"
            className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all px-6 py-3 rounded-2xl text-black font-black"
          >

            Get Started

          </Link>

        </div>

      </header>

      <section className="relative z-10 px-6 lg:px-16 py-28">

        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-5xl relative z-10">

          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-8">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-yellow-300 font-bold">

              LIVE EXCHANGE PLATFORM

            </span>

          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">

            Trade Crypto
            <span className="text-yellow-400">
              {" "}Like a Pro
            </span>

          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-10">

            Professional cryptocurrency exchange platform with AI-powered analytics, advanced trading tools, real-time execution, and enterprise-grade security.

          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <Link
              to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all px-8 py-5 rounded-2xl text-black font-black text-lg text-center"
            >

              Start Trading

            </Link>

            <Link
              to="/dashboard"
              className="border border-yellow-500/20 hover:border-yellow-400 hover:scale-105 transition-all px-8 py-5 rounded-2xl font-bold text-center"
            >

              Live Demo

            </Link>

          </div>

        </div>

      </section>

      <section className="relative z-10 px-6 lg:px-16 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {
            stats.map(
              (
                stat,
                index
              ) => (

                <div
                  key={index}
                  className="glass rounded-3xl p-8"
                >

                  <p className="text-zinc-500 mb-4">
                    {stat.title}
                  </p>

                  <h2 className="text-5xl font-black text-yellow-400">

                    {stat.value}

                  </h2>

                </div>
              )
            )
          }

        </div>

      </section>

      <section className="relative z-10 px-6 lg:px-16 pb-24">

        <div className="mb-16">

          <h2 className="text-5xl font-black mb-5">

            Why CryptoX?

          </h2>

          <p className="text-zinc-500 text-lg">

            Enterprise-grade infrastructure built for modern crypto trading.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {
            features.map(
              (
                feature,
                index
              ) => (

                <div
                  key={index}
                  className="glass rounded-3xl p-8 hover:border-yellow-400/30 hover:scale-[1.02] transition-all"
                >

                  <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6">

                    <span className="text-yellow-400 text-2xl">
                      ⚡
                    </span>

                  </div>

                  <h3 className="text-2xl font-black">

                    {feature}

                  </h3>

                </div>
              )
            )
          }

        </div>

      </section>

      <section className="relative z-10 px-6 lg:px-16 pb-24">

        <div className="glass rounded-[40px] p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-6xl font-black mb-6">

            Ready to Trade?

          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto mb-10">

            Join thousands of traders using CryptoX professional exchange infrastructure.

          </p>

          <Link
            to="/register"
            className="inline-flex bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all px-10 py-5 rounded-2xl text-black font-black text-xl"
          >

            Launch Exchange Account

          </Link>

        </div>

      </section>

      <div className="relative z-10 px-6 lg:px-16">

        <Footer />

      </div>

    </div>
  );
};

export default Landing;