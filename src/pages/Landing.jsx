import {
  Link,
} from "react-router-dom";

import Logo from "../components/Logo";

import Footer from "../components/Footer";

import TrustSection from "../components/TrustSection";

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
            className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl text-black font-black shadow-lg shadow-yellow-400/20"
          >

            Get Started

          </Link>

        </div>

      </header>

      <section className="relative z-10 px-6 lg:px-16 py-28">

        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl relative z-10">

          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-8">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-yellow-300 font-bold">

              LIVE EXCHANGE PLATFORM

            </span>

          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">

            Trade Crypto
            <br />

            <span className="text-yellow-400">

              Like a Pro

            </span>

          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-10">

            Professional cryptocurrency exchange platform with AI-powered analytics, advanced trading tools, real-time execution, and enterprise-grade infrastructure.

          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <Link
              to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all duration-300 px-8 py-5 rounded-2xl text-black font-black text-lg text-center shadow-lg shadow-yellow-400/20"
            >

              Start Trading

            </Link>

            <Link
              to="/dashboard"
              className="border border-yellow-500/20 hover:border-yellow-400 hover:scale-105 transition-all duration-300 px-8 py-5 rounded-2xl font-bold text-center glass"
            >

              Live Demo

            </Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">

            <div className="glass rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">

                Trading Pairs

              </p>

              <h2 className="text-4xl font-black text-yellow-400">

                350+

              </h2>

            </div>

            <div className="glass rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">

                Execution Speed

              </p>

              <h2 className="text-4xl font-black text-green-400">

                &lt;10ms

              </h2>

            </div>

            <div className="glass rounded-3xl p-6">

              <p className="text-zinc-500 mb-3">

                Security Rating

              </p>

              <h2 className="text-4xl font-black text-blue-400">

                A+

              </h2>

            </div>

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
                  className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300"
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

        <div className="mb-16 text-center">

          <h2 className="text-5xl md:text-6xl font-black mb-5">

            Why CryptoX?

          </h2>

          <p className="text-zinc-500 text-lg max-w-3xl mx-auto">

            Enterprise-grade infrastructure built for modern cryptocurrency trading and high-performance execution.

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
                  className="glass rounded-3xl p-8 hover:border-yellow-400/30 hover:scale-[1.02] transition-all duration-300"
                >

                  <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6">

                    <span className="text-yellow-400 text-3xl">

                      ⚡

                    </span>

                  </div>

                  <h3 className="text-2xl font-black mb-4">

                    {feature}

                  </h3>

                  <p className="text-zinc-500 leading-relaxed">

                    Professional-grade infrastructure optimized for speed, scalability, and advanced crypto trading operations.

                  </p>

                </div>
              )
            )
          }

        </div>

      </section>

      <section className="relative z-10 px-6 lg:px-16 pb-24">

        <div className="glass rounded-[40px] p-10 md:p-16 overflow-hidden relative">

          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 text-center">

            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-green-400 font-bold">

                ENTERPRISE INFRASTRUCTURE

              </span>

            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">

              Ready for
              <span className="text-yellow-400">
                {" "}Global Scale
              </span>

            </h2>

            <p className="text-zinc-400 text-xl max-w-4xl mx-auto mb-10 leading-relaxed">

              CryptoX combines real-time market infrastructure, AI-powered analytics, advanced matching systems, and enterprise-grade security into one professional exchange platform.

            </p>

            <Link
              to="/register"
              className="inline-flex bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all duration-300 px-10 py-5 rounded-2xl text-black font-black text-xl shadow-lg shadow-yellow-400/20"
            >

              Launch Exchange Account

            </Link>

          </div>

        </div>

      </section>

      <TrustSection />

      <div className="relative z-10 px-6 lg:px-16">

        <Footer />

      </div>

    </div>
  );
};

export default Landing;