import MainLayout from "../components/layout/MainLayout";

const Dashboard = () => {

  const stats = [

    {
      title:
        "Portfolio Value",

      value:
        "$536,920",

      color:
        "text-yellow-400",
    },

    {
      title:
        "24H Profit",

      value:
        "+$18,420",

      color:
        "text-green-400",
    },

    {
      title:
        "Open Positions",

      value:
        "18",

      color:
        "text-blue-400",
    },

    {
      title:
        "AI Accuracy",

      value:
        "94%",

      color:
        "text-purple-400",
    },
  ];

  const activities = [

    "BTC Buy Order Executed",

    "ETH Staking Rewards Added",

    "AI BUY Signal Triggered",

    "Security Scan Completed",
  ];

  return (

    <MainLayout>

      <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-400/10 via-black to-black p-10 mb-10">

        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-yellow-400/10 rounded-full blur-[140px]"></div>

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

          <div>

            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-green-400 font-bold">

                EXCHANGE LIVE

              </span>

            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight">

              Trading
              <span className="text-yellow-400">
                {" "}Dashboard
              </span>

            </h1>

            <p className="text-zinc-400 text-xl mt-6 max-w-3xl leading-relaxed">

              Professional cryptocurrency trading infrastructure with AI-powered market analytics.

            </p>

          </div>

          <div className="glass rounded-3xl p-8 min-w-[320px]">

            <p className="text-zinc-500 mb-4">

              Total Balance

            </p>

            <h2 className="text-6xl font-black text-yellow-400 mb-4">

              $536K

            </h2>

            <span className="text-green-400 text-2xl font-black">

              +12.8% This Month

            </span>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

        {
          stats.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8 hover:border-yellow-400/20 transition-all"
              >

                <p className="text-zinc-500 mb-4">

                  {
                    item.title
                  }

                </p>

                <h2 className={`text-5xl font-black ${item.color}`}>

                  {
                    item.value
                  }

                </h2>

              </div>
            )
          )
        }

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Market Overview

          </h2>

          <div className="space-y-6">

            <div className="flex items-center justify-between">

              <span className="text-zinc-400 text-lg">

                BTC/USDT

              </span>

              <span className="text-green-400 text-2xl font-black">

                $84,320

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-400 text-lg">

                ETH/USDT

              </span>

              <span className="text-green-400 text-2xl font-black">

                $4,280

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-zinc-400 text-lg">

                SOL/USDT

              </span>

              <span className="text-green-400 text-2xl font-black">

                $182

              </span>

            </div>

          </div>

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">

            Recent Activity

          </h2>

          <div className="space-y-5">

            {
              activities.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="flex items-center gap-5 bg-black/30 border border-white/5 rounded-2xl p-5"
                  >

                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                    <span className="text-lg font-bold">

                      {item}

                    </span>

                  </div>
                )
              )
            }

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;