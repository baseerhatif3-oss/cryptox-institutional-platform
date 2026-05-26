import MainLayout from "../components/layout/MainLayout";

const DemoAccount = () => {

  const demoStats = [

    {
      title:
        "Demo Balance",

      value:
        "$100,000",
    },

    {
      title:
        "Demo Profit",

      value:
        "+$18,420",
    },

    {
      title:
        "Win Rate",

      value:
        "92%",
    },

    {
      title:
        "Trades",

      value:
        "284",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>

          <span className="text-blue-400 font-bold">

            DEMO TRADING ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          Demo
          <span className="text-yellow-400">
            {" "}Trading
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {
          demoStats.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <p className="text-zinc-500 mb-4">

                  {
                    item.title
                  }

                </p>

                <h2 className="text-5xl font-black text-yellow-400">

                  {
                    item.value
                  }

                </h2>

              </div>
            )
          )
        }

      </div>

      <div className="glass rounded-3xl p-10 mt-10">

        <h2 className="text-4xl font-black mb-6">

          Professional Demo Environment

        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed">

          Simulated institutional-grade cryptocurrency trading environment with live market conditions, AI-powered analytics, and advanced trading infrastructure.

        </p>

      </div>

    </MainLayout>
  );
};

export default DemoAccount;