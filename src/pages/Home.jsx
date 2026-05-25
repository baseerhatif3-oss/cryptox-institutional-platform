import React from "react";

import {
  Link,
} from "react-router-dom";

const Home = () => {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-7xl font-black mb-6">

          CryptoX

        </h1>

        <p className="text-zinc-400 text-xl mb-10 max-w-2xl">

          Professional crypto exchange platform with realtime trading,
          AI analytics, futures, staking and Web3 ecosystem.

        </p>

        <div className="flex items-center justify-center gap-4">

          <Link
            to="/register"
            className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl text-black font-black"
          >

            Get Started

          </Link>

          <Link
            to="/login"
            className="border border-white/10 hover:border-white/20 transition px-8 py-4 rounded-2xl"
          >

            Login

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;