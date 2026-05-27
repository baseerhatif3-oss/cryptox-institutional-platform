import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Wallet,
  Globe,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

const stats = [

  {
    title: "$12.8B+",
    subtitle: "24H Trading Volume",
  },

  {
    title: "1.2M+",
    subtitle: "Global Traders",
  },

  {
    title: "180+",
    subtitle: "Supported Assets",
  },

  {
    title: "99.99%",
    subtitle: "System Uptime",
  },
];

const features = [

  {
    icon: BarChart3,
    title: "Advanced Trading",
    desc: "Professional-grade spot and futures trading infrastructure with ultra-low latency execution.",
  },

  {
    icon: Wallet,
    title: "Secure Custody",
    desc: "Multi-layer institutional wallet architecture with cold storage security protocols.",
  },

  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Bank-level infrastructure protection with AI fraud monitoring and encrypted systems.",
  },

  {
    icon: Globe,
    title: "Global Liquidity",
    desc: "Deep liquidity pools and worldwide crypto market accessibility for institutional traders.",
  },
];

const Landing = () => {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_35%)] pointer-events-none"></div>

      <header className="relative z-10 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black text-yellow-400">

              CryptoX

            </h1>

            <p className="text-zinc-500 text-sm">

              Institutional Exchange Infrastructure

            </p>

          </div>

          <div className="flex items-center gap-4">

            <Link
              to="/login"
              className="hidden md:flex px-6 py-3 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all"
            >

              Login

            </Link>

            <Link
              to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-7 py-3 rounded-2xl font-black flex items-center gap-2"
            >

              Launch Platform

              <ArrowRight
                size={18}
              />

            </Link>

          </div>

        </div>

      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">

        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-3 rounded-full mb-10">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            Enterprise Infrastructure Active

          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10">

            The Future Of
            <span className="text-yellow-400">
              {" "}Institutional
            </span>

            <br />

            Crypto Trading

          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-4xl mb-14">

            CryptoX delivers enterprise-grade cryptocurrency trading,
            digital asset custody, analytics infrastructure, and institutional liquidity systems for global capital markets.

          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <Link
              to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-10 py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-3"
            >

              Access Platform

              <ArrowRight
                size={22}
              />

            </Link>

            <Link
              to="/markets"
              className="border border-white/10 hover:border-white/20 transition-all px-10 py-5 rounded-3xl font-bold text-xl flex items-center justify-center"
            >

              Live Markets

            </Link>

          </div>

        </div>

      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {
            stats.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="bg-zinc-950 border border-white/5 rounded-3xl p-8"
                >

                  <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-4">

                    {
                      item.title
                    }

                  </h2>

                  <p className="text-zinc-500">

                    {
                      item.subtitle
                    }

                  </p>

                </div>
              )
            )
          }

        </div>

      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

        <div className="mb-16">

          <h2 className="text-5xl md:text-6xl font-black mb-6">

            Built For
            <span className="text-yellow-400">
              {" "}Scale
            </span>

          </h2>

          <p className="text-zinc-500 text-xl max-w-3xl">

            Enterprise-grade systems engineered for institutions, hedge funds,
            digital asset managers, and modern crypto-native trading firms.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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
                    className="bg-zinc-950 border border-white/5 rounded-[32px] p-10 hover:border-yellow-400/20 transition-all"
                  >

                    <div className="w-20 h-20 rounded-3xl bg-yellow-400 text-black flex items-center justify-center mb-8">

                      <Icon
                        size={38}
                      />

                    </div>

                    <h3 className="text-4xl font-black mb-5">

                      {
                        item.title
                      }

                    </h3>

                    <p className="text-zinc-500 text-lg leading-relaxed">

                      {
                        item.desc
                      }

                    </p>

                  </div>
                );
              }
            )
          }

        </div>

      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

        <div className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/10 rounded-[40px] p-10 md:p-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <div>

              <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full text-yellow-400 mb-8">

                <TrendingUp
                  size={18}
                />

                Institutional Expansion

              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

                Global Digital
                <span className="text-yellow-400">
                  {" "}Asset
                </span>

                <br />

                Infrastructure

              </h2>

              <p className="text-zinc-400 text-xl leading-relaxed mb-10">

                Powering next-generation cryptocurrency trading, portfolio management,
                liquidity aggregation, and secure digital asset operations.

              </p>

              <div className="space-y-5">

                {
                  [
                    "Institutional-grade infrastructure",
                    "Real-time market systems",
                    "Enterprise security architecture",
                    "Professional analytics ecosystem",
                  ].map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={index}
                        className="flex items-center gap-4"
                      >

                        <CheckCircle2
                          className="text-green-400"
                          size={24}
                        />

                        <span className="text-lg text-zinc-300">

                          {
                            item
                          }

                        </span>

                      </div>
                    )
                  )
                }

              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-black border border-white/5 rounded-3xl p-8">

                <p className="text-zinc-500 mb-4">

                  Trading Volume

                </p>

                <h3 className="text-5xl font-black text-yellow-400">

                  $48B

                </h3>

              </div>

              <div className="bg-black border border-white/5 rounded-3xl p-8">

                <p className="text-zinc-500 mb-4">

                  Active Traders

                </p>

                <h3 className="text-5xl font-black text-green-400">

                  1.2M

                </h3>

              </div>

              <div className="bg-black border border-white/5 rounded-3xl p-8">

                <p className="text-zinc-500 mb-4">

                  API Requests

                </p>

                <h3 className="text-5xl font-black text-blue-400">

                  8B+

                </h3>

              </div>

              <div className="bg-black border border-white/5 rounded-3xl p-8">

                <p className="text-zinc-500 mb-4">

                  Uptime

                </p>

                <h3 className="text-5xl font-black text-purple-400">

                  99.99%

                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-yellow-400 rounded-[40px] text-black p-12 md:p-20 text-center">

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">

            Start Trading The
            <br />

            Future Of Finance

          </h2>

          <p className="text-black/70 text-xl max-w-3xl mx-auto mb-12">

            Access institutional-grade crypto infrastructure, advanced trading systems,
            digital asset management tools, and enterprise liquidity solutions.

          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-zinc-900 transition-all"
          >

            Launch Institutional Account

            <ArrowRight
              size={22}
            />

          </Link>

        </div>

      </section>

      <footer className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-5xl font-black text-yellow-400 mb-5">

              CryptoX

            </h2>

            <p className="text-zinc-500 leading-relaxed">

              Institutional-grade cryptocurrency trading infrastructure for global digital asset markets.

            </p>

          </div>

          <div>

            <h3 className="font-black text-2xl mb-5">

              Platform

            </h3>

            <div className="space-y-3 text-zinc-500">

              <p>Markets</p>

              <p>Trading</p>

              <p>Wallet</p>

              <p>Analytics</p>

            </div>

          </div>

          <div>

            <h3 className="font-black text-2xl mb-5">

              Infrastructure

            </h3>

            <div className="space-y-3 text-zinc-500">

              <p>Security</p>

              <p>Liquidity</p>

              <p>Custody</p>

              <p>Institutional APIs</p>

            </div>

          </div>

          <div>

            <h3 className="font-black text-2xl mb-5">

              Legal

            </h3>

            <div className="space-y-3 text-zinc-500">

              <p>Privacy</p>

              <p>Terms</p>

              <p>Compliance</p>

              <p>Licensing</p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Landing;