import React from "react";

const Rewards = () => {

  const achievements = [

    {
      title:
        "First Trade",

      reward:
        "10 XP",

      completed:
        true,
    },

    {
      title:
        "Complete KYC",

      reward:
        "25 XP",

      completed:
        true,
    },

    {
      title:
        "Stake Assets",

      reward:
        "50 XP",

      completed:
        false,
    },

    {
      title:
        "Invite 5 Friends",

      reward:
        "100 XP",

      completed:
        false,
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Rewards Hub
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Earn rewards, badges and XP by using the platform
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          GAMIFIED SYSTEM
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            User Progression System
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            LEVEL 12
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Complete missions, trade assets and engage
            with the ecosystem to unlock exclusive rewards.
          </p>

          <div className="mt-8">

            <div className="flex items-center justify-between mb-3">

              <span className="text-gray-400">
                XP Progress
              </span>

              <span className="font-bold">
                7,450 / 10,000 XP
              </span>

            </div>

            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

              <div className="h-full w-[74%] bg-yellow-500 rounded-full" />

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <p className="text-gray-400">
            Total XP
          </p>

          <h2 className="text-5xl font-black mt-4">
            7,450
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <p className="text-gray-400">
            Achievements
          </p>

          <h2 className="text-5xl font-black mt-4">
            18
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <p className="text-gray-400">
            Rank
          </p>

          <h2 className="text-5xl font-black mt-4 text-yellow-400">
            GOLD
          </h2>

        </div>

      </div>

      {/* ACHIEVEMENTS */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <h2 className="text-3xl font-black">
            Achievements
          </h2>

        </div>

        <div className="divide-y divide-white/5">

          {achievements.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              >

                <div>

                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Reward: {item.reward}
                  </p>

                </div>

                <div>

                  {item.completed ? (

                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">

                      Completed

                    </div>

                  ) : (

                    <button className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-2xl font-black text-black">

                      Start Mission

                    </button>

                  )}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Rewards;