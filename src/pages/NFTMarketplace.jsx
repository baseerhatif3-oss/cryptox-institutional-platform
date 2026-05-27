import MainLayout from "../components/layout/MainLayout";

const NFTMarketplace = () => {

  const collections = [

    {
      name:
        "Crypto Apes",

      floor:
        "12.4 ETH",

      volume:
        "4,220 ETH",
    },

    {
      name:
        "Meta Legends",

      floor:
        "8.2 ETH",

      volume:
        "2,840 ETH",
    },

    {
      name:
        "Cyber Wolves",

      floor:
        "5.1 ETH",

      volume:
        "1,920 ETH",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-pink-500/10 border border-pink-500/20 px-5 py-3 rounded-full mb-8">

          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>

          <span className="text-pink-400 font-bold">

            NFT MARKETPLACE ACTIVE

          </span>

        </div>

        <h1 className="text-6xl font-black">

          NFT
          <span className="text-yellow-400">
            {" "}Marketplace
          </span>

        </h1>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Total NFT Volume

          </p>

          <h2 className="text-5xl font-black text-yellow-400">

            12.8K ETH

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Active Traders

          </p>

          <h2 className="text-5xl font-black text-green-400">

            84K

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Collections

          </p>

          <h2 className="text-5xl font-black text-blue-400">

            2,400+

          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {
          collections.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl overflow-hidden"
              >

                <div className="h-72 bg-gradient-to-br from-yellow-400/30 via-pink-500/20 to-purple-500/30"></div>

                <div className="p-8">

                  <h2 className="text-3xl font-black mb-6">

                    {
                      item.name
                    }

                  </h2>

                  <div className="space-y-4 mb-8">

                    <div className="flex items-center justify-between">

                      <span className="text-zinc-500">

                        Floor Price

                      </span>

                      <span className="text-yellow-400 font-black">

                        {
                          item.floor
                        }

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-zinc-500">

                        Volume

                      </span>

                      <span className="text-green-400 font-black">

                        {
                          item.volume
                        }

                      </span>

                    </div>

                  </div>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black text-xl">

                    View Collection

                  </button>

                </div>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default NFTMarketplace;