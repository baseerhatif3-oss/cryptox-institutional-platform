import MainLayout from "../components/layout/MainLayout";

import {
  PieChart,
  TrendingUp,
  DollarSign,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const holdings = [
  {
    coin: "Bitcoin",
    allocation: "42%",
    value: "$352,000",
    growth: "+12.4%",
  },

  {
    coin: "Ethereum",
    allocation: "28%",
    value: "$182,000",
    growth: "+8.2%",
  },

  {
    coin: "Solana",
    allocation: "18%",
    value: "$94,000",
    growth: "+18.9%",
  },

  {
    coin: "Stablecoins",
    allocation: "12%",
    value: "$64,000",
    growth: "+1.2%",
  },
];

const Portfolio = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>

          <span className="text-blue-400 font-bold">

            ADVANCED PORTFOLIO ANALYTICS

          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          Portfolio

          <span className="text-yellow-400">

            {" "}Management

          </span>

        </h1>

        <p className="text-zinc-500 text-xl max-w-3xl">

          Institutional-grade portfolio monitoring and
          digital asset allocation infrastructure.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="glass rounded-3xl p-8 card-hover">

          <DollarSign
            className="text-yellow-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            Total Portfolio

          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            $842K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8 card-hover">

          <TrendingUp
            className="text-green-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            Monthly Growth

          </p>

          <h2 className="text-5xl font-black text-green-400">

            +18.2%

          </h2>

        </div>

        <div className="glass rounded-3xl p-8 card-hover">

          <PieChart
            className="text-blue-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            Assets Held

          </p>

          <h2 className="text-5xl font-black text-blue-400">

            24

          </h2>

        </div>

        <div className="glass rounded-3xl p-8 card-hover">

          <Activity
            className="text-purple-400 mb-6"
            size={42}
          />

          <p className="text-zinc-500 mb-3">

            Risk Score

          </p>

          <h2 className="text-5xl font-black text-purple-400">

            LOW

          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="xl:col-span-2 glass rounded-3xl p-8">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-5xl font-black mb-3">

                Portfolio Allocation

              </h2>

              <p className="text-zinc-500 text-lg">

                Institutional asset distribution overview.

              </p>

            </div>

            <div className="bg-green-500/10 text-green-400 px-5 py-3 rounded-2xl font-black">

              OPTIMIZED

            </div>

          </div>

          <div className="space-y-8">

            {
              holdings.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                  >

                    <div className="flex items-center justify-between mb-4">

                      <div>

                        <h3 className="text-3xl font-black mb-2">

                          {
                            item.coin
                          }

                        </h3>

                        <p className="text-zinc-500">

                          {
                            item.value
                          }

                        </p>

                      </div>

                      <div className="text-right">

                        <h3 className="text-3xl font-black text-yellow-400 mb-2">

                          {
                            item.allocation
                          }

                        </h3>

                        <p className="text-green-400 font-bold">

                          {
                            item.growth
                          }

                        </p>

                      </div>

                    </div>

                    <div className="w-full h-5 bg-black/30 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
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

        </div>

        <div className="glass rounded-3xl p-8">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-black">

              Performance

            </h2>

            <ArrowUpRight
              className="text-green-400"
              size={32}
            />

          </div>

          <div className="h-[420px] flex items-end gap-4">

            {
              [
                80,
                120,
                110,
                180,
                220,
                260,
                300,
                340,
                320,
                380,
                420,
                460,
              ].map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-green-400 to-green-300 rounded-t-3xl"
                    style={{
                      height:
                        `${item}px`,
                    }}
                  ></div>

                )
              )
            }

          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-8">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-5xl font-black mb-3">

              Institutional Insights

            </h2>

            <p className="text-zinc-500 text-lg">

              AI-driven portfolio intelligence and market positioning.

            </p>

          </div>

          <div className="bg-yellow-400/10 text-yellow-400 px-5 py-3 rounded-2xl font-black">

            AI ACTIVE

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {
            [
              {
                title: "BTC Accumulation",
                desc: "Institutional buying pressure continues strengthening.",
              },

              {
                title: "ETH Staking Growth",
                desc: "Network participation expanding across global validators.",
              },

              {
                title: "SOL Momentum",
                desc: "High-volume trading activity detected across derivatives markets.",
              },
            ].map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="bg-black/30 border border-white/5 rounded-3xl p-8"
                >

                  <h2 className="text-3xl font-black text-yellow-400 mb-5">

                    {
                      item.title
                    }

                  </h2>

                  <p className="text-zinc-500 leading-relaxed text-lg">

                    {
                      item.desc
                    }

                  </p>

                </div>

              )
            )
          }

        </div>

      </div>

    </MainLayout>
  );
};

export default Portfolio;