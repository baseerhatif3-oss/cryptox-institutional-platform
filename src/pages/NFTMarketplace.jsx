import MainLayout from "../components/layout/MainLayout";

const nfts = [

  {
    title:
      "Cyber Ape",

    price:
      "12 ETH",
  },

  {
    title:
      "Meta Samurai",

    price:
      "8 ETH",
  },

  {
    title:
      "Quantum Punk",

    price:
      "15 ETH",
  },
];

const NFTMarketplace = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black mb-4">

          NFT
          <span className="text-yellow-400">
            {" "}Marketplace
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Premium digital collectibles and Web3 assets.

        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {
          nfts.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="glass rounded-3xl overflow-hidden"
              >

                <div className="h-72 bg-gradient-to-br from-yellow-400/20 to-purple-500/20"></div>

                <div className="p-8">

                  <h2 className="text-3xl font-black mb-4">

                    {
                      item.title
                    }

                  </h2>

                  <p className="text-zinc-500 mb-6">

                    Floor Price

                  </p>

                  <h3 className="text-4xl font-black text-yellow-400 mb-6">

                    {
                      item.price
                    }

                  </h3>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-4 rounded-2xl font-black">

                    Buy NFT

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