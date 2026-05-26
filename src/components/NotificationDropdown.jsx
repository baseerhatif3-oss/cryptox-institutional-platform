const NotificationDropdown =
  () => {

    const notifications = [

      {
        title:
          "BTC price surged +4.2%",

        time:
          "2 min ago",
      },

      {
        title:
          "New AI trading signal available",

        time:
          "5 min ago",
      },

      {
        title:
          "Security scan completed",

        time:
          "10 min ago",
      },
    ];

    return (

      <div className="absolute right-0 top-16 w-[380px] glass rounded-3xl p-6 border border-yellow-500/10 shadow-2xl">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-black">

            Notifications

          </h2>

          <span className="text-yellow-400 font-bold">

            3 New

          </span>

        </div>

        <div className="space-y-4">

          {
            notifications.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="bg-black/30 border border-white/5 rounded-2xl p-4 hover:border-yellow-400/20 transition-all"
                >

                  <h3 className="font-bold mb-2">

                    {item.title}

                  </h3>

                  <p className="text-zinc-500 text-sm">

                    {item.time}

                  </p>

                </div>
              )
            )
          }

        </div>

      </div>
    );
};

export default NotificationDropdown;