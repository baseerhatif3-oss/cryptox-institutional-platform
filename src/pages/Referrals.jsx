import React from "react";

const Referral = () => {

  const referralCode =
    "CRYPTOX2026";

  const referralLink =
    `https://cryptox.com/register?ref=${referralCode}`;

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Referral Program
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Invite friends and earn trading commissions
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          EARN UP TO 40%
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Total Referral Earnings
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            $12,840
          </h1>

          <div className="flex flex-wrap gap-5 mt-8">

            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">

              <p className="text-gray-400 text-sm">
                Total Referrals
              </p>

              <h2 className="text-3xl font-black mt-2">
                248
              </h2>

            </div>

            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">

              <p className="text-gray-400 text-sm">
                Commission Rate
              </p>

              <h2 className="text-3xl font-black mt-2">
                40%
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* REFERRAL LINK */}

      <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

        <h2 className="text-3xl font-black mb-8">
          Your Referral Link
        </h2>

        <div className="bg-black border border-white/10 rounded-2xl p-5 break-all text-gray-300">
          {referralLink}
        </div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              referralLink
            )
          }
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl font-black text-black"
        >

          Copy Referral Link

        </button>

      </div>

      {/* TABLE */}

      <div className="bg-[#111] border border-white/10 rounded-[32px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <h2 className="text-3xl font-black">
            Referral History
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black/40">

              <tr>

                <th className="text-left p-6 text-gray-400">
                  User
                </th>

                <th className="text-left p-6 text-gray-400">
                  Volume
                </th>

                <th className="text-left p-6 text-gray-400">
                  Commission
                </th>

                <th className="text-left p-6 text-gray-400">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {[1,2,3,4].map(
                (item) => (

                  <tr
                    key={item}
                    className="border-t border-white/5"
                  >

                    <td className="p-6 font-semibold">
                      Trader#{item}82
                    </td>

                    <td className="p-6">
                      $42,000
                    </td>

                    <td className="p-6 text-green-400 font-bold">
                      +$840
                    </td>

                    <td className="p-6">

                      <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">

                        ACTIVE

                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Referral;