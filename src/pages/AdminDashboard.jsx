import MainLayout from "../components/layout/MainLayout";

const AdminDashboard = () => {

  const metrics = [

    {
      title:
        "Total Users",

      value:
        "124,892",
    },

    {
      title:
        "24H Volume",

      value:
        "$48.2M",
    },

    {
      title:
        "Transactions",

      value:
        "842K",
    },

    {
      title:
        "Revenue",

      value:
        "$182K",
    },
  ];

  const users = [

    {
      name:
        "Michael Carter",

      email:
        "michael@cryptox.io",

      status:
        "Verified",
    },

    {
      name:
        "Emma Wilson",

      email:
        "emma@cryptox.io",

      status:
        "Pending",
    },

    {
      name:
        "Daniel Lee",

      email:
        "daniel@cryptox.io",

      status:
        "Verified",
    },

    {
      name:
        "Sophia Adams",

      email:
        "sophia@cryptox.io",

      status:
        "Restricted",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>

          <span className="text-red-400 font-bold">

            ADMIN CONTROL PANEL

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Exchange
          <span className="text-yellow-400">
            {" "}Administration
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

        {
          metrics.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <p className="text-zinc-500 mb-4">

                  {
                    item.title
                  }

                </p>

                <h2 className="text-5xl font-black text-yellow-400">

                  {
                    item.value
                  }

                </h2>

              </div>
            )
          )
        }

      </div>

      <div className="glass rounded-3xl p-8 overflow-x-auto">

        <h2 className="text-4xl font-black mb-8">

          User Management

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4 text-zinc-500">

                User

              </th>

              <th className="text-left py-4 text-zinc-500">

                Email

              </th>

              <th className="text-left py-4 text-zinc-500">

                KYC Status

              </th>

              <th className="text-left py-4 text-zinc-500">

                Controls

              </th>

            </tr>

          </thead>

          <tbody>

            {
              users.map(
                (
                  user,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-b border-white/5"
                  >

                    <td className="py-6 font-bold">

                      {
                        user.name
                      }

                    </td>

                    <td className="py-6 text-zinc-400">

                      {
                        user.email
                      }

                    </td>

                    <td className="py-6">

                      <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl font-bold">

                        {
                          user.status
                        }

                      </span>

                    </td>

                    <td className="py-6">

                      <div className="flex gap-3">

                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-black">

                          View

                        </button>

                        <button className="bg-red-500 text-white px-4 py-2 rounded-xl font-black">

                          Freeze

                        </button>

                      </div>

                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default AdminDashboard;