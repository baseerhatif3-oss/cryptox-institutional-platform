import MainLayout from "../components/layout/MainLayout";

const Admin = () => {

  const users = [

    {
      name: "Baseer",
      email: "baseer@gmail.com",
      status: "Verified",
    },

    {
      name: "Ali",
      email: "ali@gmail.com",
      status: "Pending",
    },

    {
      name: "Ahmed",
      email: "ahmed@gmail.com",
      status: "Verified",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Admin Dashboard
        </h1>

        <p className="text-zinc-500 mt-2">
          Platform management and analytics
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-2">
            Total Users
          </p>

          <h2 className="text-5xl font-black">
            12,540
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-2">
            Trading Volume
          </p>

          <h2 className="text-5xl font-black">
            $28M
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-2">
            Active Traders
          </p>

          <h2 className="text-5xl font-black">
            8,240
          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

          <p className="text-zinc-500 mb-2">
            Revenue
          </p>

          <h2 className="text-5xl font-black">
            $420K
          </h2>

        </div>

      </div>

      <div className="bg-[#111] border border-yellow-500/10 rounded-3xl overflow-hidden">

        <div className="p-6 border-b border-yellow-500/10">

          <h2 className="text-3xl font-black">
            User Management
          </h2>

        </div>

        <table className="w-full">

          <thead className="bg-black">

            <tr>

              <th className="text-left p-5 text-yellow-400">
                Name
              </th>

              <th className="text-left p-5 text-yellow-400">
                Email
              </th>

              <th className="text-left p-5 text-yellow-400">
                Status
              </th>

              <th className="text-left p-5 text-yellow-400">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {
              users.map(
                (user, index) => (

                  <tr
                    key={index}
                    className="border-t border-yellow-500/10"
                  >

                    <td className="p-5">
                      {user.name}
                    </td>

                    <td className="p-5">
                      {user.email}
                    </td>

                    <td className="p-5">

                      <span className={`px-4 py-2 rounded-xl text-sm font-bold ${
                        user.status === "Verified"
                          ? "bg-green-500 text-black"
                          : "bg-yellow-400 text-black"
                      }`}>

                        {user.status}

                      </span>

                    </td>

                    <td className="p-5">

                      <button className="bg-red-500 hover:bg-red-400 transition-all px-5 py-2 rounded-xl font-bold">

                        Suspend

                      </button>

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

export default Admin;