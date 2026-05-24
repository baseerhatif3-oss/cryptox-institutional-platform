import React from "react";

const VIP = () => {

  const plans = [

    {
      name: "VIP 1",
      price: "$29",
      benefits: [
        "10% Trading Fee Discount",
        "Priority Support",
        "Advanced Analytics",
      ],
    },

    {
      name: "VIP 2",
      price: "$99",
      benefits: [
        "25% Trading Fee Discount",
        "AI Signals",
        "VIP Withdrawals",
      ],
    },

    {
      name: "VIP PRO",
      price: "$299",
      benefits: [
        "50% Trading Fee Discount",
        "Institutional Dashboard",
        "Dedicated Manager",
      ],
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            VIP Membership
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Unlock premium trading tools and exclusive benefits
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          PREMIUM ACCESS
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Upgrade Your Trading Experience
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            VIP ACCESS
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Gain access to premium analytics, AI trading signals,
            lower fees, faster withdrawals, and institutional-grade tools.
          </p>

        </div>

      </div>

      {/* PLANS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {plans.map(
          (
            plan,
            index
          ) => (

            <div
              key={index}
              className="relative overflow-hidden bg-[#111] border border-white/10 rounded-[36px] p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

              <div className="relative z-10">

                <h2 className="text-4xl font-black">
                  {plan.name}
                </h2>

                <h3 className="text-6xl font-black mt-6 text-yellow-400">
                  {plan.price}
                </h3>

                <p className="text-gray-500 mt-2">
                  /month
                </p>

                <div className="space-y-4 mt-10">

                  {plan.benefits.map(
                    (
                      benefit,
                      i
                    ) => (

                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >

                        <div className="w-3 h-3 rounded-full bg-green-400" />

                        <p className="text-gray-300">
                          {benefit}
                        </p>

                      </div>

                    )
                  )}

                </div>

                <button className="w-full mt-10 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

                  Upgrade Now

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default VIP;