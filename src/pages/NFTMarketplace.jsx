import React from "react";

const NFTMarketplace = () => {

  const nfts = [

    {
      name: "Cyber Ape",
      price: "2.4 ETH",
      creator: "@cryptox",
      image:
        "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
    },

    {
      name: "Meta Punk",
      price: "1.8 ETH",
      creator: "@blockchain",
      image:
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    },

    {
      name: "Future Skull",
      price: "3.1 ETH",
      creator: "@nftpro",
      image:
        "https://images.unsplash.com/photo-1643101695407-6d7b2b0c95f5",
    },

    {
      name: "AI Genesis",
      price: "4.2 ETH",
      creator: "@aiartist",
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55",
    },
  ];

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            NFT Marketplace
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Discover, collect and trade premium NFTs
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl font-bold">
          WEB3 MARKET
        </div>

      </div>

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111] to-black p-10">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_35%)]" />

        <div className="relative z-10">

          <p className="text-gray-400 text-lg">
            Digital Ownership Ecosystem
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mt-5">
            EXPLORE NFTS
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Buy, sell and discover exclusive NFT collections
            through next-generation Web3 marketplace infrastructure.
          </p>

        </div>

      </div>

      {/* NFT GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {nfts.map(
          (
            nft,
            index
          ) => (

            <div
              key={index}
              className="overflow-hidden bg-[#111] border border-white/10 rounded-[36px]"
            >

              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-[300px] object-cover"
              />

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-black">
                    {nft.name}
                  </h2>

                  <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-xl text-xs font-bold">
                    LIVE
                  </span>

                </div>

                <p className="text-gray-400 mt-3">
                  {nft.creator}
                </p>

                <div className="flex items-center justify-between mt-6">

                  <div>

                    <p className="text-gray-400 text-sm">
                      Current Price
                    </p>

                    <h3 className="text-2xl font-black mt-1 text-yellow-400">
                      {nft.price}
                    </h3>

                  </div>

                  <button className="bg-yellow-500 hover:bg-yellow-600 transition px-5 py-3 rounded-2xl font-black text-black">

                    Buy

                  </button>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default NFTMarketplace;