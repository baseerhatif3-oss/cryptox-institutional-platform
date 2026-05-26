import {
  Shield,
  Lock,
  Globe,
  Zap,
} from "lucide-react";

const TrustBadges = () => {

  const badges = [

    {
      icon:
        Shield,

      title:
        "Institutional Security",
    },

    {
      icon:
        Lock,

      title:
        "Cold Wallet Custody",
    },

    {
      icon:
        Globe,

      title:
        "Global Infrastructure",
    },

    {
      icon:
        Zap,

      title:
        "Ultra-Low Latency",
    },
  ];

  return (

    <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-24">

      {
        badges.map(
          (
            item,
            index
          ) => {

            const Icon =
              item.icon;

            return (

              <div
                key={index}
                className="glass rounded-3xl p-8 text-center"
              >

                <div className="w-16 h-16 mx-auto rounded-3xl bg-yellow-400/10 flex items-center justify-center mb-6">

                  <Icon
                    size={32}
                    className="text-yellow-400"
                  />

                </div>

                <h2 className="text-2xl font-black">

                  {
                    item.title
                  }

                </h2>

              </div>
            );
          }
        )
      }

    </div>
  );
};

export default TrustBadges;