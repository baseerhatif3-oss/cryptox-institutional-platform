import React from "react";

import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="border-t border-white/10 bg-[#0b0b0b] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10">

          {/* BRAND */}

          <div className="xl:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-2xl shadow-lg shadow-yellow-500/30">
                C
              </div>

              <div>

                <h1 className="text-3xl font-black">
                  CryptoX
                </h1>

                <p className="text-gray-500 text-sm">
                  Institutional Exchange Infrastructure
                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-md">

              Professional-grade cryptocurrency exchange platform
              featuring realtime trading, futures infrastructure,
              institutional security, advanced liquidity systems,
              and enterprise fintech architecture.

            </p>

            {/* SOCIALS */}

            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition flex items-center justify-center text-xl"
              >

                <FaTwitter />

              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition flex items-center justify-center text-xl"
              >

                <FaDiscord />

              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition flex items-center justify-center text-xl"
              >

                <FaGithub />

              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition flex items-center justify-center text-xl"
              >

                <FaTelegram />

              </a>

            </div>

          </div>

          {/* PRODUCTS */}

          <div>

            <h2 className="text-xl font-black mb-6">
              Products
            </h2>

            <div className="space-y-4 text-gray-400">

              <p className="hover:text-white transition cursor-pointer">
                Spot Trading
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Futures Trading
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Wallet Infrastructure
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Institutional API
              </p>

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <h2 className="text-xl font-black mb-6">
              Company
            </h2>

            <div className="space-y-4 text-gray-400">

              <p className="hover:text-white transition cursor-pointer">
                About
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Careers
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Security
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Compliance
              </p>

            </div>

          </div>

          {/* LEGAL */}

          <div>

            <h2 className="text-xl font-black mb-6">
              Legal
            </h2>

            <div className="space-y-4 text-gray-400">

              <p className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Terms of Service
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Risk Disclosure
              </p>

              <p className="hover:text-white transition cursor-pointer">
                AML Policy
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <p className="text-gray-500">
            © 2026 CryptoX Exchange. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500 text-sm">

            <span>
              System Status:
              {" "}
              <span className="text-green-400 font-bold">
                Operational
              </span>
            </span>

            <span>
              API Latency:
              {" "}
              <span className="text-yellow-400 font-bold">
                12ms
              </span>
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;