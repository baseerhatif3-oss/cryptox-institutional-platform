const ActivityFeed = () => {

  const activity = [

    "Large BTC whale order executed",

    "ETH breakout signal triggered",

    "New institutional account registered",

    "SOL volatility alert activated",

    "AI detected bullish momentum",
  ];

  return (

    <div className="glass rounded-3xl p-8">

      <h2 className="text-4xl font-black mb-8">

        Exchange Activity

      </h2>

      <div className="space-y-5">

        {
          activity.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="bg-black/30 border border-white/5 rounded-2xl p-5 flex items-center gap-4"
              >

                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                <p className="text-lg font-bold">

                  {item}

                </p>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default ActivityFeed;