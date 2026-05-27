const activities = [

  "Whale wallet accumulated 420 BTC",

  "Ethereum staking demand increased 18%",

  "Institutional inflow detected on BTC",

  "SOL derivatives volume reached monthly high",

  "New enterprise account onboarded",
];

const ActivityFeed = () => {

  return (

    <div className="glass rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-black">

          Global Activity

        </h2>

        <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-2xl font-black">

          LIVE

        </div>

      </div>

      <div className="space-y-5">

        {
          activities.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="bg-black/30 border border-white/5 rounded-2xl p-5 flex items-center justify-between"
              >

                <p className="font-semibold">

                  {
                    item
                  }

                </p>

                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>

              </div>

            )
          )
        }

      </div>

    </div>

  );
};

export default ActivityFeed;