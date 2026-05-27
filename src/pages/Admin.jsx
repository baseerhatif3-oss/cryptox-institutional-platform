import MainLayout from "../components/layout/MainLayout";

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
];

const Admin = () => {

  return (

    <MainLayout>

      <div className="mb-12">

        <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>

          <span className="text-red-400 font-bold">

            ADMIN CONTROL CENTER

          </span>

        </div>

        <h1 className="text-7xl font-black mb-5">

          Platform
          <span className="text-yellow-400">

            {" "}Administration

          </span>

        </h1>

        <p className="text-zinc-500 text-2xl max-w-3xl">

          Institutional-grade operational monitoring and user management infrastructure.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Total Users

          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            1.2M+

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Daily Volume

          </p>

          <h2 className="text-5xl font-black text-green-400">

            $12B

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Active Trades

          </p>

          <h2 className="text-5xl font-black text-blue-400">

            842K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            System Health

          </p>

          <h2 className="text-5xl font-black text-green-400">

            99.99%

          </h2>

        </div>

      </div>

      <div className="glass rounded-3xl p-10">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-black">

            User Management

          </h2>

          <button className="bg-yellow-400 text-black px-6 py-4 rounded-2xl font-black">

            Export Data

          </button>

        </div>

        <div className="space-y-6">

          {
            users.map(
              (
                user,
                index
              ) => (

                <div
                  key={index}
                  className="border border-white/5 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >

                  <div>

                    <h3 className="text-3xl font-black mb-2">

                      {
                        user.name
                      }

                    </h3>

                    <p className="text-zinc-500">

                      {
                        user.email
                      }

                    </p>

                  </div>

                  <div className="flex items-center gap-4">

                    <span className={`px-5 py-3 rounded-2xl font-black ${
                      user.status === "Verified"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-400/10 text-yellow-400"
                    }`}>

                      {
                        user.status
                      }

                    </span>

                    <button className="bg-blue-500 hover:bg-blue-400 transition-all px-5 py-3 rounded-2xl font-black">

                      View

                    </button>

                  </div>

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