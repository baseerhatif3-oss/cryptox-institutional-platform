import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  FaBitcoin,
  FaEthereum,
} from "react-icons/fa";

import {
  SiSolana,
} from "react-icons/si";

import {
  RiRippleFill,
} from "react-icons/ri";

import socket from "../services/socket";

import MarketSidebar from "../components/MarketSidebar";

const Dashboard = () => {

  const [
    markets,
    setMarkets,
  ] = useState([
    {
      symbol:
        "BTCUSDT",

      price:
        104000,

      change:
        "+2.8%",
    },

    {
      symbol:
        "ETHUSDT",

      price:
        4900,

      change:
        "+1.9%",
    },

    {
      symbol:
        "SOLUSDT",

      price:
        210,

      change:
        "+6.4%",
    },

    {
      symbol:
        "XRPUSDT",

      price:
        2.4,

      change:
        "+4.1%",
    },
  ]);

  /*
  ==========================================
  LIVE MARKET SOCKET
  ==========================================
  */

  useEffect(() => {

    socket.on(
      "marketUpdate",

      (data) => {

        if (
          Array.isArray(data)
        ) {

          setMarkets(data);
        }
      }
    );

    return () => {

      socket.off(
        "marketUpdate"
      );
    };

  }, []);

  /*
  ==========================================
  ICONS
  ==========================================
  */

  const icons = {

    BTCUSDT:
      <FaBitcoin className="text-yellow-400 text-3xl" />,

    ETHUSDT:
      <FaEthereum className="text-blue-400 text-3xl" />,

    SOLUSDT:
      <SiSolana className="text-purple-400 text-3xl" />,

    XRPUSDT:
      <RiRippleFill className="text-cyan-400 text-3xl" />,
  };

  return (
    <div className="space-y-10">

      {/* HERO */}

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_30%)]" />

        <div className="relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                className="text-5xl lg:text-6xl font-black leading-tight"
              >

                Trade Crypto
                <br />

                Like a Pro

              </motion.h1>

              <p className="text-gray-400 mt-5 text-lg max-w-2xl">
                Professional-grade crypto exchange with realtime trading,
                futures, liquidity engine, advanced security,
                and institutional infrastructure.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl font-bold text-black shadow-lg shadow-yellow-500/20">
                  Start Trading
                </button>

                <button className="border border-white/10 hover:bg-white/5 transition px-8 py-4 rounded-2xl font-bold">
                  View Markets
                </button>

              </div>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-5 min-w-[320px]">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <p className="text-gray-400 text-sm">
                  24H Volume
                </p>

                <h2 className="text-3xl font-black mt-3">
                  $2.4B
                </h2>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <p className="text-gray-400 text-sm">
                  Active Traders
                </p>

                <h2 className="text-3xl font-black mt-3">
                  128K
                </h2>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <p className="text-gray-400 text-sm">
                  Open Interest
                </p>

                <h2 className="text-3xl font-black mt-3">
                  $940M
                </h2>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

                <p className="text-gray-400 text-sm">
                  System Status
                </p>

                <h2 className="text-2xl font-black mt-3 text-green-400">
                  ONLINE
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* LIVE MARKETS */}

      <div>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-black">
              Live Markets
            </h2>

            <p className="text-gray-400 mt-2">
              Realtime crypto market overview
            </p>

          </div>

          <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-semibold">
            LIVE MARKET
          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

          {/* LEFT */}

          <div className="xl:col-span-3">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

              {markets.map(
                (
                  market,
                  index
                ) => (

                  <motion.div
                    key={
                      market.symbol
                    }

                    initial={{
                      opacity: 0,
                      y: 30,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      delay:
                        index * 0.1,
                    }}

                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-black p-7 hover:border-yellow-500/30 transition"
                  >

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

                    <div className="relative z-10">

                      <div className="flex items-center justify-between">

                        {
                          icons[
                            market.symbol
                          ]
                        }

                        <span className="text-green-400 font-bold">
                          {
                            market.change
                          }
                        </span>

                      </div>

                      <p className="text-gray-400 mt-7">
                        {
                          market.symbol
                        }
                      </p>

                      <h2 className="text-4xl font-black mt-2">
                        $
                        {Number(
                          market.price
                        ).toLocaleString()}
                      </h2>

                    </div>

                  </motion.div>

                )
              )}

            </div>

          </div>

          {/* RIGHT */}

          <MarketSidebar />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;