import MainLayout from "../components/layout/MainLayout";

import {
  Shield,
  Bell,
  Globe,
  CreditCard,
} from "lucide-react";

const Settings = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>

          <span className="text-blue-400 font-bold">

            ACCOUNT CONFIGURATION CENTER

          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          Platform

          <span className="text-yellow-400">

            {" "}Settings

          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <Shield
              className="text-green-400"
              size={40}
            />

            <h2 className="text-4xl font-black">

              Security

            </h2>

          </div>

          <div className="space-y-5">

            {
              [
                "2FA Authentication",
                "Biometric Login",
                "Withdrawal Protection",
                "Cold Wallet Verification",
              ].map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black/30 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <span className="font-semibold">

                      {item}

                    </span>

                    <div className="w-14 h-8 rounded-full bg-green-400 relative">

                      <div className="absolute right-1 top-1 w-6 h-6 rounded-full bg-black"></div>

                    </div>

                  </div>

                )
              )
            }

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <Bell
              className="text-yellow-400"
              size={40}
            />

            <h2 className="text-4xl font-black">

              Notifications

            </h2>

          </div>

          <div className="space-y-5">

            {
              [
                "Trading Alerts",
                "Portfolio Updates",
                "Market Signals",
                "Security Notifications",
              ].map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black/30 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <span className="font-semibold">

                      {item}

                    </span>

                    <div className="w-14 h-8 rounded-full bg-yellow-400 relative">

                      <div className="absolute right-1 top-1 w-6 h-6 rounded-full bg-black"></div>

                    </div>

                  </div>

                )
              )
            }

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <Globe
              className="text-blue-400"
              size={40}
            />

            <h2 className="text-4xl font-black">

              Regional Access

            </h2>

          </div>

          <div className="space-y-5">

            {
              [
                "United States",
                "Europe",
                "Middle East",
                "Asia Pacific",
              ].map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black/30 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <span className="font-semibold">

                      {item}

                    </span>

                    <span className="text-green-400 font-black">

                      ACTIVE

                    </span>

                  </div>

                )
              )
            }

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <CreditCard
              className="text-purple-400"
              size={40}
            />

            <h2 className="text-4xl font-black">

              Subscription

            </h2>

          </div>

          <div className="bg-black/30 rounded-3xl p-8 mb-6">

            <p className="text-zinc-500 mb-4">

              Current Plan

            </p>

            <h2 className="text-5xl font-black text-yellow-400 mb-3">

              Enterprise

            </h2>

            <p className="text-green-400 font-bold">

              ACTIVE SUBSCRIPTION

            </p>

          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-5 rounded-2xl font-black text-xl">

            Upgrade Subscription

          </button>

        </div>

      </div>

    </MainLayout>
  );
};

export default Settings;