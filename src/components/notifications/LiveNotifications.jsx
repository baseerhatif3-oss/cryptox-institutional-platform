import {
  Bell,
} from "lucide-react";

const LiveNotifications = () => {

  const notifications = [

    "BTC crossed $84,000",

    "ETH breakout detected",

    "Large whale transaction detected",

    "AI BUY signal triggered",

    "SOL momentum increasing",
  ];

  return (

    <div className="glass rounded-3xl p-6">

      <div className="flex items-center gap-4 mb-6">

        <Bell
          className="text-yellow-400"
          size={32}
        />

        <h2 className="text-3xl font-black">

          Live Alerts

        </h2>

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
                className="bg-black/30 border border-white/5 rounded-2xl p-4"
              >

                <div className="flex items-center gap-4">

                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                  <p className="font-bold">

                    {item}

                  </p>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default LiveNotifications;