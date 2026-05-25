const RecentActivity = () => {

  const activities = [

    "Bought 0.25 BTC",

    "Sold 2 ETH",

    "Wallet deposit completed",

    "New login detected",

    "Staking rewards received",
  ];

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <h2 className="text-3xl font-black mb-8">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {
          activities.map(
            (activity, index) => (

              <div
                key={index}
                className="bg-black rounded-2xl p-5"
              >

                <p className="font-semibold">
                  {activity}
                </p>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default RecentActivity;