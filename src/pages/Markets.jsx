import MainLayout from "../components/layout/MainLayout";

import {
  TrendingUp,
  TrendingDown,
  Search,
  Flame,
} from "lucide-react";

const marketData = [
  {
    coin: "Bitcoin",
    symbol: "BTC",
    price: "$84,320",
    change: "+4.82%",
    volume: "$48B",
    positive: true,
  },

  {
    coin: "Ethereum",
    symbol: "ETH",
    price: "$4,820",
    change: "+2.14%",
    volume: "$22B",
    positive: true,
  },

  {
    coin: "Solana",
    symbol: "SOL",
    price: "$182",
    change: "+8.40%",
    volume: "$8B",
    positive: true,
  },

  {
    coin: "BNB",
    symbol: "BNB",
    price: "$710",
    change: "+1.32%",
    volume: "$6B",
    positive: true,
  },

  {
    coin: "Cardano",
    symbol: "ADA",
    price: "$1.08",
    change: "-2.18%",
    volume: "$2B",
    positive: false,
  },

  {
    coin: "Avalanche",
    symbol: "AVAX",
    price: "$64",
    change: "+7.24%",
    volume: "$4B",
    positive: true,
  },
];

const Markets = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 px-5 py-3 rounded-full mb-8">

          <Flame
            className="text-yellow-400"
            size={18}
          />

          <span className="text-yellow-400 font-bold">

            GLOBAL MARKET OVERVIEW

          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          Crypto

          <span className="text-yellow-400">

            {" "}Markets

          </span>

        </h1>

        <p className="text-zinc-500 text-xl max-w-3xl">

          Institutional-grade digital asset market monitoring
          and liquidity analytics.

        </p>

      </div>

      <div className="glass rounded-3xl p-6 mb-10 flex items-center gap-4">

        <Search
          className="text-zinc-500"
          size={24}
        />

        <input
          type="text"
          placeholder="Search assets, symbols, or markets..."
          className="bg-transparent w-full outline-none text-lg"
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {
          marketData.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-[32px] p-8 card-hover"
              >

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-4xl font-black mb-2">

                      {
                        item.symbol
                      }

                    </h2>

                    <p className="text-zinc-500 text-lg">

                      {
                        item.coin
                      }

                    </p>

                  </div>

                  <div className={`flex items-center gap-2 font-black text-xl ${
                    item.positive
                      ? "text-green-400"
                      : "text-red-400"
                  }`}>

                    {
                      item.positive
                        ? (
                          <TrendingUp
                            size={22}
                          />
                        )
                        : (
                          <TrendingDown
                            size={22}
                          />
                        )
                    }

                    {
                      item.change
                    }

                  </div>

                </div>

                <div className="mb-8">

                  <h3 className="text-5xl font-black text-yellow-400 mb-3">

                    {
                      item.price
                    }

                  </h3>

                  <p className="text-zinc-500">

                    24H Volume:
                    {" "}

                    <span className="text-white font-semibold">

                      {
                        item.volume
                      }

                    </span>

                  </p>

                </div>

                <div className="h-[140px] flex items-end gap-3">

                  {
                    [
                      50,
                      70,
                      60,
                      100,
                      90,
                      120,
                      110,
                    ].map(
                      (
                        bar,
                        i
                      ) => (

                        <div
                          key={i}
                          className={`flex-1 rounded-t-2xl ${
                            item.positive
                              ? "bg-green-400"
                              : "bg-red-400"
                          }`}
                          style={{
                            height:
                              `${bar}px`,
                          }}
                        ></div>

                      )
                    )
                  }

                </div>

              </div>

            )
          )
        }

      </div>

      <div className="glass rounded-3xl p-8 mt-10">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-5xl font-black mb-3">

              Institutional Market Metrics

            </h2>

            <p className="text-zinc-500 text-lg">

              Real-time liquidity and capital flow monitoring.

            </p>

          </div>

          <div className="bg-green-500/10 text-green-400 px-5 py-3 rounded-2xl font-black">

            LIVE DATA

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-black/30 rounded-3xl p-8">

            <p className="text-zinc-500 mb-4">

              Total Market Cap

            </p>

            <h2 className="text-5xl font-black text-yellow-400">

              $3.8T

            </h2>

          </div>

          <div className="bg-black/30 rounded-3xl p-8">

            <p className="text-zinc-500 mb-4">

              24H Volume

            </p>

            <h2 className="text-5xl font-black text-green-400">

              $182B

            </h2>

          </div>

          <div className="bg-black/30 rounded-3xl p-8">

            <p className="text-zinc-500 mb-4">

              BTC Dominance

            </p>

            <h2 className="text-5xl font-black text-blue-400">

              54%

            </h2>

          </div>

          <div className="bg-black/30 rounded-3xl p-8">

            <p className="text-zinc-500 mb-4">

              Fear & Greed

            </p>

            <h2 className="text-5xl font-black text-purple-400">

              78

            </h2>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Markets;