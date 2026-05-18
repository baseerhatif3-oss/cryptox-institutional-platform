import {
  useEffect,
  useState,
} from "react";

const Referrals = () => {
  const [referralLink,
    setReferralLink] =
    useState("");

  useEffect(() => {
    const token =
      localStorage.getItem(
        "token"
      );

    setReferralLink(
      `https://cryptox.vercel.app/register?ref=${token?.slice(
        0,
        12
      )}`
    );
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(
      referralLink
    );

    alert(
      "Referral link copied!"
    );
  };

  const referrals = [
    {
      name: "Ali",
      joined: "2 days ago",
      reward: "$120",
    },

    {
      name: "Ahmed",
      joined: "5 days ago",
      reward: "$80",
    },

    {
      name: "Usman",
      joined: "1 week ago",
      reward: "$240",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Referral Program
          </h1>

          <p className="text-slate-400 mt-2">
            Earn commissions by inviting traders
          </p>
        </div>

        {/* OVERVIEW */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Referrals
            </p>

            <h2 className="text-4xl font-bold">
              24
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Total Earnings
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              $4,280
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Active Referrals
            </p>

            <h2 className="text-4xl font-bold text-blue-400">
              18
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <p className="text-slate-400 mb-3">
              Commission Rate
            </p>

            <h2 className="text-4xl font-bold text-yellow-400">
              25%
            </h2>
          </div>
        </div>

        {/* REFERRAL LINK */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Your Referral Link
          </h2>

          <div className="flex flex-col xl:flex-row gap-4">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              onClick={copyLink}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* REFERRALS */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-3xl font-bold">
              Referral History
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-5">
                    User
                  </th>

                  <th className="text-left p-5">
                    Joined
                  </th>

                  <th className="text-left p-5">
                    Reward
                  </th>

                  <th className="text-left p-5">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {referrals.map(
                  (
                    referral,
                    index
                  ) => (
                    <tr
                      key={index}
                      className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                    >
                      <td className="p-5 font-bold">
                        {
                          referral.name
                        }
                      </td>

                      <td className="p-5 text-slate-400">
                        {
                          referral.joined
                        }
                      </td>

                      <td className="p-5 text-green-400 font-bold">
                        {
                          referral.reward
                        }
                      </td>

                      <td className="p-5">
                        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-2xl font-bold">
                          Active
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* BONUS */}

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-4">
            Earn Passive Income
          </h2>

          <p className="text-xl text-white/90 leading-8 max-w-4xl">
            Invite traders to CryptoX and earn commissions from every trade they make.
            Scale your network and grow recurring affiliate income.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Referrals;