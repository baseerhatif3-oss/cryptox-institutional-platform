import MainLayout from "../components/layout/MainLayout";

const nfts = [
  {
    name: "Cyber Ape X",
    price: "18 ETH",
  },

  {
    name: "Meta Samurai",
    price: "12 ETH",
  },

  {
    name: "Quantum Artifact",
    price: "24 ETH",
  },

  {
    name: "Neo Vision",
    price: "9 ETH",
  },
];

const NFTMarketplace = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl md:text-7xl font-black mb-5">

          NFT

          <span className="text-yellow-400">

            {" "}Marketplace

          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Institutional digital collectibles marketplace infrastructure.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {
          nfts.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl overflow-hidden card-hover"
              >

                <div className="h-[280px] bg-gradient-to-br from-yellow-400/30 to-purple-500/20"></div>

                <div className="p-6">

                  <h2 className="text-3xl font-black mb-4">

                    {
                      item.name
                    }

                  </h2>

                  <div className="flex items-center justify-between">

                    <span className="text-yellow-400 font-black text-2xl">

                      {
                        item.price
                      }

                    </span>

                    <button className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-5 py-3 rounded-2xl font-black">

                      Buy

                    </button>

                  </div>

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