const activities = [

  {
    title:
      "BTC Buy Order Executed",

    time:
      "2 minutes ago",
  },

  {
    title:
      "ETH Staking Rewards Added",

    time:
      "8 minutes ago",
  },

  {
    title:
      "Portfolio Rebalanced",

    time:
      "15 minutes ago",
  },

  {
    title:
      "SOL Position Closed",

    time:
      "22 minutes ago",
  },
];

const ActivityFeed = () => {

  return (

    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-black mb-8">

        Live Activity

      </h2>

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

                <div className="flex items-center gap-4">

                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                  <span className="font-bold">

                    {
                      item.title
                    }

                  </span>

                </div>

                <span className="text-zinc-500 text-sm">

                  {
                    item.time
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