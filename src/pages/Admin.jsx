import MainLayout from "../components/layout/MainLayout";

import {
  Shield,
  Users,
  Activity,
  DollarSign,
  Server,
  Globe,
} from "lucide-react";

const users = [
  {
    name: "Michael Chen",
    email: "michael@cryptox.com",
    status: "Verified",
  },

  {
    name: "Sarah Williams",
    email: "sarah@cryptox.com",
    status: "Pending",
  },

  {
    name: "David Kim",
    email: "david@cryptox.com",
    status: "Verified",
  },

  {
    name: "Emma Johnson",
    email: "emma@cryptox.com",
    status: "Verified",
  },
];

const Admin = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>

          <span className="text-red-400 font-bold">

            ADMIN CONTROL CENTER

          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          Platform

          <span className="text-yellow-400">

            {" "}Administration

          </span>

        </h1>

        <p className="text-zinc-500 text-xl max-w-3xl">

          Institutional-grade operational monitoring and
          user management infrastructure.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="glass rounded-3xl p-8 card-hover">

          <Users
            className="text-yellow-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            Total Users

          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            1.2M+

          </h2>

        </div>

        <div className="glass rounded-3xl p-8 card-hover">

          <DollarSign
            className="text-green-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            Daily Volume

          </p>

          <h2 className="text-5xl font-black text-green-400">

            $12B

          </h2>

        </div>

        <div className="glass rounded-3xl p-8 card-hover">

          <Activity
            className="text-blue-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            Active Trades

          </p>

          <h2 className="text-5xl font-black text-blue-400">

            842K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8 card-hover">

          <Shield
            className="text-green-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            System Health

          </p>

          <h2 className="text-5xl font-black text-green-400">

            99.99%

          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="xl:col-span-2 glass rounded-3xl p-8">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-5xl font-black">

              User Management

            </h2>

            <button className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-6 py-4 rounded-2xl font-black">

              Export Data

            </button>

          </div>

          <div className="space-y-5">

            {
              users.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black/30 border border-white/5 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5"
                  >

                    <div>

                      <h2 className="text-4xl font-black mb-2">

                        {
                          item.name
                        }

                      </h2>

                      <p className="text-zinc-500 text-lg">

                        {
                          item.email
                        }

                      </p>

                    </div>

                    <div className="flex items-center gap-4">

                      <div className={`px-5 py-3 rounded-2xl font-black ${
                        item.status === "Verified"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-400/10 text-yellow-400"
                      }`}>

                        {
                          item.status
                        }

                      </div>

                      <button className="bg-blue-500 hover:bg-blue-400 transition-all px-6 py-3 rounded-2xl font-black">

                        View

                      </button>

                    </div>

                  </div>

                )
              )
            }

          </div>

        </div>

        <div className="space-y-8">

          <div className="glass rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-8">

              <Server
                className="text-green-400"
                size={38}
              />

              <h2 className="text-4xl font-black">

                Server Status

              </h2>

            </div>

            <div className="space-y-5">

              {
                [
                  "Trading Engine Online",
                  "Database Stable",
                  "API Response Normal",
                  "WebSocket Active",
                ].map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      key={index}
                      className="flex items-center justify-between bg-black/30 rounded-2xl p-5"
                    >

                      <span className="font-semibold">

                        {
                          item
                        }

                      </span>

                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                    </div>

                  )
                )
              }

            </div>

          </div>

          <div className="glass rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-8">

              <Globe
                className="text-yellow-400"
                size={38}
              />

              <h2 className="text-4xl font-black">

                Global Regions

              </h2>

            </div>

            <div className="space-y-5">

              {
                [
                  "United States",
                  "United Kingdom",
                  "Singapore",
                  "Dubai",
                  "Hong Kong",
                ].map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      key={index}
                      className="bg-black/30 rounded-2xl p-5 flex items-center justify-between"
                    >

                      <span className="font-semibold text-lg">

                        {
                          item
                        }

                      </span>

                      <span className="text-green-400 font-black">

                        Active

                      </span>

                    </div>

                  )
                )
              }

            </div>

          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-8">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-5xl font-black mb-3">

              Security Monitoring

            </h2>

            <p className="text-zinc-500 text-lg">

              Enterprise-grade infrastructure protection and live monitoring.

            </p>

          </div>

          <div className="bg-green-500/10 text-green-400 px-5 py-3 rounded-2xl font-black">

            PROTECTED

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {
            [
              "DDoS Protection",
              "Cold Wallet Security",
              "Encrypted APIs",
              "2FA Authentication",
            ].map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="bg-black/30 border border-white/5 rounded-3xl p-6"
                >

                  <Shield
                    className="text-green-400 mb-5"
                    size={34}
                  />

                  <h2 className="text-2xl font-black mb-3">

                    {
                      item
                    }

                  </h2>

                  <p className="text-green-400 font-bold">

                    ACTIVE

                  </p>

                </div>

              )
            )
          }

        </div>

      </div>

    </MainLayout>

  );
};

export default Admin;