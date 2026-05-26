import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  ArrowRight,
  Shield,
  LineChart,
  Wallet,
  Brain,
} from "lucide-react";

import {
  fetchStats,
} from "../services/statsApi";

const Landing = () => {

  const [
    stats,
    setStats,
  ] = useState(null);

  useEffect(
    () => {

      const loadStats =
        async () => {

          try {

            const data =
              await fetchStats();

            setStats(
              data
            );

          } catch (
            error
          ) {

            console.log(
              error
            );
          }
        };

      loadStats();

    },
    []
  );

  const features = [

    {
      icon:
        Shield,

      title:
        "Enterprise Security",

      description:
        "Multi-layer institutional-grade asset protection system.",
    },

    {
      icon:
        LineChart,

      title:
        "Advanced Trading",

      description:
        "Professional trading engine with live market infrastructure.",
    },

    {
      icon:
        Wallet,

      title:
        "Secure Wallets",

      description:
        "Protected wallet architecture with instant transfers.",
    },

    {
      icon:
        Brain,

      title:
        "AI Signals",

      description:
        "AI-powered cryptocurrency market intelligence system.",
    },
  ];

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="relative">

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_45%)]"></div>

        <div className="relative z-10 px-6 lg:px-16 py-10">

          <div className="flex items-center justify-between mb-24">

            <div>

              <h1 className="text-4xl font-black text-yellow-400">

                CryptoX

              </h1>

            </div>

            <div className="flex items-center gap-5">

              <Link
                to="/login"
                className="text-white font-bold"
              >

                Login

              </Link>

              <Link
                to="/register"
                className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-6 py-3 rounded-2xl font-black"
              >

                Get Started

              </Link>

            </div>

          </div>

          <div className="max-w-5xl mx-auto text-center mb-24">

            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-green-400 font-bold">

                LIVE EXCHANGE SYSTEM

              </span>

            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">

              Trade Crypto
              <span className="text-yellow-400">
                {" "}Like a Pro
              </span>

            </h1>

            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">

              Institutional-grade cryptocurrency exchange infrastructure with AI-powered analytics and real-time market systems.

            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

              <Link
                to="/register"
                className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3"
              >

                Start Trading

                <ArrowRight size={24} />

              </Link>

              <Link
                to="/markets"
                className="glass px-10 py-5 rounded-2xl font-black text-xl"
              >

                Explore Markets

              </Link>

            </div>

          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-20">

            <div className="glass rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-yellow-400 mb-3">

                {
                  stats?.users ||
                  "0"
                }

              </h2>

              <p className="text-zinc-500">

                Active Traders

              </p>

            </div>

            <div className="glass rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-green-400 mb-3">

                {
                  stats?.volume ||
                  "$0"
                }

              </h2>

              <p className="text-zinc-500">

                24H Volume

              </p>

            </div>

            <div className="glass rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-blue-400 mb-3">

                {
                  stats?.trades ||
                  "0"
                }

              </h2>

              <p className="text-zinc-500">

                Trades Executed

              </p>

            </div>

            <div className="glass rounded-3xl p-8 text-center">

              <h2 className="text-5xl font-black text-purple-400 mb-3">

                {
                  stats?.uptime ||
                  "0%"
                }

              </h2>

              <p className="text-zinc-500">

                Exchange Uptime

              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {
              features.map(
                (
                  item,
                  index
                ) => {

                  const Icon =
                    item.icon;

                  return (

                    <div
                      key={index}
                      className="glass rounded-3xl p-8"
                    >

                      <div className="w-16 h-16 rounded-3xl bg-yellow-400/10 flex items-center justify-center mb-6">

                        <Icon
                          size={32}
                          className="text-yellow-400"
                        />

                      </div>

                      <h2 className="text-3xl font-black mb-5">

                        {
                          item.title
                        }

                      </h2>

                      <p className="text-zinc-500 leading-relaxed">

                        {
                          item.description
                        }

                      </p>

                    </div>
                  );
                }
              )
            }

          </div>

        </div>

      </div>

    </div>
  );
};

export default Landing;