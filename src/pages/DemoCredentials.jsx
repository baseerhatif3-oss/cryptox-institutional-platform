import MainLayout from "../components/layout/MainLayout";

const DemoCredentials = () => {

  const accounts = [

    {
      role:
        "Trader Account",

      email:
        "trader@cryptox.io",

      password:
        "Trader123",
    },

    {
      role:
        "Admin Account",

      email:
        "admin@cryptox.io",

      password:
        "Admin123",
    },

    {
      role:
        "Demo Investor",

      email:
        "investor@cryptox.io",

      password:
        "Investor123",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>

          <span className="text-blue-400 font-bold">

            INVESTOR DEMO ACCESS

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Demo
          <span className="text-yellow-400">
            {" "}Credentials
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {
          accounts.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <h2 className="text-3xl font-black mb-6">

                  {
                    item.role
                  }

                </h2>

                <div className="space-y-5">

                  <div>

                    <p className="text-zinc-500 mb-2">

                      Email

                    </p>

                    <h3 className="text-xl font-black text-yellow-400">

                      {
                        item.email
                      }

                    </h3>

                  </div>

                  <div>

                    <p className="text-zinc-500 mb-2">

                      Password

                    </p>

                    <h3 className="text-xl font-black text-green-400">

                      {
                        item.password
                      }

                    </h3>

                  </div>

                </div>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default DemoCredentials;