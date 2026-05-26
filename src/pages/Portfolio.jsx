import MainLayout from "../components/layout/MainLayout";

const Portfolio = () => {

  const assets = [

    {
      coin:
        "BTC",

      allocation:
        "42%",
    },

    {
      coin:
        "ETH",

      allocation:
        "28%",
    },

    {
      coin:
        "SOL",

      allocation:
        "18%",
    },

    {
      coin:
        "USDT",

      allocation:
        "12%",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black">

          Portfolio
          <span className="text-yellow-400">
            {" "}Analytics
          </span>

        </h1>

        <p className="text-zinc-500 text-xl mt-4">

          Institutional-grade portfolio tracking and asset allocation monitoring.

        </p>

      </div>

      <div className="glass rounded-3xl p-8 mb-10">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

          <div>

            <p className="text-zinc-500 mb-4">

              Total Portfolio Value

            </p>

            <h2 className="text-7xl font-black text-yellow-400">

              $536K

            </h2>

          </div>

          <div>

            <p className="text-zinc-500 mb-4">

              Monthly Performance

            </p>

            <h2 className="text-5xl font-black text-green-400">

              +18.4%

            </h2>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {
          assets.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl p-8"
              >

                <div className="flex items-center justify-between mb-5">

                  <h2 className="text-4xl font-black">

                    {
                      item.coin
                    }

                  </h2>

                  <span className="text-green-400 text-3xl font-black">

                    {
                      item.allocation
                    }

                  </span>

                </div>

                <div className="w-full h-4 bg-black/30 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width:
                        item.allocation,
                    }}
                  ></div>

                </div>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Portfolio;