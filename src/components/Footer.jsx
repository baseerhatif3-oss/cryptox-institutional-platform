import {
  Shield,
  Globe,
  Lock,
} from "lucide-react";

const Footer = () => {

  return (

    <footer className="border-t border-white/5 mt-20">

      <div className="px-6 lg:px-16 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          <div>

            <h1 className="text-5xl font-black text-yellow-400 mb-5">

              CryptoX

            </h1>

            <p className="text-zinc-500 leading-relaxed">

              Institutional-grade cryptocurrency exchange infrastructure powered by advanced AI trading systems.

            </p>

          </div>

          <div>

            <h2 className="text-2xl font-black mb-5">

              Platform

            </h2>

            <div className="space-y-4 text-zinc-500">

              <p>Spot Trading</p>

              <p>Futures</p>

              <p>Staking</p>

              <p>Copy Trading</p>

            </div>

          </div>

          <div>

            <h2 className="text-2xl font-black mb-5">

              Security

            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <Shield
                  className="text-green-400"
                  size={20}
                />

                <span className="text-zinc-500">

                  Multi-Layer Protection

                </span>

              </div>

              <div className="flex items-center gap-3">

                <Lock
                  className="text-green-400"
                  size={20}
                />

                <span className="text-zinc-500">

                  Cold Wallet Storage

                </span>

              </div>

              <div className="flex items-center gap-3">

                <Globe
                  className="text-green-400"
                  size={20}
                />

                <span className="text-zinc-500">

                  Global Infrastructure

                </span>

              </div>

            </div>

          </div>

          <div>

            <h2 className="text-2xl font-black mb-5">

              Legal

            </h2>

            <div className="space-y-4 text-zinc-500">

              <p>Privacy Policy</p>

              <p>Terms of Service</p>

              <p>Risk Disclosure</p>

              <p>Compliance</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/5 mt-14 pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

          <p className="text-zinc-500">

            © 2026 CryptoX Exchange. All rights reserved.

          </p>

          <div className="flex items-center gap-4">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-bold">

              All Systems Operational

            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;