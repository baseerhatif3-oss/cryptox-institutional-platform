import React from "react";

const Academy = () => {

  const courses = [

    {
      title:
        "Introduction to Blockchain",

      level:
        "Beginner",

      reward:
        "$10 Reward",
    },

    {
      title:
        "Crypto Trading Fundamentals",

      level:
        "Intermediate",

      reward:
        "$25 Reward",
    },

    {
      title:
        "DeFi & Web3 Ecosystem",

      level:
        "Advanced",

      reward:
        "$40 Reward",
    },

    {
      title:
        "NFT & Metaverse Masterclass",

      level:
        "Advanced",

      reward:
        "$30 Reward",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Crypto Academy
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Learn blockchain technology and earn crypto rewards
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          LEARN & EARN
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Blockchain Education Platform
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            MASTER CRYPTO
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Learn blockchain, trading and Web3 technologies
            through interactive educational programs.
          </p>

        </div>

      </div>

      {/* COURSES */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {courses.map(
          (
            course,
            index
          ) => (

            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="flex items-center justify-between">

                <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm font-bold">

                  {course.level}

                </span>

                <span className="text-green-400 font-bold">

                  {course.reward}

                </span>

              </div>

              <h2 className="text-3xl font-black mt-8 leading-tight">

                {course.title}

              </h2>

              <p className="text-gray-400 mt-5 leading-relaxed">

                Interactive blockchain education designed
                for the next generation of crypto traders.

              </p>

              <button className="w-full mt-10 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

                Start Learning

              </button>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default Academy;