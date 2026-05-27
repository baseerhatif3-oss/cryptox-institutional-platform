const ActivityFeed = () => {

  const activities = [

    {
      title:
        "BTC Buy Order Executed",

      time:
        "2 mins ago",

      amount:
        "+0.42 BTC",
    },

    {
      title:
        "ETH Staking Rewards",

      time:
        "18 mins ago",

      amount:
        "+2.8 ETH",
    },

    {
      title:
        "USDT Deposit Confirmed",

      time:
        "1 hour ago",

      amount:
        "+$24,000",
    },

    {
      title:
        "SOL Futures Position Closed",

      time:
        "3 hours ago",

      amount:
        "+$8,200",
    },
  ];

  return (

    <div className="glass rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-black">

          Live Activity

        </h2>

        <div className="flex items-center gap-3">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">

            LIVE

          </span>

        </div>

      </div>

      <div className="space-y-6">

        {
          activities.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="flex items-center justify-between border-b border-white/5 pb-5"
              >

                <div>

                  <h3 className="font-black text-lg mb-2">

                    {
                      item.title
                    }

                  </h3>

                  <p className="text-zinc-500">

                    {
                      item.time
                    }

                  </p>

                </div>

                <span className="text-green-400 font-black text-xl">

                  {
                    item.amount
                  }

                </span>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default ActivityFeed;