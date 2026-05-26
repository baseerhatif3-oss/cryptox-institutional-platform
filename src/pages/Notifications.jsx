import MainLayout from "../components/layout/MainLayout";

const Notifications = () => {

  const notifications = [

    {
      title:
        "BTC surged above $84,000",

      time:
        "2 min ago",
    },

    {
      title:
        "New AI BUY signal generated",

      time:
        "5 min ago",
    },

    {
      title:
        "System security scan completed",

      time:
        "12 min ago",
    },

    {
      title:
        "Futures trading volume increased",

      time:
        "25 min ago",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black">

          Notifications

        </h1>

        <p className="text-zinc-500 text-xl mt-4">

          Real-time exchange alerts and platform activity.

        </p>

      </div>

      <div className="space-y-6">

        {
          notifications.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <div className="flex items-center justify-between gap-6">

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center">

                      <span className="text-3xl">
                        🔔
                      </span>

                    </div>

                    <div>

                      <h2 className="text-2xl font-black">

                        {
                          item.title
                        }

                      </h2>

                      <p className="text-zinc-500 mt-2">

                        CryptoX Exchange Notification

                      </p>

                    </div>

                  </div>

                  <span className="text-yellow-400 font-bold whitespace-nowrap">

                    {
                      item.time
                    }

                  </span>

                </div>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Notifications;