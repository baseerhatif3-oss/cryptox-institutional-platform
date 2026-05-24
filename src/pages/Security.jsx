import React from "react";

const Security = () => {

  const devices = [

    {
      device: "MacBook Pro",
      location: "Karachi, Pakistan",
      status: "Active Now",
    },

    {
      device: "iPhone 15",
      location: "Dubai, UAE",
      status: "2 Hours Ago",
    },

    {
      device: "Windows PC",
      location: "London, UK",
      status: "1 Day Ago",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Security Center
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Protect your account with advanced security tools
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
          ACCOUNT SECURED
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#22c55e,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Enterprise-Grade Protection
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            SECURITY FIRST
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Secure your crypto assets with institutional-grade
            authentication and monitoring systems.
          </p>

        </div>

      </div>

      {/* SECURITY OPTIONS */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-black">
              2FA
            </h2>

            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
              ENABLED
            </div>

          </div>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Protect your account using Google Authenticator
            and multi-factor authentication.
          </p>

          <button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

            Manage 2FA

          </button>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-black">
              Anti-Phishing
            </h2>

            <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm font-bold">
              ACTIVE
            </div>

          </div>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Enable anti-phishing codes to verify official
            platform communications and emails.
          </p>

          <button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

            Configure

          </button>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-black">
              Withdrawal Lock
            </h2>

            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
              ACTIVE
            </div>

          </div>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Restrict withdrawals after password
            or security changes for maximum safety.
          </p>

          <button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-black text-black">

            Manage Lock

          </button>

        </div>

      </div>

      {/* LOGIN DEVICES */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        <div className="p-8 border-b border-white/10">

          <h2 className="text-3xl font-black">
            Login Activity
          </h2>

        </div>

        <div className="divide-y divide-white/5">

          {devices.map(
            (
              device,
              index
            ) => (

              <div
                key={index}
                className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              >

                <div>

                  <h3 className="text-2xl font-black">
                    {device.device}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {device.location}
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <span className="text-green-400 font-bold">
                    {device.status}
                  </span>

                  <button className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-2xl font-bold">
                    Remove
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Security;