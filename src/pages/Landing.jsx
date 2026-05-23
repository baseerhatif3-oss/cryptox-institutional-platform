import React from "react";

import {
  motion,
} from "framer-motion";

import {
  Link,
} from "react-router-dom";

import {
  FaChartLine,
  FaShieldAlt,
  FaWallet,
  FaExchangeAlt,
} from "react-icons/fa";

const Landing = () => {

  const features = [

    {
      icon:
        <FaChartLine />,

      title:
        "Realtime Trading",

      desc:
        "Professional trading engine with live order book and realtime market depth.",
    },

    {
      icon:
        <FaShieldAlt />,

      title:
        "Enterprise Security",

      desc:
        "OTP withdrawals, KYC verification, account protection and admin controls.",
    },

    {
      icon:
        <FaWallet />,

      title:
        "Advanced Wallets",

      desc:
        "Multi-asset wallet system with secure deposits and withdrawals.",
    },

    {
      icon:
        <FaExchangeAlt />,

      title:
        "Futures Trading",

      desc:
        "Advanced futures infrastructure with leverage trading support.",
    },
  ];

  return (

    <div className="space-y-28">

      {/* HERO */}

      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111] to-black px-8 py-20 lg:px-20">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_30%)]" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}
            >

              <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-full font-semibold mb-8">

                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />

                Next Generation Crypto Exchange

              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight">

                Launch Your
                <br />

                Own Crypto
                <br />

                Exchange

              </h1>

              <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-2xl">

                Professional white-label exchange infrastructure with realtime trading,
                futures markets, advanced security, admin management,
                and institutional-grade architecture.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link
                  to="/register"
                  className="bg-yellow-500 hover:bg-yellow-600 transition px-10 py-5 rounded-2xl font-black text-black text-lg shadow-lg shadow-yellow-500/20"
                >

                  Launch Platform

                </Link>

                <Link
                  to="/login"
                  className="border border-white/10 hover:bg-white/5 transition px-10 py-5 rounded-2xl font-black text-lg"
                >

                  Live Demo

                </Link>

              </div>

            </motion.div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="space-y-6">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

                <p className="text-gray-400">
                  24H Volume
                </p>

                <h2 className="text-4xl font-black mt-4">
                  $2.8B
                </h2>

              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

                <p className="text-gray-400">
                  Active Traders
                </p>

                <h2 className="text-4xl font-black mt-4">
                  120K+
                </h2>

              </div>

            </div>

            <div className="space-y-6 pt-10">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

                <p className="text-gray-400">
                  Futures Open Interest
                </p>

                <h2 className="text-4xl font-black mt-4">
                  $940M
                </h2>

              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-7">

                <p className="text-green-400">
                  System Status
                </p>

                <h2 className="text-4xl font-black mt-4 text-green-400">
                  ONLINE
                </h2>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section>

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black">
            Enterprise Exchange Infrastructure
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">

            Everything required to launch a modern crypto exchange platform.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map(
            (
              feature,
              index
            ) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay:
                    index * 0.1,
                }}

                className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition"
              >

                <div className="text-yellow-400 text-4xl mb-6">
                  {
                    feature.icon
                  }
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {
                    feature.title
                  }
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {
                    feature.desc
                  }
                </p>

              </motion.div>

            )
          )}

        </div>

      </section>

      {/* CTA */}

      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-yellow-500/10 to-transparent px-8 py-20 lg:px-20 text-center">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#facc15,transparent_40%)]" />

        <div className="relative z-10">

          <h2 className="text-5xl lg:text-6xl font-black">

            Ready To Launch
            <br />

            Your Exchange?

          </h2>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">

            Start your own professional crypto exchange platform with realtime trading,
            futures infrastructure, advanced security and institutional-grade systems.

          </p>

          <div className="flex justify-center gap-5 mt-10 flex-wrap">

            <Link
              to="/register"
              className="bg-yellow-500 hover:bg-yellow-600 transition px-10 py-5 rounded-2xl font-black text-black text-lg"
            >

              Get Started

            </Link>

            <Link
              to="/login"
              className="border border-white/10 hover:bg-white/5 transition px-10 py-5 rounded-2xl font-black text-lg"
            >

              View Demo

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Landing;